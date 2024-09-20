import { Area } from '@ant-design/charts';
import React from 'react'

const PortfolioChart = () => {

    const config = {
        title: 'Portfolio Overview',
        theme:'classicDark',
        data: {
          type: 'fetch',
          value: 'https://assets.antv.antgroup.com/g2/stocks.json',
          transform: [{ type: 'filter', callback: (d) => d.symbol === 'GOOG' }],
        },
        xField: (d) => new Date(d.date),
        yField: 'price',
        style: {
          fill: 'linear-gradient(-90deg, transparent 0%, transparent 100%)',
        },
        axis: {
        //   y: { labelFormatter: '~s' },
        },
        line: {
          style: {
            stroke: 'green',
            strokeWidth: 2,
          },
        },
        interactions: [{ type: 'brush' }, { type: 'pan', enable: false }, { type: 'zoom', enable: false }],
    };

    return (
        <div className="col-span-1 bg-slate-800 rounded-md px-0 py-1 touch-pan-y">
            <Area {...config} height={250} />
        </div>
    )
}

export default PortfolioChart