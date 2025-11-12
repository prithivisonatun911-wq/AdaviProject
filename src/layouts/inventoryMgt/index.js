import React from 'react';
import Footer from "examples/Footer";
import ArgonBox from "components/ArgonBox";
import { useArgonController } from "context";
import UsageLogs from "layouts/inventoryMgt/subUI/UsageLogs";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ProductList from "layouts/inventoryMgt/subUI/productList";
import PurchaseOrders from "layouts/inventoryMgt/subUI/PurchaseOrders";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ThresholdAlerts from "layouts/inventoryMgt/subUI/ThresholdAlerts";
import ExpiryManagement from "layouts/inventoryMgt/subUI/ExpiryManagement";
import StockLevelsByUnit from "layouts/inventoryMgt/subUI/stockLevelsByUnit";
import ProductTransactions from "layouts/inventoryMgt/subUI/productTransactions";
import { Card, CardContent, Typography, Tabs, Tab, Box, Divider } from '@mui/material';

const InventoryMgt = () => {
  const [controller] = useArgonController();
  const { darkMode } = controller;
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  var tab_listName =
    [
      'Product List',
      'Stock Levels by Unit',
      'Transactions (IN/OUT)',
      'Usage Logs',
      'Purchase Orders',
      'Threshold Alerts',
      'Expiry Management',
    ]

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>

        <Card sx={{ p: 2, backgroundColor: darkMode ? '#3540677a' : "#9f9f9f97" }}>
          <CardContent width={"100%"} height={"100%"}>
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
            {tab === 0 && <ProductList />}

            {/* Tab 2: Stock Levels by Unit */}
            {tab === 1 && <StockLevelsByUnit />}

            {/* Tab 3: Transactions (IN/OUT) */}
            {tab === 2 && <ProductTransactions />}

            {/* Tab 4: Usage Logs */}
            {tab === 3 && <UsageLogs />}

            {/* Tab 5: Purchase Orders */}
            {tab === 4 && <PurchaseOrders />}

            {/* Tab 6: Threshold Alerts */}
            {tab === 5 && <ThresholdAlerts />}

            {/* Tab 7: Expiry Management */}
            {tab === 6 && <ExpiryManagement />}

          </CardContent>
        </Card>


      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
};

export default InventoryMgt;