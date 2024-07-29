"use client"
import React, { useState, Suspense } from 'react';
import { Box, IconButton } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import styled from 'styled-components';
import ReviewModal from './ProductModal';
import { modalType, Product } from '@/types/types';
import ReviewModalShimmer from '@/shimmer/ReviewShimmer';
import TableHeader from './TableHeader'; // Import the TableHeader component

// Create column helper for defining columns
const columnHelper = createColumnHelper<Product>();

// Styled components
const CenteredIconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Table = styled.table`
  width: 2200px;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: inherit;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  font-weight: bold;
`;

const Tbody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
    tr {
    height: 100px;
    }
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

// Define props for ProductTable
type ProductTableProps = {
  data: Product[]
};

// Main ProductTable component
function ProductTable({ data }: ProductTableProps) {

  // State to manage the modal
  const [modal, setModal] = useState<modalType>({
    isOpen: false,
    productId: 0
  });

  // Define columns for the table
  const columns = [
    columnHelper.accessor('id', {
      cell: info => info.getValue(),
      header: () => <span>SN</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.title, {
      id: 'title',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Title</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('description', {
      header: () => 'Description',
      cell: info => info.renderValue()?.slice(0, 20),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('category', {
      header: () => <span>Category</span>,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('price', {
      header: 'Price',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('discountPercentage', {
      header: 'Discount Percentage',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('rating', {
      header: 'Rating',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('stock', {
      header: 'Stock',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('tags', {
      header: 'Tags',
      footer: info => info.column.id,
    }),
    columnHelper.accessor('brand', {
      header: 'Brand',
      footer: info => info.column.id,
    }),
    columnHelper.display({
      id: 'actions',
      header: 'View Reviews',
      cell: ({ row }) => (
        <CenteredIconButton>
          <IconButton onClick={() => setModal({ isOpen: true, productId: row.original.id })}>
            <RemoveRedEyeOutlinedIcon>View Reviews</RemoveRedEyeOutlinedIcon>
          </IconButton>
        </CenteredIconButton>
      ),
      footer: info => info.column.id,
    }),
  ];

  // Initialize the table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {/* Header with action buttons */}
      <TableHeader />

      <Box sx={{ p: 2, overflow: 'auto' }}>
        {/* Table structure */}
        <Table>
          <Thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Th key={header.id} style={{
                    width: header.index === 5 ? 200 : "auto",
                  }}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </Th>
                ))}
              </tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </tr>
            ))}
          </Tbody>
        </Table>

        {/* Modal for viewing reviews */}
        {modal.isOpen && (
          <Suspense fallback={<ReviewModalShimmer />}>
            <ReviewModal open={modal?.isOpen} handleClose={() => setModal({ ...modal, isOpen: !modal.isOpen })} id={modal.productId} />
          </Suspense>
        )}
      </Box>
    </>
  );
}

export default ProductTable;
