import React from 'react'
import StockWatchListItem from './StockWatchListItem'

const StockWatchList = () => {
  return (
    <div className='md:col-span-2 flex w-full justify-between overflow-scroll gap-2 no-scrollbar'>
        <StockWatchListItem />
        <StockWatchListItem />
        <StockWatchListItem />
        <StockWatchListItem />
        <StockWatchListItem />
        <StockWatchListItem />
        <StockWatchListItem />
        <StockWatchListItem />
        {/* <StockWatchListItem />
        <StockWatchListItem />
        <StockWatchListItem /> */}
    </div>
  )
}

export default StockWatchList;