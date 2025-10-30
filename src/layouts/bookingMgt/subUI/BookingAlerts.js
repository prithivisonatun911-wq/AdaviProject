// components/BookingAlert.js
import React from 'react';
import { Grid, Paper, Typography, Avatar, Box, Divider, useTheme } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useArgonController, setLayout } from "context";

const dummyCancelledBookings = [
    {
        id: '1',
        user: 'John Doe',
        date: '2025-09-21',
        eventType: 'Wedding',
        eventSubType: 'Reception',
        location: 'Riverside Hall',
        notes: 'Client cancelled due to emergency',
        fee: 1000,
        expectedEarning: 15000,
    },
    {
        id: '2',
        user: 'Priya Sharma',
        date: '2025-09-19',
        eventType: 'Villa',
        eventSubType: 'Night Stay',
        location: 'Villa Ocean View',
        notes: '',
        fee: 500,
        expectedEarning: 8000,
    },
    {
        id: '3',
        user: 'Ahmed Khan',
        date: '2025-09-18',
        eventType: 'Restaurant',
        eventSubType: 'Dinner',
        location: 'Sunset Bistro',
        notes: 'Rescheduled to next week',
        fee: 200,
        expectedEarning: 1200,
    },
];

const BookingAlert = () => {
    const theme = useTheme();
    const [controller] = useArgonController();
    const { darkMode } = controller;
    return (
        <Box sx={{ p: 4, backgroundColor: theme.palette.background.default }}>

            <Typography variant="h6" gutterBottom pb={1} sx={{ color: darkMode ? '#ffffff' : '#344767' }}> Booking Alerts </Typography>

            <Grid container spacing={3}>
                {dummyCancelledBookings.map((booking) => (
                    <Grid item xs={12} key={booking.id} >
                        <Paper elevation={2} sx={{ p: 2, borderRadius: '19px', borderLeft: '6px solid #f44336', backgroundColor: darkMode ? '#111c44' : '#fafafa', }}>
                            {/* Header Row */}
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <Avatar sx={{ bgcolor: '#f44336' }}> <PersonIcon />  </Avatar>
                                    <Box>
                                        <Typography variant="h6" sx={{ color: darkMode ? '#000000ff' : '#344767' }}>{booking.user}</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ color: darkMode ? '#000000ff' : '#344767' }}> {booking.eventType} - {booking.eventSubType}  </Typography>
                                    </Box>
                                </Box>

                            </Box>

                            <Divider sx={{ mb: 2 }} />

                            {/* Body Content */}
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#344767' }}><strong>Date:</strong> {booking.date}</Typography>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#344767' }}><strong>Location:</strong> {booking.location}</Typography>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#344767' }}><strong>Event:</strong> {booking.eventType} - {booking.eventSubType}</Typography>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#344767' }}>  <strong>Booking Fee:</strong> MUR {booking.fee.toLocaleString()}  </Typography>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#344767' }}> <strong>Expected Earning:</strong> MUR {booking.expectedEarning.toLocaleString()}  </Typography>
                                </Grid>

                                {booking.notes && (
                                    <Grid item xs={12}>
                                        <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#344767' }}>  <strong>Note:</strong> {booking.notes} </Typography>
                                    </Grid>
                                )}
                            </Grid>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BookingAlert;
