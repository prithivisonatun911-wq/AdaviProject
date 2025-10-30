import React from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Chip,
    Box,
    TableContainer,
    Paper,
    Button
} from '@mui/material';
import { useArgonController } from 'context';

const thresholdData = [
    {
        id: 1,
        productName: 'Sterile Gloves',
        category: 'Medical Supply',
        currentStock: 80,
        minThreshold: 100,
    },
    {
        id: 2,
        productName: 'Paracetamol 500mg',
        category: 'Medicine',
        currentStock: 120,
        minThreshold: 50,
    },
    {
        id: 3,
        productName: 'Surgical Masks',
        category: 'PPE',
        currentStock: 30,
        minThreshold: 60,
    }
];

function ThresholdAlerts() {
    const [controller] = useArgonController();
    const { darkMode } = controller;

    const getStatus = (current, min) => {
        if (current <= min) return { label: 'Low Stock', color: 'error' };
        return { label: 'OK', color: 'success' };
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Threshold Alerts</Typography>

            <TableContainer component={Paper}>
                <Table stickyHeader sx={{ tableLayout: 'fixed', width: "100% !important" }}>
                    <TableHead sx={{ width: '100%', display: "contents" }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? '#ffffff' : '#344767' }}>Product Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? '#ffffff' : '#344767' }}>Category</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? '#ffffff' : '#344767' }}>Current Stock</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? '#ffffff' : '#344767' }}>Min Threshold</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? '#ffffff' : '#344767' }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: darkMode ? '#ffffff' : '#344767' }} align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {thresholdData.map((item) => {
                            const status = getStatus(item.currentStock, item.minThreshold);

                            return (
                                <TableRow key={item.id}>
                                    <TableCell sx={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>{item.productName}</TableCell>
                                    <TableCell sx={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>{item.category}</TableCell>
                                    <TableCell sx={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>{item.currentStock}</TableCell>
                                    <TableCell sx={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>{item.minThreshold}</TableCell>
                                    <TableCell><Chip label={status.label} color={status.color} size="small" /></TableCell>

                                    <TableCell sx={{ width: 120 }} align="center">
                                        {status.label != 'OK' && <Button variant="contained" color="primary" size="small">Reorder </Button>}
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

export default ThresholdAlerts;
