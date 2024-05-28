import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Cell } from 'recharts';

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
    <div className="flex flex-col justify-center items-center pt-5 -z-10" style={{ boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.2)" }}>
      <div className=''>
      <div className="text-xl flex justify-center items-center text-center border-b border-gray-400  pb-2">
        Assets by Status
      </div>
      <BarChart width={650} height={400} data={data}>
        {/* <CartesianGrid strokeDasharray="" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
      </div>
    </div>
  );
}

export default AssetByStatusChart;
