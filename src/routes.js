import SystemUser from "layouts/systemUser"
import StaffListing from "layouts/staffListing"
import Dashboard from "layouts/dashboard";
import BookingMgt from "layouts/bookingMgt";
import InventoryMgt from "layouts/inventoryMgt"
import AssetMgt from "layouts/assetMgt"
import AnalyticsUX from "layouts/analyticsUX"
import DataInjestion from "layouts/dataInjestion";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const routes = [
  {
    type: "route",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <DashboardIcon color="primary" fontSize="small" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Analytics",
    key: "analytics",
    route: "/analytics",
    icon: <BarChartIcon color="primary" fontSize="small" />,
    component: <AnalyticsUX />,
  },
  {
    type: "route",
    name: "Booking Management",
    key: "bookingMgt",
    route: "/bookingMgt",
    icon: <CalendarTodayIcon color="primary" fontSize="small" />,
    component: <BookingMgt />,
  },
  {
    type: "route",
    name: "Inventory Management",
    key: "inventoryMgt",
    route: "/inventoryMgt",
    icon: <InventoryIcon color="primary" fontSize="small" />,
    component: <InventoryMgt />,
  },

  {
    type: "route",
    name: "Asset Management",
    key: "assetMgt",
    route: "/assetMgt",
    icon: <InventoryIcon color="primary" fontSize="small" />,
    component: <AssetMgt />,
  },
  {
    type: "route",
    name: "Data Injestion",
    key: "dataInjestion",
    route: "/dataInjestion",
    icon: <CloudUploadIcon color="primary" fontSize="small" />,
    component: <DataInjestion />,
  },
  {
    type: "route",
    name: "System User",
    key: "systemUser",
    route: "/systemUser",
    icon: <LockOpenIcon color="primary" fontSize="small" />,
    component: <SystemUser />,
  },
  {
    type: "route",
    name: "Staff List",
    key: "staffListing",
    route: "/staffListing",
    icon: <PersonIcon color="primary" fontSize="small" />,
    component: <StaffListing />,
  },

];

export default routes;