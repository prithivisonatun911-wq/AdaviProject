import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@mui/material/Grid";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, } from '@mui/material';

const formatCurrency = (value) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(value);
};

import { useArgonController } from "context";

const CashFlowTable = ({ data }) => {

  const [controller] = useArgonController();
  const { darkMode } = controller;
  console.log(data)
  return (
    <Box>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}
      >
        Cash Flow Statement
      </Typography>

      <Grid container spacing={3}>
        {/* Operating Activities */}
        <Grid item xs={12} lg={4}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2} sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}><strong>Operating Activities</strong></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>Net Income</TableCell>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>{formatCurrency(data.operating.netIncome)}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>+ Depreciation & Amortization</TableCell>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>{formatCurrency(data.operating.depreciation)}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>+ Changes in Working Capital</TableCell>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>{formatCurrency(data.operating.workingCapital)}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}><strong>= Net Cash</strong></TableCell>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}><strong>{formatCurrency(data.operating.netCash)}</strong></TableCell>
                </TableRow>
                
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Investing Activities */}
        <Grid item xs={12} lg={4}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableBody>
                <TableRow sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>
                  <TableCell colSpan={2} sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}><strong>Investing Activities</strong></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>- Purchase of Equipment</TableCell>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>{formatCurrency(data.investing.purchaseEquipment)}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>+ Sale of Assets</TableCell>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>{formatCurrency(data.investing.saleAssets)}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}><strong>= Net Cash</strong></TableCell>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}><strong>{formatCurrency(data.investing.netCash)}</strong></TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Financing Activities */}
        <Grid item xs={12} lg={4}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableBody>
                <TableRow sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>
                  <TableCell colSpan={2} sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}><strong>Financing Activities</strong></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>+ New Loan Received</TableCell>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>{formatCurrency(data.financing.loanReceived)}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>- Dividend Paid</TableCell>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>{formatCurrency(data.financing.dividendPaid)}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>- Loan Repayment</TableCell>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>{formatCurrency(data.financing.loanRepayment)}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}><strong>= Net Cash</strong></TableCell>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}><strong>{formatCurrency(data.financing.netCash)}</strong></TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      {/* Summary Section */}
      <Box mt={4}>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableBody>
              
              <TableRow>
                <TableCell colSpan={2} sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}><strong>Summary</strong></TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>Net Increase in Cash</TableCell>
                <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>{formatCurrency(data.netIncreaseInCash)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>Beginning Cash Balance</TableCell>
                <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}>{formatCurrency(data.beginningCash)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}><strong>Ending Cash Balance</strong></TableCell>
                <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 2 }}><strong>{formatCurrency(data.endingCash)}</strong></TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );

};

CashFlowTable.propTypes = {
  data: PropTypes.shape({
    operating: PropTypes.shape({
      netIncome: PropTypes.number.isRequired,
      depreciation: PropTypes.number.isRequired,
      workingCapital: PropTypes.number.isRequired,
      netCash: PropTypes.number.isRequired,
    }).isRequired,
    investing: PropTypes.shape({
      purchaseEquipment: PropTypes.number.isRequired,
      saleAssets: PropTypes.number.isRequired,
      netCash: PropTypes.number.isRequired,
    }).isRequired,
    financing: PropTypes.shape({
      loanReceived: PropTypes.number.isRequired,
      dividendPaid: PropTypes.number.isRequired,
      loanRepayment: PropTypes.number.isRequired,
      netCash: PropTypes.number.isRequired,
    }).isRequired,
    netIncreaseInCash: PropTypes.number.isRequired,
    beginningCash: PropTypes.number.isRequired,
    endingCash: PropTypes.number.isRequired,
  }).isRequired,
};

export default CashFlowTable;
