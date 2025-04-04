import React from "react";
import { Content } from "./../../../../_metronic/layout/components/content/Content";
import CarListHeader from "./CarListHeader/CarListHeader";
import CarList from "./CarList/CarList";
import CarListFooter from "./CarListFooter/CarListFooter";

function Car() {
  return (
    <Content>
      <div className={`card mb-5 mb-xl-8`}>
        <CarListHeader />
        <CarList />
        <CarListFooter />
      </div>
    </Content>
  );
}

export default Car;
