import React from 'react';
import { BarChart, PieChart } from 'reaviz';

const Chart = ({data}) =>{
    console.log(data)
    return (
  <PieChart
    height={300}
    width={window.width}
    data={data}
  />
)}

export default  Chart;