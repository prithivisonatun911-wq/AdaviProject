import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Paper, MenuItem, Checkbox, InputLabel, FormControlLabel, Select, FormControl } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, TimePicker, } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useArgonController } from 'context';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const eventTypeOptions = [
    { value: 'wedding', label: 'Wedding Booking' },
    { value: 'villa', label: 'Villa Booking' },
    { value: 'restaurant', label: 'Restaurant Booking' },
];

const eventSubTypes = {
    wedding: ['Haldi', 'Sangeet', 'Marriage', 'Reception'],
    villa: ['Night Stay', 'Day Stay'],
    restaurant: ['Dinner', 'Breakfast', 'Lunch'],
};

const locationOptions = {
    villa: ['Villa Sunset', 'Villa Ocean View', 'Mountain Villa'],
    wedding: ['Grand Ballroom', 'Riverside Hall', 'Skyline Venue'],
    restaurant: ['The Spice Garden', 'Olive Grove', 'Sunset Bistro'],
};

function BookingForm() {
    const [controller] = useArgonController();
    const { darkMode } = controller;

    const [form, setForm] = useState({
        eventType: '',
        eventSubType: '',
        location: '',
        customerName: '',
        contactInfo: '',
        notes: '',
        numberOfPeople: '',
        isBirthday: false,
        isAnniversary: false,
        date: dayjs(),
        startTime: dayjs(),
        endTime: dayjs().add(1, 'hour'),
    });

    const handleChange = (field) => (e) => {
        const value = e.target.value;
        setForm((prev) => ({
            ...prev,
            [field]: value,
            ...(field === 'eventType' ? { location: '', eventSubType: '' } : {}),
        }));
    };

    const handleDateChange = (field) => (newValue) => {
        setForm((prev) => ({ ...prev, [field]: newValue }));
    };

    const handleSubmit = () => {
        const { eventType, eventSubType, location, date, startTime, endTime } = form;

        if (!eventType || !eventSubType || !location || !date || !startTime || !endTime) {
            alert('Please fill in all required fields.');
            return;
        }

        const bookingData = {
            ...form,
            start: dayjs(date).hour(startTime.hour()).minute(startTime.minute()).toDate(),
            end: dayjs(date).hour(endTime.hour()).minute(endTime.minute()).toDate(),
        };

        alert('Booking submitted!');
        console.log(bookingData);
    };

    const isSpecialEventApplicable = form.eventType === 'villa' || form.eventType === 'restaurant';

    return (
        <Paper elevation={3} sx={{ p: 3, backgroundColor: darkMode ? '#1a2035' : '#ffffff', color: darkMode ? '#ffffff' : '#344767', maxWidth: 800, margin: 'auto', }}>
            <Typography variant="h6" gutterBottom pb={5} sx={{ color: darkMode ? '#ffffff' : '#344767' }}> New Booking </Typography>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid container spacing={2} direction="column">

                    {/* Event Type */}
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom sx={{ mb: 2, color: darkMode ? '#ffffff' : '#344767' }}>Booking For*</Typography>
                        <FormControl variant="outlined" fullWidth>
                            <Select value={form.eventType} placeholder="Select Booking For" onChange={handleChange('eventType')} required disableUnderline displayEmpty IconComponent={ArrowDropDownIcon}
                                sx={{
                                    fontSize: "0.875rem", border: "1px solid #d1d5db", borderRadius: "6px", color: !darkMode ? "#111c44 !important" : "#ffffff !important",
                                    backgroundColor: "#fff", appearance: "none",
                                    '& .MuiSelect-icon': { color: darkMode ? '#ffffff' : '#111c44', height: '100%', width: '40px', right: '10px', display: 'flex', left: 0, top: 3 },
                                    '& .MuiSelect-select': { display: 'flex', alignItems: 'center', height: '100%', marginLeft: "10px" },
                                }}
                            >
                                {eventTypeOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>  {option.label} </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Event Subtype */}
                    <Grid item xs={12}>

                        <FormControl variant="standard" fullWidth>

                            <Typography variant="h6" gutterBottom sx={{ mb: 2, color: darkMode ? '#ffffff' : '#344767' }}>Event Type*</Typography>
                            <Select label="Event Type Detail" value={form.eventSubType} onChange={handleChange('eventSubType')} required disabled={!form.eventType} disableUnderline displayEmpty IconComponent={ArrowDropDownIcon}
                                sx={{
                                    fontSize: "0.875rem", border: "1px solid #d1d5db", borderRadius: "6px", color: !darkMode ? "#111c44 !important" : "#ffffff !important",
                                    backgroundColor: "#fff", appearance: "none", width: "100%",
                                    '& .MuiSelect-icon': { color: darkMode ? '#ffffff' : '#111c44', height: '100%', width: '40px', right: '10px', display: 'flex', left: 0, top: 3 },
                                    '& .MuiSelect-select': { display: 'flex', alignItems: 'center', height: '100%', marginLeft: "10px" },
                                }}
                            >
                                {form.eventType &&
                                    eventSubTypes[form.eventType].map((sub) => (
                                        <MenuItem key={sub} value={sub}>  {sub} </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Location */}
                    <Grid item xs={12}>
                        <FormControl variant="standard" fullWidth>
                            <Typography variant="h6" gutterBottom sx={{ mb: 2, color: darkMode ? '#ffffff' : '#344767' }}>Booking Location*</Typography>
                            <Select fullWidth label="Location" value={form.location} onChange={handleChange('location')} required disabled={!form.eventType} disableUnderline displayEmpty IconComponent={ArrowDropDownIcon}
                                sx={{
                                    fontSize: "0.875rem", border: "1px solid #d1d5db", borderRadius: "6px", color: !darkMode ? "#111c44 !important" : "#ffffff !important",
                                    backgroundColor: "#fff", appearance: "none", '& .MuiSelect-icon': { color: !darkMode ? "#111c44 !important" : "#ffffff !important", },
                                    width: "100% !important",
                                    '& .MuiInputBase-input': { color: darkMode ? '#fff' : '#344767', },
                                    '& .MuiInputLabel-root': { color: darkMode ? '#fff' : '#344767', },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: darkMode ? '#444' : '#ccc', },
                                        '&:hover fieldset': { borderColor: darkMode ? '#fff' : '#111', },
                                    },
                                    '& .MuiSelect-icon': { color: darkMode ? '#ffffff' : '#111c44', height: '100%', width: '40px', right: '10px', display: 'flex', left: 0, top: 3 },
                                    '& .MuiSelect-select': { display: 'flex', alignItems: 'center', height: '100%', marginLeft: "10px" },
                                }}
                            >
                                {form.eventType &&
                                    locationOptions[form.eventType].map((loc) => (
                                        <MenuItem key={loc} value={loc}> {loc}  </MenuItem>
                                    ))}
                            </Select>

                        </FormControl>
                    </Grid>

                    {/* Number of People */}
                    <Grid item xs={12}>
                        <FormControl variant="standard" fullWidth>

                            <Typography variant="h6" gutterBottom sx={{ mb: 2, color: darkMode ? '#ffffff' : '#344767' }}>Number of People*</Typography>
                            <TextField fullWidth type="number" value={form.numberOfPeople} onChange={handleChange('numberOfPeople')} inputProps={{ min: 1 }}
                                sx={{
                                    fontSize: "0.875rem", borderRadius: "6px", width: "100%",
                                    color: darkMode ? "#111c44 !important" : "#ffffff !important", backgroundColor: darkMode ? '#ffffff' : '#111c44',
                                    '& .MuiSelect-icon': { color: darkMode ? '#ffffff' : '#111c44', background: !darkMode ? '#ffffff' : '#111c44', right: '10px', display: 'flex', left: 0 },
                                    '& .MuiSelect-select': { display: 'flex', alignItems: 'center', height: '100%', marginLeft: "10px", background: !darkMode ? '#ffffff' : '#111c44' },
                                }} variant="outlined"  >
                            </TextField>

                        </FormControl>
                    </Grid>

                    {/* Birthday & Anniversary */}
                    {isSpecialEventApplicable && (
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom sx={{ mb: 2, color: darkMode ? '#ffffff' : '#344767' }}>Occasion*</Typography>
                            <FormControlLabel control={<Checkbox checked={form.isBirthday} onChange={(e) => setForm({ ...form, isBirthday: e.target.checked })} />} label="Birthday Booking" />
                            <FormControlLabel control={<Checkbox checked={form.isAnniversary} onChange={(e) => setForm({ ...form, isAnniversary: e.target.checked })} />} label="Anniversary Booking" />
                        </Grid>
                    )}

                    {/* Date + Time Pickers in One Row Centered */}
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom sx={{ mb: 2, color: darkMode ? '#ffffff' : '#344767' }}>Booking Date*</Typography>
                        <Box display="flex" justifyContent="center" gap={2} width="100%">
                            <Box sx={{ width: '60%' }}>
                                <DatePicker label="Booking Date" value={form.date} onChange={handleDateChange('date')} slotProps={{ textField: { fullWidth: true, required: true, }, }} />
                            </Box>
                            <Box sx={{ width: '60%' }}>
                                <TimePicker label="Start Time" value={form.startTime} onChange={handleDateChange('startTime')} slotProps={{ textField: { fullWidth: true, required: true, }, }} />
                            </Box>
                            <Box sx={{ width: '60%' }}>
                                <TimePicker label="End Time" value={form.endTime} onChange={handleDateChange('endTime')} slotProps={{ textField: { fullWidth: true, required: true, }, }} />
                            </Box>
                        </Box>
                    </Grid>

                    {/* Customer Info */}
                    <Grid item xs={12} color={darkMode ? '#fff' : '#344767'}>
                        <Typography variant="h6" gutterBottom sx={{ mb: 2, color: darkMode ? '#ffffff' : '#344767' }}>Customer Info </Typography>
                        <TextField fullWidth placeholder="Customer Name" value={form.customerName} onChange={handleChange('customerName')}
                            sx={{
                                mb: 2,
                                '& .MuiInputBase-input': { color: darkMode ? '#fff' : '#344767', },
                                '& .MuiInputLabel-root': { color: darkMode ? '#fff' : '#344767', },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: darkMode ? '#444' : '#ccc', },
                                    '&:hover fieldset': { borderColor: darkMode ? '#fff' : '#111', },
                                },
                            }}
                        />
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom sx={{ mb: 2, color: darkMode ? '#ffffff' : '#344767' }}>Contact Info </Typography>
                        <TextField fullWidth placeholder="Contact Info (Email / Phone)" value={form.contactInfo} onChange={handleChange('contactInfo')} sx={{
                            mb: 2,
                            '& .MuiInputBase-input': { color: darkMode ? '#fff' : '#344767', },
                            '& .MuiInputLabel-root': { color: darkMode ? '#fff' : '#344767', },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: darkMode ? '#444' : '#ccc', },
                                '&:hover fieldset': { borderColor: darkMode ? '#fff' : '#111', },
                            },
                        }} />
                    </Grid>

                    {/* Notes */}
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom sx={{ mb: 2, color: darkMode ? '#ffffff' : '#344767' }}>Notes</Typography>
                        <TextField fullWidth placeholder="Notes" value={form.notes} onChange={handleChange('notes')} multiline rows={3}
                            sx={{
                                mb: 2,
                                '& .MuiInputBase-input': { color: darkMode ? '#fff' : '#344767', },
                                '& .MuiInputLabel-root': { color: darkMode ? '#fff' : '#344767', },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: darkMode ? '#444' : '#ccc', },
                                    '&:hover fieldset': { borderColor: darkMode ? '#fff' : '#111', },
                                },
                            }}
                        />
                    </Grid>

                    {/* Submit */}
                    <Grid item xs={12} textAlign="right">
                        <Button variant="contained" color="primary" onClick={handleSubmit} size="large">Submit Booking</Button>
                    </Grid>

                </Grid>
            </LocalizationProvider>
        </Paper>
    );
}

export default BookingForm;