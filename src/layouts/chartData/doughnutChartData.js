// src/data/doughnutChartData.js

const doughnutChartData = {
  labels: ["iOS", "Android", "Web", "macOS", "Windows", "Linux"],
  datasets: [
    {
      label: "App Usage",
      data: [35, 25, 20, 10, 5, 5], // make sure total is 100 or proportional
      backgroundColor: [
        "#007bff", // iOS - Blue
        "#20c997", // Android - Teal
        "#ff6384", // Web - Pink
        "#ffc107", // macOS - Yellow
        "#6f42c1", // Windows - Purple
        "#17a2b8", // Linux - Cyan
      ],
      borderWidth: 1,
    },
  ],
  cutout: "60%",
};

export default doughnutChartData;
