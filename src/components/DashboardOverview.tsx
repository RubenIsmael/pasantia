import { TrendingUp, Users, ShoppingCart, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

function DashboardOverview() {
  const stats = [
    {
      title: 'Ingresos Totales',
      value: '$28,500',
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign,
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-500/10 to-emerald-600/10'
    },
    {
      title: 'Pedidos',
      value: '247',
      change: '+8.2%',
      isPositive: true,
      icon: ShoppingCart,
      gradient: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-500/10 to-blue-600/10'
    },
    {
      title: 'Clientes',
      value: '1,328',
      change: '+5.1%',
      isPositive: true,
      icon: Users,
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-500/10 to-pink-600/10'
    },
    {
      title: 'Crecimiento',
      value: '23.5%',
      change: '+3.2%',
      isPositive: true,
      icon: TrendingUp,
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-500/10 to-red-600/10'
    }
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'Juan García', product: 'Laptop HP Pro', amount: '$1,299', status: 'Completado', date: '2025-01-15' },
    { id: 'ORD-002', customer: 'María López', product: 'Monitor QUASAD 19.5"', amount: '$320', status: 'Pendiente', date: '2025-01-14' },
    { id: 'ORD-003', customer: 'Carlos Martín', product: 'Impresora Epson', amount: '$450', status: 'Enviado', date: '2025-01-13' },
    { id: 'ORD-004', customer: 'Ana Rodríguez', product: 'Switch Escritorio', amount: '$85', status: 'Completado', date: '2025-01-12' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                {stat.isPositive ? (
                  <ArrowUpRight className="w-4 h-4 text-green-400" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-400" />
                )}
                <span className={stat.isPositive ? 'text-green-400' : 'text-red-400'}>
                  {stat.change}
                </span>
                <span className="text-slate-400 text-sm">vs último mes</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Pedidos Recientes</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">ID Pedido</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Cliente</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Producto</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Monto</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Estado</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors duration-300">
                    <td className="py-4 px-4 text-cyan-400 font-mono text-sm">{order.id}</td>
                    <td className="py-4 px-4 text-white text-sm">{order.customer}</td>
                    <td className="py-4 px-4 text-slate-300 text-sm">{order.product}</td>
                    <td className="py-4 px-4 text-white font-semibold text-sm">{order.amount}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'Completado' ? 'bg-green-500/20 text-green-300' :
                        order.status === 'Pendiente' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Top Productos</h3>
          <div className="space-y-4">
            {[
              { name: 'Laptop HP Pro', sales: 156 },
              { name: 'Monitor QUASAD', sales: 132 },
              { name: 'Impresora Epson', sales: 98 },
              { name: 'Switch 8 Puertos', sales: 67 },
            ].map((product, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm font-medium">{product.name}</span>
                  <span className="text-cyan-400 font-semibold text-sm">{product.sales}</span>
                </div>
                <div className="w-full bg-slate-700/30 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full`}
                    style={{ width: `${(product.sales / 156) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
