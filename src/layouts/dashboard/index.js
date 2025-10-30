// React
import React, { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Custom components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Table from "examples/Tables/Table";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Data
import {
  sectorYearlyChartData,
  sectorProfitsLastMonth,
  thisMonthStats,
} from "layouts/dashboard/data/sectorDashboardData";

function Default() {
  const availableYears = Object.keys(sectorYearlyChartData);
  const [selectedYear, setSelectedYear] = useState(availableYears[0]); // ✅ Safe default


  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Table setup
  const profitTableColumns = [
    { name: "sector", align: "left" },
    { name: "profit", align: "center" },
  ];

  const profitTableRows = sectorProfitsLastMonth.map((item) => ({
    sector: item.sector,
    profit: item.profit,
  }));

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>

        {/* 💳 Monthly Statistics */}
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={4}>
            <DetailedStatisticsCard
              title="This Month's Earning"
              count={thisMonthStats.earnings}
              icon={{ color: "success", component: <i className="ni ni-chart-bar-32" /> }}
              percentage={{ color: "success", count: "+12%", text: "vs last month" }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DetailedStatisticsCard
              title="This Month's Expenditure"
              count={thisMonthStats.expenditure}
              icon={{ color: "error", component: <i className="ni ni-credit-card" /> }}
              percentage={{ color: "error", count: "+8%", text: "vs last month" }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DetailedStatisticsCard
              title="Asset Purchases"
              count={thisMonthStats.assetPurchases}
              icon={{ color: "info", component: <i className="ni ni-building" /> }}
              percentage={{ color: "warning", count: "+5%", text: "equipment & property" }}
            />
          </Grid>
        </Grid>

        {/* 🔁 Line Chart with Year Selector - dropdown ABOVE chart */}
        <ArgonBox
          p={3}
          mb={3}
          borderRadius="lg"
          boxShadow="md"
          bgcolor="background.paper"
        >
          <ArgonBox mb={2} width={{ xs: "100%", md: "200px" }}>
            <ArgonTypography variant="button" fontWeight="bold" mb={1}>
              Select Year
            </ArgonTypography>
            <Select value={selectedYear} onChange={handleYearChange} fullWidth>
              {availableYears.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </ArgonBox>

          <GradientLineChart
            title={`Sector Earnings - Yearly Overview (${selectedYear})`}
            description="Earnings trend across all sectors from Jan to Oct"
            chart={sectorYearlyChartData[selectedYear]}
          />
        </ArgonBox>




        {/* 📊 Profit Table */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ArgonBox>
              <ArgonTypography variant="h6" gutterBottom>
                Sector Profit (vs Last Month)
              </ArgonTypography>
              <Table columns={profitTableColumns} rows={profitTableRows} />
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
