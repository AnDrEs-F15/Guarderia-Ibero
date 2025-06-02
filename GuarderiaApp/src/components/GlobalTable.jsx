import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import TablePagination from './TablePagination';
const GlobalTable = ({
  colums,
  rows,
  getRowId,
  getSecondId,
  onSelectRow,
  isTableCheck,
  optionNumberPagination,
  isLoading,
  rowCount,
  paginationModel,
  handlePaginationServer
}) => {
  const { theme } = useTheme();
  console.log(rows);

  return (
    <>
      <CssBaseline />
      <Box>
        <DataGrid
          sx={{
            '.MuiDataGrid-columnHeader': {
              backgroundColor: 'primary.soft',
              color: '#2e3a59',
              fontWeight: 700
            },
            '& .MuiDataGrid-checkboxInput': {
              color: 'gray', // Color del checkbox por defecto
              '&.Mui-checked': { color: 'success.main' },
              '& .MuiDataGrid-cell': {
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                lineHeight: '1.5',
                display: 'flex', // Hace que el texto ocupe el espacio necesario
                alignItems: 'center'
              }
            }
          }}
          loading={isLoading}
          columns={colums}
          rows={rows || []}
          getRowId={(row) => row[getRowId]}
          onRowSelectionModelChange={onSelectRow}
          checkboxSelection={isTableCheck}
          pageSizeOptions={[5, 10, 100]}
          /* rowCount={rowCount ?? 0} */
          paginationMode="client"
          /*           paginationModel={paginationModel}
          onPaginationModelChange={handlePaginationServer} */
          /*           slots={{
            pagination: TablePagination
          }} */
        />
      </Box>
    </>
  );
};

export default GlobalTable;
