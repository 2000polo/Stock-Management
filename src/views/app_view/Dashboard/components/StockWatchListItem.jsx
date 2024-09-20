import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'

const StockWatchListItem = () => {
  return (
    <div className='flex gap-2 bg-slate-800 p-1 rounded-md'>
        <div className=" p-3 text-center bg-green-600 text-green-300 text-base md:text-2xl rounded-md">
            <FaArrowTrendUp />
        </div>
        <div className="">
            <h3 className="text-gray-300 text-sm md:text-base md:font-semibold">NSE</h3>
            <div className="flex justify-between">
            <p className="text-green-500 text-sm md:text-base">+1,254.53</p>
            <p className="text-green-500 text-sm ml-3 md:ml-5 md:text-base">5.40%</p>
            </div>
        </div>
    </div>
  )
}

export default StockWatchListItem;