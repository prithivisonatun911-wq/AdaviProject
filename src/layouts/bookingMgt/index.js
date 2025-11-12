import Footer from "examples/Footer";
import React, { useState } from 'react';
import ArgonBox from "components/ArgonBox";
import { useArgonController } from "context";
import BookingList from './subUI/BookingList';
import BookingForm from './subUI/BookingForm';
import CalendarView from './subUI/CalendarView';
import BookingAlerts from './subUI/BookingAlerts';
import BookingSummary from './subUI/BookingSummary';
import { Card, CardContent, Divider } from '@mui/material';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function BookingMgt() {
  const [controller] = useArgonController();
  const { darkMode } = controller;
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  var tab_listName =
    [
      'Booking List',
      'Calendar View',
      'Booking Form',
      'Alerts',
      'Summary',
    ]

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>

        <Card sx={{ p: 2, backgroundColor: darkMode ? '#3540677a' : "#9f9f9f97" }}>
          <CardContent>

            <Typography variant="h5" mb={2} sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Booking Management</Typography>

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
            <Box mt={3} width={"100%"} height={"100%"}>
              {tab === 0 && <BookingList />}
              {tab === 1 && <CalendarView />}
              {tab === 2 && <BookingForm />}
              {tab === 3 && <BookingAlerts />}
              {tab === 4 && <BookingSummary />}
            </Box>

          </CardContent>

        </Card>
        
      </ArgonBox>
      <Footer />
    </DashboardLayout >
  );
}

export default BookingMgt;