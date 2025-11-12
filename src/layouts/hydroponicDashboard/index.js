import React from "react";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import { useArgonController } from "context";
import { useMemo } from "react";

const dataSets = {
  daily: {
    labels: ["08:00", "12:00", "16:00", "20:00", "00:00", "04:00", "08:00"],
    datasets: [
      {
        label: "pH",
        color: "info",
        data: [6.2, 6.3, 6.1, 6.35, 6.4, 6.25, 6.3],
      },
      {
        label: "EC",
        color: "primary",
        data: [1520, 1500, 1480, 1510, 1490, 1500, 1500],
      },
      {
        label: "Water Temp",
        color: "success",
        data: [21.5, 22.1, 22.2, 22.4, 22.3, 22.0, 22.0],
      },
      {
        label: "Humidity",
        color: "warning",
        data: [64, 65, 66, 63, 65, 64, 65],
      },
    ],
  },
  weekly: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "pH",
        color: "info",
        data: [6.2, 6.1, 6.3, 6.35, 6.25, 6.4, 6.3],
      },
      {
        label: "EC",
        color: "primary",
        data: [1500, 1510, 1490, 1480, 1500, 1520, 1500],
      },
      {
        label: "Water Temp",
        color: "success",
        data: [22, 22.2, 22.1, 22.4, 22.3, 22.5, 22],
      },
      {
        label: "Humidity",
        color: "warning",
        data: [65, 63, 66, 65, 64, 65, 66],
      },
    ],
  },
  monthly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "pH",
        color: "info",
        data: [6.3, 6.2, 6.25, 6.3],
      },
      {
        label: "EC",
        color: "primary",
        data: [1500, 1490, 1510, 1500],
      },
      {
        label: "Water Temp",
        color: "success",
        data: [22, 22.4, 22.3, 22.1],
      },
      {
        label: "Humidity",
        color: "warning",
        data: [65, 64, 66, 63],
      },
    ],
  },
  yearly: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "pH",
        color: "info",
        data: [6.3, 6.3, 6.25, 6.4, 6.3, 6.2, 6.25, 6.3, 6.3, 6.35, 6.4, 6.3],
      },
      {
        label: "EC",
        color: "primary",
        data: [1500, 1490, 1510, 1500, 1495, 1505, 1500, 1510, 1500, 1490, 1500, 1505],
      },
      {
        label: "Water Temp",
        color: "success",
        data: [22, 22.1, 22.3, 22.2, 22.4, 22.3, 22.5, 22.4, 22.3, 22.2, 22.1, 22.3],
      },
      {
        label: "Humidity",
        color: "warning",
        data: [65, 66, 64, 65, 63, 66, 64, 65, 66, 63, 65, 64],
      },
    ],
  },
};

function HydroponicDashboard() {
  const [controller] = useArgonController();
  const { darkMode } = controller;
  const [period, setPeriod] = React.useState("daily");
  const [selectedSensors, setSelectedSensors] = React.useState(["pH",]);

  const handleSensorChange = (event) => {
    const sensor = event.target.name;
    setSelectedSensors((prev) =>
      prev.includes(sensor) ? prev.filter((s) => s !== sensor) : [...prev, sensor]
    );
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const bigChartData = useMemo(() => {
    const filteredDatasets = dataSets[period].datasets.filter((ds) =>
      selectedSensors.includes(ds.label)
    );
    return {
      labels: dataSets[period].labels,
      datasets: filteredDatasets,
    };
  }, [period, selectedSensors]);

  const HChartData = useMemo(() => ({
    labels: dataSets.daily.labels,
    datasets: [{ label: "Humidity", color: "warning", data: dataSets.daily.datasets.find((d) => d.label === "Humidity").data, },],
  }), [period, selectedSensors]);

  const WTChartData = useMemo(() => ({
    labels: dataSets.daily.labels,
    datasets: [{ label: "Water Temp", color: "success", data: dataSets.daily.datasets.find((d) => d.label === "Water Temp").data, },],
  }), [period, selectedSensors]);

  const phChart = useMemo(() => ({
    labels: dataSets.daily.labels,
    datasets: [{ label: "pH", color: "info", data: dataSets.daily.datasets.find((d) => d.label === "pH").data, },],
  }), [period, selectedSensors]);

  const ECChartData = useMemo(() => ({
    labels: dataSets.daily.labels,
    datasets: [{ label: "EC", color: "primary", data: dataSets.daily.datasets.find((d) => d.label === "EC").data, },],
  }), [period, selectedSensors]);

  return (

    <ArgonBox py={3}>
      {/* Top sensor cards with mini charts */}
      <Grid container spacing={3}>
        {/* pH Level */}
        <Grid item xs={12} md={6} lg={3}>
          <DetailedStatisticsCard
            height="200px"
            title="pH Level"
            count="6.3"
            icon={{ color: "info", component: <i className="fas fa-vial" /> }}
            percentage={{ color: "success", count: "+0.1", text: "stable" }}
            chart={
              <GradientLineChart
                chart={phChart}
                height="170px"
              />
            }
          />
        </Grid>

        {/* EC */}
        <Grid item xs={12} md={6} lg={3}>
          <DetailedStatisticsCard title="EC (ppm)" count="1500" icon={{ color: "primary", component: <i className="fas fa-bolt" /> }}
            percentage={{ color: "warning", count: "-50", text: "low nutrients" }} chart={<GradientLineChart chart={ECChartData} height="170px" />} />
        </Grid>

        {/* Water Temp */}
        <Grid item xs={12} md={6} lg={3}>
          <DetailedStatisticsCard title="Water Temp" count="22°C" icon={{ color: "success", component: <i className="fas fa-tint" /> }}
            percentage={{ color: "success", count: "+1°C", text: "since last hour" }} chart={<GradientLineChart chart={WTChartData} height="170px" />} />
        </Grid>

        {/* Humidity */}
        <Grid item xs={12} md={6} lg={3}>
          <DetailedStatisticsCard title="Humidity" count="65%" icon={{ color: "warning", component: <i className="fas fa-water" /> }}
            percentage={{ color: "info", count: "-2%", text: "stable" }} chart={<GradientLineChart chart={HChartData} height="170px" />} />
        </Grid>
      </Grid>

      {/* System Controls */}
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12} md={6}>
          <DetailedStatisticsCard title="Fan Status" count="On" icon={{ color: "dark", component: <i className="fas fa-fan" /> }} percentage={{ color: "success", count: "", text: "Running smoothly" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <DetailedStatisticsCard
            title="Pump Status"
            count="Auto"
            icon={{ color: "info", component: <i className="fas fa-pump-soap" /> }}
            percentage={{ color: "info", count: "", text: "Scheduled" }}
          />
        </Grid>
      </Grid>

      {/* Big multi-sensor chart controls and chart */}
      <ArgonBox mt={5} px={3} py={3} border={1} borderColor="grey.300" borderRadius="lg" bgcolor={darkMode ? "#111c44 !important" : "#ffffff !important"}  color={darkMode ? "#ffffff !important" : "#67748e !important"}>
       
        <FormLabel component="legend" sx={{ mb: 1, fontWeight: 700, color: darkMode ? "#ffffff !important" : "#67748e !important" }} >Select Sensors</FormLabel>
        <FormGroup row>
          {["pH", "EC", "Water Temp", "Humidity"].map((sensor) => (
            <FormControlLabel key={sensor} control={<Checkbox checked={selectedSensors.includes(sensor)} onChange={handleSensorChange} name={sensor} />} label={sensor} />
          ))}
        </FormGroup>

        <FormLabel component="legend" sx={{ mt: 3, mb: 1, fontWeight: "bold", color: darkMode ? "#ffffff !important" : "#67748e !important" }}>Select Period</FormLabel>

        <RadioGroup row value={period} onChange={handlePeriodChange} aria-label="period" name="period-radio-group">
          {["daily", "weekly", "monthly", "yearly"].map((p) => (
            <FormControlLabel key={p} value={p} control={<Radio />} label={p.charAt(0).toUpperCase() + p.slice(1)} />
          ))}
        </RadioGroup>

        {/* Big Gradient Line Chart */}
        <GradientLineChart chart={bigChartData} height="90%"/>
      </ArgonBox>

    </ArgonBox>
  );
}

export default HydroponicDashboard;