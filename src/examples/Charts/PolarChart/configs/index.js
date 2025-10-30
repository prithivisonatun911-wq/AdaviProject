import colors from "assets/theme/base/colors";

const { gradients, dark } = colors;

function configs(labels, datasets) {
  const backgroundColors = [];

  if (datasets[0].backgroundColor) {
    datasets[0]?.backgroundColor.forEach((color) =>
      backgroundColors.push(color)
    );
  } else {
    backgroundColors.push(dark.main);
  }

  return {
    data: {
      labels,
      datasets: [
        {
          label: datasets[0].label,
          backgroundColor: datasets[0].backgroundColor,
          data: datasets[0].data,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };
}

export default configs;
