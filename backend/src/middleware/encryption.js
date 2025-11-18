const crypto = require('crypto');

// Algoritmo y configuración
const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.ENCRYPTION_KEY || 'default-key-32-chars-long!!!!!', 'utf8').slice(0, 32);
const iv = Buffer.alloc(16, 0); // Initialization Vector

// Función para encriptar
function encrypt(text) {
  if (!text) return null;
  
  try {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return Buffer.from(encrypted, 'hex');
  } catch (error) {
    console.error('Error encriptando:', error);
    return null;
  }
}

// Función para desencriptar
function decrypt(buffer) {
  if (!buffer) return null;
  
  try {
    const encryptedText = buffer.toString('hex');
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (error) {
    console.error('Error desencriptando:', error);
    return null;
  }
}

module.exports = { encrypt, decrypt };