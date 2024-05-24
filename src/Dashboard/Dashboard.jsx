import { Chart } from "chart.js";
import React from "react";
import { FiList, FiServer, FiTool, FiUsers } from 'react-icons/fi';

const Dashboard = () => {
  const cards = [
    {
      title: 'Total asset',
      count: 222,
      icon: <FiList size={32} />,
      color: 'bg-cyan-500',
      link: '/assets',
    },
    {
      title: 'Total component',
      count: 2423031,
      icon: <FiServer size={32} />,
      color: 'bg-yellow-400',
      link: '/component',
    },
    {
      title: 'Total maintenance',
      count: 227,
      icon: <FiTool size={32} />,
      color: 'bg-green-500',
      link: '/maintenance',
    },
    {
      title: 'Total employee',
      count: 77,
      icon: <FiUsers size={32} />,
      color: 'bg-red-400',
      link: '/employees',
    },
  ];
  return (
  <>
   <div className="flex flex-wrap justify-between ">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`w-full sm:w-1/2 lg:w-1/5 p-4 ${card.color} rounded-lg shadow-md text-white`}
        >
          <div className="flex items-center">
            <div className="mr-4">{card.icon}</div>
            <div>
              <div className="text-lg font-semibold">{card.title}</div>
              <div className="text-2xl font-bold">{card.count}</div>
              
            </div>
           
          </div>
          <div className="border-b p-2"></div>
          <div className="mt-4">
          <a href={card.link} className="text-white hover:underline">
              &raquo; More info
            </a>
          </div>
        </div>
      ))}
    </div>
    {/* <Chart/> */}
  </>
  );
};

export default Dashboard;
 