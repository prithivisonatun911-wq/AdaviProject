import Card from "@mui/material/Card";
import { useState } from "react";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useArgonController } from "context";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button, Stack } from "@mui/material";
import SimplePagination from "../../components/ArgonPagination/StyledPagination";
import team2 from "assets/images/team-2.jpg"; 
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import UserDetail from './subUi/UserDetail';
import UserPaymentDetail from './subUi/UserPaymentDetail';
const authorsData = [
  {
    staff_id: 1,
    first_name: "Emily",
    last_name: "Clark",
    name: "Emily Clark",
    date_of_birth: "1990-04-15",
    gender: "Female",
    email: "emily@creative-tim.com",
    phone_number: "+1-555-111-2222",
    position: "Designer",
    department: "Creative",
    date_hired: "2019-03-12",
    salary: 52000.00,
    address: "123 Main St, Springfield",
    emergency_contact: "John Clark, +1-555-333-4444",
    status: "full-time",
    image: team2,
  },
  {
    staff_id: 2,
    first_name: "James",
    last_name: "Smith",
    name: "James Smith",
    date_of_birth: "1988-09-22",
    gender: "Male",
    email: "james@creative-tim.com",
    phone_number: "+1-555-222-3333",
    position: "Developer",
    department: "Engineering",
    date_hired: "2020-07-05",
    salary: 65000.00,
    address: "456 Oak St, Springfield",
    emergency_contact: "Anna Smith, +1-555-444-5555",
    status: "part-time",
    image: team2,
  },
  {
    staff_id: 3,
    first_name: "Sophia",
    last_name: "Turner",
    name: "Sophia Turner",
    date_of_birth: "1985-11-30",
    gender: "Female",
    email: "sophia@creative-tim.com",
    phone_number: "+1-555-333-4444",
    position: "Product Manager",
    department: "Management",
    date_hired: "2017-11-22",
    salary: 72000.00,
    address: "789 Pine St, Springfield",
    emergency_contact: "Michael Turner, +1-555-555-6666",
    status: "full-time",
    image: team2,
  },
  {
    staff_id: 4,
    first_name: "Liam",
    last_name: "Johnson",
    name: "Liam Johnson",
    date_of_birth: "1992-06-10",
    gender: "Male",
    email: "liam@creative-tim.com",
    phone_number: "+1-555-444-5555",
    position: "QA Engineer",
    department: "Quality",
    date_hired: "2021-06-10",
    salary: 48000.00,
    address: "101 Elm St, Springfield",
    emergency_contact: "Laura Johnson, +1-555-666-7777",
    status: "intern",
    image: team2,
  },
  {
    staff_id: 5,
    first_name: "Olivia",
    last_name: "Brown",
    name: "Olivia Brown",
    date_of_birth: "1994-01-15",
    gender: "Female",
    email: "olivia@creative-tim.com",
    phone_number: "+1-555-555-6666",
    position: "Developer",
    department: "Engineering",
    date_hired: "2018-01-15",
    salary: 62000.00,
    address: "202 Maple St, Springfield",
    emergency_contact: "Kevin Brown, +1-555-777-8888",
    status: "full-time",
    image: team2,
  },
  {
    staff_id: 6,
    first_name: "Noah",
    last_name: "Davis",
    name: "Noah Davis",
    date_of_birth: "1989-09-29",
    gender: "Male",
    email: "noah@creative-tim.com",
    phone_number: "+1-555-666-7777",
    position: "Support",
    department: "Customer Service",
    date_hired: "2019-09-29",
    salary: 40000.00,
    address: "303 Birch St, Springfield",
    emergency_contact: "Jessica Davis, +1-555-888-9999",
    status: "left",
    image: team2,
  },
  {
    staff_id: 7,
    first_name: "Isabella",
    last_name: "Wilson",
    name: "Isabella Wilson",
    date_of_birth: "1991-08-08",
    gender: "Female",
    email: "isabella@creative-tim.com",
    phone_number: "+1-555-777-8888",
    position: "HR",
    department: "Human Resources",
    date_hired: "2020-08-08",
    salary: 56000.00,
    address: "404 Cedar St, Springfield",
    emergency_contact: "Daniel Wilson, +1-555-999-0000",
    status: "full-time",
    image: team2,
  },
  {
    staff_id: 8,
    first_name: "Mason",
    last_name: "Martinez",
    name: "Mason Martinez",
    date_of_birth: "1993-12-03",
    gender: "Male",
    email: "mason@creative-tim.com",
    phone_number: "+1-555-888-9999",
    position: "Developer",
    department: "Engineering",
    date_hired: "2018-12-03",
    salary: 61000.00,
    address: "505 Walnut St, Springfield",
    emergency_contact: "Sophia Martinez, +1-555-000-1111",
    status: "full-time",
    image: team2,
  },
  {
    staff_id: 9,
    first_name: "Mia",
    last_name: "Anderson",
    name: "Mia Anderson",
    date_of_birth: "1990-04-21",
    gender: "Female",
    email: "mia@creative-tim.com",
    phone_number: "+1-555-999-0000",
    position: "Marketing",
    department: "Marketing",
    date_hired: "2017-04-21",
    salary: 50000.00,
    address: "606 Chestnut St, Springfield",
    emergency_contact: "Mark Anderson, +1-555-111-2222",
    status: "part-time",
    image: team2,
  },
  {
    staff_id: 10,
    first_name: "Ethan",
    last_name: "Thomas",
    name: "Ethan Thomas",
    date_of_birth: "1985-02-11",
    gender: "Male",
    email: "ethan@creative-tim.com",
    phone_number: "+1-555-000-1111",
    position: "Developer",
    department: "Engineering",
    date_hired: "2016-02-11",
    salary: 67000.00,
    address: "707 Spruce St, Springfield",
    emergency_contact: "Emily Thomas, +1-555-222-3333",
    status: "full-time",
    image: team2,
  },
];

const columns = [
  { Header: "Employee", accessor: "employee" },
  { Header: "Contact Info", accessor: "phone" },
  /*  { Header: "Salary", accessor: "salary" }, */
  { Header: "Employed", accessor: "employed" },
  { Header: "Status", accessor: "status" },
  { Header: "Job Title", accessor: "job" },
  { Header: "Oragination Name", accessor: "org" },
];

function StaffListing() {
  const [controller] = useArgonController();
  const { darkMode } = controller;
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const totalItems = authorsData.length;

  const rows = authorsData.map((author) => ({
    employee: (
      <ArgonBox display="flex" alignItems="center" gap={2}>
        <Avatar src={author.image} alt={author.name} variant="rounded" />
        <ArgonBox display="flex" flexDirection="column">
          <ArgonTypography variant="button" fontWeight="medium">  {author.name} </ArgonTypography>
          <ArgonTypography variant="caption" color="secondary"> {author.email}  </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    ),
    job: <ArgonTypography variant="caption" color="secondary"> {author.position}  </ArgonTypography>,
    org: <ArgonTypography variant="caption" color="secondary" > {author.department} </ArgonTypography>,
    right: <ArgonTypography variant="caption" color="secondary" >{author.right}</ArgonTypography>,
    status: <ArgonTypography variant="caption" color="secondary" > {author.status.toUpperCase()} </ArgonTypography>,
    employed: <ArgonTypography variant="caption" color="secondary" >{author.date_hired} </ArgonTypography>,
    company: <ArgonTypography variant="caption" color="secondary" >{author.company}</ArgonTypography>,
    salary: <ArgonTypography variant="caption" color="secondary" >{author.salary} </ArgonTypography>,
    phone: <ArgonTypography variant="caption" color="secondary" >{author.phone_number} </ArgonTypography>,
    department: <ArgonTypography variant="caption" color="secondary" > {author.department} </ArgonTypography>,

  }));

  const datarows = rows.slice((page - 1) * pageSize, page * pageSize);

  const onPageChange = (newPage) => {
    setPage(newPage);
  };

  const onPageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  let [order, setOrder] = useState('asc');
  let [orderBy, setOrderBy] = useState('');
  let [selectedData, setSelectedData] = useState('');
  let [openUI_num, setOpenUI_numderBy] = useState(0);
  const handleSort = (property) => {
    console.log(property)

    if (order == 'asc') {
      order = 'desc'
      setOrder(order)
    } else {
      order = 'asc'
      setOrder(order)
    }

    orderBy = property
    setOrderBy(orderBy)

  };

  const handleCloseDrawer = (e) => {
    setOpenUI_numderBy(0)
    console.log(e)
  }

  return (<>
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>

          <Card>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <ArgonTypography variant="h6">Staff Listing</ArgonTypography>
            </ArgonBox>

            <ArgonBox p={3}>

              <TableContainer component={Paper}>

                <Table stickyHeader sx={{ tableLayout: 'fixed', width: "100% !important" }}>
                  <TableHead sx={{ width: '100%', display: "contents" }}>
                    <TableRow>
                      {columns.map((col, index) => (
                        <TableCell key={index} sx={{ color: darkMode ? '#ffffff !important' : '#344767 !important' }} onClick={() => handleSort(col.accessor)}>

                          <ArgonTypography variant="caption" fontWeight="bold"> {col.Header} </ArgonTypography>
                          {orderBy === col.accessor ? (
                            order === 'asc' ? (
                              <ArrowUpwardIcon sx={{ ml: 1, fontSize: 25, color: darkMode ? '#ffffff !important' : '#344767 !important' }} />
                            ) : (
                              <ArrowDownwardIcon sx={{ ml: 1, fontSize: 25, color: darkMode ? '#ffffff !important' : '#344767 !important' }} />
                            )
                          ) : (
                            <ArrowUpwardIcon sx={{ ml: 1, fontSize: 25, color: darkMode ? '#ffffff !important' : '#344767 !important' }} />
                          )}

                        </TableCell>

                      ))}
                      <TableCell sx={{ color: darkMode ? '#ffffff !important' : '#344767 !important' }} align="center"> <ArgonTypography variant="caption" fontWeight="bold">Action</ArgonTypography> </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {datarows.map((row, rowIndex) => (
                      <TableRow key={rowIndex}>
                        {columns.map((col, colIndex) => (
                          <TableCell key={colIndex} sx={{ color: darkMode ? '#ffffff !important' : '#344767 !important' }}>{row[col.accessor]} </TableCell>
                        ))}

                        <TableCell align="center">
                          <Stack direction="row" spacing={1} justifyContent="center">
                            <Button variant="contained" size="small" color="primary" p={1} onClick={() => { setSelectedData(authorsData[rowIndex]); setOpenUI_numderBy(1); }}>Edit  </Button>

                            <Button variant="contained" size="small" color="primary" p={1} onClick={() => { setSelectedData(authorsData[rowIndex]); setOpenUI_numderBy(2); }}>Payment  </Button>
                          </Stack>


                        </TableCell>




                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <ArgonBox display="flex" justifyContent="center" mt={1} mb={2}>
                <SimplePagination totalItems={totalItems} currentPage={page} itemsPerPage={pageSize} onPageChange={onPageChange} onPageSizeChange={onPageSizeChange} />
              </ArgonBox>

            </ArgonBox>
          </Card>
        </ArgonBox>
      </ArgonBox >
      <Footer />
    </DashboardLayout >


    {
      (() => {
        if (openUI_num == 1) {
          return <UserDetail openUI={openUI_num == 1 ? true : false} selectedData={selectedData} handleCloseDrawer={handleCloseDrawer} />;
        }

        if (openUI_num == 2) {
          return <UserPaymentDetail openUI={openUI_num == 2 ? true : false} selectedData={selectedData} handleCloseDrawer={handleCloseDrawer} />;
        }

      })()
    }

  </>);
}

export default StaffListing;
