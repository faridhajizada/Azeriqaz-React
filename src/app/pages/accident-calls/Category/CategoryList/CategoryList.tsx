import React from "react";

function CategoryList() {
  type Column = {
    key: string;
    label: string;
    isAction?: boolean;
  };

  type DataRow = {
    id: number;
    category: string;
    high_category: string;
  };

  const columns: Column[] = [
    { key: "id", label: "ID" },
    { key: "category", label: "kategoriya" },
    { key: "high_category", label: "üst kategoriyası" },
    { key: "actions", label: "Əməliyyatlar", isAction: true },
  ];

  const data: DataRow[] = [
    {
      id: 1,
      category: "Ağac düşüb",
      high_category: "Qaz sızma/Qaz iyi",
    },
  ];

  return (
    <div className="card-body py-3 px-2">
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
}

export default CategoryList;
