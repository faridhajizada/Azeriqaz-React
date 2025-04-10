import React, { useState } from "react";
import { Content } from "../../../_metronic/layout/components/content/index.ts";
import List from "./List/List.tsx";
import Header from "./Header/Header.tsx";
import PageTitle from "../../components/PageTitle/PageTitle.tsx";
import Pagination from "../../components/Pagination/Pagination.tsx";

function Users() {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <>
      <Content>
        <div className={`card mb-5 mb-xl-8`}>
          <PageTitle
            title="İstifadəçilər"
            breadcrumb={[
              { label: "Dashboard", path: "/dashboard" },
              {
                label: "İstifadəçilər",
                path: "/dashboard/users",
              },
            ]}
          />
          <Header toggleFilter={toggleFilter} showFilter={showFilter} />
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
    </>
  );
}

export default Users;
