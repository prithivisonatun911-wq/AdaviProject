import React, { useState } from 'react';
import { useArgonController } from "context";
import { Drawer, Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Divider, Button } from '@mui/material';

export default function userPaymentDetail(param) {

    console.log(param)
    const [controller] = useArgonController();
    const { darkMode } = controller;

    let [userDetail, setuserDetail] = useState([]);
    const paymentHistory = userDetail?.payments || [
        { id: 1, date: '2025-08-10', amount: 1500, method: 'Bank Transfer', status: 'Completed' },
        { id: 2, date: '2025-07-10', amount: 1500, method: 'Cash on Hand', status: 'Completed' },
        { id: 3, date: '2025-06-10', amount: 1500, method: 'Bank Transfer', status: 'Pending' },
    ];

    const [drawerOpen, setDrawerOpen] = useState(param?.openUI ? param?.openUI : false);
    const handleCloseDrawer = () => {
        setDrawerOpen(false);
        param.handleCloseDrawer?.({ form: "userPaymentDetail", close: true });
    }

    return (
        <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer} PaperProps={{ sx: { width: '40%', backgroundColor: darkMode ? '#1a2035' : '#fff', color: darkMode ? '#fff' : '#000', }, }}>

            {/* Header */}
            <Typography variant="h4" sx={{ mb: 3, p: 2, textAlign: 'center', borderRadius: 1, color: '#ffffff', backgroundColor: darkMode ? '#5c68d1ff' : '#344767', }}>
                {userDetail?.firstName} {userDetail?.lastName} Payment History
            </Typography>

            <Box sx={{ p: 2, position: 'relative', height: '100%' }}>

                {/* Payment Table */}
                <Box sx={{ overflowY: 'auto', maxHeight: '85%' }}>
                    <Table stickyHeader sx={{ tableLayout: 'fixed', width: "100% !important" }}>
                        <TableHead sx={{ width: '100%', display: "contents" }}>
                            <TableRow>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Date</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }} align="right">Amount ($)</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Method</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paymentHistory.map((payment) => (
                                <TableRow key={payment.id}>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{payment.date}</TableCell>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }} align="right">{payment.amount.toFixed(2)}</TableCell>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{payment.method}</TableCell>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{payment.status}</TableCell>
                                </TableRow>
                            ))}
                            {paymentHistory.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        No payment records found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Box>

                {/* Actions */}
                <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                    <Button variant="outlined" sx={{ borderColor: '#dd0000ff', color: '#dd0000ff' }} fullWidth onClick={handleCloseDrawer}>Cancel  </Button>
                </Box>
            </Box>


        </Drawer>
    );
}
