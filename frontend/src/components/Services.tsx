import { Wrench, Shield, Laptop, Network, Server, HardDrive } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Soporte Técnico',
      description: 'Mantenimiento y reparación de equipos con técnicos certificados',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Seguridad Informática',
      description: 'Protección integral con antivirus y soluciones de seguridad',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Laptop,
      title: 'Venta de Equipos',
      description: 'Amplio catálogo de laptops, PC y periféricos de última generación',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Network,
      title: 'Redes & Conectividad',
      description: 'Instalación y configuración de redes empresariales',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Server,
      title: 'Soluciones Empresariales',
      description: 'Infraestructura TI completa para tu negocio',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: HardDrive,
      title: 'Backup & Recuperación',
      description: 'Respaldo de datos y recuperación ante desastres',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Nuestros <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas integrales para particulares y empresas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -top-2 -right-2 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <h3 className="text-white text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 flex items-center text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Más información</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl pointer-events-none transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                ¿Necesitas asesoría personalizada?
              </h3>
              <p className="text-slate-300">
                Contáctanos y te ayudaremos a encontrar la mejor solución tecnológica
              </p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 font-semibold whitespace-nowrap">
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}

export default Services;
