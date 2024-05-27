import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


const Chart = () => {
    
const data = [
    { name: 'null', value: 2400, color: '#0D47A1' },
    { name: 'Scanner', value: 4567, color: '#1976D2' },
    { name: 'Hardware', value: 1398, color: '#42A5F5' },
    { name: 'Extrusion', value: 9800, color: '#66BB6A' },
    { name: 'Notebook', value: 3908, color: '#E57373' },
    { name: 'AUTOMATIC TRANSFER SWITCH', value: 4800, color: '#F06292' },
    { name: 'SWITCHGEAR', value: 3800, color: '#8D6E63' },
    { name: 'TRANSFORMER', value: 4300, color: '#90CAF9' },
    { name: 'STRING BATTERY', value: 2100, color: '#A5D6A7' },
    { name: 'IT Racks', value: 1200, color: '#80CBC4' },
    { name: 'FABD', value: 600, color: '#4DB6AC' },
    { name: 'UPS', value: 900, color: '#A1887F' },
    { name: 'Chair', value: 1500, color: '#C5E1A5' },
    { name: 'TWO POST LIFTS', value: 2000, color: '#FFCDD2' },
    { name: 'WHEEL ALIGNER', value: 800, color: '#FFF59D' },
    { name: 'Laptop', value: 1300, color: '#BDBDBD' },
  ];
  return (
    <div className='flex flex-col justify-center items-center shadow-2xl pt-5 -z-10'>
    <div className='text-xl'>
  Assets by Type
    </div>
    <PieChart width={800} height={400}>
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={150}
      innerRadius={80}
      fill="#8884d8"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
  </div>

  )
}

export default Chart