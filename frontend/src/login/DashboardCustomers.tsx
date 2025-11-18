import { Mail, Phone, MapPin, Edit2, Trash2 } from 'lucide-react';

function DashboardCustomers() {
  const customers = [
    { id: 1, name: 'Juan García', email: 'juan@email.com', phone: '+593 98 888 1234', city: 'Quito', orders: 5, spent: 4850 },
    { id: 2, name: 'María López', email: 'maria@email.com', phone: '+593 98 888 5678', city: 'Guayaquil', orders: 3, spent: 1200 },
    { id: 3, name: 'Carlos Martín', email: 'carlos@email.com', phone: '+593 98 888 9012', city: 'Cuenca', orders: 8, spent: 3400 },
    { id: 4, name: 'Ana Rodríguez', email: 'ana@email.com', phone: '+593 98 888 3456', city: 'Santo Domingo', orders: 2, spent: 890 },
    { id: 5, name: 'Roberto Pérez', email: 'roberto@email.com', phone: '+593 98 888 7890', city: 'Ambato', orders: 6, spent: 5200 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">Clientes</h2>
        <p className="text-slate-400 mt-1">Gestiona la información de tus clientes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <div className="text-4xl font-bold text-cyan-400 mb-2">{customers.length}</div>
          <div className="text-slate-400 text-sm">Clientes Totales</div>
        </div>
        <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <div className="text-4xl font-bold text-green-400 mb-2">${customers.reduce((acc, c) => acc + c.spent, 0)}</div>
          <div className="text-slate-400 text-sm">Gasto Total</div>
        </div>
        <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <div className="text-4xl font-bold text-blue-400 mb-2">{(customers.reduce((acc, c) => acc + c.spent, 0) / customers.length).toFixed(0)}</div>
          <div className="text-slate-400 text-sm">Gasto Promedio</div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700/50 bg-slate-900/50">
                <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm">Nombre</th>
                <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm">Email</th>
                <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm">Teléfono</th>
                <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm">Ciudad</th>
                <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm">Pedidos</th>
                <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm">Gasto Total</th>
                <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors duration-300">
                  <td className="py-4 px-6 text-white font-medium">{customer.name}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      {customer.email}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      {customer.phone}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      {customer.city}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-white font-semibold">{customer.orders}</td>
                  <td className="py-4 px-6 text-green-400 font-semibold">${customer.spent}</td>
                  <td className="py-4 px-6">
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

export default DashboardCustomers;
