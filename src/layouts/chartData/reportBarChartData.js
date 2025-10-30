const reportsBarChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Sales",
            data: [300, 400, 350, 500, 420, 610],
        },
    ],
};

const items = [
    {
        icon: { color: "info", component: "💰" }, // replace with actual icon component
        label: "Revenue",
        progress: { content: "$34K", percentage: 70 },
    },
    {
        icon: { color: "success", component: "🛒" },
        label: "Orders",
        progress: { content: "1.2K", percentage: 85 },
    },
    {
        icon: { color: "warning", component: "📦" },
        label: "Shipments",
        progress: { content: "980", percentage: 60 },
    },
    {
        icon: { color: "error", component: "⚠️" },
        label: "Returns",
        progress: { content: "30", percentage: 15 },
    },
];

export { reportsBarChartData, items };
