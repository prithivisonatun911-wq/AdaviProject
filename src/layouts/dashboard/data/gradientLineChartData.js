const gradientLineChartData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Mobile apps",
      color: "info",
      data: [150, 140, 300, 220, 500, 250, 400, 230, 500],
      borderColor: "#20c997", 
      backgroundColor: "rgba(32, 201, 151, 0.2)", 
      fill: true, 
      tension: 0.4, 
    },
    {
      label: "Desktop apps",
      color: "primary",
      data: [170, 160, 200, 180, 450, 300, 550, 280, 520],
      borderColor: "#007bff", 
      backgroundColor: "rgba(0, 123, 255, 0.2)", 
      fill: true, 
      tension: 0.4, 
    },
    {
      label: "Web apps",
      color: "danger",
      data: [190, 180, 250, 300, 600, 350, 700, 380, 600],
      borderColor: "#dc3545",
      backgroundColor: "rgba(220, 53, 69, 0.2)", 
      fill: true, 
      tension: 0.4, 
    },
  ],
};

export default gradientLineChartData;
