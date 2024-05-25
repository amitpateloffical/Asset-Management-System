import React, { useState } from "react";
import { FiCopy, FiFileText, FiPrinter } from "react-icons/fi";
import { CSVLink } from "react-csv";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { FaFileCsv } from "react-icons/fa6";

const ComponentActivityReport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [data, setData] = useState(
    Array.from({ length: 50 }, (_, index) => ({
      component: `Component ${index + 1}`,
      asset: `Asset ${index + 1}`,
      quantity: Math.floor(Math.random() * 100) + 1,
      location: `Location ${index + 1}`,
      date: new Date().toLocaleDateString(),
    }))
  );

  const filteredData = data.filter((item) =>
    item.asset.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePDFExport = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#component-table" });
    doc.save("component-list.pdf");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center pb-3">
        <h1 className="text-2xl font-semibold mb-6 text-gray-700">
          Report By Status
        </h1>
      </div>
      <div className="flex flex-wrap items-center mb-4">
        <button className="mr-2 p-2 bg-blue-500 text-white rounded flex items-center">
          <FiCopy className="mr-2" /> Copy
        </button>
        <CSVLink
          className="mr-2 p-2 bg-green-500 text-white rounded flex items-center"
          data={data}
          headers={[
            { label: "Picture", key: "picture" },
            { label: "Name", key: "name" },
            { label: "Type", key: "type" },
            { label: "Brand", key: "brand" },
            { label: "Quantity", key: "quantity" },
            { label: "Available Quantity", key: "availableQuantity" },
          ]}
          filename="component-list.csv"
        >
          <FaFileCsv className="mr-1" /> CSV
        </CSVLink>
        <button
          onClick={handlePDFExport}
          className="mr-2 p-2 bg-red-500 text-white rounded flex items-center"
        >
          <FiFileText className="mr-2" /> PDF
        </button>
        <button className="p-2 bg-yellow-500 text-white rounded flex items-center">
          <FiPrinter className="mr-2" /> Print
        </button>

        <input
          type="text"
          placeholder="Search..."
          className="ml-auto p-2 border rounded shadow"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto bg-white rounded shadow-md">
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
            {currentItems.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
              
                <td className="px-4 py-2">{item.component}</td>
                <td className="px-4 py-2">{item.asset}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded mr-2">
                    Check-in
                  </button>
                  <button className="px-2 py-1 bg-green-500 text-white rounded">
                    Check-out
                  </button>
                </td>
                <td className="px-4 py-2">{item.location}</td>
                <td className="px-4 py-2">{item.date}</td>
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
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span> entries</span>
        </div>
        <div>
          <span className="mr-2">
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, filteredData.length)} of{" "}
            {filteredData.length} entries
          </span>
          <div className="inline-flex">
            <button
              onClick={() => paginate(currentPage - 1)}
              className={`px-3 py-1 border ${
                currentPage === 1 ? "cursor-not-allowed" : ""
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from(
              { length: Math.ceil(filteredData.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-1 border ${
                    currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
            <button
              onClick={() => paginate(currentPage + 1)}
              className={`px-3 py-1 border ${
                currentPage === Math.ceil(filteredData.length / itemsPerPage)
                  ? "cursor-not-allowed"
                  : ""
              }`}
              disabled={
                currentPage === Math.ceil(filteredData.length / itemsPerPage)
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentActivityReport;
