import React from "react";

const CallListForm = () => {
  return (
    <div className="row">
      {["İstifadəçi adı", "Email", "Rolu"].map((label, index) => (
        <div key={index} className="mb-3 col-md-3">
          <label className="form-label">{label}</label>
          {label === "Rolu" ? (
            <select className="form-control">
              <option value="">Seçin</option>
              <option value="admin">Admin</option>
              <option value="user">İstifadəçi</option>
            </select>
          ) : (
            <input type={label === "Email" ? "email" : "text"} className="form-control" placeholder={label} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CallListForm;