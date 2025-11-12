import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  Box,
  Divider,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, 
} from '@mui/material';

import { Card, CardContent } from '@mui/material';

import {
  Spa as SpaIcon,
  Hotel as HotelIcon,
  Restaurant as RestaurantIcon,
  Event as EventIcon,
  LocalGroceryStore as LocalGroceryStoreIcon,
  Factory as FactoryIcon,
  LocalHospital as LocalHospitalIcon,
  SolarPower as SolarPowerIcon,
  LocationOn as LocationOnIcon,
  Store as StoreIcon,
  Phone as PhoneIcon,
  People as PeopleIcon,
  Home as HomeIcon,
} from '@mui/icons-material';

import { useArgonController } from 'context';

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ArgonBox from "components/ArgonBox";
import Footer from "examples/Footer";

const assets = [
  {
    id: '1',
    sectorName: 'Agriculture (Farming)',
    icon: SpaIcon,
    color: '#4caf50',
    locations: [
      {
        BusinessName: 'Location A hydroponic',
        staff: 8,
        phone: '+230 1234 5678',
        address: '123 Hydroponic Road, Bambous, Mauritius',
        items: ['2 arpents Tomato ', '0.5 arpents Cherry Tomato ', '0.5 arpents (Basil, Mint, Coriander)', '0.5 arpents  Spinach', '0.25 arpents Beetroot']
      },
      {
        BusinessName: 'Location B',
        staff: 8,
        phone: '+230 8765 4321',
        address: '45 Greenfield Street, Quatre Bornes, Mauritius',
        items: ['1 arpents Chill', '1 arpents Bell Pepper', '1 arpent Cucumber', '1 arpent Strawberry'],
      },
    ],
  },
  {
    id: '2',
    sectorName: 'Hospitality (Hotel)',
    icon: HotelIcon,
    color: '#3f51b5',
    locations: [
      {
        BusinessName: 'StartLight Resort',
        staff: 40,
        phone: '+230 2345 6789',
        address: '1 Beachfront Avenue, Grand Baie, Mauritius',
        items: ['35 rooms Resort'],
      },
      {
        BusinessName: 'Villa 1',
        staff: 35,
        phone: '+230 9876 5432',
        address: '22 Highland Road, Belle Mare, Mauritius',
        items: ['4 Rooms Villa'],
      },
      {
        BusinessName: 'Villa 2',
        staff: 35,
        phone: '+230 9876 5432',
        address: '22 Highland Road, Flic En FLAC, Mauritius',
        items: ['4 Rooms Villa'],
      },
    ],
  },
  {
    id: '3',
    sectorName: 'Food & Beverage',
    icon: RestaurantIcon,
    color: '#ff9800',
    locations: [
      {
        BusinessName: 'Resort Kitchen',
        staff: 20,
        phone: '+230 1111 2222',
        address: 'Inside Resort A, Grand Baie, Mauritius',
        items: ['Restaurants Resorts open to non-tourist staf'],
      },
      {
        BusinessName: 'Beach Forest Kitchen',
        staff: 20,
        phone: '+230 1111 2222',
        address: 'Inside Resort A, Grand Baie, Mauritius',
        items: ['Close to villa'],
      },
      {
        BusinessName: 'Café Forest',
        staff: 15,
        phone: '+230 3333 4444',
        address: '15 Market Street, Port Louis, Mauritius',
        items: ['Café Bliss'],
      },
      {
        BusinessName: 'Café Forest',
        staff: 15,
        phone: '+230 3333 4444',
        address: '15 Market Street,Ebern, Mauritius',
        items: ['Café Bliss'],
      },
      {
        BusinessName: 'Café Forest',
        staff: 15,
        phone: '+230 3333 4444',
        address: '15 Market Street,Flacq Mauritius',
        items: ['Café Bliss'],
      },
    ],
  },
  {
    id: '4',
    sectorName: 'Event & Wedding Hall',
    icon: EventIcon,
    color: '#9c27b0',
    locations: [
      {
        BusinessName: 'Riverside Hall',
        staff: 10,
        phone: '+230 5555 6666',
        address: 'Riverside Hall Road, Vacoas, Mauritius',
        items: ['Hall for 200 people'],
      },
      {
        BusinessName: 'Beach Hall',
        staff: 10,
        phone: '+230 5555 6666',
        address: 'Riverside Hall Road, Vacoas, Mauritius',
        items: ['Hall for 200 people'],
      },
    ],
  },
  {
    id: '5',
    sectorName: 'Retail',
    icon: LocalGroceryStoreIcon,
    color: '#795548',
    locations: [
      {
        BusinessName: 'ADG Market',
        staff: 12,
        phone: '+230 7777 8888',
        address: '10 Central Avenue, Port Louis, Mauritius',
        items: ['Supermarket A'],
      },
      {
        BusinessName: 'ADG Market',
        staff: 9,
        phone: '+230 9999 0000',
        address: '55 East Road, Flacq, Mauritius',
        items: ['Supermarket B'],
      },
    ],
  },
  {
    id: '6',
    sectorName: 'Manufacturing',
    icon: FactoryIcon,
    color: '#607d8b',
    locations: [
      {
        BusinessName: 'Agro Industrial Zone',
        staff: 25,
        phone: '+230 1212 3434',
        address: '5 Industrial Park, Phoenix, Mauritius',
        items: ['Tomato Processing Unit', 'Canning Line'],
      },
    ],
  },
  {
    id: '7',
    sectorName: 'Healthcare',
    icon: LocalHospitalIcon,
    color: '#e91e63',
    locations: [
      {
        BusinessName: 'Downtown',
        staff: 18,
        phone: '+230 5656 7878',
        address: '9 Medical Street, Port Louis, Mauritius',
        items: ['Pharmacy 1', 'Clinic A'],
      },
      {
        BusinessName: 'Uptown',
        staff: 10,
        phone: '+230 4343 2121',
        address: '33 Uptown Avenue, Rose Hill, Mauritius',
        items: ['Pharmacy 2'],
      },
    ],
  },
  {
    id: '8',
    sectorName: 'Energy',
    icon: SolarPowerIcon,
    color: '#fbc02d',
    locations: [
      {
        BusinessName: 'All Buildings',
        staff: 5,
        phone: '+230 2424 6767',
        address: 'Head Office, Mauritius',
        items: ['Solar Panels Installed'],
      },
    ],
  },
];

const AssetMgt = () => {
  const theme = useTheme();
  const [controller] = useArgonController();
  const { darkMode } = controller;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>

        <Card sx={{ p: 4, backgroundColor: darkMode ? '#3540677a' : "#9f9f9f97" }} width={"100%"} height={"100%"}>
          <Typography variant="h6" gutterBottom pb={1} sx={{ color: darkMode ? '#ffffff' : '#344767' }}  >
            Asset Overview by Location
          </Typography>

          <Grid container spacing={3}>
            {assets.map((asset) => {
              const Icon = asset.icon;
              return (
                <Grid item xs={12} md={6} key={asset.id}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 2,
                      borderRadius: '25px',
                      borderLeft: `6px solid ${asset.color}`,
                      backgroundColor: darkMode ? '#111c44' : '#fafafa',
                    }}
                  >
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                      <Avatar sx={{ bgcolor: asset.color }}>
                        <Icon />
                      </Avatar>
                      <Typography
                        variant="h6"
                        sx={{ color: darkMode ? '#ffffff' : '#344767' }}
                      >
                        {asset.sectorName}
                      </Typography>
                    </Box>

                    <Divider sx={{ mb: 2 }} />

                    {asset.locations.map((location, index) => (
                      <Paper
                        key={index}
                        elevation={1}
                        sx={{
                          p: 2,
                          mb: 3,
                          borderRadius: '15px',
                          backgroundColor: darkMode ? '#2a138123' : '#babcc138',
                        }}
                      >
                        {/* Business Name */}
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          sx={{ mb: 1, color: darkMode ? '#bbdefb' : '#0d47a1' }}
                        >
                          {location.BusinessName}
                        </Typography>

                        {/* Staff */}
                        <Box display="flex" alignItems="center" mb={0.8}>
                          <PeopleIcon fontSize="small" sx={{ mr: 1, color: asset.color }} />
                          <Typography variant="body2" sx={{ color: darkMode ? '#e3f2fd' : '#344767' }}>
                            Staff: {location.staff}
                          </Typography>
                        </Box>

                        {/* Phone */}
                        <Box display="flex" alignItems="center" mb={0.8}>
                          <PhoneIcon fontSize="small" sx={{ mr: 1, color: asset.color }} />
                          <Typography variant="body2" sx={{ color: darkMode ? '#e3f2fd' : '#344767' }}>
                            {location.phone}
                          </Typography>
                        </Box>

                        {/* Address */}
                        <Box display="flex" alignItems="center" mb={1}>
                          <HomeIcon fontSize="small" sx={{ mr: 1, color: asset.color }} />
                          <Typography variant="body2" sx={{ color: darkMode ? '#e3f2fd' : '#344767' }}>
                            {location.address}
                          </Typography>
                        </Box>

                        {/* Items */}
                        <List dense disablePadding sx={{ pl: 2 }}>
                          {location.items.map((item, idx) => (
                            <ListItem key={idx} sx={{ pl: 0 }}>
                              <ListItemIcon sx={{ minWidth: 30 }}>
                                <StoreIcon fontSize="small" sx={{ color: asset.color }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={item}
                                primaryTypographyProps={{
                                  variant: 'body2',
                                  sx: { color: darkMode ? '#e3f2fd' : '#344767' },
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Paper>
                    ))}
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Card>

      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
};

export default AssetMgt;
