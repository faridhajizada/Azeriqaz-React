import React from "react";
import { Content } from "./../../../../_metronic/layout/components/content/Content";
import Title from "./Title/Title";
import Filter from "./Filter/Filter";
import Card from "./Card/Card";
import PieCharts from "./PieCharts/PieCharts";
import MixedChart from "./MixedChart/MixedChart";

function Statistics() {
  return (
    <Content>
      <div className="card mb-5 mb-xl-8">
        <Title />
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
