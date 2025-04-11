import React from "react";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { Content } from "./../../../../_metronic/layout/components/content/Content";
import Pagination from "./../../../components/Pagination/Pagination";
import Header from "./Header/Header";
import List from "./List/List";

function Violation() {
  return (
    <Content>
      <div className={`card mb-5 mb-xl-8`}>
        <PageTitle
          title="Pozuntular"
          breadcrumb={[
            { label: "Dashboard", path: "/dashboard" },
            {
              label: "Texniki müayinə",
              path: "/dashboard/tech-exam/violation",
            },
            {
              label: "Pozuntular",
              path: "/dashboard/tech-exam/violation",
            },
          ]}
        />
        <Header />
        <List />
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

export default Violation;
