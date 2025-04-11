import React from "react";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { Content } from "./../../../../_metronic/layout/components/content/Content";
import Pagination from "./../../../components/Pagination/Pagination";
import Header from "./Header/Header";
import List from "./List/List";

function ExaminationPlan() {
  return (
    <Content>
      <div className={`card mb-5 mb-xl-8`}>
        <PageTitle
          title="Müayinə planı"
          breadcrumb={[
            { label: "Dashboard", path: "/dashboard" },
            {
              label: "Texniki müayinə",
              path: "/dashboard/tech-exam/examination-plan",
            },
            {
              label: "Müayinə planı",
              path: "/dashboard/tech-exam/examination-plan",
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

export default ExaminationPlan;
