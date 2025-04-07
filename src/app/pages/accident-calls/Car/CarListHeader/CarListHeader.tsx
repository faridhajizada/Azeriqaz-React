import React, { useState } from "react";
import CreateModal from "./CreateCar/CreateCar";
import CallListFilter from "./CarFilter/CarFilter";
import PageTitle from "./../../../../components/PageTitle/PageTitle";

function CarListHeader() {
  return (
    <>
      <PageTitle
        title="Avtomobillər"
        breadcrumb={[
          { label: "Dashboard", path: "/dashboard" },
          { label: "Qəza Çağırışı", path: "/dashboard/accident-calls/car" },
          { label: "Avtomobillər", path: "/dashboard/accident-calls/car" },
        ]}
      />
      <div className="py-8 px-2">
        <div className="d-flex justify-content-between">
          <CallListFilter />
          <CreateModal />
        </div>
      </div>
    </>
  );
}

export default CarListHeader;
