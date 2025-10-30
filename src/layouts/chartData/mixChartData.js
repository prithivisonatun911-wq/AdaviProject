const mixedChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Sales",
            data: [300, 400, 350, 500, 420, 600],
            color: "primary",
            chartType: "gradient-line",
        },
        {
            label: "Revenue",
            data: [250, 320, 310, 400, 350, 480],
            color: "success",
            chartType: "default-line",
        },
        {
            label: "Orders",
            data: [100, 150, 120, 180, 160, 200],
            color: "warning",
            chartType: "thin-bar",
        },
    ],
};

export default mixedChartData;
