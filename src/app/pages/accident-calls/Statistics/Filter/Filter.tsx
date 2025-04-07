import React, { useState } from "react";
import Flatpickr from "react-flatpickr";

function Filter() {
  const [formData, setFormData] = useState({
    dateRange1: null,
    dateRange2: null,
    worker: "",
    subscriberCode: "",
    meterNumber: "",
    phoneNumber: "",
    status: "",
    code: "",
    crmCode: "",
    caller: "",
    category: "",
    subCategory: "",
    region: "",
    district: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const workerOptions = ["İşçi 1", "İşçi 2", "İşçi 3"];

  const inputs = [
    {
      name: "worker",
      type: "select",
      placeholder: "Region seçin",
      options: workerOptions,
    },
    {
      name: "worker",
      type: "select",
      placeholder: "Rayon seçin",
      options: workerOptions,
    },
    {
      name: "worker",
      type: "select",
      placeholder: "Kategoriya seçin",
      options: workerOptions,
    },

    {
      name: "worker",
      type: "select",
      placeholder: "İşçi",
      options: workerOptions,
    },
    {
      name: "worker",
      type: "select",
      placeholder: "Qəza çağırış statusu",
      options: workerOptions,
    },
  ];

  return (
    <div className="row mt-4 p-4">
      <h4 className="py-4 text-gray-700">Filter</h4>
      <div className="col-md-10">
        <div className="call-list-form">
          <div className="row g-3">
            <div className="col-md-3">
              <Flatpickr
                value={formData.dateRange1}
                onChange={(date) =>
                  setFormData({ ...formData, dateRange1: date })
                }
                className="form-control"
                options={{
                  mode: "range",
                  dateFormat: "d/m/Y",
                }}
                placeholder="02/04/2025 - 02/04/2025"
              />
            </div>

            {/* Остальные поля */}
            {inputs.map(({ name, type, placeholder, options }) => (
              <div className="col-md-3" key={name}>
                {type === "select" ? (
                  <select
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">{placeholder}</option>
                    {options &&
                      options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="form-control"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div>
          {[
            {
              label: "Axtar",
              icon: "fas fa-search",
              className: "btn btn-primary",
            },
            {
              label: "Sıfırla",
              icon: "fas fa-sync-alt",
              className: "btn btn-secondary text-dark",
            },
            // {
            //   label: "Excel-ə ixrac",
            //   icon: "fas fa-file-excel",
            //   className: "btn btn-success",
            // },
          ].map((button, index) => (
            <div key={index} className="mb-3 col-md-12">
              <div className="d-flex align-items-end h-100">
                <button className={`${button.className} w-100 fw-bold py-3`}>
                  <i className={`${button.icon} me-2`}></i> {button.label}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
