import React from "react";
import Chart from "react-apexcharts";

const Charts = () => {
  const barChartOptions = {
    series: [{ data: [10, 8, 6, 4, 2] }],
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
    },
    colors: ["#246dec", "#cc3c43", "#367952", "#f5b74f", "#4f35a1"],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: "40%",
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: {
      categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
    },
    yaxis: { title: { text: "Count" } },
  };

  const areaChartOptions = {
    series: [
      { name: "Purchase Orders", data: [31, 40, 28, 51, 42, 109, 100] },
      { name: "Sales Orders", data: [11, 32, 45, 32, 34, 52, 41] },
    ],
    chart: { height: 350, type: "area", toolbar: { show: false } },
    colors: ["#4f35a1", "#246dec"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    markers: { size: 0 },
    yaxis: [
      { title: { text: "Purchase Orders" } },
      { opposite: true, title: { text: "Sales Orders" } },
    ],
    tooltip: { shared: true, intersect: false },
  };

  return (
    <div>
      <div className="charts-card">
        <p className="chart-title">Top 5 Products</p>
        <Chart
          options={barChartOptions}
          series={barChartOptions.series}
          type="bar"
          height={350}
        />
      </div>
      <div className="charts-card">
        <p className="chart-title">Purchase and Sales Orders</p>
        <Chart
          options={areaChartOptions}
          series={areaChartOptions.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default Charts;
