import React from "react";
import { Content } from "./../../../../_metronic/layout/components/content/Content";
import CarListHeader from "./Header/Header";
import CarList from "./List/List";
import CarListFooter from "./Footer/Footer";

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
