import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Chip,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Divider,
    Grid,
    Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useArgonController } from 'context';

const purchaseOrders = [
    {
        id: 'PO-1001',
        supplier: 'Global Med Supplies',
        orderDate: '2025-09-01',
        deliveryDate: '2025-09-10',
        status: 'Pending',
        items: [
            { name: 'Sterile Gloves', quantity: 500, unitPrice: 1.5 },
            { name: 'Face Masks', quantity: 1000, unitPrice: 0.8 }
        ]
    },
    {
        id: 'PO-1002',
        supplier: 'PharmaOne',
        orderDate: '2025-08-25',
        deliveryDate: '2025-09-05',
        status: 'Received',
        items: [
            { name: 'Paracetamol 500mg', quantity: 300, unitPrice: 0.25 }
        ]
    }
];

function PurchaseOrders() {
    const [controller] = useArgonController();
    const { darkMode } = controller;

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return 'warning';
            case 'Approved':
                return 'info';
            case 'Received':
                return 'success';
            default:
                return 'default';
        }
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom sx={{ color: darkMode ? '#ffffff' : '#344767' }}>
                Purchase Orders
            </Typography>

            {purchaseOrders.map((po) => (
                <Accordion key={po.id} sx={{ mb: 2, backgroundColor: darkMode ? '#1e293b' : '#fff' }}>

                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={6} md={2}>
                                <Typography variant="subtitle2" sx={{ color: darkMode ? '#ffffff' : '#344767' }}>
                                    <strong>PO No:</strong> {po.id}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant="subtitle2" sx={{ color: darkMode ? '#ffffff' : '#344767' }}>
                                    <strong>Supplier:</strong> {po.supplier}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={2}>
                                <Typography variant="subtitle2" sx={{ color: darkMode ? '#ffffff' : '#344767' }}>
                                    <strong>Order Date:</strong> {po.orderDate}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3}>
                                <Typography variant="subtitle2" sx={{ color: darkMode ? '#ffffff' : '#344767' }}>
                                    <strong>Delivery Date:</strong> {po.deliveryDate}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} md={2}>
                                <Chip label={po.status} color={getStatusColor(po.status)} size="small" variant="outlined" sx={{ fontWeight: 'bold' }} />
                            </Grid>
                        </Grid>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Divider sx={{ mb: 2 }} />
                        <Typography variant="subtitle1" gutterBottom sx={{ color: darkMode ? '#ffffff' : '#344767' }}>
                            Ordered Items
                        </Typography>



                        <Table size="small" stickyHeader component={Paper} sx={{ backgroundColor: darkMode ? '#0f172a' : '#fafafa', tableLayout: 'fixed', width: "100% !important" }}>
                            <TableHead sx={{ width: '100%', display: "contents" }}>
                                <TableRow>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Item Name</TableCell>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Quantity</TableCell>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Unit Price</TableCell>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {po.items.map((item, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{item.name}</TableCell>
                                        <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{item.quantity}</TableCell>
                                        <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>${item.unitPrice.toFixed(2)}</TableCell>
                                        <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>${(item.unitPrice * item.quantity).toFixed(2)}</TableCell>
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

export default PurchaseOrders;
