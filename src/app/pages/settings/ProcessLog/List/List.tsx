type DataRow = {
  id: number;
  action: string;
  update: string[];
  user: string;
  time: string;
};

type Column = {
  key: keyof DataRow;
  label: string;
};

export const columns: Column[] = [
  { key: "id", label: "ID" },
  { key: "action", label: "Əməliyyat" },
  { key: "update", label: "Dəyişikliklər" },
  { key: "user", label: "İstifadəçi" },
  { key: "time", label: "Tarix" },
];

const data: DataRow[] = [
  {
    id: 3031,
    action: "ExaminationYearly Redaktə edildi",
    update: ["Ad", "Soyad"],
    user: "Amid Quliyev	",
    time: "2023-10-01 12:00",
  },
  {
    id: 3032,
    action: "ExaminationYearly Redaktə edildi",
    update: ["Ad", "Soyad"],
    user: "Farid Hajizada",
    time: "2025-4-04 12:00",
  },
];

const List: React.FC = () => {
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
                    <span className="text-gray-900 fw-bold fs-6 d-flex gap-2 flex-wrap">
                      {column.key === "permission"
                        ? row.permission.map((perm, index) => (
                            <span
                              key={index}
                              className="d-block text-primary border border-primary rounded p-1"
                            >
                              {perm}
                            </span>
                          ))
                        : String(row[column.key])}
                    </span>
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

export default List;
