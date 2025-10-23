import { useState } from 'react';
import HomePage from './components/HomePage';
import BillingService from './pages/BillingService';
import OnlineRepair from './pages/OnlineRepair';
import ServiceLocations from './pages/ServiceLocations';
import ProductStore from './pages/ProductStore';
import MyServices from './pages/MyServices';
import Payment from './pages/Payment';
import Renewal from './pages/Renewal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleBack = () => {
    setCurrentPage('home');
  };

  return (
    <>
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'billing' && <BillingService onBack={handleBack} />}
      {currentPage === 'repair' && <OnlineRepair onBack={handleBack} />}
      {currentPage === 'locations' && <ServiceLocations onBack={handleBack} />}
      {currentPage === 'store' && <ProductStore onBack={handleBack} />}
      {currentPage === 'services' && <MyServices onBack={handleBack} />}
      {currentPage === 'payment' && <Payment onBack={handleBack} />}
      {currentPage === 'renewal' && <Renewal onBack={handleBack} />}
    </>
  );
}

export default App;
