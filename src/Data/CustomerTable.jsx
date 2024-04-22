import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'date', headerName: 'Date of Purchase', width: 200 },
  { field: 'totalPurchased', headerName: 'Total Purchased ($)', type: 'number', width: 200 },
];

const rows = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com', date: '2024-04-15', totalPurchased: 1500 },
  { id: 2, name: 'Alice Smith', email: 'alice.smith@example.com', date: '2024-04-16', totalPurchased: 2000 },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', date: '2024-04-17', totalPurchased: 1200 },
  { id: 4, name: 'Emily Brown', email: 'emily.brown@example.com', date: '2024-04-18', totalPurchased: 1800 },
  { id: 5, name: 'David Wilson', email: 'david.wilson@example.com', date: '2024-04-19', totalPurchased: 2200 },
  { id: 6, name: 'Sophia Lee', email: 'sophia.lee@example.com', date: '2024-04-20', totalPurchased: 1700 },
  { id: 7, name: 'Michael Miller', email: 'michael.miller@example.com', date: '2024-04-21', totalPurchased: 1900 },
  { id: 8, name: 'Olivia Davis', email: 'olivia.davis@example.com', date: '2024-04-22', totalPurchased: 2500 },
  { id: 9, name: 'William Garcia', email: 'william.garcia@example.com', date: '2024-04-23', totalPurchased: 3000 },
  { id: 10, name: 'Ava Martinez', email: 'ava.martinez@example.com', date: '2024-04-24', totalPurchased: 2800 },
  { id: 11, name: 'Ethan Jones', email: 'ethan.jones@example.com', date: '2024-04-25', totalPurchased: 1700 },
  { id: 12, name: 'Emma Moore', email: 'emma.moore@example.com', date: '2024-04-26', totalPurchased: 1900 },
  { id: 13, name: 'Noah Thompson', email: 'noah.thompson@example.com', date: '2024-04-27', totalPurchased: 2100 },
  { id: 14, name: 'Isabella Hall', email: 'isabella.hall@example.com', date: '2024-04-28', totalPurchased: 1400 },
  { id: 15, name: 'James Young', email: 'james.young@example.com', date: '2024-04-29', totalPurchased: 2600 },
  { id: 16, name: 'Mia King', email: 'mia.king@example.com', date: '2024-04-30', totalPurchased: 1800 },
  { id: 17, name: 'Alexander Scott', email: 'alexander.scott@example.com', date: '2024-05-01', totalPurchased: 3200 },
  { id: 18, name: 'Charlotte White', email: 'charlotte.white@example.com', date: '2024-05-02', totalPurchased: 2700 },
  { id: 19, name: 'Daniel Clark', email: 'daniel.clark@example.com', date: '2024-05-03', totalPurchased: 1500 },
  { id: 20, name: 'Avery Robinson', email: 'avery.robinson@example.com', date: '2024-05-04', totalPurchased: 1900 },
  { id: 21, name: 'Ella Carter', email: 'ella.carter@example.com', date: '2024-05-05', totalPurchased: 2300 },
  { id: 22, name: 'Ryan Perez', email: 'ryan.perez@example.com', date: '2024-05-06', totalPurchased: 2100 },
  { id: 23, name: 'Scarlett Hall', email: 'scarlett.hall@example.com', date: '2024-05-07', totalPurchased: 2800 },
  { id: 24, name: 'Lucas Mitchell', email: 'lucas.mitchell@example.com', date: '2024-05-08', totalPurchased: 3000 },
  { id: 25, name: 'Grace Adams', email: 'grace.adams@example.com', date: '2024-05-09', totalPurchased: 2600 },
];



export default function CustomerTable() {
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
