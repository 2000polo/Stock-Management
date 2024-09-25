import React from 'react'
import BrokerStats from './components/BrokerStats'
import StockAllocationPie from './components/StockAllocationPie'

const BrokerView = () => {
  return (
    // <div className="grid grid-cols-2 md:grid-cols-12">
    //     <div className="md:block gap-2 items-center mb-4 col-span-2 md:col-span-6">
    //         <div className="gap-2">
    //             <img className=" w-10 h-10 md:w-40 md:h-40 rounded-full" src="https://i.pinimg.com/originals/7f/2b/32/7f2b323827800deba11067aa32101d20.png" alt="Neil image"/>
    //             <div className='text-lg text-gray-200 font-bold block md:hidden'>Name of the Broker</div>
    //         </div>
            

    //         <div className="col-span-2 md:col-span-6 hidden md:inline">
    //             <div className='text-lg text-gray-200 font-bold'>Name of the Broker md</div>
    //             <BrokerStats />
    //         </div>
    //     </div>

    //     <div className="col-span-2 md:col-span-12 block md:hidden">
    //         <BrokerStats />
    //     </div>
        

    //     {/* <div className="mt-4">
    //         <div className='text-base text-gray-200 '>Broker View Page</div>
    //     </div> */}

    //     <div className="mt-4 bg-gray-800 p-2 rounded-md col-span-2 md:col-span-12">
    //         <StockAllocationPie />
    //     </div>


    // </div>
    <div className="grid grid-cols-10 gap-2">
        <div className="col-span-2 md:col-span-1">
            <img className=" w-full md:w-full rounded-full" src="https://i.pinimg.com/originals/7f/2b/32/7f2b323827800deba11067aa32101d20.png" alt="Neil image"/>
        </div>
        <div className="col-span-8 md:col-span-3 grid">
            <div className='text-lg text-gray-200 font-bold'>Name of the Broker md</div>
            <BrokerStats />
        </div>
    </div>
  )
}

export default BrokerView