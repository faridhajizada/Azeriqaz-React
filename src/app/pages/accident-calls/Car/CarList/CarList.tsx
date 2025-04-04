import React from "react";

type Column = {
  key: string;
  label: string;
  isAction?: boolean;
};

type DataRow = {
  id: number;
  brand: string;
  serial_number: string;
  designation: string;
  region: string;
  status: string;
  call: string;
};

const columns: Column[] = [
  { key: "id", label: "ID" },
  { key: "brand", label: "Marka" },
  { key: "serial_number", label: "Seriya nömrəsi" },
  { key: "designation", label: "Təyinat" },
  { key: "region", label: "Region" },
  { key: "status", label: "Status" },
  { key: "call", label: "Çağırış" },
  { key: "actions", label: "Əməliyyatlar", isAction: true },
];

const data: DataRow[] = [
  {
    id: 1,
    brand: "avto",
    serial_number: "99-LF-442",
    designation: "Sumqayıt",
    region: "Elçin Məmmədov",
    status: "Active",
    call: "Dəm qazı",
  },
  {
    id: 2,
    brand: "bmw",
    serial_number: "10-XX-123",
    designation: "Bakı",
    region: "Nərimanov",
    status: "Inactive",
    call: "Yanğın",
  },
];

const getStatusBadge = (status: string) => {
  let colorClass = "bg-secondary";
  if (status === "Active") colorClass = "bg-success";
  if (status === "Inactive") colorClass = "bg-danger";
  if (status === "Pending") colorClass = "bg-warning text-dark";

  return (
    <span className={`badge ${colorClass} text-white px-3 py-2`}>{status}</span>
  );
};

const CarList: React.FC = () => {
  return (
    <div className="card-body py-3 px-0">
      <div className="table-responsive">
        <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
          <thead>
            <tr className="fw-bold bg-primary text-white fs-5 text-uppercase">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-2 py-4"
                  style={{ border: "1px solid #e0e0e0" }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-bottom"
                style={{ height: "60px" }}
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-2">
                    {column.isAction ? (
                      <div className="text-center">
                        <a
                          href="#"
                          className="btn btn-icon btn-bg-light btn-color-primary btn-sm me-1"
                        >
                          <i className="fas fa-edit fs-3"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-icon btn-bg-light  btn-color-danger btn-sm"
                        >
                          <i className="fas fa-trash-alt fs-3"></i>
                        </a>
                      </div>
                    ) : column.key === "status" ? (
                      getStatusBadge(row[column.key as keyof DataRow])
                    ) : (
                      <span className="text-gray-900 fw-bold fs-6">
                        {row[column.key as keyof DataRow]}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarList;
