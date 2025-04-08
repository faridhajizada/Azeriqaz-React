import React, { useState } from "react";
import { Modal, Button, Tab, Nav, Form } from "react-bootstrap";
import OperationsDropdown from "../../../../components/OperationsDropdown/OperationsDropdown";
import Show from "./Show/Show";
import Passive from "./Passive/Passive";
import Delete from "./Delete/Delete";

function List() {
  const [show, setShow] = useState(false);
  const [passive, setPassive] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handlePassive = () => {
    setPassive(true);
  };

  const handleDelete = () => {
    setDeleteItem(true);
  };

  const handleClose = () => {
    setShow(false);
    setPassive(false);
    setDeleteItem(false);
  };

  const columns = [
    { key: "id", label: "ID" },
    { key: "code", label: "KOD" },
    { key: "caller", label: "Zəng edən" },
    { key: "region", label: "Region" },
    { key: "rayon", label: "Rayon" },
    { key: "accident_address", label: "Qəza ünvanı" },
    { key: "category", label: "Kategoriya" },
    { key: "subcategory", label: "Alt Kategoriya" },
    { key: "note", label: "Qeyd" },
    { key: "status", label: "Status" },
    { key: "worker", label: "İşçi" },
    { key: "last_status_date", label: "Status tarixi" },
    { key: "created_at", label: "Yaradılma tarixi" },
    { key: "operations", label: "Əməliyyatlar" },
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
    },
  ];

  return (
    <>
      <div className="card-body py-3 px-2">
        <div className="table-responsive">
          <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
            <thead>
              <tr className="fw-bold bg-primary text-white fs-6 text-uppercase">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="px-2 py-4"
                    style={{ fontSize: "12px", border: "1px solid white" }}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="border-bottom">
                  {columns.map((col) => {
                    const value = row[col.key];

                    if (col.key === "status") {
                      return (
                        <td key={col.key}>
                          <span className="fs-6 badge bg-danger text-white">
                            {value}
                          </span>
                        </td>
                      );
                    }

                    if (col.key === "operations") {
                      return (
                        <td key={col.key} className="text-end">
                          <OperationsDropdown
                            items={[
                              {
                                label: "Bax",
                                onClick: () => handleShow(),
                              },
                              {
                                label: "Aktı hazırla",
                                onClick: () => alert("Akt"),
                              },
                              {
                                label: "Passiv et",
                                onClick: () => handlePassive(),
                              },
                              { label: "Redaktə et" },
                              {
                                label: "Sil",
                                onClick: () => handleDelete(),
                              },
                            ]}
                          />
                        </td>
                      );
                    }

                    return (
                      <td key={col.key}>
                        <span className="text-gray-900 fw-semibold d-block fs-6 text-wrap">
                          {value}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Show show={show} handleClose={handleClose} />
      <Passive passive={passive} handleClose={handleClose} />
      <Delete deleteItem={deleteItem} handleClose={handleClose} />
    </>
  );
}

export default List;
