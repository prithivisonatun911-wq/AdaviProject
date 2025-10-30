import React from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Box,
    Paper,
    TableContainer,
} from '@mui/material';
import { useArgonController } from 'context';

const usageLogs = [
    {
        id: 1,
        productName: 'N95 Masks',
        usedBy: 'Dr. John Smith',
        dateUsed: '2025-09-10',
        quantityUsed: 50,
        remarks: 'Emergency usage in ICU',
    },
    {
        id: 2,
        productName: 'Sterile Gloves',
        usedBy: 'Nursing Dept.',
        dateUsed: '2025-09-11',
        quantityUsed: 200,
        remarks: 'Daily procedure stock',
    },
    {
        id: 3,
        productName: 'Syringes 5ml',
        usedBy: 'Pharmacy',
        dateUsed: '2025-09-09',
        quantityUsed: 120,
        remarks: 'Inventory adjustment',
    },
];

function UsageLogs() {
    const [controller] = useArgonController();
    const { darkMode } = controller;

    return (
        <Box>
            <Typography variant="h6" gutterBottom sx={{ color: darkMode ? '#ffffff' : '#344767' }}>
                Usage Logs
            </Typography>

            <TableContainer component={Paper} sx={{ backgroundColor: darkMode ? '#1e293b' : '#fff' }}>
                <Table stickyHeader sx={{ tableLayout: 'fixed', width: "100% !important" }}>
                    <TableHead sx={{ width: '100%', display: "contents" }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? '#ffffff' : '#344767' }}>Product Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? '#ffffff' : '#344767' }}>Used By</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? '#ffffff' : '#344767' }}>Date Used</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? '#ffffff' : '#344767' }}>Quantity Used</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? '#ffffff' : '#344767' }}>Remarks</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {usageLogs.map((log) => (
                            <TableRow key={log.id}>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{log.productName}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{log.usedBy}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{log.dateUsed}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{log.quantityUsed}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{log.remarks}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default UsageLogs;
