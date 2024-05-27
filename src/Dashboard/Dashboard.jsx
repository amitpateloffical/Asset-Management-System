
import React, { useState } from "react";
import { FiList, FiServer, FiTool, FiUsers } from 'react-icons/fi';
import Chart from "../Components/Chart/Chart";
import AssetByStatusChart from "../Components/AssetByStatusChart/AssetByStatusChart";

const Dashboard = () => {
  const [data, setData] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      asset: `Asset ${index + 1}`,
      employees: Math.floor(Math.random() * 100) + 1,
      isCheckedIn: index % 2 === 0, // Example check-in/check-out logic
      location: `Location ${index + 1}`,
      date: new Date().toLocaleDateString(),
    }))
  );

  const handleCheckInOut = (index) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index].isCheckedIn = !newData[index].isCheckedIn;
      return newData;
    });
  };

  const [componentData, setComponentData] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      component: `Component ${index + 1}`,
      asset: `Asset ${index + 1}`,
      quantity: Math.floor(Math.random() * 10) + 1,
      isCheckedIn: index % 2 === 0, // Example check-in/check-out logic
      location: `Location ${index + 1}`,
      date: new Date().toLocaleDateString(),
    }))
  );

  const handleComponentCheckInOut = (index) => {
    setComponentData(prevData => {
      const newData = [...prevData];
      newData[index].isCheckedIn = !newData[index].isCheckedIn;
      return newData;
    });
  };
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
   <div className="grid grid-cols-2 gap-10 ">
   <Chart/>
   <AssetByStatusChart/>
   <div className="overflow-x-auto bg-white rounded shadow-md">
    <div className="flex justify-center items-center py-3 text-xl">Recent asset activity</div>
      <table id="component-table" className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="px-4 py-2 text-left ">Asset</th>
            <th className="px-4 py-2 text-left ">Employees</th>
            <th className="px-4 py-2 text-left ">Status</th>
            <th className="px-4 py-2 text-left ">Location</th>
            <th className="px-4 py-2 text-left ">Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
        {data.map((item, index) => (
          <tr key={index} className="text-sm leading-normal">
            <td className="px-4 py-2">{item.asset}</td>
            <td className="px-4 py-2">{item.employees}</td>
            <td className="px-4 py-2">
              {item.isCheckedIn ? (
                <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={() => handleCheckInOut(index)}>Check-out</button>
              ) : (
                <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => handleCheckInOut(index)}>Check-in</button>
              )}
            </td>
            <td className="px-4 py-2">{item.location}</td>
            <td className="px-4 py-2">{item.date}</td>
         
          </tr>
        ))}
        </tbody>
      </table>
      </div>
      <div className="overflow-x-auto bg-white rounded shadow-md">
    <div className="flex justify-center items-center py-3 text-xl">Recent component activity</div>

      <table id="component-table" className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="px-4 py-2 text-left ">Component</th>
            <th className="px-4 py-2 text-left ">Asset</th>
            <th className="px-4 py-2 text-left ">Quantity</th>
            <th className="px-4 py-2 text-left ">Status</th>
            <th className="px-4 py-2 text-left ">Location</th>
            <th className="px-4 py-2 text-left ">Date</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
        {componentData.map((item, index) => (
          <tr key={index} className="text-sm leading-normal">
            <td className="px-4 py-2">{item.component}</td>
            <td className="px-4 py-2">{item.asset}</td>
            <td className="px-4 py-2">{item.quantity}</td>
            <td className="px-4 py-2">
              {item.isCheckedIn ? (
                <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={() => handleComponentCheckInOut(index)}>Check-out</button>
              ) : (
                <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => handleComponentCheckInOut(index)}>Check-in</button>
              )}
            </td>
            <td className="px-4 py-2">{item.location}</td>
            <td className="px-4 py-2">{item.date}</td>
            
          </tr>
        ))}
        </tbody>
      </table>
      </div>
   </div>
  </>
  );
};

export default Dashboard;
 