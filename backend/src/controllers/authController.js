const db = require('../config/database');
const bcrypt = require('bcryptjs');
const { encrypt, decrypt } = require('../middleware/encryption');

// ==================== REGISTRO DE USUARIO ====================
exports.register = async (req, res) => {
  try {
    const { 
      nombre1, nombre2, apellido1, apellido2, 
      cedula, correo, direccion, ciudad, telefono, clave 
    } = req.body;

    // Validar campos requeridos
    if (!nombre1 || !apellido1 || !cedula || !correo || !direccion || !ciudad || !telefono || !clave) {
      return res.status(400).json({
        success: false,
        message: 'Todos los campos obligatorios deben ser completados'
      });
    }

    // Validar longitud de cédula
    if (cedula.length !== 10) {
      return res.status(400).json({
        success: false,
        message: 'La cédula debe tener 10 dígitos'
      });
    }

    // Validar formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return res.status(400).json({
        success: false,
        message: 'El formato del correo es inválido'
      });
    }

    // Verificar si el correo o cédula ya existen
    const [rows] = await db.query('SELECT * FROM login');
    
    for (let user of rows) {
      const decryptedEmail = decrypt(user.correo_encrypted);
      const decryptedCedula = decrypt(user.cedula_encrypted);
      
      if (decryptedEmail === correo) {
        return res.status(409).json({
          success: false,
          message: 'El correo ya está registrado'
        });
      }
      
      if (decryptedCedula === cedula) {
        return res.status(409).json({
          success: false,
          message: 'La cédula ya está registrada'
        });
      }
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(clave, 10);

    // Encriptar datos sensibles
    const userData = {
      nombre1: encrypt(nombre1),
      nombre2: encrypt(nombre2 || ''),
      apellido1: encrypt(apellido1),
      apellido2: encrypt(apellido2 || ''),
      cedula: encrypt(cedula),
      correo: encrypt(correo),
      direccion: encrypt(direccion),
      ciudad: encrypt(ciudad),
      telefono: encrypt(telefono),
      clave: hashedPassword,
      rol: 'usuario' // SIEMPRE usuario por defecto
    };

    // Insertar en la base de datos
    const query = `
      INSERT INTO login (
        nombre1_encrypted, nombre2_encrypted, apellido1_encrypted, apellido2_encrypted,
        cedula_encrypted, correo_encrypted, direccion_encrypted, ciudad_encrypted,
        telefono_encrypted, clave, rol
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.query(query, [
      userData.nombre1,
      userData.nombre2,
      userData.apellido1,
      userData.apellido2,
      userData.cedula,
      userData.correo,
      userData.direccion,
      userData.ciudad,
      userData.telefono,
      userData.clave,
      userData.rol
    ]);

    // Respuesta exitosa
    res.status(201).json({
      success: true,
      message: 'Usuario registrado exitosamente',
      user: {
        id: result.insertId,
        nombre1,
        apellido1,
        correo,
        rol: 'usuario'
      }
    });

  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({
      success: false,
      message: 'Error en el servidor al registrar usuario'
    });
  }
};

// ==================== LOGIN DE USUARIO ====================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validar campos
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Usuario y contraseña son requeridos'
      });
    }

    // Buscar usuario por correo encriptado
    const [rows] = await db.query('SELECT * FROM login');
    
    let userFound = null;
    
    // Buscar el usuario comparando correos desencriptados
    for (let user of rows) {
      const decryptedEmail = decrypt(user.correo_encrypted);
      if (decryptedEmail === email) {
        userFound = user;
        break;
      }
    }

    if (!userFound) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales incorrectas'
      });
    }

    // Verificar contraseña
    const isValidPassword = await bcrypt.compare(password, userFound.clave);
    
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales incorrectas'
      });
    }

    // Desencriptar datos del usuario
    const userData = {
      id: userFound.id,
      nombre1: decrypt(userFound.nombre1_encrypted),
      nombre2: decrypt(userFound.nombre2_encrypted),
      apellido1: decrypt(userFound.apellido1_encrypted),
      apellido2: decrypt(userFound.apellido2_encrypted),
      cedula: decrypt(userFound.cedula_encrypted),
      correo: decrypt(userFound.correo_encrypted),
      direccion: decrypt(userFound.direccion_encrypted),
      ciudad: decrypt(userFound.ciudad_encrypted),
      telefono: decrypt(userFound.telefono_encrypted),
      rol: userFound.rol
    };

    // Respuesta exitosa
    res.json({
      success: true,
      message: 'Login exitoso',
      user: userData
    });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({
      success: false,
      message: 'Error en el servidor'
    });
  }
};

// ==================== OBTENER PERFIL DE USUARIO ====================
exports.getProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    const [rows] = await db.query('SELECT * FROM login WHERE id = ?', [userId]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    const user = rows[0];
    const userData = {
      id: user.id,
      nombre1: decrypt(user.nombre1_encrypted),
      nombre2: decrypt(user.nombre2_encrypted),
      apellido1: decrypt(user.apellido1_encrypted),
      apellido2: decrypt(user.apellido2_encrypted),
      cedula: decrypt(user.cedula_encrypted),
      correo: decrypt(user.correo_encrypted),
      direccion: decrypt(user.direccion_encrypted),
      ciudad: decrypt(user.ciudad_encrypted),
      telefono: decrypt(user.telefono_encrypted),
      rol: user.rol
    };

    res.json({
      success: true,
      user: userData
    });

  } catch (error) {
    console.error('Error obteniendo perfil:', error);
    res.status(500).json({
      success: false,
      message: 'Error obteniendo perfil'
    });
  }
};

