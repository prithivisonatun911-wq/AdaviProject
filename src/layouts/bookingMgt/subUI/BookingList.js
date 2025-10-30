import React from 'react';
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper, Button, Chip, } from '@mui/material';

const bookings = [
    {
        id: 'BK-1001',
        customer: 'John Doe',
        service: 'Photography Session',
        date: '2025-09-25',
        status: 'Pending',
    },
    {
        id: 'BK-1002',
        customer: 'Emily Smith',
        service: 'Event Catering',
        date: '2025-09-20',
        status: 'Approved',
    },
    {
        id: 'BK-1003',
        customer: 'Mark Johnson',
        service: 'Venue Booking',
        date: '2025-09-15',
        status: 'Cancelled',
    },
];

function getStatusColor(status) {
    switch (status) {
        case 'Approved':
            return 'success';
        case 'Pending':
            return 'warning';
        case 'Cancelled':
            return 'error';
        default:
            return 'default';
    }
}

import { useArgonController } from "context";
function BookingList() {
    const [controller] = useArgonController();
    const { darkMode } = controller;
    return (
        <Box>
            <Typography variant="h6" gutterBottom sx={{ mb: 2, color: darkMode ? '#ffffff' : '#344767' }}>Booking List</Typography>

            <TableContainer component={Paper}>
                <Table stickyHeader sx={{ tableLayout: 'fixed', width: "100% !important" }}>
                    <TableHead sx={{ width: '100%', display: "contents" }}>
                        <TableRow>
                            <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}><strong>Booking ID</strong></TableCell>
                            <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}><strong>Customer</strong></TableCell>
                            <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}><strong>Service / Product</strong></TableCell>
                            <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}><strong>Date</strong></TableCell>
                            <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}><strong>Status</strong></TableCell>
                            <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }} align="center"><strong>Action</strong></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {bookings.map((booking) => (
                            <TableRow key={booking.id}>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }} >{booking.id}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }} >{booking.customer}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }} >{booking.service}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }} >{booking.date}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }} >
                                    <Chip label={booking.status} color={getStatusColor(booking.status)} size="small" />
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="contained" size="small">View</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
}

export default BookingList;
