import React, { useState } from "react";
import CallListTitle from "./CarTitle/CarTitle";
import CreateModal from "./CreateCarModal/CreateCarModal";
import CallListFilter from "./CarFilter/CarFilter";

function CarListHeader() {
  return (
    <>
      <CallListTitle />

      <div className="py-8 px-10">
        <div className="d-flex justify-content-between">
          <CallListFilter />
          <CreateModal />
        </div>
      </div>
    </>
  );
}

export default CarListHeader;
