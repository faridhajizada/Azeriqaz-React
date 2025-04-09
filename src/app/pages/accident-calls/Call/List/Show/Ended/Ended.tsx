import React from "react";

function Ended() {
  return (
    <>
      <h4 className="mb-4 text-primary">Yekun</h4>
      <div
        className="tab-pane fade active show"
        id="metadata"
        role="tabpanel"
        style={{ height: "250px", paddingTop: "20px" }}
      >
        <table className="table table-row-dashed table-row-gray-300 gy-7">
          <tbody>
            <tr>
              <td className="w-50 p-0 pt-2">
                <p className="text-muted mb-1">Görülmüş işlər</p>
                <h6 id="done_work" className="fw-bold">
                  işlər vörüldü
                </h6>
              </td>
              <td className="w-50 p-0 pt-2">
                <p className="text-muted mb-1">Çıxarılmış plomb</p>
                <h6 id="removed_seal" className="fw-bold">
                  plomb 3
                </h6>
              </td>
            </tr>
            <tr>
              <td className="w-50 p-0 pt-2">
                <p className="text-muted mb-1">İstifadə olunmuş plomb</p>
                <h6 id="installed_seal" className="fw-bold">
                  plomb +
                </h6>
              </td>
              <td className="w-50 p-0 pt-2">
                <p className="text-muted mb-1">İşçi qeydləri</p>
                <h6 id="employee_note" className="fw-bold">
                  qüyd ×
                </h6>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Ended;
