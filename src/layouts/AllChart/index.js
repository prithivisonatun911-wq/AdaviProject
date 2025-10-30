import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import ArgonBox from "components/ArgonBox";
import typography from "assets/theme/base/typography";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

//chart Layout
import PolarChart from "examples/Charts/PolarChart";
import MixedChart from "examples/Charts/MixedChart";
import PieChart from "examples/Charts/PieChart/index";
import BubbleChart from "examples/Charts/BubbleChart";
import RadarChart from "examples/Charts/RadarChart/index";
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";

//chart DatachartData/pieChartData"
import pieChartData from "layouts/chartData/pieChartData";
import radarChartData from "layouts/chartData/radarData";
import horizontalBarChartData from "layouts/chartData/horizontalBarChartData";
import gradientLineChartData from "layouts/chartData/gradientLineChartData";
import verticalBarChartData from "layouts/chartData/verticalBarChartData";
import { reportsBarChartData, items } from "layouts/chartData/reportBarChartData";
import doughnutChartData from "layouts/chartData/doughnutChartData";
import lineChartData from "layouts/chartData/lineChartData";
import mixedChartData from "layouts/chartData/mixChartData";
import polarChartData from "layouts/chartData/polarChartData"
import bubbleChartData from "layouts/chartData/bubbleChartData"
 

function Default() {
  const { size } = typography;
 
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <ArgonBox py={3}>

        <Grid container spacing={3} mb={3}>

          <Grid item xs={12} lg={6} >
            <GradientLineChart title="Gradient Line Chart" description="Breakdown of mobile, desktop, and web apps" chart={gradientLineChartData} />
          </Grid>

          <Grid item xs={12} md={12} lg={6}>
            <DefaultLineChart title="Default Line Chart" description="iOS, Android, and Web user trends" chart={lineChartData} />
          </Grid>

          <Grid item xs={12} lg={6}>
            <HorizontalBarChart title="Horizontal Bar Chart" description="Comparison of product performance" chart={horizontalBarChartData} />
          </Grid>

          <Grid item xs={12} lg={6}>
            <VerticalBarChart title="Vertical Bar Chart" description="Earnings growth across quarters" chart={verticalBarChartData} />
          </Grid>

          <Grid item xs={12} lg={6}>
            <ReportsBarChart color="info" title="Reports Bar Chart" description="Reports Bar Chart" chart={reportsBarChartData} items={items} />
          </Grid>

          <Grid item xs={12} lg={6}>
            <BubbleChart title="Bubble Chart" description="Bubble chart representing performance clusters" chart={bubbleChartData} />
          </Grid>

          <Grid item xs={12} lg={6}>
            <PieChart title="Pie Chart" description="Breakdown of mobile, desktop, and web apps" chart={pieChartData} />
          </Grid>

          <Grid item xs={12} md={6}>
            <DefaultDoughnutChart title="Default Doughnut Chart" description="App usage by platform" chart={doughnutChartData} />
          </Grid>

          <Grid item xs={12} lg={6}>
            <PolarChart title="Polar Chart" description="Breakdown of mobile, desktop, and web apps" chart={polarChartData} />
          </Grid>

          <Grid item xs={12} lg={6}>
            <RadarChart title="Radar Chart" description="Radar chart showing app performance metrics" chart={radarChartData} />
          </Grid>

          <Grid item xs={12} md={12} lg={6}>
            <MixedChart title="Mixed Chart" description="Revenue vs Profit vs Expenses" chart={mixedChartData} />
          </Grid>

        </Grid>

      </ArgonBox>
    </DashboardLayout>
  );
}

export default Default;
