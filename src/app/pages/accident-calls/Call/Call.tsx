import React from "react";
import { Content } from "./../../../../_metronic/layout/components/content/Content";
import Header from "./Header/Header";
import List from "./List/List";
import Pagination from "./../../../components/Pagination/Pagination";

function Call() {
  return (
    <Content>
      <div className={`card mb-5 mb-xl-8`}>
        <Header />
        <List />
        <Pagination
          currentPage={4}
          totalPages={99}
          pageSize={99}
          onPageChange={(page) => console.log("Page changed to:", page)}
          onPageSizeChange={(size) =>
            console.log("Page size changed to:", size)
          }
        />
      </div>
    </Content>
  );
}

export default Call;
