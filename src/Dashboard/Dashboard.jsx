
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
      color: 'https://t3.ftcdn.net/jpg/02/39/84/98/360_F_239849887_xKMRLWW8RIRGqP7TVaWWX8NmgXgseF9S.jpg',
      link: '/assets',
    },
    {
      title: 'Total component',
      count: 24231,
      icon: <FiServer size={32} />,
      color: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7ct00JB3_LIltQHIqp2jawcI-QERlXubhpiCb7lkx-SdRnFXAyBzjcY5XegMQuhRdvo&usqp=CAU',
      link: '/component',
    },
    {
      title: 'Total maintenance',
      count: 227,
      icon: <FiTool size={32} />,
      color: 'https://media.istockphoto.com/id/1323860984/vector/green-background-in-vector-illustration-with-glow-and-lights.jpg?s=612x612&w=0&k=20&c=8IJexeaZOCxSRrNiCCgUvB-dexsy8w9PEF1IF8v4skU=',
      link: '/maintenance',
    },
    {
      title: 'Total employee',
      count: 77,
      icon: <FiUsers size={32} />,
      color: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKO4Z4Jop1kp2JeGxLxbR_VOXKeU8m7-d-RZ9iBG4w5VX7MECI3TNvM23wfqE--F0cXS4&usqp=CAU',
      link: '/employees',
    },
  ];
  return (
  <div className="">
   <div className="flex flex-wrap justify-between ">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`w-full sm:w-1/2 lg:w-1/5 p-4  rounded-lg shadow-md text-white`}
          style={{backgroundImage:`url(${card.color})`, backgroundSize:"cover"}}
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
   <div className="grid grid-cols-2 mt-7 gap-10 z-30">
   <Chart/>
   <AssetByStatusChart/>
   <div className="overflow-x-auto bg-white rounded shadow-md" style={{boxShadow:" 5px 5px 5px 5px rgba(0, 0, 0, 0.2)"}}>
    <div className="flex justify-center items-center py-3 text-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" >Recent asset activity</div>
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
      <div className="overflow-x-auto bg-white rounded shadow-md" style={{boxShadow:" 5px 5px 5px 5px rgba(0, 0, 0, 0.2)"}}>
    <div className="flex justify-center items-center py-3 text-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Recent component activity</div>

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
  </div>
  );
};

export default Dashboard;
 