import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Chip,
    Paper,
    Box,
} from '@mui/material';

const stockLevels = [
    {
        id: 1,
        productName: 'Samsung Galaxy S23 Ultra',
        unitType: 'Box',
        quantityPerUnit: 10,
        totalUnits: 5,
        minStock: 40,
        lastUpdated: '2025-09-15',
    },
    {
        id: 2,
        productName: 'Apple iPhone 15 Pro Max',
        unitType: 'Piece',
        quantityPerUnit: 1,
        totalUnits: 30,
        minStock: 25,
        lastUpdated: '2025-09-13',
    },
    {
        id: 3,
        productName: 'Logitech MX Master 3S',
        unitType: 'Pack',
        quantityPerUnit: 5,
        totalUnits: 8,
        minStock: 50,
        lastUpdated: '2025-09-10',
    },
];

import { useArgonController } from "context";

function getStatus(totalQty, minStock) {
    if (totalQty < minStock) return { label: 'Low Level', color: 'error' };
    if (totalQty === minStock) return { label: 'Ordered', color: 'warning' };
    return { label: 'Good', color: 'success' };
}

function StockLevelsByUnit() {
    const [controller] = useArgonController();
    const { darkMode } = controller;
    return (
        <Box>
            <Typography variant="h6" gutterBottom color={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}> Stock Levels by Unit </Typography>

            <TableContainer component={Paper}>
                <Table stickyHeader sx={{ tableLayout: 'fixed', width: "100% !important" }}>
                    <TableHead sx={{ width: '100%', display: "contents" }}>
                        <TableRow>
                            <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>Product Name</TableCell>
                            <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>Unit Type</TableCell>
                            <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>Quantity per Unit</TableCell>
                            <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>Total Units</TableCell>
                            <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>Total Quantity</TableCell>
                            <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>Min Stock</TableCell>
                            <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>Status</TableCell>
                            <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>Last Updated</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stockLevels.map((item) => {
                            const totalQty = item.quantityPerUnit * item.totalUnits;
                            const status = getStatus(totalQty, item.minStock);

                            return (
                                <TableRow key={item.id}>
                                    <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>{item.productName}</TableCell>
                                    <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>{item.unitType}</TableCell>
                                    <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>{item.quantityPerUnit}</TableCell>
                                    <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>{item.totalUnits}</TableCell>
                                    <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>{totalQty}</TableCell>
                                    <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>{item.minStock}</TableCell>
                                    <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>
                                        <Chip label={status.label} color={status.color} size="small" variant="filled" />
                                    </TableCell>
                                    <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>{item.lastUpdated}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default StockLevelsByUnit;
