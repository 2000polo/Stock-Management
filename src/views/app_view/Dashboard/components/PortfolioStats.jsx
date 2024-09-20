import React from 'react'

const PortfolioStats = () => {
  return (
    <div className='col-span-1 grid grid-cols-2 divide-y md:divide-x md:divide-y-0 divide-slate-700 md:grid-cols-2 bg-slate-800 rounded-md px-2 py-1'>
        <div className="flex justify-between w-full col-span-2 md:col-span-1 px-2 py-3">
            <div className="">
                <h3>Invested</h3>
                <h1 className='text-5xl text-gray-200'>2,345.04</h1>
            </div>
            <div className="text-right">
                <h1 className='text-sm text-slate-400'>Total Returns</h1>
                <h1 className='text-lg font-semibold text-gray-200'>3,024.08</h1>
                <h1 className='text-lg font-semibold text-gray-200'>&uarr; 15.4%</h1>
            </div>
        </div>
        {/* <div className="divider  col-span-2 md:col-span-1"></div> */}
        <div className="flex justify-between w-full col-span-2 md:col-span-1 px-2 py-3">
            <div className="">
                <h3>Current</h3>
                <h1 className='text-5xl text-gray-200'>2,345.04</h1>
            </div>
            <div className="text-right">
                <h1 className='text-sm text-slate-400'>1Day Rreturns</h1>
                <h1 className='text-lg font-semibold text-gray-200'>3,024.08</h1>
                <h1 className='text-lg font-semibold text-gray-200'>&uarr; 15.4%</h1>
            </div>
        </div>
            
    </div>
  )
}

export default PortfolioStats