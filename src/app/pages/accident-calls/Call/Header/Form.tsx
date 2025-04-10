import React, { useState } from "react";
import Flatpickr from "react-flatpickr";

const Form = () => {
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
  const statusOptions = ["Aktiv", "Passiv", "Yoxlanılmamış"];
  const categoryOptions = ["Kategoriya 1", "Kategoriya 2", "Kategoriya 3"];
  const subCategoryOptions = ["Alt kateqoriya 1", "Alt kateqoriya 2"];
  const regionOptions = ["Bakı", "Sumqayit", "Gəncə"];
  const districtOptions = ["Nəsimi", "Nərimanov", "Xətai"];

  const inputs = [
    {
      name: "worker",
      type: "select",
      placeholder: "İşçi seçin",
      options: workerOptions,
    },
    { name: "subscriberCode", type: "text", placeholder: "Abunəçi kodu" },
    { name: "meterNumber", type: "text", placeholder: "Sayğac nömrəsi" },
    { name: "phoneNumber", type: "text", placeholder: "Telefon nömrəsi" },
    {
      name: "status",
      type: "select",
      placeholder: "Status seçin",
      options: statusOptions,
    },
    { name: "code", type: "text", placeholder: "Kod" },
    { name: "crmCode", type: "text", placeholder: "CRM Kodu" },
    { name: "caller", type: "text", placeholder: "Zəng edən" },
    {
      name: "category",
      type: "select",
      placeholder: "Kateqoriya seçin",
      options: categoryOptions,
    },
    {
      name: "subCategory",
      type: "select",
      placeholder: "Alt kateqoriya seçin",
      options: subCategoryOptions,
    },
    {
      name: "region",
      type: "select",
      placeholder: "Region seçin",
      options: regionOptions,
    },
    {
      name: "district",
      type: "select",
      placeholder: "Rayon seçin",
      options: districtOptions,
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
        <div className="col-md-3">
          <Flatpickr
            value={formData.dateRange2}
            onChange={(date) => setFormData({ ...formData, dateRange2: date })}
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
  );
};

export default Form;
