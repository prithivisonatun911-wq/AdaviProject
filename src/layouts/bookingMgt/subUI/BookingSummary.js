import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, Select, MenuItem, FormControl, InputLabel, Table, TableHead, TableRow, TableCell, TableBody, } from '@mui/material';
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import verticalBarChartData from "layouts/chartData/verticalBarChartData";
import PieChart from "examples/Charts/PieChart/index";
import pieChartData from "layouts/chartData/pieChartData";

const summaryData = {
    bookings: [
        { status: 'Completed', count: 45 },
        { status: 'Upcoming', count: 20 },
        { status: 'Cancelled', count: 5 },
    ],
    byEventType: {
        Wedding: 30,
        Villa: 20,
        Restaurant: 20,
    },
    byLocation: {
        'Villa Ocean View': 15,
        'Riverside Hall': 25,
        'Sunset Bistro': 10,
    },
    topUsers: [
        { user: 'John Doe', count: 7 },
        { user: 'Priya Sharma', count: 6 },
        { user: 'Amit Patel', count: 5 },
        { user: 'Sara Khan', count: 4 },
        { user: 'Ali Raza', count: 4 },
        { user: 'Meera Singh', count: 3 },
        { user: 'Karan Kapoor', count: 3 },
        { user: 'Sofia Verma', count: 2 },
        { user: 'David Chen', count: 2 },
        { user: 'Lina Das', count: 2 },
    ],
    topEvents: [
        { eventType: 'Wedding - Reception', count: 15 },
        { eventType: 'Villa - Night Stay', count: 10 },
        { eventType: 'Restaurant - Dinner', count: 8 },
        { eventType: 'Wedding - Haldi', count: 7 },
        { eventType: 'Villa - Day Stay', count: 5 },
        { eventType: 'Restaurant - Lunch', count: 4 },
        { eventType: 'Wedding - Sangeet', count: 3 },
        { eventType: 'Restaurant - Breakfast', count: 3 },
        { eventType: 'Wedding - Marriage', count: 2 },
        { eventType: 'Villa - Night Party', count: 2 },
    ],
};

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

import { useArgonController } from 'context';

const BookingSummary = () => {

    const [controller] = useArgonController();
    const { darkMode } = controller;

    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const pieData = {
        labels: Object.keys(summaryData.byEventType),
        datasets: [{
            data: Object.values(summaryData.byEventType),
            backgroundColor: ['#1976d2', '#9c27b0', '#f57c00'],
            borderWidth: 1,
        }],
    };

    const barData = {
        labels: Object.keys(summaryData.byLocation),
        datasets: [{
            label: 'Bookings',
            data: Object.values(summaryData.byLocation),
            backgroundColor: '#1976d2',
        }],
    };

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ color: darkMode ? '#ffffff' : '#344767' }}>  Booking Summary  </Typography>

            {/* Month and Year Selection */}
            <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
                <FormControl>
                    <InputLabel>Month</InputLabel>
                    <Select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} label="Month" size="small">
                        {months.map((month, idx) => (
                            <MenuItem key={month} value={idx}>{month}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel>Year</InputLabel>
                    <Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} label="Year" size="small">
                        {years.map((year) => (
                            <MenuItem key={year} value={year}>{year}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            {/* Summary Cards */}
            <Grid container spacing={2} mb={4}>
                {summaryData.bookings.map((b) => (
                    <Grid item xs={12} sm={4} key={b.status}>
                        <Paper elevation={2} sx={{ p: 3, textAlign: 'center', backgroundColor: darkMode ? '#111c44' : '#fafafa', }}>
                            <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ color: darkMode ? '#ffffff' : '#344767' }}> {b.status}  </Typography>
                            <Typography variant="h4" sx={{ color: b.status == 'Completed' ? 'rgba(21, 157, 57, 1)' : b.status == 'Cancelled' ? 'rgba(195, 11, 11, 1)' : 'rgba(4, 4, 4, 1)' }}>{b.count}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Charts */}
            <Grid container spacing={3} mb={4}>

                <Grid item xs={12} lg={6}>
                    <PieChart title="Bookings by Event Type" chart={pieChartData} />
                </Grid>

                <Grid item xs={12} lg={6}>
                    <VerticalBarChart title="Bookings by Location" chart={verticalBarChartData} />
                </Grid>

            </Grid>

            {/* Tables */}
            <Grid container spacing={3} >
                <Grid item xs={12} md={6}  >
                    <Paper elevation={2} sx={{ p: 3, backgroundColor: darkMode ? '#111c44' : '#fafafa', }}>
                        <Typography variant="h6" gutterBottom sx={{ color: darkMode ? '#ffffff' : '#344767' }}>  Top 10 Users </Typography>
                        <Table stickyHeader sx={{ tableLayout: 'fixed', width: "100% !important" }}>
                            <TableHead sx={{ width: '100%', display: "contents" }}>
                                <TableRow>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>#</TableCell>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>User</TableCell>
                                    <TableCell align="right" sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Bookings</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {summaryData.topUsers.map((u, idx) => (
                                    <TableRow key={u.user}>
                                        <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{idx + 1}</TableCell>
                                        <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{u.user}</TableCell>
                                        <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }} align="right">{u.count}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper elevation={2} sx={{ p: 3, backgroundColor: darkMode ? '#111c44' : '#fafafa', }}>
                        <Typography variant="h6" gutterBottom sx={{ color: darkMode ? '#ffffff' : '#344767' }}> Top 10 Events </Typography>
                        <Table stickyHeader sx={{ tableLayout: 'fixed', width: "100% !important" }}>
                            <TableHead sx={{ width: '100%', display: "contents" }}>
                                <TableRow>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>#</TableCell>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Event</TableCell>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }} align="right">Bookings</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {summaryData.topEvents.map((e, idx) => (
                                    <TableRow key={e.eventType}>
                                        <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{idx + 1}</TableCell>
                                        <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{e.eventType}</TableCell>
                                        <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }} align="right">{e.count}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BookingSummary;
