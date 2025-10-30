import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Chip, Table, TableHead, TableRow, TableCell, TableBody, Divider, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useArgonController } from "context";
const transactions = [
    {
        id: 'TXN-001',
        date: '2025-09-15',
        cost: 2400,
        paymentType: 'Bank Transfer',
        type: 'IN',
        products: [
            { name: 'iPhone 15 Pro Max', quantity: 5, unitPrice: 400, total: 2000 },
            { name: 'Logitech MX Mouse', quantity: 2, unitPrice: 200, total: 400 },
        ],
    },
    {
        id: 'TXN-002',
        date: '2025-09-17',
        cost: 1500,
        paymentType: 'Cash',
        type: 'OUT',
        products: [
            { name: 'Samsung Galaxy S23', quantity: 3, unitPrice: 500, total: 1500 },
        ],
    },
];

function ProductTransactions() {
    const [controller] = useArgonController();
    const { darkMode } = controller;
    return (
        <Box>
            <Typography variant="h6" gutterBottom color={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Product Transactions</Typography>

            {transactions.map((txn) => (
                <Accordion key={txn.id} sx={{ mb: 2, backgroundColor: darkMode ? '#1e293b' : '#fafafa', }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={4} md={2}>
                                <Typography variant="subtitle2" sx={{ color: darkMode ? "#ffffff" : "#344767" }}>
                                    <strong>ID:</strong> {txn.id}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4} md={2}>
                                <Typography variant="subtitle2" sx={{ color: darkMode ? "#ffffff" : "#344767" }}>
                                    <strong>Date:</strong> {txn.date}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4} md={2}>
                                <Typography variant="subtitle2" sx={{ color: darkMode ? "#ffffff" : "#344767" }}>
                                    <strong>Cost:</strong> ${txn.cost}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant="subtitle2" sx={{ color: darkMode ? "#ffffff" : "#344767" }}>
                                    <strong>Payment:</strong> {txn.paymentType}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Chip
                                    label={txn.type === 'IN' ? 'Stock IN' : 'Stock OUT'}
                                    color={txn.type === 'IN' ? 'success' : 'error'}
                                    size="small"
                                    variant="outlined"
                                    sx={{
                                        fontWeight: 'bold',
                                        backgroundColor: darkMode ? '#1e293b' : '#f5f5f5',
                                        color: darkMode ? '#ffffff' : '#000000',
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </AccordionSummary>


                    <AccordionDetails>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="subtitle1" gutterBottom color={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}> Product Details  </Typography>
                        <Table stickyHeader sx={{ tableLayout: 'fixed', width: "100% !important" }}>
                            <TableHead sx={{ width: '100%', display: "contents" }}>
                                <TableRow>
                                    <TableCell color={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Product Name</TableCell>
                                    <TableCell color={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Quantity</TableCell>
                                    <TableCell color={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Unit Price</TableCell>
                                    <TableCell color={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {txn.products.map((prod, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{prod.name}</TableCell>
                                        <TableCell>{prod.quantity}</TableCell>
                                        <TableCell>${prod.unitPrice}</TableCell>
                                        <TableCell>${prod.total}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}

export default ProductTransactions;
