import Card from "@mui/material/Card";
import { useState } from "react";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

import authorsTable_Data from "layouts/tables/data/authorsTable_Data";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import SimplePagination from "../../components/ArgonPagination/StyledPagination";
const authorsData = [
  {
    image: team2,
    name: "Emily Clark",
    email: "emily@creative-tim.com",
    job: "Designer",
    org: "Creative",
    right: "user",
    status: "online",
    employed: "12/03/19",
  },
  {
    image: team3,
    name: "James Smith",
    email: "james@creative-tim.com",
    job: "Developer",
    org: "Engineering",
    right: "admin",
    status: "offline",
    employed: "05/07/20",
  },
  {
    image: team4,
    name: "Sophia Turner",
    email: "sophia@creative-tim.com",
    job: "Product Manager",
    org: "Management",
    right: "user",
    status: "online",
    employed: "22/11/17",
  },
  {
    image: team2,
    name: "Liam Johnson",
    email: "liam@creative-tim.com",
    job: "QA Engineer",
    org: "Quality",
    right: "admin",
    status: "offline",
    employed: "10/06/21",
  },
  {
    image: team3,
    name: "Olivia Brown",
    email: "olivia@creative-tim.com",
    job: "Developer",
    org: "Engineering",
    right: "user",
    status: "online",
    employed: "15/01/18",
  },
  {
    image: team4,
    name: "Noah Davis",
    email: "noah@creative-tim.com",
    job: "Support",
    org: "Customer Service",
    right: "user",
    status: "offline",
    employed: "29/09/19",
  },
  {
    image: team2,
    name: "Isabella Wilson",
    email: "isabella@creative-tim.com",
    job: "HR",
    org: "Human Resources",
    right: "admin",
    status: "online",
    employed: "08/08/20",
  },
  {
    image: team3,
    name: "Mason Martinez",
    email: "mason@creative-tim.com",
    job: "Developer",
    org: "Engineering",
    right: "user",
    status: "online",
    employed: "03/12/18",
  },
  {
    image: team4,
    name: "Mia Anderson",
    email: "mia@creative-tim.com",
    job: "Marketing",
    org: "Marketing",
    right: "user",
    status: "offline",
    employed: "21/04/17",
  },
  {
    image: team2,
    name: "Ethan Thomas",
    email: "ethan@creative-tim.com",
    job: "Developer",
    org: "Engineering",
    right: "admin",
    status: "online",
    employed: "11/02/16",
  },
  {
    image: team3,
    name: "Ava Jackson",
    email: "ava@creative-tim.com",
    job: "Designer",
    org: "Creative",
    right: "user",
    status: "online",
    employed: "19/07/20",
  },
  {
    image: team4,
    name: "Alexander White",
    email: "alexander@creative-tim.com",
    job: "Support",
    org: "Customer Service",
    right: "user",
    status: "offline",
    employed: "06/10/18",
  },
  {
    image: team2,
    name: "Charlotte Harris",
    email: "charlotte@creative-tim.com",
    job: "Product Manager",
    org: "Management",
    right: "admin",
    status: "online",
    employed: "14/03/21",
  },
  {
    image: team3,
    name: "Daniel Lewis",
    email: "daniel@creative-tim.com",
    job: "Developer",
    org: "Engineering",
    right: "user",
    status: "online",
    employed: "27/05/19",
  },
  {
    image: team4,
    name: "Amelia Young",
    email: "amelia@creative-tim.com",
    job: "HR",
    org: "Human Resources",
    right: "admin",
    status: "offline",
    employed: "01/09/17",
  },
  {
    image: team2,
    name: "Michael King",
    email: "michael@creative-tim.com",
    job: "Developer",
    org: "Engineering",
    right: "admin",
    status: "online",
    employed: "18/11/20",
  },
  {
    image: team3,
    name: "Evelyn Scott",
    email: "evelyn@creative-tim.com",
    job: "Marketing",
    org: "Marketing",
    right: "user",
    status: "offline",
    employed: "09/06/19",
  },
  {
    image: team4,
    name: "Benjamin Green",
    email: "benjamin@creative-tim.com",
    job: "Support",
    org: "Customer Service",
    right: "user",
    status: "online",
    employed: "04/12/18",
  },
  {
    image: team2,
    name: "Harper Baker",
    email: "harper@creative-tim.com",
    job: "Designer",
    org: "Creative",
    right: "admin",
    status: "online",
    employed: "22/08/17",
  },
  {
    image: team3,
    name: "Jacob Nelson",
    email: "jacob@creative-tim.com",
    job: "Developer",
    org: "Engineering",
    right: "user",
    status: "offline",
    employed: "13/04/16",
  },
];
function SystemUser() {
  const { columns, rows } = authorsTable_Data(authorsData);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const totalItems = rows.length;

  let datarows = rows.slice((page - 1) * pageSize, page * pageSize);

  const onPageChange = (page) => {
    setPage(page);
    console.log("Current page:", page);
    console.log(rows.slice((page - 1) * pageSize, page * pageSize));
    datarows = rows.slice((page - 1) * pageSize, page * pageSize);
  };

  const onPageSizeChange = (page) => {
    setPageSize(page);
    console.log("Current page:", page);
    console.log(rows.slice((page - 1) * pageSize, page * pageSize))
    datarows = rows.slice((page - 1) * pageSize, page * pageSize);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <ArgonTypography variant="h6">System User</ArgonTypography>
            </ArgonBox>
            <ArgonBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": { borderBottom: ({ borders: { borderWidth, borderColor } }) => `${borderWidth[1]} solid ${borderColor}`, },
                },
              }}
            >
              <Table columns={columns} rows={datarows} />

              <ArgonBox display="flex" justifyContent="center" mt={4} mb={4}>
                <SimplePagination totalItems={totalItems} currentPage={page} itemsPerPage={pageSize} onPageChange={onPageChange} onPageSizeChange={onPageSizeChange} />
              </ArgonBox>
            </ArgonBox>

          </Card>
        </ArgonBox>


      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SystemUser;
