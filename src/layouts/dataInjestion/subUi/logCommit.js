import React, { useState } from "react";
import { Drawer, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, Button, Box, Stack, Grid } from "@mui/material";
import { useArgonController } from "context";

export default function LogCommit(param) {
    const [controller] = useArgonController();
    const { darkMode } = controller;
    const [commitLogs] = useState([
        {
            id: "CMT001",
            user: "John Doe",
            action: "Uploaded file",
            timestamp: "2025-10-01 10:15 AM",
            status: "Success",
        },
        {
            id: "CMT002",
            user: "Jane Smith",
            action: "Validated data",
            timestamp: "2025-10-01 10:18 AM",
            status: "Success",
        },
        {
            id: "CMT003",
            user: "Admin",
            action: "Rejected file",
            timestamp: "2025-10-01 10:25 AM",
            status: "Failed",
        },
    ]);

    const [drawerOpen, setDrawerOpen] = useState(param?.openUI ?? false);

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
        param.handleCloseDrawer?.({ form: "userDetail", close: true });
    };

    const handleExport = () => {

    }

    return (
        <Drawer anchor="right" open={drawerOpen} onClose={() => handleCloseDrawer?.({ form: "logCommit", close: true })} PaperProps={{ sx: { width: "60%", backgroundColor: darkMode ? "#1a2035" : "#fff", color: darkMode ? "#fff" : "#000", }, }}>

            {/* Header */}
            <Typography variant="h4" sx={{ mb: 3, p: 2, textAlign: "center", borderRadius: 1, color: !darkMode ? "#ffffff" : "#172030ff", backgroundColor: darkMode ? "#5c68d1ff" : "#344767", }}>
                Log History
            </Typography>

            <Box sx={{ p: 2 }}>
                <TableContainer component={Paper}>
                    <Table stickyHeader size="small" >
                        <TableHead sx={{ width: '100%', display: "contents" }}>
                            <TableRow>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>ID</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>User</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Action</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Time</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Status</TableCell>
                                <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {commitLogs.map((log, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{log.id}</TableCell>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{log.user}</TableCell>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{log.action}</TableCell>
                                    <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>{log.timestamp}</TableCell>
                                    <TableCell sx={{ color: log.status === "Success" ? "green" : "red", fontWeight: 500, }} >  {log.status}  </TableCell>


                                    <TableCell sx={{ width: 120 }} align="center">
                                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                                            <Button variant="contained" color="primary" size="small">View</Button>
                                            <Button variant="contained" color="primary" size="small">Delete</Button>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


                <Box sx={{ mt: 3 }}>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <Button variant="contained" sx={{ backgroundColor: "red", color: "white !important" }} size="small" onClick={handleCloseDrawer}>Close</Button>
                            <Button variant="contained" sx={{ backgroundColor: "green", color: "white !important" }} size="small" onClick={handleExport}>Export</Button>
                        </Stack>
                    </Grid>

                </Box>

            </Box>

        </Drawer>
    );
}
