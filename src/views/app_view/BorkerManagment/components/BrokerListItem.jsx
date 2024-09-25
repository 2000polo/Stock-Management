import React from 'react'
import { Link } from 'react-router-dom'

const BrokerListItem = () => {
  return (
    <div className=''>
    {/* // <li className=""> */}
        {/* <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src="https://i.pinimg.com/originals/7f/2b/32/7f2b323827800deba11067aa32101d20.png" alt="Neil image"/>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Stock Name
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                104 stocks
                </p>
            </div>
            <div className="text-right font-semibold">
                <p className="text-sm text-green-400 truncate">
                    2,043.09
                </p>
                <p className="text-sm text-green-400 truncate">
                    15.06%
                </p>
            </div>
        </div> */}
        
        
    {/* // </li>/ */}
    <Link to='/app/stock-brokers-view'>
        <div className="col-span-1 md:col-span-6  bg-gray-800 p-2 rounded-md">
            <div className=" flex justify-between">
                <div className="">
                    <img className="w-10 h-10 rounded-full" src="https://i.pinimg.com/originals/7f/2b/32/7f2b323827800deba11067aa32101d20.png" alt="Neil image"/>
                </div>
                <div className="text-right font-semibold">
                    <p className="text-sm text-green-400 truncate">
                        2,043.09
                    </p>
                    <p className="text-sm text-green-400 truncate">
                        15.06%
                    </p>
                </div>
            </div>
           
            <div className="flex-1 min-w-0 mt-2">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Broker Name
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                104 stocks
                </p>
            </div>
        </div>
    </Link>
        
    </div>
  )
}

export default BrokerListItem