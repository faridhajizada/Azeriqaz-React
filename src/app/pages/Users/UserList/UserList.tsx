import React from "react";
import { KTIcon } from "./../../../../_metronic/helpers";
import { UserActionsCell } from "./../../../modules/apps/user-management/users-list/table/columns/UserActionsCell";

function UserList() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "İstifadəçi" },
    { key: "number", label: "Nömrə" },
    { key: "region", label: "Region" },
    { key: "rayon", label: "Rayon" },
    { key: "role", label: "Rol" },
    { key: "date", label: "Qoşulma tarixi" },
    { key: "actions", label: "Əməliyyatlar" },
  ];

  const data = [
    {
      id: 1,
      name: "Zərifə Hüseynova",
      email: "zerife.huseynova@socar.az",
      title: "ZH",
      number: "+994501234567",
      region: "Sumqayıt",
      rayon: "Sumqayıt",
      badgeClass: "bg-light-primary text-primary",
      role: "Qəza Dispetçer",
      date: "01.01.2021",
      time: "10:00",
      actions: {
        edit: true,
        delete: true,
      },
    },
    {
      id: 2,
      name: "Yaşar Məmmədov",
      email: "yashar.memmedov@socar.az",
      title: "YM",
      number: "+994501234567",
      region: "Gəncə RQİİ",
      rayon: "Goranboy",
      badgeClass: "bg-light-primary text-primary",
      role: "Qəza İşçi",
      date: "01.01.2021",
      time: "10:00",
      actions: {
        edit: true,
        delete: true,
      },
    },
    {
      id: 3,
      name: "Aysel Hüseynova",
      email: "aysel.huseynova@socar.az",
      title: "AH",
      number: "+994501234567",
      region: "Sumqayıt",
      rayon: "Sumqayıt",
      badgeClass: "bg-light-primary text-primary",
      role: "Qəza Dispetçer",
      date: "01.01.2021",
      time: "10:00",
      actions: {
        edit: true,
        delete: true,
      },
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
            <tr className="fw-bold  bg-primary text-white fs-5 text-uppercase ">
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

          <tbody>
            {data?.map((row, index) => (
              <tr
                key={index}
                style={{
                  marginTop: "20px",
                  height: "80px",
                  border: "1px solid #80808014",
                }}
              >
                <td className="text-center">
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary fs-6 text-center"
                  >
                    {row.id}
                  </a>
                </td>
                <td className="d-flex align-items-center">
                  <div className="symbol symbol-50px me-2 br-2 symbol-circle">
                    <span className="symbol-label bg-light-danger">
                      <i className="ki-duotone ki-scroll fs-2 text-danger">
                        {row.title}
                      </i>
                    </span>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-5"
                    >
                      {row.name}
                    </a>
                    <span className="text-muted fw-semibold d-block fs-6 text-gray-800">
                      {row.email}
                    </span>
                  </div>
                </td>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6"
                  >
                    {row.number}
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6"
                  >
                    {row.region}
                  </a>
                </td>
                <td className="text-gray-900 fw-bold text-hover-primary fs-6">
                  {row.rayon}
                </td>
                <td>
                  <span className={`fs-6 badge ${row.badgeClass}`}>
                    {row.role}
                  </span>
                </td>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6"
                  >
                    {row.date}
                  </a>
                  <span className="text-muted fw-semibold d-block fs-6 text-gray-800">
                    {row.time}
                  </span>
                </td>
                <td className="text-end">
                  {/* <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon iconName="switch" className="fs-3" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon iconName="pencil" className="fs-3" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTIcon iconName="trash" className="fs-3" />
                  </a> */}
                  <UserActionsCell />
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

export default UserList;
