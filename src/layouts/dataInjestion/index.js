import Card from "@mui/material/Card";
import { useState } from "react";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "@mui/material/Table";
import { Grid, Button, CardContent, Typography, Stack, Checkbox } from '@mui/material';
import SimplePagination from "../../components/ArgonPagination/StyledPagination";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useArgonController } from "context";
import ArgonTypography from "components/ArgonTypography";


import LoadData from "./subUi/loadData";
import ValidateData from "./subUi/validateData"
import LogCommit from "./subUi/logCommit"

function DataInjestion() {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const fullData = [
    { company: "Hydro", income: 500, expenditure: 300 },
    { company: "Solar", income: 800, expenditure: 450 },
    { company: "Wind", income: 700, expenditure: 400 },
    { company: "Nuclear", income: 900, expenditure: 600 },
    { company: "GeoThermal", income: 450, expenditure: 200 },
    { company: "BioEnergy", income: 620, expenditure: 330 },
    { company: "Tidal", income: 390, expenditure: 150 },
    { company: "Gas", income: 750, expenditure: 500 },
    { company: "Coal", income: 820, expenditure: 600 },
    { company: "Fusion", income: 1000, expenditure: 700 },
  ];

  const paginatedData = fullData.slice((page - 1) * pageSize, page * pageSize);
  const totalItems = fullData.length;

  const onPageChange = (newPage) => {
    setPage(newPage);
  };

  const onPageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  let [openUI_num, setOpenUI_numderBy] = useState(0);
  const handleCloseDrawer = (e) => {
    setOpenUI_numderBy(0)
    console.log(e)
  }

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <ArgonBox py={3}>


          <Card sx={{ p: 2, backgroundColor: darkMode ? '#3540677a' : "#9f9f9f97" }}>

            <CardContent>
              <Typography variant="h4" gutterBottom color={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Data Injestion</Typography>

              <Grid item xs={12}>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                  <Button variant="contained" color="primary" size="small" onClick={() => setOpenUI_numderBy(1)}>Load Data</Button>
                  <Button variant="contained" color="primary" size="small" onClick={() => setOpenUI_numderBy(2)}>Validate Data</Button>
                  <Button variant="contained" color="primary" size="small" onClick={() => setOpenUI_numderBy(3)}>Log</Button>
                </Stack>
              </Grid>

              <Card sx={{ display: 'flex', flexDirection: 'column', p: 2, mb: 2, mt: 4 }}>

                <Typography variant="h4" gutterBottom color={{ color: darkMode ? "#ffffff !important" : "#344767 !important" }}>Data Injested</Typography>

                <TableContainer sx={{ backgroundColor: darkMode ? "#111c44 !important" : "#ffffff !important", height: '100%', width: '100%', overflowY: 'auto', }}>
                  <Table stickyHeader size="small" sx={{ tableLayout: 'fixed' }}>
                    <TableHead sx={{ width: '100%', display: "contents" }}>
                      <TableRow>
                        {fullData.length > 0 &&
                          Object.keys(fullData[0]).map((key) => (
                            <TableCell key={key} sx={{ fontWeight: "bold", color: darkMode ? "#ffffff" : "#111c44" }}> {key.charAt(0).toUpperCase() + key.slice(1)}  </TableCell>
                          ))}
                        <TableCell sx={{ color: darkMode ? '#ffffff' : '#344767' }}>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {fullData.map((row, index) => (
                        <TableRow key={index}>
                          {Object.keys(row).map((key) => (
                            <TableCell key={key} sx={{ color: darkMode ? "#ffffff" : "#111c44" }}> {typeof row[key] === "number" ? `$${row[key]}` : row[key]} </TableCell>
                          ))}

                          <TableCell sx={{ width: 180 }}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                              <ArgonTypography variant="button" fontWeight="regular" sx={{ cursor: "pointer", userSelect: "none" }}>  Invalid  </ArgonTypography>
                              <Checkbox defaultChecked />
                              <Button variant="contained" sx={{ backgroundColor: "red", color: "white !important" }} size="small"> Delete  </Button>
                            </Stack>
                          </TableCell>



                        </TableRow>
                      ))}

                    </TableBody>
                  </Table>
                </TableContainer>

                <ArgonBox display="flex" justifyContent="center" mt={4} mb={4}>
                  <SimplePagination totalItems={totalItems} currentPage={page} itemsPerPage={pageSize} onPageChange={onPageChange} onPageSizeChange={onPageSizeChange} />
                </ArgonBox>
              </Card>

            </CardContent>

          </Card>

        </ArgonBox>
        <Footer />
      </DashboardLayout>


      {
        (() => {
          if (openUI_num == 1) {
            return <LoadData openUI={openUI_num == 1 ? true : false} handleCloseDrawer={handleCloseDrawer} />;
          }

          if (openUI_num == 2) {
            return <ValidateData openUI={openUI_num == 2 ? true : false} handleCloseDrawer={handleCloseDrawer} />;
          }
          if (openUI_num == 3) {
            return <LogCommit openUI={openUI_num == 3 ? true : false} handleCloseDrawer={handleCloseDrawer} />;
          }



        })()
      }
    </>
  );
}

export default DataInjestion;