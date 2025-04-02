import React from "react";
import { KTIcon } from "../../../helpers";

type TableColumn = {
  key: string;
  label: string;
};

type TableRow = {
  [key: string]: any;
};

type title = string;
type route = string;

type Props = {
  className: string;
  columns: TableColumn[];
  data: TableRow[];
  title: title;
  route: route;
};

const TablesWidget13: React.FC<Props> = ({
  className,
  columns,
  data,
  title,
  route,
}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-1 mb-1 text-gray-900">
            {title}
          </span>
          <span className="text-muted mt-1 fw-semibold fs-7 text-gray-800">
            {route}
          </span>
        </h3>
        <div className="card-toolbar">
          {/* begin::Menu */}
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTIcon iconName="category" className="fs-2" />
          </button>
          {/* begin::Menu 2 */}
          <div
            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px"
            data-kt-menu="true"
          >
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                Quick Actions
              </div>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className="separator mb-3 opacity-75"></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                New Ticket
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                New Customer
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div
              className="menu-item px-3"
              data-kt-menu-trigger="hover"
              data-kt-menu-placement="right-start"
              data-kt-menu-flip="left-start, top"
            >
              {/* begin::Menu item */}
              <a href="#" className="menu-link px-3">
                <span className="menu-title">New Group</span>
                <span className="menu-arrow"></span>
              </a>
              {/* end::Menu item */}
              {/* begin::Menu sub */}
              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                {/* begin::Menu item */}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Admin Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Staff Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Member Group
                  </a>
                </div>
                {/* end::Menu item */}
              </div>
              {/* end::Menu sub */}
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                New Contact
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className="separator mt-3 opacity-75"></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <div className="menu-content px-3 py-3">
                <a className="btn btn-primary btn-sm px-4" href="#">
                  Generate Reports
                </a>
              </div>
            </div>
            {/* end::Menu item */}
          </div>
          {/* end::Menu 2 */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body py-3">
        {/* begin::Table container */}
        <div className="table-responsive">
          {/* begin::Table */}
          <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
            {/* begin::Table head */}
            <thead>
              <tr className="fw-bold  bg-primary text-white fs-5 text-uppercase ">
                {/* <th className="w-25px">
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                      data-kt-check="true"
                      data-kt-check-target=".widget-13-check"
                    />
                  </div>
                </th> */}
                {columns?.map((column) => (
                  <th key={column.key} className="px-2 py-4">
                    {column.label}
                  </th>
                ))}

                {/* <th className="min-w-150px">Order Id</th>
                <th className="min-w-140px">Country</th>
                <th className="min-w-120px">Date</th>
                <th className="min-w-120px">Company</th>
                <th className="min-w-120px">Total</th>
                <th className="min-w-120px">Status</th>
                <th className="min-w-100px text-end">Actions</th> */}
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {data?.map((row, index) => (
                <tr key={index} style={{ marginTop: "20px", height: "80px" }}>
                  {/* <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input
                        className="form-check-input widget-13-check"
                        type="checkbox"
                        value="1"
                      />
                    </div>
                  </td> */}
                  <td className="text-center">
                    <a
                      href="#"
                      className="text-gray-900 fw-bold text-hover-primary fs-6 text-center"
                    >
                      {row.id}
                    </a>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-50px me-2">
                      <span className="symbol-label bg-light-danger">
                        <i className="ki-duotone ki-scroll fs-2x text-danger">
                          {row.title}
                        </i>
                      </span>
                    </div>

                    <div>
                      <a
                        href="#"
                        className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6"
                      >
                        {row.name}
                      </a>
                      <span className="text-muted fw-semibold d-block fs-7 text-gray-800">
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
                    <span className={`badge ${row.badgeClass}`}>
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
                    <span className="text-muted fw-semibold d-block fs-7 text-gray-800">
                      {row.time}
                    </span>
                  </td>
                  <td className="text-end">
                    <a
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
      {/* begin::Body */}
    </div>
  );
};

export { TablesWidget13 };
