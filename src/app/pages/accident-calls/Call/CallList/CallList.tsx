import React from "react";
import { KTIcon } from "./../../../../../_metronic/helpers";
// import { UserActionsCell } from "./../../../../modules/apps/user-management/users-list/table/columns/UserActionsCell";

function CallList() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "code", label: "KOD" },
    { key: "region", label: "Region" },
    { key: "rayon", label: "Rayon" },
    { key: "caller", label: "zəng edən" },
    { key: "accident_address", label: "qəza ünvanı" },
    { key: "category", label: "kategoriya" },
    { key: "subcategory", label: "alt kategoriya" },
    { key: "note", label: "qeyd" },
    { key: "status", label: "status" },
    { key: "worker", label: "işçi" },
    { key: "last_status_date", label: "Son status tarixi" },
    { key: "created_at", label: "Yaradılma tarixi" },
    { key: "operations", label: "əməliyyatlar" },
  ];

  const data = [
    {
      id: 1,
      code: "AQ-2025-33",
      region: "Sumqayıt",
      rayon: "Sumqayıt",
      caller: "Elçin Məmmədov",
      accident_address: "Astara",
      category: "Dəm qazı",
      subcategory: "Yaşayış binasında",
      note: "test qeza",
      status: "Təyin edilib",
      worker: "Amid Quliyev",
      last_status_date: "2025-04-02 14:30",
      created_at: "2025-04-01 10:15",
      operations: "Düzəliş / Sil",
    },
    {
      id: 2,
      code: "AQ-2025-32",
      region: "Gəncə",
      rayon: "Kəpəz",
      caller: "Aysel Həsənova",
      accident_address: "Atatürk prospekti 12",
      category: "Nəqliyyat",
      subcategory: "Avto qəza",
      note: "İki avtomobil toqquşub, xəsarət alan yoxdur",
      status: "Bağlandı",
      worker: "Samir Hüseynov",
      last_status_date: "2025-04-02 16:00",
      created_at: "2025-03-30 09:45",
      operations: "Düzəliş / Sil",
    },
    {
      id: 3,
      code: "C789",
      region: "Sumqayıt",
      rayon: "Xəzər",
      caller: "Ramin Quliyev",
      accident_address: "Sülh küçəsi 18",
      category: "Elektrik",
      subcategory: "Enerji kəsintisi",
      note: "Bütün məhəllədə işıqlar sönüb",
      status: "İcra olunur",
      worker: "Nurlan Qasımov",
      last_status_date: "2025-04-02 12:20",
      created_at: "2025-04-01 14:00",
      operations: "Düzəliş / Sil",
    },
  ];
  type TableColumn = {
    key: string;
    label: string;
  };

  type TableRow = {
    [key: string]: any;
  };

  type Props = {
    className: string;
    columns: TableColumn[];
    data: TableRow[];
  };
  return (
    <div className="card-body py-3">
      {/* begin::Table container */}
      <div className="table-responsive">
        {/* begin::Table */}
        <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
          {/* begin::Table head */}
          <thead>
            <tr className="fw-bold bg-primary text-white fs-5 text-uppercase">
              {columns?.map((column) => (
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

          {/* begin::Table body */}
          <tbody>
            {data?.map((row, index) => (
              <tr
                key={index}
                className="border-bottom"
                style={{ height: "60px" }}
              >
                <td className="text-center">
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary fs-6"
                  >
                    {row.id}
                  </a>
                </td>
                <td>
                  <span className="text-muted fw-semibold d-block fs-6 text-gray-800">
                    {row.code}
                  </span>
                </td>
                <td>
                  <span className="text-gray-900 fw-bold fs-6">
                    {row.caller}
                  </span>
                </td>
                <td>
                  <span className="text-gray-900 fw-bold fs-6">
                    {row.region}
                  </span>
                </td>
                <td>
                  <span className="text-gray-900 fw-bold fs-6">
                    {row.rayon}
                  </span>
                </td>
                <td>
                  <span className="text-gray-900 fw-bold fs-6">
                    {row.accident_address}
                  </span>
                </td>
                <td>
                  <span className="text-gray-900 fw-bold fs-6">
                    {row.category}
                  </span>
                </td>
                <td>
                  <span className="text-gray-900 fw-bold fs-6">
                    {row.subcategory}
                  </span>
                </td>
                <td>
                  <span className="text-gray-900 fw-bold fs-6">{row.note}</span>
                </td>
                <td>
                  <span className="fs-6 badge bg-warning text-white">{row.status}</span>
                </td>
                <td>
                  <span className="text-gray-900 fw-bold fs-6">
                    {row.worker}
                  </span>
                </td>
                <td>
                  <span className="text-muted fw-semibold fs-6 text-gray-700">
                    {row.last_status_date}
                  </span>
                </td>
                <td>
                  <span className="text-muted fw-semibold fs-6 text-gray-700">
                    {row.created_at}
                  </span>
                </td>
                <td className="text-end">
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <i className="fas fa-edit fs-3"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-danger btn-sm"
                  >
                    <i className="fas fa-trash-alt fs-3"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          {/* end::Table body */}
        </table>
        {/* end::Table */}
      </div>
      {/* end::Table container */}
    </div>
  );
}

export default CallList;
