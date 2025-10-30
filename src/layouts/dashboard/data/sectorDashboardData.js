export const sectorYearlyChartData = {
  2023: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Sector 1 - Villa",
        color: "info",
        data: [12000, 15000, 14000, 16000, 17000, 18000, 16000, 15500, 17000, 17500],
      },
      {
        label: "Sector 2 - Restaurant",
        color: "success",
        data: [9000, 10000, 9500, 11000, 12000, 13000, 12500, 11500, 12000, 12200],
      },
      {
        label: "Sector 3 - Agriculture",
        color: "warning",
        data: [4000, 4500, 4200, 4800, 4600, 4900, 5000, 4700, 4800, 4600],
      },
      {
        label: "Sector 4 - Supermarket",
        color: "primary",
        data: [10000, 11000, 10500, 11500, 12000, 13000, 12800, 12500, 12700, 12900],
      },
      {
        label: "Sector 5 - Resort Hotel",
        color: "error",
        data: [18000, 20000, 19500, 21000, 22000, 21500, 21800, 22500, 23000, 23500],
      },
    ],
  },
  2024: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Sector 1 - Villa",
        color: "info",
        data: [14000, 16000, 15000, 16500, 17500, 18500, 17000, 16500, 18000, 18500],
      },
      {
        label: "Sector 2 - Restaurant",
        color: "success",
        data: [9500, 10500, 10000, 11500, 12500, 13500, 13000, 12000, 12500, 12700],
      },
      {
        label: "Sector 3 - Agriculture",
        color: "warning",
        data: [4200, 4700, 4400, 5000, 4800, 5100, 5200, 4900, 5000, 4800],
      },
      {
        label: "Sector 4 - Supermarket",
        color: "primary",
        data: [10500, 11500, 11000, 12000, 12500, 13500, 13300, 13000, 13200, 13400],
      },
      {
        label: "Sector 5 - Resort Hotel",
        color: "error",
        data: [18500, 20500, 20000, 21500, 22500, 22000, 22300, 23000, 23500, 24000],
      },
    ],
  },
};


export const sectorProfitsLastMonth = [
  { sector: "Villa", profit: "+$17,500" },
  { sector: "Restaurant", profit: "+$12,200" },
  { sector: "Agriculture", profit: "-$200" },
  { sector: "Supermarket", profit: "+$12,900" },
  { sector: "Resort Hotel", profit: "+$23,500" },
];

export const thisMonthStats = {
  earnings: "$34,000",
  expenditure: "$21,500",
  assetPurchases: "$6,700",
};
