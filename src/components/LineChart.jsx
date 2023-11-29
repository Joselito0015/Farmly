import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const App = ({ Data }) => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [] // Inicialmente sin categorías
      }
    },
    series: [
      {
        name: "Temperatura",
        type: "line",
        data: [] // Inicialmente sin datos de temperatura
      },
      {
        name: "Humedad",
        type: "line",
        data: [] // Inicialmente sin datos de humedad
      }
    ]
  });

  useEffect(() => {
    if (Data && Data.length > 0) {
      //sort reverse data
      Data.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1)
      const categories = Data.map(item => item.timestamp);
      const temperatures = Data.map(item => parseFloat(item.temperature));
      const humidities = Data.map(item => parseFloat(item.humidity));

      setChartData({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: categories
          }
        },
        series: [
          {
            name: "Temperatura",
            type: "line",
            data: temperatures
          },
          {
            name: "Humedad",
            type: "line",
            data: humidities
          }
        ]
      });
    }
  }, []);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
