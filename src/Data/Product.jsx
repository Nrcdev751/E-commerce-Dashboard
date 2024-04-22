import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import { LiaEdit } from "react-icons/lia";
import { MdOutlineDelete } from "react-icons/md";


const columns = [
  { field: 'productName', headerName: 'Product Name', width: 200 },
  { field: 'category', headerName: 'Category', width: 150 },
  { field: 'quantity', headerName: 'Quantity', type: 'number', width: 120 },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 150,
    renderCell: (params) => (
      <div style={{ 
        color: params.value === 'In Stock' ? 'green' : 
               params.value === 'Low Stock' ? 'orange' : 'red' 
      }}>
        {params.value}
      </div>
    )
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <div>
        <button className="btn btn-sm  text-white mx-1 bg-blue-600 hover:bg-blue-700 "><LiaEdit /></button>
        <button className="btn btn-sm  text-white mx-1 bg-red-600 hover:bg-red-700 "><MdOutlineDelete /></button>
      </div>
    )
  }
];

const rows = [
    { id: 1, productName: 'Laptop', category: 'Electronics', quantity: 10, status: 'In Stock' },
    { id: 2, productName: 'Desk Chair', category: 'Furniture', quantity: 5, status: 'Low Stock' },
    { id: 3, productName: 'Watch', category: 'Accessories', quantity: 8, status: 'In Stock' },
    { id: 4, productName: 'Smartphone', category: 'Electronics', quantity: 12, status: 'In Stock' },
    { id: 5, productName: 'Running Shoes', category: 'Footwear', quantity: 15, status: 'In Stock' },
    { id: 6, productName: 'Headphones', category: 'Electronics', quantity: 20, status: 'In Stock' },
    { id: 7, productName: 'Blender', category: 'Kitchen', quantity: 6, status: 'Low Stock' },
    { id: 8, productName: 'T-shirt', category: 'Apparel', quantity: 30, status: 'In Stock' },
    { id: 9, productName: 'Backpack', category: 'Accessories', quantity: 8, status: 'In Stock' },
    { id: 10, productName: 'Sunglasses', category: 'Accessories', quantity: 12, status: 'In Stock' },
    { id: 11, productName: 'Desk Lamp', category: 'Home Decor', quantity: 20, status: 'In Stock' },
    { id: 12, productName: 'Dining Table', category: 'Furniture', quantity: 3, status: 'Low Stock' },
    { id: 13, productName: 'Camera', category: 'Electronics', quantity: 7, status: 'In Stock' },
    { id: 14, productName: 'Hiking Boots', category: 'Footwear', quantity: 10, status: 'In Stock' },
    { id: 15, productName: 'Coffee Maker', category: 'Kitchen', quantity: 4, status: 'Low Stock' },
    { id: 16, productName: 'Microwave Oven', category: 'Kitchen', quantity: 6, status: 'In Stock' },
    { id: 17, productName: 'Gaming Console', category: 'Electronics', quantity: 18, status: 'Out of Stock' },
    { id: 18, productName: 'Printer', category: 'Office Supplies', quantity: 9, status: 'Out of Stock' },
    { id: 19, productName: 'Running Shorts', category: 'Apparel', quantity: 25, status: 'Out of Stock' },
    { id: 20, productName: 'Sweatshirt', category: 'Apparel', quantity: 15, status: 'Out of Stock' },
    { id: 21, productName: 'Yoga Mat', category: 'Fitness', quantity: 12, status: 'Out of Stock' },
    { id: 22, productName: 'Cookware Set', category: 'Kitchen', quantity: 5, status: 'Low Stock' },
    { id: 23, productName: 'Camping Tent', category: 'Outdoor', quantity: 8, status: 'In Stock' },
    { id: 24, productName: 'Bookshelf', category: 'Furniture', quantity: 2, status: 'Low Stock' },
    { id: 25, productName: 'Wall Clock', category: 'Home Decor', quantity: 10, status: 'In Stock' },
];



export default function Product() {
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
