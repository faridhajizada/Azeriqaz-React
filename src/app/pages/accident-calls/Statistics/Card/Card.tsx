import React from "react";

function Card() {
  const accidentCards = [
    {
      id: "totalAccidentCalls",
      value: 0,
      bg: "bg-primary",
      label: "Bütün qəza çağırışları",
    },
    {
      id: "completedAccidentCalls",
      value: 0,
      bg: "bg-success",
      label: "Tamamlanmış qəza çağırışlar",
    },
    {
      id: "onContinueAccidentCalls",
      value: 0,
      bg: "bg-warning",
      label: "Davam edən qəza çağırışları",
    },
    {
      id: "declinedAccidentCalls",
      value: 0,
      bg: "bg-danger",
      label: "Ləğv edilmiş çağırışları",
    },
    {
      id: "notDetectedAccidentCalls",
      value: 0,
      bg: "bg-success",
      label: "Qəza aşkarlanmamış çağırışlar",
    },
  ];
  return (
    <div className="col-md-6">
      <div className="card card-stretch mb-5">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="card-title">Qəza çağırışları</h3>
          <button className="btn btn-sm rotate btn-light-success me-3">
            <i className="fa fa-file-excel fs-3"></i>Excel-ə ixrac
          </button>
        </div>
        <div className="card-body blockui" id="accidentCallsCountBlock">
          <div className="row g-4">
            {accidentCards?.map(({ id, value, bg, label }) => (
              <div key={id} className="col-6">
                <div className={`card card-flush ${bg} h-100`}>
                  <div className="card-body d-flex flex-column h-100">
                    <span
                      className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2"
                      id={id}
                    >
                      {value}
                    </span>
                    <span className="text-white opacity-75 pt-1 fw-semibold fs-3">
                      {label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
