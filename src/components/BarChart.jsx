import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export default function BarChart({chartData}) {
  return (
    <div style={{width:'700px', height:'700px'}}>
    <Bar data={chartData}/>
    </div>
  )
}