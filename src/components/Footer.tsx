import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg">
                CS
              </div>
              <div>
                <div className="text-white font-bold text-xl">CompuSoftNet</div>
                <div className="text-cyan-400 text-sm">CIA LTDA</div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Tu socio confiable en tecnología. Equipos de última generación y soporte técnico especializado.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Categorías</h3>
            <ul className="space-y-3">
              {['Laptops', 'PC Escritorio', 'Impresoras', 'Redes', 'Periféricos', 'Antivirus'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              {['Soporte Técnico', 'Mantenimiento', 'Instalación de Redes', 'Venta de Equipos', 'Asesoría TI', 'Garantías'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-medium">Santo Domingo</div>
                  <div className="text-slate-400 text-sm">Sector rosales 4 etapa</div>
                  <div className="text-slate-400 text-sm">Avenida Río Chila y Angelino Medro</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-slate-400">+593 98 885 2325</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-slate-400">info@compusoftnet.com.ec</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="text-slate-400 text-sm">
              Copyright ©2025 Todos los derechos reservados CompuSoftNet CIA LTDA
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"></div>
    </footer>
  );
}

export default Footer;
