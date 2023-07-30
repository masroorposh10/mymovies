import React from 'react'
import { Scatter } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js'
function ScatterChart({chartData}) {
  return (
    <div style={{width:'700px', height:'700px'}}>
    <Scatter data={chartData}/>
    </div>
  )
}

export default ScatterChart