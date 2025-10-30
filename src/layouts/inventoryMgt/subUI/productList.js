import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Avatar, Typography, Box } from '@mui/material';

import { Paper, TableContainer } from '@mui/material';

const sampleProducts = [
    {
        id: 1,
        name: 'Samsung Galaxy S23 Ultra',
        picture: 'https://images.samsung.com/is/image/samsung/assets/global/galaxy-s23/gallery/s23_ultra_phantom_black.jpg',
        quantityInStock: 45,
        previousMonthSell: 18,
        stockedDate: '2025-08-01',
        category: 'Smartphones',
        buyPrice: 950,
        sellPrice: 1199,
        profit: 249,
    },
    {
        id: 2,
        name: 'Apple iPhone 15 Pro Max',
        picture: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-model-select-2023?wid=470&hei=556&fmt=png-alpha&.v=1692923770499',
        quantityInStock: 30,
        previousMonthSell: 25,
        stockedDate: '2025-07-28',
        category: 'Smartphones',
        buyPrice: 1050,
        sellPrice: 1299,
        profit: 249,
    },
    {
        id: 3,
        name: 'Sony WH-1000XM5 Headphones',
        picture: 'https://cdn.mos.cms.futurecdn.net/YwTPEUoQ5DZm5nY95LDRXD.jpg',
        quantityInStock: 120,
        previousMonthSell: 35,
        stockedDate: '2025-07-15',
        category: 'Accessories',
        buyPrice: 280,
        sellPrice: 349,
        profit: 69,
    },
    {
        id: 4,
        name: 'Dell XPS 15 (2025)',
        picture: 'https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/xps-15-9520-laptop-pdp-mod-04.jpg',
        quantityInStock: 12,
        previousMonthSell: 7,
        stockedDate: '2025-08-05',
        category: 'Laptops',
        buyPrice: 1600,
        sellPrice: 1899,
        profit: 299,
    },
    {
        id: 5,
        name: 'Logitech MX Master 3S',
        picture: 'https://resource.logitech.com/w_800,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-top-view-graphite-gallery-us.png?v=1',
        quantityInStock: 85,
        previousMonthSell: 40,
        stockedDate: '2025-07-30',
        category: 'Accessories',
        buyPrice: 75,
        sellPrice: 99,
        profit: 24,
    },
    {
        id: 6,
        name: 'ASUS ROG Zephyrus G14',
        picture: 'https://dlcdnwebimgs.asus.com/gain/BFC5D7C6-03E4-403C-B957-7E1541D0A774',
        quantityInStock: 10,
        previousMonthSell: 4,
        stockedDate: '2025-09-01',
        category: 'Laptops',
        buyPrice: 1350,
        sellPrice: 1599,
        profit: 249,
    },
    {
        id: 7,
        name: 'Google Pixel 8 Pro',
        picture: 'https://store.google.com/product/images/pixel_8_pro_black.png',
        quantityInStock: 35,
        previousMonthSell: 28,
        stockedDate: '2025-08-20',
        category: 'Smartphones',
        buyPrice: 899,
        sellPrice: 1099,
        profit: 200,
    },
    {
        id: 8,
        name: 'Kindle Paperwhite (11th Gen)',
        picture: 'https://m.media-amazon.com/images/I/61RCkVhSJuL._AC_SL1000_.jpg',
        quantityInStock: 60,
        previousMonthSell: 22,
        stockedDate: '2025-08-10',
        category: 'E-Readers',
        buyPrice: 110,
        sellPrice: 139,
        profit: 29,
    },
    {
        id: 9,
        name: 'Canon EOS R8 Camera',
        picture: 'https://www.canon.co.uk/media/EOS-R8-packshot_tcm14-2182496.png',
        quantityInStock: 8,
        previousMonthSell: 3,
        stockedDate: '2025-08-02',
        category: 'Cameras',
        buyPrice: 1450,
        sellPrice: 1699,
        profit: 249,
    },
    {
        id: 10,
        name: 'Apple Watch Series 9',
        picture: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-series-9-pink-aluminum-case-pink-sport-loop?wid=640&hei=640&fmt=jpeg&qlt=95&.v=1693001047061',
        quantityInStock: 55,
        previousMonthSell: 33,
        stockedDate: '2025-08-14',
        category: 'Wearables',
        buyPrice: 350,
        sellPrice: 399,
        profit: 49,
    },
];


import { useArgonController } from "context";

function ProductList() {

    const [controller] = useArgonController();
    const { darkMode } = controller;
    return (
        <Box>
            <Typography variant="h6" gutterBottom color={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Product List</Typography>

            <TableContainer component={Paper}>
                <Table stickyHeader sx={{ tableLayout: 'fixed', width: "100% !important" }}>
                    
                    <TableHead sx={{ width: '100%', display: "contents" }}>
                        <TableRow>
                            <TableCell sx={{ width: '9%', color: darkMode ? '#ffffff' : '#344767' }}>Picture</TableCell>
                            <TableCell sx={{ width: '15%', color: darkMode ? '#ffffff' : '#344767' }}>Product Name</TableCell>
                            <TableCell sx={{ width: '10%', color: darkMode ? '#ffffff' : '#344767' }}>Category</TableCell>
                            <TableCell sx={{ width: '6%', color: darkMode ? '#ffffff' : '#344767' }}>Qty</TableCell>
                            <TableCell sx={{ width: '10%', color: darkMode ? '#ffffff' : '#344767' }}>Prev Sales</TableCell>
                            <TableCell sx={{ width: '8%', color: darkMode ? '#ffffff' : '#344767' }}>Buy($)</TableCell>
                            <TableCell sx={{ width: '8%', color: darkMode ? '#ffffff' : '#344767' }}>Sell($)</TableCell>
                            <TableCell sx={{ width: '8%', color: darkMode ? '#ffffff' : '#344767' }}>Profit($)</TableCell>
                            <TableCell sx={{ width: '12%', color: darkMode ? '#ffffff' : '#344767' }}>Stocked Date</TableCell>
                            <TableCell sx={{ width: '10%', color: darkMode ? '#ffffff' : '#344767' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {sampleProducts.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell sx={{ width: 80 }}>
                                    <Avatar variant="rounded" src={product.picture} alt={product.name} sx={{ width: 56, height: 56 }} />
                                </TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{product.name}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{product.category}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{product.quantityInStock}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{product.previousMonthSell}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>${product.buyPrice.toFixed(2)}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>${product.sellPrice.toFixed(2)}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>${(product.sellPrice - product.buyPrice).toFixed(2)}</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{product.stockedDate}</TableCell>

                                <TableCell sx={{ width: 120 }} align="center">
                                    <Button variant="contained" color="primary" size="small">View</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ProductList;