import React, { useRef, useState } from "react";
import {
    Drawer,
    Button,
    Box,
    Typography,
    Stack,
} from "@mui/material";
import { useArgonController } from "context";

export default function LoadData(param) {
    const [controller] = useArgonController();
    const { darkMode } = controller;

    const [drawerOpen, setDrawerOpen] = useState(param?.openUI ?? false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const fileInputRef = useRef();

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
        param.handleCloseDrawer?.({ form: "userDetail", close: true });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        console.log("Selected file:", file);
    };

    const simulateFileLoad = () => {
        setLoading(true);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    setLoading(false);
                    console.log("Finished loading file:", selectedFile);
                    return 100;
                }

                const diff = Math.random() * 10;
                return Math.min(prevProgress + diff, 100);
            });
        }, 300);
    };

    const handleLoad = () => {
        if (!selectedFile) return;
        simulateFileLoad();
    };

    const handleClearAndLoad = () => {
        setSelectedFile(null);
        fileInputRef.current.value = "";
        setTimeout(() => {
            fileInputRef.current.click();
        }, 100);
    };

    return (
        <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer} PaperProps={{ sx: { width: "40%", backgroundColor: darkMode ? "#1a2035" : "#fff", color: darkMode ? "#fff" : "#000", }, }}>
            {/* Header */}
            <Typography variant="h4" sx={{ mb: 3, p: 2, textAlign: "center", borderRadius: 1, color: !darkMode ? "#ffffff" : "#344767", backgroundColor: darkMode ? "#5c68d1ff" : "#344767", }}>
                Data Upload
            </Typography>

            <Box sx={{ p: 2 }}>
                {/* Hidden File Input */}
                <input type="file" accept=".xlsx, .xls" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />

                {/* Upload Button */}
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Button variant="contained" onClick={() => fileInputRef.current.click()} disabled={loading}> Choose Excel File  </Button>

                    {selectedFile && (<Typography variant="body2" noWrap>  {selectedFile.name}  </Typography>)}
                </Stack>

                {/* Custom Progress Box */}
                {loading && (
                    <Box sx={{ width: "100%", mb: 2 }}>
                        <Box sx={{ width: "90%", height: 20, border: "1px solid", borderColor: darkMode ? "#ffffff99" : "#00000033", borderRadius: 2, overflow: "hidden", backgroundColor: "#fff", position: "relative", }}>
                            <Box sx={{ height: "100%", width: `${progress}%`, backgroundColor: darkMode ? "#5c68d1" : "#3f51b5", transition: "width 0.3s ease", }} />
                        </Box>
                        <Typography variant="caption" sx={{ mt: 1 }}> Loading file... {Math.floor(progress)}%  </Typography>
                    </Box>
                )}

                {/* Action Buttons */}
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" sx={{ color: "black" }} onClick={handleLoad} disabled={!selectedFile || loading}>
                        Load File
                    </Button>

                    <Button variant="outlined" sx={{ color: "black" }} onClick={handleClearAndLoad} disabled={!selectedFile || loading}>
                        Clear & Load
                    </Button>
                </Stack>

                {/* Footer */}
                <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                    <Button variant="outlined" sx={{ borderColor: "#dd0000ff", color: "#dd0000ff" }} fullWidth onClick={handleCloseDrawer}>
                        Close
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
}
