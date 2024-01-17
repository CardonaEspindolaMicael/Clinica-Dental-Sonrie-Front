import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <h1 onClick={() => paginate(number)} className='page-link'>
              {number}
            </h1>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
