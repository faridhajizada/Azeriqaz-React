import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieCharts() {
  const data = {
    labels: ["Apple", "Samsung", "Huawei"],
    datasets: [
      {
        label: "Market Share",
        data: [40, 30, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="col-md-6">
      <div className="card card-stretch mb-5">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="card-title">Qəza çağırışları</h3>
          <button className="btn btn-sm rotate btn-light-success me-3">
            <i className="fa fa-file-excel fs-3"></i>Excel-ə ixrac
          </button>
        </div>
        <div className="card-body">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
}

export default PieCharts;
