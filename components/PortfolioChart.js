import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const data = {
  labels: [
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
    'Jan',
    'Feb',
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.01,
      backgroundColor: '#006eff',
      borderColor: '#006eff',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#006eff',
      pointBackgroundColor: '#006eff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#006eff',
      pointHoverBorderColor: '#006eff',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [46.5, 34.5, 30.2, 46, 52.4, 46.8, 66.2, 68, 53, 43, 38, 28],
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

import React from 'react'

const PortfolioChart = () => {
  return <Line data={data} options={options} width={400} height={150} />
}

export default PortfolioChart