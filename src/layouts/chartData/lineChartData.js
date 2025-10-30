// src/data/lineChartData.js

const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "iOS Users",
            data: [100, 150, 200, 180, 220, 240, 280, 300, 320, 340, 370, 400],
            color: "primary",
        },
        {
            label: "Android Users",
            data: [80, 130, 160, 140, 200, 210, 250, 270, 290, 310, 350, 380],
            color: "success",
        },
        {
            label: "Web Users",
            data: [90, 110, 140, 130, 170, 190, 210, 230, 250, 270, 290, 310],
            color: "info",
        },
    ],
};

export default lineChartData;
