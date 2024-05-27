
import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


const AssetByStatusChart = () => {
    
    const data = [
        { name: 'Ready to deploy', value: 2400, color: '#0D47A1' },
        { name: 'Pending', value: 4567, color: '#FFB74D' },
        { name: 'Archived', value: 1398, color: '#7E57C2' },
        { name: 'Broken', value: 9800, color: '#F48FB1' },
        { name: 'Lost', value: 3908, color: '#8E24AA' },
        { name: 'Out of repair', value: 4800, color: '#F06292' },
      ];
  return (
  <div className='flex flex-col justify-center items-center pt-5 -z-10'  style={{boxShadow:" 5px 5px 5px 5px rgba(0, 0, 0, 0.2)"}}>
  <div className='text-xl'>
Assets by Status
  </div>
    <PieChart width={700} height={400}>
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

export default AssetByStatusChart