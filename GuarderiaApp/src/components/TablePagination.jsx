import { Box, Pagination, useMediaQuery, useTheme } from '@mui/material';
import { gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import React from 'react';

const TablePagination = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm')); // Responsive
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          py: 2,
          width: '100%'
        }}
      >
        <Pagination
          count={pageCount}
          page={page + 1}
          onChange={(event, value) => apiRef.current.setPage(value - 1)}
          color="secondary"
          size={isSmall ? 'small' : 'medium'}
          showFirstButton={!isSmall}
          showLastButton={!isSmall}
          siblingCount={isSmall ? 0 : 1}
          boundaryCount={isSmall ? 1 : 2}
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-root': {
              fontWeight: 500,
              borderRadius: 2
            }
          }}
        />
      </Box>
    </>
  );
};

export default TablePagination;
