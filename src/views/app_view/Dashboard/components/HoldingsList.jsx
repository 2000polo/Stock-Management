import React from 'react'
import HoldingsListItem from './HoldingsListItem'

const HoldingsList = () => {
  return (
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        
        <HoldingsListItem />
        
        <HoldingsListItem />
        
        <HoldingsListItem />
        
        <HoldingsListItem />
        
        <HoldingsListItem />
    </ul>
  )
}

export default HoldingsList;