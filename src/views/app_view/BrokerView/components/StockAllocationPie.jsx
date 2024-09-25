import { Pie } from '@ant-design/charts';
import React from 'react'

const StockAllocationPie = () => {

    const config = {
        theme: 'classicDark',
        title: 'Stock Sector',
        data: [
          { type: 'Health', value: 27 },
          { type: 'Real Estate', value: 25 },
          { type: 'Banking', value: 18 },
          { type: 'Crypto', value: 15 },
          { type: 'Agriculture', value: 10 },
          { type: 'Technology', value: 5 },
        ],
        angleField: 'value',
        colorField: 'type',
        paddingRight: 0,
        innerRadius: 0.4,
        label: {
          text: 'value',
        //   style: {
        //     fontWeight: 'bold',
        //   },
        },
        label: false,
        legend: {
          color: {
            // title: 'stock sectors',
            position: 'bottom',
            // rowPadding: 7,
            colPadding: 2,
            maxCols: 3,
           
            // align: 'middle'
          },
          size: {
          },
        },
        annotations: [
          {
            type: 'text',
            style: {
              text: '',
              x: '50%',
              y: '50%',
              textAlign: 'center',
              fontSize: 40,
              fontStyle: 'bold',
            },
          },
        ],
      };

    return (
        <Pie {...config} height={250}/>
    )
}

export default StockAllocationPie;