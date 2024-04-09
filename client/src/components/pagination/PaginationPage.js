import React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginationPage = ({ currentPage, onPageChange, totalPages }) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
      <Pagination
        count={totalPages}
        color="primary"
        page={currentPage}
        onChange={handleChange}
      />

  );
};

export default PaginationPage;
