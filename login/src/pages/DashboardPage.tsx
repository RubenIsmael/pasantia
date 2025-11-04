import { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardOverview from '../components/DashboardOverview';
import DashboardProducts from '../components/DashboardProducts';
import DashboardOrders from '../components/DashboardOrders';
import DashboardCustomers from '../components/DashboardCustomers';
import DashboardSettings from '../components/DashboardSettings';

function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'products':
        return <DashboardProducts />;
      case 'orders':
        return <DashboardOrders />;
      case 'customers':
        return <DashboardCustomers />;
      case 'settings':
        return <DashboardSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 overflow-auto lg:pt-0 pt-16">
        <div className="p-6 lg:p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
