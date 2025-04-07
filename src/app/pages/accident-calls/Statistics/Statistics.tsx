import React from "react";
import { Content } from "./../../../../_metronic/layout/components/content/Content";
import Filter from "./Filter/Filter";
import Card from "./Card/Card";
import PieCharts from "./PieCharts/PieCharts";
import MixedChart from "./MixedChart/MixedChart";
import PageTitle from "./../../../components/PageTitle/PageTitle";

function Statistics() {
  return (
    <Content>
      <div className="card mb-5 mb-xl-8">
        <PageTitle
          title="Statistikalar"
          breadcrumb={[
            { label: "Dashboard", path: "/dashboard" },
            {
              label: "Qəza Çağırışı",
              path: "/dashboard/accident-calls/statistics",
            },
            {
              label: "Statistikalar",
              path: "/dashboard/accident-calls/statistics",
            },
          ]}
        />
        <Filter />
        <div className="row">
          <Card />
          <PieCharts />
        </div>
        <div className="row">
          <MixedChart />
        </div>
      </div>
    </Content>
  );
}

export default Statistics;
