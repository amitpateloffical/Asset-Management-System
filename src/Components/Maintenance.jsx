

import React, { useState } from 'react';
import { FiCopy, FiFileText, FiPrinter } from 'react-icons/fi';
import { CSVLink } from 'react-csv';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { FaFileCsv } from 'react-icons/fa6';
import { IoMdAdd } from 'react-icons/io';
import PopUp from '../PopUp/PopUp';


const Maintenance = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const data = Array.from({ length: 50 }, (_, index) => ({
    assetTag: `TAG${index + 1}`,
    asset: `Component ${index + 1}`,
    supplier: ['Apple', 'Dell', 'Epson', 'Asus'][index % 4],
    type: ['Laptop', 'Scanner', 'UPS', 'Hardware'][index % 4],
    startDate: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
    endDate: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
    action: (
      <>
        <button className="px-2 py-1 bg-blue-500 text-white rounded mr-2">Edit</button>
        <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
      </>
    )
  }));

  const filteredData = data.filter(item =>
    item.asset.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handlePDFExport = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: '#component-table' });
    doc.save('component-list.pdf');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center pb-3">
        <h1 className="text-2xl font-semibold mb-6 text-gray-700">
          Maintenance List
        </h1>
        <button  onClick={togglePopup} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
  <IoMdAdd className="inline-block align-text-bottom mr-1" />
  Add Maintenance
</button>
      </div>
        <div className="flex items-center mb-4">
          <button className="mr-2 p-2 bg-blue-500 text-white rounded flex items-center">
            <FiCopy className="mr-2" /> Copy
          </button>
          <CSVLink
          className="mr-2 p-2 bg-green-500 text-white rounded flex items-center"
          data={data}
          headers={[
            { label: 'Asset Tag', key: 'assetTag' },
            { label: 'Asset', key: 'asset' },
            { label: 'Supplier', key: 'supplier' },
            { label: 'Type', key: 'type' },
            { label: 'Start Date', key: 'startDate' },
            { label: 'End Date', key: 'endDate' },
            { label: 'Action', key: 'action' }
          ]}
          filename="component-list.csv"
        >
          <FaFileCsv className="mr-1" /> CSV
        </CSVLink>
          <button onClick={handlePDFExport} className="mr-2 p-2 bg-red-500 text-white rounded flex items-center">
            <FiFileText className="mr-2" /> PDF
          </button>
          <button className="p-2 bg-yellow-500 text-white rounded flex items-center">
            <FiPrinter className="mr-2" /> Print
          </button>
        
        <input
          type="text"
          placeholder="Search..."
          className="ml-auto p-2 border rounded shadow w-fit"
          onChange={e => setSearchTerm(e.target.value)}
        />
     </div>
     <div className="overflow-x-auto bg-white rounded shadow-md">
      <table id="component-table" className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="px-4 py-2 text-left ">Asset tag</th>
            <th className="px-4 py-2 text-left ">Asset</th>
            <th className="px-4 py-2 text-left ">Supplier</th>
            <th className="px-4 py-2 text-left ">Type</th>
            <th className="px-4 py-2 text-left ">Start Date </th>
            <th className="px-4 py-2 text-left ">End Date</th>
            <th className="px-4 py-2 text-left ">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {currentItems.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="px-4 py-2 border">
               {item.assetTag}
              </td>
              <td className="px-4 py-2 border ">{item.asset}</td>
              <td className="px-4 py-2 border ">{item.supplier}</td>
              <td className="px-4 py-2 border ">{item.type}</td>
              <td className="px-4 py-2 border ">{item.startDate}</td>
              <td className="px-4 py-2 border ">{item.endDate}</td>
              <td className="px-4 py-2 border ">
                {item.action}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <span>Show </span>
          <select
            className="border border-gray-300 p-2 rounded-md"
            onChange={e => setItemsPerPage(parseInt(e.target.value))}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span> entries</span>
        </div>
        <div>
          <span className="mr-2">Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries</span>
          <div className="inline-flex">
            <button
              onClick={() => paginate(currentPage - 1)}
              className={`px-3 py-1 border ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-3 py-1 border ${currentPage === i + 1 ? 'bg-blue-500 text-white' : ''}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              className={`px-3 py-1 border ${currentPage === Math.ceil(filteredData.length / itemsPerPage) ? 'cursor-not-allowed' : ''}`}
              disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <PopUp
        heading="Add Maintenance"
        buttonText="Submit"
        inputs={[
          {
            label: 'Asset',
            placeholder: '',
            type: 'dropdown',
            options: [
              { label: 'USA', value: 'USA' },
              { label: 'Canada', value: 'Canada' },
              { label: 'Mexico', value: 'Mexico' },
              { label: 'UK', value: 'UK' }
              
            ]
          },
          {
            label: 'Supplier',
            placeholder: '',
            type: 'dropdown',
            options: [
              { label: 'USA', value: 'USA' },
              { label: 'Canada', value: 'Canada' },
              { label: 'Mexico', value: 'Mexico' },
              { label: 'UK', value: 'UK' }
              
            ]
          },
          {
            label: 'Type',
            placeholder: '',
            type: 'dropdown',
            options: [
              { label: 'USA', value: 'USA' },
              { label: 'Canada', value: 'Canada' },
              { label: 'Mexico', value: 'Mexico' },
              { label: 'UK', value: 'UK' }
              
            ]
          },
          { label: 'Start date', placeholder: '', type: 'date' },
          { label: 'End date', placeholder: '', type: 'date' },
         
]}
        open={popupOpen}
        onClose={togglePopup}
      />
    </div>
  )
}

export default Maintenance