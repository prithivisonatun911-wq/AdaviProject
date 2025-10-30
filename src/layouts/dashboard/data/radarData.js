const radarChartData = {
  labels: [
    "Performance",
    "Accessibility",
    "SEO",
    "Best Practices",
    "Security",
    "Usability"
  ],
  datasets: [
    {
      label: "Web App A",
      backgroundColor: "rgba(54, 162, 235, 0.3)", // blue
      borderColor: "rgba(54, 162, 235, 1)",
      pointBackgroundColor: "rgba(54, 162, 235, 1)",
      data: [80, 70, 90, 85, 75, 95]
    },
    {
      label: "Web App B",
      backgroundColor: "rgba(255, 99, 132, 0.3)", // red
      borderColor: "rgba(255, 99, 132, 1)",
      pointBackgroundColor: "rgba(255, 99, 132, 1)",
      data: [60, 80, 75, 70, 65, 80]
    },
    {
      label: "Web App C",
      backgroundColor: "rgba(255, 206, 86, 0.3)", // yellow
      borderColor: "rgba(255, 206, 86, 1)",
      pointBackgroundColor: "rgba(255, 206, 86, 1)",
      data: [70, 60, 85, 80, 72, 78]
    },
    {
      label: "Web App D",
      backgroundColor: "rgba(75, 192, 192, 0.3)", // teal
      borderColor: "rgba(75, 192, 192, 1)",
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
      data: [85, 75, 80, 90, 85, 88]
    },
    {
      label: "Web App E",
      backgroundColor: "rgba(153, 102, 255, 0.3)", // purple
      borderColor: "rgba(153, 102, 255, 1)",
      pointBackgroundColor: "rgba(153, 102, 255, 1)",
      data: [75, 82, 78, 68, 70, 85]
    },
    {
      label: "Web App F",
      backgroundColor: "rgba(255, 159, 64, 0.3)", // orange
      borderColor: "rgba(255, 159, 64, 1)",
      pointBackgroundColor: "rgba(255, 159, 64, 1)",
      data: [65, 60, 70, 75, 68, 72]
    }
  ]
};

export default radarChartData;
