import React, { useState } from "react";
import Flatpickr from "react-flatpickr";

const Form = () => {
  const [formData, setFormData] = useState({
    dateRange1: null,
    newData: "",
    personalCode: "",
    abonent: "",
    abonentCode: "",
    statusOptions: null,
    yearlyOptions: null,
    orderedOptions: null,
    adress: "",
    meterNumber: "",
    regionOptions: null,
    rayonOptions: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const workerOptions = ["İşçi 1", "İşçi 2", "İşçi 3"];
  const dataOptions = ["Bugun", "Dünən", "Bu həftə", "Bu ay"];
  const statusOptions = ["Status 1", "Status 2", "Status 3"];
  const yearlyOptions = ["İl 1", "İl 2", "İl 3"];
  const orderedOptions = ["Sifariş 1", "Sifariş 2", "Sifariş 3"];
  const regionOptions = ["Region 1", "Region 2", "Region 3"];
  const rayonOptions = ["Rayon 1", "Rayon 2", "Rayon 3"];

  const inputs = [
    {
      name: "dataOptions",
      type: "select",
      placeholder: "Bugun",
      options: dataOptions,
    },
    {
      name: "workerOptions",
      type: "select",
      placeholder: "İşçi seçin",
      options: workerOptions,
    },
    { name: "personalCode", type: "text", placeholder: "İşçi personal kod " },
    { name: "abonent", type: "text", placeholder: "Abonent   " },
    { name: "abonentCode", type: "text", placeholder: "Abonent Kodu  " },
    {
      name: "status",
      type: "select",
      placeholder: "Status seçin",
      options: statusOptions,
    },
    {
      name: "yearlyOptions",
      type: "select",
      placeholder: "Illik",
      options: yearlyOptions,
    },
    {
      name: "orderedOptions",
      type: "select",
      placeholder: "Sifarişci",
      options: orderedOptions,
    },
    { name: "adress", type: "text", placeholder: "Ünvan" },
    { name: "meterNumber", type: "text", placeholder: "Sayğac nömrəsi" },
    {
      name: "regionOptions",
      type: "select",
      placeholder: "Region seçin",
      options: regionOptions,
    },
    {
      name: "rayonOptions",
      type: "select",
      placeholder: "Rayon seçin",
      options: rayonOptions,
    },
  ];

  return (
    <div className="call-list-form">
      <div className="row g-3">
        <div className="col-md-3">
          <Flatpickr
            value={formData.dateRange1}
            onChange={(date) => setFormData({ ...formData, dateRange1: date })}
            className="form-control"
            options={{
              mode: "range",
              dateFormat: "d/m/Y",
            }}
            placeholder="02/04/2025 - 02/04/2025"
          />
        </div>

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
  );
};

export default Form;
