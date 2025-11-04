import { ShoppingCart, Heart, Zap } from 'lucide-react';

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Laptop HP Pro',
      category: 'Computadoras',
      price: 295,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Nuevo',
      badgeColor: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Monitor QUASAD 19.5"',
      category: 'Monitores',
      price: 120,
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Popular',
      badgeColor: 'from-orange-500 to-red-600'
    },
    {
      id: 3,
      name: 'Impresora Epson L4260',
      category: 'Impresoras',
      price: 295,
      image: 'https://images.pexels.com/photos/4238990/pexels-photo-4238990.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Oferta',
      badgeColor: 'from-green-500 to-emerald-600'
    },
    {
      id: 4,
      name: 'Switch Escritorio 8 Puertos',
      category: 'Redes',
      price: 85,
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Nuevo',
      badgeColor: 'from-cyan-500 to-blue-600'
    },
    {
      id: 5,
      name: 'Laptop ENV Invictus',
      category: 'Gaming',
      price: 580,
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Premium',
      badgeColor: 'from-purple-500 to-pink-600'
    },
    {
      id: 6,
      name: 'Impresora Epson L3250',
      category: 'Impresoras',
      price: 235,
      image: 'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Oferta',
      badgeColor: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Lo más destacado</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Productos <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Destacados</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Descubre nuestra selección de equipos tecnológicos de última generación
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r ${product.badgeColor} text-white text-xs font-semibold rounded-full shadow-lg`}>
                {product.badge}
              </div>

              <button className="absolute top-4 left-4 z-10 w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-300 hover:text-red-400 hover:bg-slate-800 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <Heart className="w-5 h-5" />
              </button>

              <div className="relative h-64 overflow-hidden bg-slate-900/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60"></div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div className="text-cyan-400 text-sm font-medium mb-1">{product.category}</div>
                  <h3 className="text-white text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-white">${product.price}</div>
                    <div className="text-slate-400 text-sm">Precio especial</div>
                  </div>
                  <button className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl pointer-events-none transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 font-semibold">
            Ver Todos los Productos
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default FeaturedProducts;
