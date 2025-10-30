import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer, } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Box, Typography, Paper, Drawer, List, ListItem, ListItemText, Divider, } from '@mui/material';

import { useArgonController } from 'context';

const locales = {
    'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const bookings = [
    {
        id: 1,
        title: 'Photography Session - John Doe',
        start: new Date(2025, 8, 25, 10, 0),
        end: new Date(2025, 8, 25, 11, 30),
    },
    {
        id: 2,
        title: 'Event Catering - Emily Smith',
        start: new Date(2025, 8, 25, 13, 0),
        end: new Date(2025, 8, 25, 15, 0),
    },
    {
        id: 3,
        title: 'Venue Booking - Mark Johnson',
        start: new Date(2025, 8, 20, 9, 0),
        end: new Date(2025, 8, 20, 11, 0),
    },
];

// Group bookings by date
function groupBookingsByDay(bookings) {
    const grouped = {};

    bookings.forEach((booking) => {
        const dateKey = format(booking.start, 'yyyy-MM-dd');
        if (!grouped[dateKey]) {
            grouped[dateKey] = [];
        }
        grouped[dateKey].push(booking);
    });

    return Object.entries(grouped).map(([date, group]) => ({
        title: `Book (${group.length})`,
        start: new Date(date),
        end: new Date(date),
        allDay: true,
        bookings: group,
    }));
}

function CalendarView() {
    const [controller] = useArgonController();
    const { darkMode } = controller;

    const [selectedBookings, setSelectedBookings] = useState([]);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleEventClick = (event) => {
        setSelectedBookings(event.bookings || []);
        setDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
        setSelectedBookings([]);
    };

    return (
        <Box>
            <Typography variant="h6" mb={2} color={darkMode ? '#fff' : '#344767'}>Booking Calendar  </Typography>

            <Paper
                elevation={2}
                sx={{
                    height: '75vh',
                    p: 2,
                    backgroundColor: darkMode ? '#1a2035' : '#fff',
                    color: darkMode ? '#fff' : '#344767',
                    '& .rbc-calendar': {
                        backgroundColor: darkMode ? '#1a2035' : '#fff',
                    },
                    '& .rbc-event': {
                        backgroundColor: darkMode ? '#4caf50' : '#1976d2',
                        color: '#fff',
                        cursor: 'pointer',
                    },
                    '& .rbc-today': {
                        backgroundColor: darkMode ? '#2c3e50' : '#f0f8ff',
                    },
                }}
            >
                <Calendar
                    localizer={localizer}
                    events={groupBookingsByDay(bookings)}
                    startAccessor="start"
                    endAccessor="end"
                    views={['month']}
                    defaultView="month"
                    style={{ height: '100%' }}
                    onSelectEvent={handleEventClick}
                />
            </Paper>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleCloseDrawer}
                PaperProps={{
                    sx: {
                        width: 400,
                        backgroundColor: darkMode ? '#1a2035' : '#fff',
                        color: darkMode ? '#fff' : '#000',
                    },
                }}
            >
                <Box sx={{ p: 3 }}>
                    <Typography variant="h6" mb={2}>
                        Bookings on Selected Date
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <List dense>
                        {selectedBookings.length === 0 ? (
                            <Typography variant="body2">No bookings found.</Typography>
                        ) : (
                            selectedBookings.map((booking) => (
                                <ListItem key={booking.id}>
                                    <ListItemText
                                        primary={booking.title}
                                        secondary={`${format(booking.start, 'hh:mm a')} - ${format(booking.end, 'hh:mm a')}`}
                                    />
                                </ListItem>
                            ))
                        )}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}

export default CalendarView;
