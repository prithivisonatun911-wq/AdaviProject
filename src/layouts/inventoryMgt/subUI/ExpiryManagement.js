import React from 'react';
import {
    Box,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Chip,
    TableContainer,
    Paper,
    Button
} from '@mui/material';
import { useArgonController } from 'context';
import dayjs from 'dayjs';

const expiringProducts = [
    {
        id: 1,
        productName: 'Paracetamol 500mg',
        batchNumber: 'BATCH-PARA-0925',
        expiryDate: '2025-10-15',
    },
    {
        id: 2,
        productName: 'Insulin Pen',
        batchNumber: 'BATCH-INS-0825',
        expiryDate: '2025-09-10',
    },
    {
        id: 3,
        productName: 'Amoxicillin 250mg',
        batchNumber: 'BATCH-AMOX-1025',
        expiryDate: '2025-12-31',
    }
];

function calculateDaysLeft(date) {
    return dayjs(date).diff(dayjs(), 'day');
}

function getStatus(daysLeft) {
    if (daysLeft < 0) return { label: 'Expired', color: 'error' };
    if (daysLeft <= 30) return { label: 'Expiring Soon', color: 'warning' };
    return { label: 'Valid', color: 'success' };
}

function ExpiryManagement() {
    const [controller] = useArgonController();
    const { darkMode } = controller;

    return (
        <Box>
            <Typography variant="h6" gutterBottom sx={{ color: darkMode ? '#ffffff' : '#344767' }}>
                Expiry Management
            </Typography>

            <TableContainer component={Paper} sx={{ backgroundColor: darkMode ? '#1c284f' : '#ffffff' }}>
                <Table stickyHeader sx={{ tableLayout: 'fixed', width: "100% !important" }}>
                    <TableHead sx={{ width: '100%', display: "contents" }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Product Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Batch Number</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Expiry Date</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Days Left</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? "#ffffff !important" : "#344767 !important" }} align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {expiringProducts.map((item) => {
                            const daysLeft = calculateDaysLeft(item.expiryDate);
                            const status = getStatus(daysLeft);

                            return (
                                <TableRow key={item.id}>
                                    <TableCell sx={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>{item.productName}</TableCell>
                                    <TableCell sx={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>{item.batchNumber}</TableCell>
                                    <TableCell sx={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>{item.expiryDate}</TableCell>
                                    <TableCell sx={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>{daysLeft >= 0 ? `${daysLeft} days` : `${Math.abs(daysLeft)} days ago`}</TableCell>
                                    <TableCell>
                                        <Chip label={status.label} color={status.color} size="small" />
                                    </TableCell>
                                    <TableCell align="center">
                                        {status.label != 'Valid' && <Button variant="contained" size="small">Discard</Button>}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ExpiryManagement;
