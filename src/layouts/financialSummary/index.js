import Card from "@mui/material/Card";
import { useArgonController } from "context";
import React, { useState, useEffect } from 'react';
import PieChart from "examples/Charts/PieChart/index";
import { Grid, Box, Typography } from '@mui/material'; 
import { FormControl, Select, MenuItem } from '@mui/material';
import SummaryCard from '../financialSummary/card/SummaryCard';
import gradientLineChartData from "layouts/chartData/gradientLineChartData";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

import cashFlowData from '../financialSummary/card/cashFlowData';
import CashFlowTable from '../financialSummary/card/CashFlowTable';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow"; 
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import verticalBarChartData from "layouts/chartData/verticalBarChartData";

const periods = ['Current Month', 'Biannually', 'Yearly', 'All Time'];
const companies = ['All Companies', 'Company A', 'Company B', 'Company C'];

const FinancialSummary = () => {

  const [controller] = useArgonController();
  const { darkMode } = controller;
  const [company, setCompany] = useState(companies[0]);
  const [period, setPeriod] = useState(periods[0]);

  const [summary, setSummary] = useState({ income: 50, expenditure: 0, profitLoss: 0, incomeChange: 0, expenditureChange: 0, profitLossChange: 0, });


  const data = [
    { category: 'test', income: 950, expenditure: 500 }
  ]

  return (

    <Box>

      {/* Summary Cards */}
      <Grid container spacing={3} mb={4}>

        <Grid item xs={12} md={4}>
          <SummaryCard
            title="Income"
            value={summary.income}
            changePercent={summary.incomeChange}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <SummaryCard title="Expenditure" value={summary.expenditure} changePercent={summary.expenditureChange} />
        </Grid>

        <Grid item xs={12} md={4}>
          <SummaryCard
            title="Profit / Loss"
            value={summary.profitLoss}
            changePercent={summary.profitLossChange}
          />
        </Grid>

      </Grid>

      {/* Line Chart */}
      <Grid container spacing={2}>

        <Grid item xs={12} md={8}>
          <Card sx={{ height: 480, p: 2, mb: 2 }}>

            <Box display="flex" justifyContent="space-between" mb={4}>
              <FormControl variant="standard">

                <Select labelId="company-label" value={company} onChange={(e) => onChange(e.target.value)} disableUnderline
                  sx={{
                    fontSize: "0.875rem", border: "1px solid #d1d5db", borderRadius: "6px", color: !darkMode ? "#111c44 !important" : "#ffffff !important",
                    backgroundColor: "#fff", appearance: "none", '& .MuiSelect-icon': { color: !darkMode ? "#111c44 !important" : "#ffffff !important", },
                  }}>
                  {companies.map((c) => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                  ))}
                </Select>

              </FormControl>

              <FormControl variant="standard">

                <Select labelId="company-label" value={period} onChange={(e) => onChange(e.target.value)} disableUnderline
                  sx={{
                    fontSize: "0.875rem", border: "1px solid #d1d5db", borderRadius: "6px", color: !darkMode ? "#111c44 !important" : "#ffffff !important",
                    backgroundColor: "#fff", appearance: "none", '& .MuiSelect-icon': { color: !darkMode ? "#111c44 !important" : "#ffffff !important", },
                  }}>
                  {periods.map((c) => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                  ))}
                </Select>

              </FormControl>

            </Box>

            <Box mb={4}>
              <Typography variant="h6" gutterBottom sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}> Income & Expenditure Profile  </Typography>
              <GradientLineChart chart={gradientLineChartData} />
            </Box>

          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: 480, display: 'flex', flexDirection: 'column', p: 2, mb: 2 }}>
            <TableContainer sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", height: '100%', width: '100%', overflowY: 'auto', }}>
              <Table stickyHeader size="small" sx={{ tableLayout: 'fixed' }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>Company</TableCell>
                    <TableCell sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>Income</TableCell>
                    <TableCell sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>Expenditure</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { company: "Hydro", income: 500, expenditure: 300 },
                    { company: "Solar", income: 800, expenditure: 450 },
                    { company: "Wind", income: 700, expenditure: 400 },
                  ].map((row, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>{row.company}</TableCell>
                      <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>${row.income}</TableCell>
                      <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>${row.expenditure}</TableCell>
                    </TableRow>
                  ))}



                  <TableRow >
                    <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}> </TableCell>
                    <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>$2000</TableCell>
                    <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>$2000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>

      </Grid>

      {/* Income Pie Charts */}
      <Grid container spacing={2}>

        <Grid item xs={12} md={3}>
          <Card sx={{ height: 450, p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}> Income Summary  </Typography>

            <TableContainer sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", height: '90%', width: '100%', overflowY: 'auto', borderColor: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>
              <Table stickyHeader size="small" sx={{ tableLayout: 'fixed' }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>Company</TableCell>
                    <TableCell sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { company: "Hydro", income: 500, expenditure: 300 },
                    { company: "Solar", income: 800, expenditure: 450 },
                    { company: "Wind", income: 700, expenditure: 400 },
                  ].map((row, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>{row.company}</TableCell>
                      <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>${row.income}</TableCell>
                    </TableRow>
                  ))}

                  <TableRow >
                    <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}> </TableCell>
                    <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>$2000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

          </Card>
        </Grid>

        <Grid item xs={12} md={9}>

          <Card sx={{ height: 450, p: 4, mb: 2 }}>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>

                <Typography variant="h6" gutterBottom sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}> Income Summary Breakdown  </Typography>
                <VerticalBarChart chart={verticalBarChartData} />

              </Grid>

              <Grid item xs={12} md={6}>
                <TableContainer sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", height: '90%', width: '100%', overflowY: 'auto', borderColor: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>
                  <Table stickyHeader size="small" sx={{ tableLayout: 'fixed' }}>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>Income</TableCell>
                        <TableCell sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>Ammount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        { company: "Hydro", income: 500, expenditure: 300 },
                        { company: "Solar", income: 800, expenditure: 450 },
                        { company: "Wind", income: 700, expenditure: 400 },
                      ].map((row, index) => (
                        <TableRow key={index}>
                          <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>{row.company}</TableCell>
                          <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>${row.income}</TableCell>
                        </TableRow>
                      ))}

                      <TableRow >
                        <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}> </TableCell>
                        <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>$2000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

            </Grid>
          </Card>
        </Grid>
      </Grid>

      {/* Expenditure  Pie Charts */}
      <Grid container spacing={2}>

        <Grid item xs={12} md={9}>

          <Card sx={{ height: 450, p: 4, mb: 2 }}>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>

                <Typography variant="h6" gutterBottom sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}> Expenditure Summary Breakdown  </Typography>
                <VerticalBarChart chart={verticalBarChartData} />

              </Grid>

              <Grid item xs={12} md={6}>
                <TableContainer sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", height: '90%', width: '100%', overflowY: 'auto', borderColor: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>
                  <Table stickyHeader size="small" sx={{ tableLayout: 'fixed' }}>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>Expenditure</TableCell>
                        <TableCell sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>Ammount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        { company: "Hydro", income: 500, expenditure: 300 },
                        { company: "Solar", income: 800, expenditure: 450 },
                        { company: "Wind", income: 700, expenditure: 400 },
                      ].map((row, index) => (
                        <TableRow key={index}>
                          <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>{row.company}</TableCell>
                          <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>${row.income}</TableCell>
                        </TableRow>
                      ))}

                      <TableRow >
                        <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}> </TableCell>
                        <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>$2000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ height: 450, p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}> Expenditure Summary  </Typography>

            <Table stickyHeader size="small" sx={{ tableLayout: 'fixed' }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>Company</TableCell>
                  <TableCell sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { company: "Hydro", income: 500, expenditure: 300 },
                  { company: "Solar", income: 800, expenditure: 450 },
                  { company: "Wind", income: 700, expenditure: 400 },
                ].map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>{row.company}</TableCell>
                    <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>${row.income}</TableCell>
                  </TableRow>
                ))}

                <TableRow >
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}> </TableCell>
                  <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>$2000</TableCell>
                </TableRow>
              </TableBody>
            </Table>


          </Card>
        </Grid>

      </Grid>

      {/* Cash Flow Statement */}
      <Card sx={{ p: 4, mb: 2 }}>
        <CashFlowTable data={cashFlowData} />
      </Card>

    </Box>

  );
};

export default FinancialSummary;