import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const MixedChart = () => {
  const data = {
    labels: [
      "1 Aprel",
      "2 Aprel",
      "3 Aprel",
      "4 Aprel",
      "5 Aprel",
      "6 Aprel",
      "7 Aprel",
    ],
    datasets: [
      {
        type: "bar" as const,
        label: "Qəza sayı",
        backgroundColor: "rgba(75,192,192,0.6)",
        data: [5, 8, 6, 10, 3, 7, 4],
        borderRadius: 5,
      },
      {
        type: "line" as const,
        label: "Tamamlanan qəza",
        borderColor: "#f87979",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        data: [3, 6, 4, 9, 2, 5, 3],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <div className="card card-stretch mx-5">
      <div className="card-header">
        <h3 className="card-title">Həftəlik Qəza Statistkası</h3>
      </div>
      <div className="card-body">
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
};

export default MixedChart;
