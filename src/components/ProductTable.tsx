"use client"
import { Box, IconButton } from '@mui/material'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { useReducer, useState } from 'react'
import styled from 'styled-components'

type Person = {
    id: number,
    title: string,
    description: string
    category: string,
    price: number
    discountPercentage: number,
    rating: number,
    stock:number,
    tags: Array<string>,
    brand: string,
}

const defaultData: Person[] = [ {
    id: 1,
    title: "Smartphone XYZ",
    description: "Latest smartphone with cutting-edge features and sleek design.",
    category: "Electronics",
    price: 999.99,
    discountPercentage: 10,
    rating: 4.5,
    stock: 50,
    tags: ["smartphone", "electronics", "latest"],
    brand: "TechBrand"
},
{
    id: 2,
    title: "Wireless Earbuds",
    description: "High-quality wireless earbuds with noise cancellation and long battery life.",
    category: "Accessories",
    price: 199.99,
    discountPercentage: 15,
    rating: 4.7,
    stock: 150,
    tags: ["earbuds", "wireless", "audio"],
    brand: "SoundBrand"
},
{
    id: 3,
    title: "4K Ultra HD TV",
    description: "65-inch 4K Ultra HD TV with HDR and smart features.",
    category: "Home Entertainment",
    price: 1199.99,
    discountPercentage: 20,
    rating: 4.6,
    stock: 30,
    tags: ["tv", "4K", "entertainment"],
    brand: "VisionBrand",
},
]

const columnHelper = createColumnHelper<Person>()

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
        cell: info => info.renderValue()?.slice(0,20),
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
            <IconButton>
                <RemoveRedEyeOutlinedIcon onClick={() => alert(`preview  ${row.original.id}`)}>View Reviews</RemoveRedEyeOutlinedIcon>
            </IconButton>
        ),
        footer: info => info.column.id,
    }),
]

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #f9f9f9;
`;

const Th = styled.th`
  padding: 4px;
  border: 1px solid #ddd;
  text-align: cen;
`;

const Tbody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;


function ProductTable() {
    const [data, _setData] = useState(() => [...defaultData])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <Box className="p-2">
            <Table>
                <Thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <Th key={header.id}>
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
            <div className="h-4" />
        </Box>
    )
}

export default ProductTable;
