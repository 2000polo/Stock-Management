import React from 'react'
import StockWatchList from './components/StockWatchList';
import PortfolioStats from './components/PortfolioStats';
import PortfolioChart from './components/PortfolioChart';
import HoldingsList from './components/HoldingsList';
import Pichart from './components/Pichart';

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <StockWatchList />
        <div className="grid gap-3 md:grid-cols-1">
            <PortfolioStats/>
            <PortfolioChart />
            <HoldingsList />
            
            
        </div>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 col-span-1 md:col-span-1">
            <Pichart />
            <Pichart />
        </div>
        {/* <StockWatchList /> */}
        {/* <div className="span-col-1 md:span-col-12">
            <StockWatchList />
        </div>
        <div className="span-col-1 md:span-col-6">
            <PortfolioStats />
        </div>
        <div className="span-col-6">
            <PortfolioChart />
        </div>
        <div className="md:hidden span-col-6">
            <HoldingsList />
        </div>
        <div className="md:hidden span-col-6">
            <Pichart />
        </div> */}

        
    </div>
  )
}

export default Dashboard;