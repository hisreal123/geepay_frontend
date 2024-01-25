import { Chart } from "chart.js/auto";
import React, { useEffect, useRef } from "react";

const UserChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    // Create a linear gradient
    const gradient = myChartRef.createLinearGradient(0, 0, 0, 1000);
    gradient.addColorStop(0, "#34CAA5");
    gradient.addColorStop(1, "rgba(52, 202, 165, 0.00)");

    chartInstance.current = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [
              5000, 19000, 4000, 28000, 8000, 45000, 8000, 20000, 32000, 5000,
              30000, 28000,
            ],
            backgroundColor: "rgba(52, 202, 165, 0.10)",
            hoverBackgroundColor: gradient,
            borderColor: ["rgba(52, 202, 165, 1)"],
            borderWidth: 0,
            barPercentage: 0.6,
            borderRadius: {
              topLeft: 200,
              topRight: 200,
              bottomLeft: 0,
              bottomRight: 0,
            },
          },
        ],
      },
      options: {
        y: {
          beginAtZero: true,
          max: 50000,
          ticks: {
            stepSize: 10000,
            callback: function (value) {
              return value.toLocaleString(); // format the tick values as needed
            },
            maxTricksLimit: 6,
            suggestedMax: 50000,
          },
        },
      },
    });
  }, []);

  const [selectedOption, setSelectedOption] = React.useState("daily");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    // Add your logic for handling the selected option here
  };

  return (
    <div className="text-sm md:textmd lg:text-lg bg-white rounded-lg py-2 px-2 overflow-x-auto shadow-md">
      <div className="top flex justify-between">
        <h2 className="font-bold"> Sales Trends </h2>

        <div className="selectBarOptions text-xs lg:text-sm">
          <span className="font-bold text-sm mr-1">Sort by:</span>
          <select
            value={selectedOption}
            onChange={handleChange}
            className="rounded-full bg-transparent p-1 border border-gray-200 focus:outline-none"
          >
            <option
              value="daily"
              className="bg-white hover:bg-gray-100 border-none"
            >
              Weekly
            </option>
            <option value="weekly"> Daily</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <canvas ref={chartRef} />
    </div>
  );
};

export default UserChart;
