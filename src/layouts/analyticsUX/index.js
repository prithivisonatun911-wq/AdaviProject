import React from 'react';
import Footer from "examples/Footer";
import ArgonBox from "components/ArgonBox";
import { useArgonController } from "context";
import UsageLogs from "layouts/inventoryMgt/subUI/UsageLogs";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ProductTransactions from "layouts/inventoryMgt/subUI/productTransactions";
import { Card, CardContent, Typography, Tabs, Tab, Box, Divider } from '@mui/material';
import FinancialSummary from "layouts/financialSummary";
import HydroponicDashboard from "layouts/hydroponicDashboard";

const AnalyticsUX = () => {
  const [controller] = useArgonController();
  const { darkMode } = controller;
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  var tab_listName = ['Financial', 'Hydroponic', 'Inventory', 'Booking',]

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>

        <Card sx={{ p: 2,backgroundColor: darkMode ? '#3540677a' : "#9f9f9f97" }}>
          <CardContent>
            <Typography variant="h4" gutterBottom color={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Inventory Management</Typography>

            <Tabs value={tab} onChange={handleChange} variant="scrollable" scrollButtons="auto">
              {tab_listName.map((label, index) => (
                <Tab
                  key={index}
                  label={label}
                  sx={{
                    color: darkMode ? "#ffffff !important" : "#344767 !important",
                    '&.Mui-selected': {
                      color: "#ffffff",
                      backgroundColor: !darkMode ? "#69e81aff !important" : "#6a6a85ff",
                    },
                  }}
                />
              ))}
            </Tabs>

            <Divider />

            {/* Tab 1: Product List */}
            {tab === 0 && <FinancialSummary />}

            {/* Tab 2: Stock Levels by Unit */}
            {tab === 1 && <HydroponicDashboard />}

            {/* Tab 3: Transactions (IN/OUT) */}
            {tab === 2 && <ProductTransactions />}

            {/* Tab 4: Usage Logs */}
            {tab === 3 && <UsageLogs />}


          </CardContent>
        </Card>


      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
};

export default AnalyticsUX;