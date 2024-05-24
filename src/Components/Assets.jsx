import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const data = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    picture: 'https://img.freepik.com/premium-photo/keyboard-coffee-smartphone-notebook-color-background-top-view_1286-776.jpg', 
    assetTag: `AST${Math.floor(Math.random() * 10000000000)}`,
    name: `Asset ${index + 1}`,
    type: ['Scanner', 'Hardware', 'Notebook', 'UPS', 'Chair', 'IT Racks'][index % 6],
    brand: ['Epson', 'Dell', 'Lenovo', 'HP', 'Acer'][index % 5],
    location: `Location ${index + 1}`,
  }));

const ITEMS_PER_PAGE = 15;
const Assets = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentData = data.slice(offset, offset + ITEMS_PER_PAGE);
  return (
    <div className="asset-list">
    <h1>Asset List</h1>
    <table className="table">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Asset Tag</th>
          <th>Name</th>
          <th>Type</th>
          <th>Brand</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((item) => (
          <tr key={item.id}>
            <td><img src={item.picture} alt="Asset" className='w-[50px]'/></td>
            <td>{item.assetTag}</td>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.brand}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <ReactPaginate
      previousLabel={'Previous'}
      nextLabel={'Next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={Math.ceil(data.length / ITEMS_PER_PAGE)}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
  </div>
  )
}

export default Assets