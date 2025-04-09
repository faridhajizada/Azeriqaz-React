import React from "react";

interface StatusData {
  id: number;
  employer: string;
  status: string;
  time: string;
  difference: string;
  note: string;
}

const statusData: StatusData[] = [
  {
    id: 1,
    employer: "Amid Quliyev",
    status: "Tamamlanıb",
    time: "25-11-2024 20:30",
    difference: "30 san.",
    note: "götürüldü",
  },
  {
    id: 2,
    employer: "Amid Quliyev",
    status: "Tamamlanıb",
    time: "25-11-2024 20:30",
    difference: "30 san.",
    note: "götürüldü",
  },
  {
    id: 3,
    employer: "Amid Quliyev",
    status: "Tamamlanıb",
    time: "25-11-2024 20:30",
    difference: "30 san.",
    note: "götürüldü",
  },
  {
    id: 4,
    employer: "Amid Quliyev",
    status: "Tamamlanıb",
    time: "25-11-2024 20:30",
    difference: "30 san.",
    note: "götürüldü",
  },
];

function Status() {
  return (
    <>
      <h4 className="mb-4 text-primary">Status tarixçəsi</h4>
      <div className="separator separator-dashed mb-6"></div>
      <div className="table-responsive">
        <table className="table align-middle table-row-dashed fs-6 gy-5">
          <thead>
            <tr className="text-start text-gray-700 fw-bold fs-7 text-uppercase gs-0">
              <th>İşçi</th>
              <th>Status</th>
              <th>Vaxt</th>
              <th>Fərq</th>
              <th>Qeyd</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 fw-semibold">
            {statusData.map((item) => (
              <tr key={item.id}>
                <td>{item.employer}</td>
                <td>{item.status}</td>
                <td>{item.time}</td>
                <td>{item.difference}</td>
                <td>{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Status;
