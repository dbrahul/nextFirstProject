// components/ProductTable.tsx
"use client"

import { Box, IconButton } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import styled from 'styled-components';
import ReviewModal from './ProductModal';
import { Suspense, useState } from 'react';
import { modalType, Product } from '@/types/types';



const columnHelper = createColumnHelper<Product>();

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
  background-color: #f9f9f9;
`;

const Th = styled.th`
  padding: 3px 4px;
  border: 1px solid #ddd;
  text-align: center;
`;

const Tbody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
    tr{
    height:100px;
    }
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

type ProductTableProps = {
    data: Product[]
};



function ProductTable({ data }: ProductTableProps) {

    const [modal, setModal] = useState<modalType>({
        isOpen: false,
        productId: 0
    })



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
            header: 'Actions',
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



    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });



    return (
        <Box sx={{ p: 2, overflow: 'auto' }}>
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
            {/* <ShimmerReview/> */}
            <div className="h-4" />
            {
                modal.isOpen && (
                    <Suspense fallback={<Box>Loading...</Box>}>
                        <ReviewModal open={modal?.isOpen} handleClose={() => setModal({ ...modal, isOpen: !modal.isOpen })} id={modal.productId} />
                    </Suspense>
                )
            }
        </Box>
    );
}

export default ProductTable;
