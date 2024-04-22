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
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'quantity', headerName: 'Quantity', type: 'number', width: 120 },
  { field: 'price', headerName: 'Price ($)', type: 'number', width: 120 },
];

const rows = [
  { id: 1, rank: 1, productName: 'Laptop', category: 'Electronics', salesAmount: 25000, date: '2024-04-15', quantity: 10, price: 2500 },
  { id: 2, rank: 2, productName: 'Desk Chair', category: 'Furniture', salesAmount: 20000, date: '2024-04-16', quantity: 5, price: 400 },
  { id: 3, rank: 3, productName: 'Watch', category: 'Accessories', salesAmount: 15000, date: '2024-04-17', quantity: 8, price: 1875 },
  { id: 4, rank: 4, productName: 'Smartphone', category: 'Electronics', salesAmount: 18000, date: '2024-04-18', quantity: 12, price: 1500 },
  { id: 5, rank: 5, productName: 'Running Shoes', category: 'Footwear', salesAmount: 12000, date: '2024-04-19', quantity: 15, price: 800 },
  { id: 6, rank: 6, productName: 'Headphones', category: 'Electronics', salesAmount: 5000, date: '2024-04-20', quantity: 20, price: 250 },
  { id: 7, rank: 7, productName: 'Blender', category: 'Kitchen', salesAmount: 10000, date: '2024-04-21', quantity: 6, price: 1200 },
  { id: 8, rank: 8, productName: 'T-shirt', category: 'Apparel', salesAmount: 3000, date: '2024-04-22', quantity: 30, price: 100 },
  { id: 9, rank: 9, productName: 'Backpack', category: 'Accessories', salesAmount: 8000, date: '2024-04-23', quantity: 8, price: 1000 },
  { id: 10, rank: 10, productName: 'Watch', category: 'Accessories', salesAmount: 12500, date: '2024-04-24', quantity: 5, price: 2500 },
  { id: 11, rank: 11, productName: 'Sunglasses', category: 'Accessories', salesAmount: 7000, date: '2024-04-25', quantity: 12, price: 580 },
  { id: 12, rank: 12, productName: 'Blender', category: 'Kitchen', salesAmount: 9000, date: '2024-04-26', quantity: 8, price: 1125 },
  { id: 13, rank: 13, productName: 'Running Shoes', category: 'Footwear', salesAmount: 11000, date: '2024-04-27', quantity: 10, price: 1100 },
  { id: 14, rank: 14, productName: 'Smartphone', category: 'Electronics', salesAmount: 16500, date: '2024-04-28', quantity: 9, price: 1833 },
  { id: 15, rank: 15, productName: 'Desk Lamp', category: 'Home Decor', salesAmount: 7500, date: '2024-04-29', quantity: 15, price: 500 },
];

export default function TopProductSale() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}
