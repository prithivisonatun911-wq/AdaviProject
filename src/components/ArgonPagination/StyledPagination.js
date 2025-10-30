import React from "react";
import PropTypes from "prop-types";

import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonPagination from "components/ArgonPagination";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

function SimplePagination({
    totalItems,
    currentPage,
    itemsPerPage,
    onPageChange,
    onPageSizeChange,
}) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const groupSize = 3;
    const pageGroupStart = Math.floor((currentPage - 1) / groupSize) * groupSize + 1;
    const pageGroupEnd = Math.min(pageGroupStart + groupSize - 1, totalPages);

    const currentGroupPages = [];
    for (let i = pageGroupStart; i <= pageGroupEnd; i++) {
        currentGroupPages.push(i);
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageChange = (page) => {
        onPageChange(page);
    };

    const handlePageSizeChange = (e) => {
        const newSize = parseInt(e.target.value, 10);
        onPageSizeChange(newSize);
        onPageChange(1);
    };

    if (totalPages === 0) return null;

    return (
        <ArgonBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={3}
            flexWrap="wrap"
            gap={2}
        >
            {/* Previous text button */}
            <ArgonTypography
                component="button"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                sx={{
                    color: currentPage === 1 ? "#A0AEC0" : "#2096F3",
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                    fontWeight: "bold",
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontSize: "1rem",
                    userSelect: "none",
                    textDecoration: "none",
                }}
            >
                Previous
            </ArgonTypography>

            {/* Page Numbers */}
            <ArgonPagination variant="gradient" color="info" size="medium" sx={{ flexWrap: "nowrap" }}>
                {currentGroupPages.map((page) => (
                    <ArgonPagination
                        key={page}
                        item
                        active={page === currentPage}
                        onClick={() => handlePageChange(page)}
                        sx={{
                            cursor: "pointer",
                            borderRadius: "12px",
                            padding: "6px 14px",
                            minWidth: "40px",
                            marginRight: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {page}
                    </ArgonPagination>
                ))}

                {/* Ellipsis if more pages exist beyond current group */}
                {pageGroupEnd < totalPages && (
                    <ArgonTypography
                        variant="button"
                        fontWeight="bold"
                        color="text"
                        sx={{ mx: 1, userSelect: "none" }}
                    >
                        ...
                    </ArgonTypography>
                )}
            </ArgonPagination>

            <ArgonTypography component="button" onClick={handleNextPage} disabled={currentPage === totalPages}
                sx={{
                    color: currentPage === totalPages ? "#A0AEC0" : "#2096F3",
                    cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                    fontWeight: "bold",
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontSize: "1rem",
                    userSelect: "none",
                    textDecoration: "none",
                }}
            >
                Next
            </ArgonTypography>

            <ArgonTypography variant="button" fontWeight="medium" fontSize="0.9rem" color="text" sx={{ whiteSpace: "nowrap", mx: 1 }}>
                Page {currentPage} of {totalPages}
            </ArgonTypography>

            {/* Page size selector */}
            <FormControl variant="standard" >
                <InputLabel id="items-per-page-label" sx={{ fontSize: "0.75rem", color: "#6b7280", marginBottom: "4px", userSelect: "none", }}>Items per page</InputLabel>
                <Select label="items-per-page-label" value={itemsPerPage} onChange={handlePageSizeChange} size="small" disableUnderline>
                    {[5, 10, 20, 50, 100].map((size) => (
                        <MenuItem key={size} value={size}>
                            {size}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </ArgonBox>
    );
}

SimplePagination.propTypes = {
    totalItems: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onPageSizeChange: PropTypes.func.isRequired,
};

export default SimplePagination;
