import React from 'react'

const HoldingsListItem = () => {
  return (
    <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
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
        </div>
    </li>
  )
}

export default HoldingsListItem