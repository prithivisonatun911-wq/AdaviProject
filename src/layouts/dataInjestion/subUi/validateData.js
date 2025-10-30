import React, { useState } from "react";
import {
    Drawer,
    Box,
    Typography,
    Button,
    Grid,
    Stack,
} from "@mui/material";
import { useArgonController } from "context";

export default function ValidateData(param) {
    const [controller] = useArgonController();
    const { darkMode } = controller;
    const validationSummary = [
        { dataCheck: "Blank amount", successCount: 87, failCount: 13 },
        { dataCheck: "Invalid email", successCount: 92, failCount: 8 },
        { dataCheck: "Missing name", successCount: 90, failCount: 10 },
        { dataCheck: "Duplicate ID", successCount: 95, failCount: 5 },
        { dataCheck: "Invalid date format", successCount: 85, failCount: 15 }, 
        { dataCheck: "Missing address", successCount: 88, failCount: 12 },
        { dataCheck: "Invalid currency", successCount: 97, failCount: 3 },
        { dataCheck: "Unverified account", successCount: 93, failCount: 7 },
        { dataCheck: "Missing birthdate", successCount: 86, failCount: 14 },
        { dataCheck: "Expired license", successCount: 94, failCount: 6 },
    ];

    const [drawerOpen, setDrawerOpen] = useState(param?.openUI ?? false);

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
        param.handleCloseDrawer?.({ form: "userDetail", close: true });
    };

    const handleCommit = () => {

    }

    return (
        <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer} PaperProps={{ sx: { width: "40%", backgroundColor: darkMode ? "#1a2035" : "#fff", color: darkMode ? "#fff" : "#000", }, }}>

            {/* Header */}
            <Typography variant="h4" sx={{ mb: 3, p: 2, textAlign: "center", borderRadius: 1, color: !darkMode ? "#ffffff" : "#344767", backgroundColor: darkMode ? "#5c68d1ff" : "#344767", }}>
                Validation Summary
            </Typography>

            <Box sx={{ p: 2 }}>
                <Box sx={{ maxHeight: "65vh", overflowY: "auto", pr: 1 }}>
                    {validationSummary.map((item, index) => (
                        <Box key={index} sx={{ display: "flex", alignItems: "center", }} >

                            {/* Left - Data Check */}
                            <Box sx={{ backgroundColor:  !darkMode ?"#E7EBFB" : "#344767 !important", px: 2, py: 1, flex: 2, mr: 2, textAlign: "right" }}  >
                                <Typography variant="body2" fontWeight={600} sx={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>{item.dataCheck}</Typography>
                            </Box>

                            {/* Right - Success/Fail */}
                            <Stack direction="row" spacing={2} sx={{ flex: 1 }}>
                                <Typography variant="body2" sx={{ color: "green" }}>Success ({item.successCount}) </Typography>
                                <Typography variant="body2" sx={{ color: "red" }}>Fail ({item.failCount})</Typography>
                            </Stack>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Grid item xs={12}>
                        <Typography variant="h6" sx={{ textAlign: "right" }}> Only success will be commit </Typography>
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <Button variant="contained" sx={{ backgroundColor: "red", color: "white !important" }} size="small" onClick={handleCloseDrawer}>Close</Button>
                            <Button variant="contained" sx={{ backgroundColor: "green", color: "white !important" }} size="small" onClick={handleCommit}>Commit</Button>
                        </Stack>
                    </Grid>

                </Box>
            </Box>
        </Drawer>
    );
}