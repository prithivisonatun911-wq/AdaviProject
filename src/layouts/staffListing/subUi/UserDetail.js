import React, { useState } from 'react';
import { useArgonController } from "context";
import { Box, Typography, Drawer, Avatar, TextField, Select, MenuItem, Button, FormControl, Stack } from '@mui/material';

export default function UserDetail(param) {
    const [controller] = useArgonController();
    const { darkMode } = controller;

    const [drawerOpen, setDrawerOpen] = useState(param?.openUI ? param?.openUI : false);

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
        param.handleCloseDrawer?.({ form: "userDetail", close: true });
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        salary: '',
        paymentMethod: '',
        accountNumber: '',
        department: '',
        emergencyContact: '',
        position: '',
        status: '',
        avatar: "https://i.pravatar.cc/150?img=3",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log("User Data Submitted:", formData);
    };

    return (
        <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer} PaperProps={{ sx: { width: "40%", backgroundColor: darkMode ? '#1a2035' : '#fff', color: darkMode ? '#fff' : '#000', }, }}>

            {/* Header */}
            <Typography variant="h4" sx={{ mb: 3, p: 2, textAlign: 'center', borderRadius: 1, color: !darkMode ? '#ffffff' : '#344767', backgroundColor: darkMode ? '#5c68d1ff' : '#344767', }}>
                Edit User Details
            </Typography>

            <Box sx={{ p: 2 }}>

                {/* Centered Avatar */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Avatar src={formData.avatar} sx={{ width: 100, height: 100 }} />
                </Box>

                {/* Fields */}
                <Stack spacing={2}>
                    {/* First Name */}
                    <Box>
                        <Typography variant="subtitle2" mb={0.5}>First Name</Typography>
                        <TextField fullWidth name="firstName" placeholder="Enter first name" value={formData.firstName} onChange={handleChange} />
                    </Box>

                    {/* Last Name */}
                    <Box>
                        <Typography variant="subtitle2" mb={0.5}>Last Name</Typography>
                        <TextField fullWidth name="lastName" placeholder="Enter last name" value={formData.lastName} onChange={handleChange} />
                    </Box>

                    {/* Email */}
                    <Box>
                        <Typography variant="subtitle2" mb={0.5}>Email</Typography>
                        <TextField fullWidth name="email" placeholder="Enter email" type="email" value={formData.email} onChange={handleChange} />
                    </Box>

                    {/* Phone */}
                    <Box>
                        <Typography variant="subtitle2" mb={0.5}>Phone Number</Typography>
                        <TextField fullWidth name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} />
                    </Box>

                    {/* Salary */}
                    <Box>
                        <Typography variant="subtitle2" mb={0.5}>Salary</Typography>
                        <TextField fullWidth name="salary" placeholder="Enter salary" type="number" value={formData.salary} onChange={handleChange} />
                    </Box>

                    {/* Address */}
                    <Box>
                        <Typography variant="subtitle2" mb={0.5}>Address</Typography>
                        <TextField fullWidth name="address" placeholder="Enter address" value={formData.address} onChange={handleChange} multiline rows={2} />
                    </Box>

                    {/* Payment Method */}
                    <Box>
                        <Typography variant="subtitle2" mb={0.5}>Payment Method</Typography>
                        <FormControl fullWidth>
                            <Select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} displayEmpty >
                                <MenuItem value="" disabled>Select payment method</MenuItem>
                                <MenuItem value="bank">Bank Transfer</MenuItem>
                                <MenuItem value="cash">Cash on Hand</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    {/* Account Number */}
                    <Box>
                        <Typography variant="subtitle2" mb={0.5}>Account Number</Typography>
                        <TextField fullWidth name="accountNumber" placeholder="Enter account number" value={formData.accountNumber} onChange={handleChange} />
                    </Box>

                    {/* Department */}
                    <Box>
                        <Typography variant="subtitle2" mb={0.5}>Department</Typography>
                        <TextField fullWidth name="department" placeholder="Enter department" value={formData.department} onChange={handleChange} />
                    </Box>

                    {/* Position */}
                    <Box>
                        <Typography variant="subtitle2" mb={0.5}>Position</Typography>
                        <TextField fullWidth name="position" placeholder="Enter position" value={formData.position} onChange={handleChange} />
                    </Box>

                    {/* Emergency Contact */}
                    <Box>
                        <Typography variant="subtitle2" mb={0.5}>Emergency Contact</Typography>
                        <TextField fullWidth name="emergencyContact" placeholder="Enter emergency contact" value={formData.emergencyContact} onChange={handleChange} />
                    </Box>

                    {/* Status */}
                    <Box>
                        <Typography variant="subtitle2" mb={0.5}>Status</Typography>
                        <FormControl fullWidth>
                            <Select name="status" value={formData.status} onChange={handleChange} displayEmpty>
                                <MenuItem value="" disabled>Select status</MenuItem>
                                <MenuItem value="full-time">Full-Time</MenuItem>
                                <MenuItem value="part-time">Part-Time</MenuItem>
                                <MenuItem value="intern">Intern</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>

                {/* Actions */}
                <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                    <Button variant="outlined" sx={{ borderColor: '#11d81bff', color: '#11d81bff' }} fullWidth onClick={handleSubmit}>
                        Save
                    </Button>
                    <Button variant="outlined" sx={{ borderColor: '#dd0000ff', color: '#dd0000ff' }} fullWidth onClick={handleCloseDrawer}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
}
