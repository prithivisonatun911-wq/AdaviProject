import React, { useMemo, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Doughnut } from "react-chartjs-2";

import SectionControls from "dataMapping/sectionControls";

import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useArgonController } from "context";

function FinancialSummary() {

  const [controller] = useArgonController();
  const { darkMode } = controller;

  const allMoneyInData = [
    { category: "Product Sales", amount: 12000, company: "Company A", time: "January" },
    { category: "Service Income", amount: 5000, company: "Company A", time: "January" },
    { category: "Investments", amount: 3000, company: "Company A", time: "January" },
    { category: "Product Sales", amount: 8000, company: "Company B", time: "January" },
    { category: "Service Income", amount: 6000, company: "Company B", time: "January" },
    { category: "Investments", amount: 2000, company: "Company B", time: "January" },
    { category: "Product Sales", amount: 11000, company: "Company A", time: "February" },
    { category: "Service Income", amount: 4500, company: "Company A", time: "February" },
    { category: "Investments", amount: 3500, company: "Company A", time: "February" },
    { category: "Product Sales", amount: 7000, company: "Company B", time: "February" },
    { category: "Service Income", amount: 6500, company: "Company B", time: "February" },
    { category: "Investments", amount: 2500, company: "Company B", time: "February" },
  ];

  const allMoneyOutData = [
    { category: "Staff Pay", amount: 4000, company: "Company A", time: "January" },
    { category: "Rent", amount: 2000, company: "Company A", time: "January" },
    { category: "Utilities", amount: 1000, company: "Company A", time: "January" },
    { category: "Supplies", amount: 1500, company: "Company A", time: "January" },
    { category: "Staff Pay", amount: 3000, company: "Company B", time: "January" },
    { category: "Rent", amount: 2500, company: "Company B", time: "January" },
    { category: "Utilities", amount: 1200, company: "Company B", time: "January" },
    { category: "Supplies", amount: 1800, company: "Company B", time: "January" },
    { category: "Staff Pay", amount: 4200, company: "Company A", time: "February" },
    { category: "Rent", amount: 2100, company: "Company A", time: "February" },
    { category: "Utilities", amount: 1100, company: "Company A", time: "February" },
    { category: "Supplies", amount: 1600, company: "Company A", time: "February" },
    { category: "Staff Pay", amount: 3100, company: "Company B", time: "February" },
    { category: "Rent", amount: 2600, company: "Company B", time: "February" },
    { category: "Utilities", amount: 1300, company: "Company B", time: "February" },
    { category: "Supplies", amount: 1900, company: "Company B", time: "February" },
  ];

  const companies = ["Company A", "Company B"];
  const times = ["January", "February"];

  const [selectedCompanyIn, setSelectedCompanyIn] = useState("All");
  const [selectedTimeIn, setSelectedTimeIn] = useState("All");

  const [selectedCompanyOut, setSelectedCompanyOut] = useState("All");
  const [selectedTimeOut, setSelectedTimeOut] = useState("All");

  const groupByCategory = (data) => {
    const grouped = data.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    }, {});
    return Object.entries(grouped).map(([category, amount]) => ({ category, amount }));
  };

  const moneyInData = useMemo(() => {
    let filtered = allMoneyInData;
    if (selectedCompanyIn !== "All") filtered = filtered.filter((item) => item.company === selectedCompanyIn);
    if (selectedTimeIn !== "All") filtered = filtered.filter((item) => item.time === selectedTimeIn);
    return groupByCategory(filtered);
  }, [selectedCompanyIn, selectedTimeIn]);

  const moneyOutData = useMemo(() => {
    let filtered = allMoneyOutData;
    if (selectedCompanyOut !== "All") filtered = filtered.filter((item) => item.company === selectedCompanyOut);
    if (selectedTimeOut !== "All") filtered = filtered.filter((item) => item.time === selectedTimeOut);
    return groupByCategory(filtered);
  }, [selectedCompanyOut, selectedTimeOut]);

  const totalIn = moneyInData.reduce((sum, item) => sum + item.amount, 0);
  const totalOut = moneyOutData.reduce((sum, item) => sum + item.amount, 0);

  const moneyInPie = useMemo(() => ({
    labels: moneyInData.map((d) => d.category),
    datasets: [{
      data: moneyInData.map((d) => d.amount),
      backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#66bb6a", "#42a5f5", "#ffb74d"],
    }]
  }), [moneyInData]);

  const moneyOutPie = useMemo(() => ({
    labels: moneyOutData.map((d) => d.category),
    datasets: [{
      data: moneyOutData.map((d) => d.amount),
      backgroundColor: ["#f44336", "#9c27b0", "#03a9f4", "#ffc107", "#ef5350", "#ab47bc", "#29b6f6", "#ffca28"],
    }]
  }), [moneyOutData]);

  const renderTable = (data, ariaLabel) => (
    <TableContainer component={Paper} sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", height: 280 }}>
      <Table stickyHeader size="small" aria-label={ariaLabel}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", backgroundColor: "#1976d2", color: darkMode ? "#111c44 !important" : "#ffffff !important" }}>Category</TableCell>
            <TableCell sx={{ fontWeight: "bold", backgroundColor: "#1976d2", color: darkMode ? "#111c44 !important" : "#ffffff !important", textAlign: "right" }}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>{row.category}</TableCell>
              <TableCell sx={{ textAlign: "right", color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>${row.amount.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3} px={3}>
        <ArgonBox mb={4}>
          <ArgonTypography variant="h5" fontWeight="bold" sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important" }}>Financial Flows</ArgonTypography>
        </ArgonBox>

        {/* Money In Section */}
        <Card sx={{ height: 450, p: 4, mb: 2 }}>

          <ArgonTypography variant="h5" fontWeight="bold" sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 3 }}>Money In</ArgonTypography>
          <ArgonBox mb={6}>
            <SectionControls company={selectedCompanyIn} setCompany={setSelectedCompanyIn} time={selectedTimeIn} setTime={setSelectedTimeIn} total={totalIn} labelCompany="Company (In)" labelTime="Month (In)" companyOptions={companies} timeOptions={times} />

            <Grid container spacing={3}>
              <Grid item xs={12} md={5}>
                <Card sx={{ height: 320 }}>
                  <ArgonBox sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", p: 3 }}>{renderTable(moneyInData, "money-in-table")}</ArgonBox>
                </Card>
              </Grid>

              <Grid item xs={12} md={7}>
                <Card sx={{ height: 320 }}>
                  <ArgonBox p={3} display="flex" justifyContent="center" alignItems="center" height="100%">
                    <Doughnut data={moneyInPie} options={{ maintainAspectRatio: false }} />
                  </ArgonBox>
                </Card>
              </Grid>

            </Grid>
          </ArgonBox>
          
        </Card>

        {/* Money Out Section */}
        <Card sx={{ height: 450, p: 4, mt: 2 }}>

          <ArgonTypography variant="h5" fontWeight="bold" sx={{ color: !darkMode ? "#111c44 !important" : "#ffffff !important", mb: 3 }}>Money Out</ArgonTypography>
          <ArgonBox mb={6}>
            <SectionControls
              company={selectedCompanyOut}
              setCompany={setSelectedCompanyOut}
              time={selectedTimeOut}
              setTime={setSelectedTimeOut}
              total={totalOut}
              labelCompany="Company (Out)"
              labelTime="Month (Out)"
              companyOptions={companies}
              timeOptions={times}
            />

            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <Card sx={{ height: 320 }}>
                  <ArgonBox p={3} display="flex" justifyContent="center" alignItems="center" height="100%">
                    <Doughnut data={moneyOutPie} options={{ maintainAspectRatio: false }} />
                  </ArgonBox>
                </Card>
              </Grid>
              <Grid item xs={12} md={5}>
                <Card sx={{ height: 320 }}>
                  <ArgonBox p={3}>{renderTable(moneyOutData, "money-out-table")}</ArgonBox>
                </Card>
              </Grid>
            </Grid>
          </ArgonBox>

        </Card>

      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default FinancialSummary;


