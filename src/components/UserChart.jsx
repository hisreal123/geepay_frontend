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
            backgroundColor: "rgba(52, 202, 165, 0.20)",
            hoverBackgroundColor: gradient,
            borderColor: ["rgba(52, 202, 165, 1)"],
            borderWidth: 0,
            borderRadius: {
              topLeft: 200,
              topRight: 200,
              bottomLeft: 0,
              bottomRight: 0,
            },
            barPercentage: 0.6,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        autoPadding: true,
        scales: {
          x: {
            border: {
              dash: [0, 6],
              display: false,
            },
          },
          y: {
            border: {
              dash: [19, 6],
              display: false,
            },
          },
        },
        y: {
          beginAtZero: true,
          max: 50000,
          ticks: {
            stepSize: 10000,
            callback: function (value) {
              return value.toLocaleString(); // format the tick values as needed
            },
            maxTicksLimit: 7,
            suggestedMax: 50000,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, []);

  const [selectedOption, setSelectedOption] = React.useState("daily");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const totalLabel = chartRef.data;
  console.log(totalLabel);

  return (
    <div className="text-sm md:text-md lg:text-lg dark:bg-black/80 dark:border-black/80  dark:text-white border-[1px] border-[#EDF2F7] rounded-[14px] bg-white  py-2 px-2  h-[400px] relative">
      <div className="relative flex items-center justify-between mb-5">
        <h2 className="font-bold"> Sales Trends </h2>

        <div className="selectBarOptions text-xs lg:text-sm">
          <span className="font-bold text-sm mr-1">Sort by:</span>
          <select
            value={selectedOption}
            onChange={handleChange}
            className="rounded-full bg-transparent px-2 py-0 lg:py-1 text-[.7rem] lg:text-sm border  border-gray-200 focus:outline-none"
          >
            <option
              value="daily"
              className="px-1 py-2 hover:bg-gray-100 border-none text-xs"
            >
              Weekly
            </option>
            <option value="weekly"> Daily</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div className="h-[80%] bg-white dark:bg-black/80 dark:text-white dark:border-black/80 ">
        <canvas ref={chartRef} width={80} />
      </div>
    </div>
  );
};

export default UserChart;
