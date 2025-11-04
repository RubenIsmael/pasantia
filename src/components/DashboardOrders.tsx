import { Eye, Download, X } from 'lucide-react';

function DashboardOrders() {
  const orders = [
    { id: 'ORD-001', date: '2025-01-15', customer: 'Juan García', amount: 1299, status: 'Completado', items: 1 },
    { id: 'ORD-002', date: '2025-01-14', customer: 'María López', amount: 320, status: 'Pendiente', items: 1 },
    { id: 'ORD-003', date: '2025-01-13', customer: 'Carlos Martín', amount: 450, status: 'Enviado', items: 1 },
    { id: 'ORD-004', date: '2025-01-12', customer: 'Ana Rodríguez', amount: 85, status: 'Completado', items: 1 },
    { id: 'ORD-005', date: '2025-01-11', customer: 'Roberto Pérez', amount: 1899, status: 'Procesando', items: 2 },
    { id: 'ORD-006', date: '2025-01-10', customer: 'Isabel García', amount: 235, status: 'Completado', items: 1 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completado':
        return 'bg-green-500/20 text-green-300';
      case 'Pendiente':
        return 'bg-yellow-500/20 text-yellow-300';
      case 'Enviado':
        return 'bg-blue-500/20 text-blue-300';
      case 'Procesando':
        return 'bg-purple-500/20 text-purple-300';
      default:
        return 'bg-slate-500/20 text-slate-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">Pedidos</h2>
        <p className="text-slate-400 mt-1">Gestiona todos los pedidos de clientes</p>
      </div>

      <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">ID Pedido</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Fecha</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Cliente</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Monto</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Items</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Estado</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors duration-300">
                  <td className="py-4 px-4 text-cyan-400 font-mono text-sm font-semibold">{order.id}</td>
                  <td className="py-4 px-4 text-slate-300 text-sm">{order.date}</td>
                  <td className="py-4 px-4 text-white font-medium">{order.customer}</td>
                  <td className="py-4 px-4 text-white font-semibold">${order.amount}</td>
                  <td className="py-4 px-4 text-slate-300 text-sm">{order.items}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors duration-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-300">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors duration-300">
                        <X className="w-4 h-4" />
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

export default DashboardOrders;
