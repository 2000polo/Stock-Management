import React from 'react'

const BrokerStats = () => {
  return (
    <div className="w-full flex justify-between rounded-md" >
        <div className="">
            <div className="stat-figure text-secondary flex">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            </div>
            <div className="stat-title text-sm">Total Shares</div>
            <div className="stat-value text-sm md:text-3xl text-gray-200">501</div>
            <div className="stat-desc">Avg. Price ₹3,034.89</div>
        </div>

        <div className="">
            <div className="stat-figure text-secondary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
            </div>
            <div className="stat-title text-sm">Total Returns</div>
            <div className="stat-value text-sm md:text-3xl text-gray-200">₹ 40,200</div>
            <div className="stat-desc">↗︎ ₹ 4,000 (22%)</div>
        </div>

        <div className="">
            <div className="stat-figure text-secondary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
            </svg>
            </div>
            <div className="stat-title text-sm">1 day Returns</div>
            <div className="stat-value text-sm md:text-3xl text-gray-200">₹ 1,200.09</div>
            <div className="stat-desc">↘︎ ₹ 90 (14%)</div>
        </div>
    </div>
  )
}

export default BrokerStats