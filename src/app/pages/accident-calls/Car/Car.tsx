import React from "react";
import { Content } from "./../../../../_metronic/layout/components/content/Content";
import CarListHeader from "./Header/Header";
import CarList from "./List/List";
import Pagination from "./../../../components/Pagination/Pagination";

function Car() {
  return (
    <Content>
      <div className={`card mb-5 mb-xl-8`}>
        <CarListHeader />
        <CarList />
        <Pagination
          currentPage={10}
          totalPages={100}
          pageSize={100}
          onPageChange={(page) => console.log("Page changed to:", page)}
          onPageSizeChange={(size) =>
            console.log("Page size changed to:", size)
          }
        />
      </div>
    </Content>
  );
}

export default Car;
