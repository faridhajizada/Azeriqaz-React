import React from "react";
import Form from "./Form/Form";
import Actions from "./Action/Actions";
import "./Filter.scss";

const Filter = ({ showFilter }) => {
  return (
    <div className={`filter-accordion mt-3 ${showFilter ? "open" : ""}`}>
      <div className="card p-4 shadow-sm">
        <div className="row">
          <div className="col-md-10">
            <Form />
          </div>
          <div className="col-md-2">
            <Actions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
