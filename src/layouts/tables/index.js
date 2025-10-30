import Card from "@mui/material/Card";
import { useState } from "react";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

import SimplePagination from "../../components/ArgonPagination/StyledPagination";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

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
              <ArgonTypography variant="h6">Authors table</ArgonTypography>
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
        <Card>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <ArgonTypography variant="h6">Projects table</ArgonTypography>
          </ArgonBox>
          <ArgonBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </ArgonBox>
        </Card>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
