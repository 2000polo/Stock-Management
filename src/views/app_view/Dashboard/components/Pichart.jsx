import { Pie } from '@ant-design/charts'
import React from 'react'

const Pichart = () => {

    const config = {
        title: 'Stock Sector Allocation',
        theme: 'classicDark',
        data: [
          { type: 'Grow', value: 27 },
          { type: 'Upstox', value: 25 },
          { type: 'Angel One', value: 18 },
          { type: 'Zerodha', value: 15 },
        ],
        angleField: 'value',
        colorField: 'type',
        scale: { color: { palette: "tableau10" } },
        // color: ['#219C90',
        //     '#FFF455',
        //     '#FFC700',
        //     '#EE4E4E'],
        label: {
          text: 'value',
          style: {
            fontWeight: 'light',
          },
        },
        legend: {
          color: {
            title: false,
            position: 'bottom',
            rowPadding: 5,
          },
        },
    }

  return (
    <div className='bg-slate-800 rounded-md px-0 py-1 h-fit'>
        <Pie {...config} height={300} />
    </div>
  )
}

export default Pichart