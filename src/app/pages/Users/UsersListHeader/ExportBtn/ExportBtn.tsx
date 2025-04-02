import React from "react";
import { KTIcon } from "./../../../../../_metronic/helpers";

function ExportBtn() {
  return (
    <button type="button" className="btn btn-light-primary me-3">
      <KTIcon iconName="exit-up" className="fs-2" />
      Export
    </button>
  );
}

export default ExportBtn;
