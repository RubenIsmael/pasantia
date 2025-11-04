import { Plus, Edit2, Trash2, Search } from 'lucide-react';
import { useState } from 'react';

function DashboardProducts() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'Laptop HP Pro', category: 'Computadoras', price: 1299, stock: 45, status: 'Activo' },
    { id: 2, name: 'Monitor QUASAD 19.5"', category: 'Monitores', price: 320, stock: 128, status: 'Activo' },
    { id: 3, name: 'Impresora Epson L4260', category: 'Impresoras', price: 450, stock: 12, status: 'Activo' },
    { id: 4, name: 'Switch Escritorio 8P', category: 'Redes', price: 85, stock: 0, status: 'Agotado' },
    { id: 5, name: 'Laptop ENV Invictus', category: 'Gaming', price: 1899, stock: 8, status: 'Activo' },
    { id: 6, name: 'Impresora Epson L3250', category: 'Impresoras', price: 235, stock: 34, status: 'Activo' },
  ];

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">Productos</h2>
          <p className="text-slate-400 mt-1">Gestiona tu inventario de productos</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold whitespace-nowrap">
          <Plus className="w-5 h-5" />
          <span>Nuevo Producto</span>
        </button>
      </div>

      <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
        <div className="flex items-center gap-3 mb-6 bg-slate-900/50 px-4 py-3 rounded-lg border border-slate-600">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-slate-400 outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Nombre</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Categoría</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Precio</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Stock</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Estado</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors duration-300">
                  <td className="py-4 px-4 text-white font-medium">{product.name}</td>
                  <td className="py-4 px-4 text-slate-300 text-sm">{product.category}</td>
                  <td className="py-4 px-4 text-cyan-400 font-semibold">${product.price}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.stock > 20 ? 'bg-green-500/20 text-green-300' :
                      product.stock > 0 ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {product.stock} unidades
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.status === 'Activo'
                        ? 'bg-green-500/20 text-green-300'
                        : 'bg-red-500/20 text-red-300'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-300">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors duration-300">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardProducts;
