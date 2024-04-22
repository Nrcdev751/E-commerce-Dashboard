import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'rank', headerName: 'Rank', width: 90 },
  { field: 'productName', headerName: 'Product Name', width: 200 },
  { field: 'category', headerName: 'Category', width: 150 },
  {
    field: 'salesAmount',
    headerName: 'Sales Amount ($)',
    type: 'number',
    width: 180,
  },
];

const rows = [
  { id: 1, rank: 1, productName: 'Laptop', category: 'Electronics', salesAmount: 25000 },
  { id: 2, rank: 2, productName: 'Desk Chair', category: 'Furniture', salesAmount: 20000 },
  { id: 3, rank: 3, productName: 'Watch', category: 'Accessories', salesAmount: 15000 },
  { id: 4, rank: 4, productName: 'Smartphone', category: 'Electronics', salesAmount: 18000 },
  { id: 5, rank: 5, productName: 'Running Shoes', category: 'Footwear', salesAmount: 12000 },
];

export default function TopProductSale() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}
