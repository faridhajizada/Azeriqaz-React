import React, { useState } from "react";
import OperationsDropdown from "../../../../components/OperationsDropdown/OperationsDropdown";

import { DeleteModal } from "./../../../../components/DeleteModal/DeleteModal";

function List() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDeleteClick = (item: any) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting:", itemToDelete);
    setShowDeleteModal(false);
  };

  const handleClose = () => {
    setDeleteItem(false);
  };

  const columns = [
    { key: "id", label: "ID" },
    { key: "inspector", label: "Nəzarətçi" },
    { key: "personalCode", label: "Personal Kod" },
    { key: "subscriber", label: "Abunəçi" },
    { key: "subscriberCode", label: "Abonent kodu" },
    { key: "address", label: "Ünvan" },
    { key: "currentStatus", label: "Cari status" },
    { key: "phoneNumber", label: "Nömrə" },
    { key: "meter", label: "Sayğac" },
    { key: "inspectionDate", label: "Baxış Tarix" },
    { key: "operations", label: "Əməliyyatlar" },
  ];

  const data = [
    {
      id: 11875,
      inspector: "Əhmədov Tural",
      personalCode: "71946",
      subscriber: "HÜSEYNOV QALİB SİRAC OĞLU",
      subscriberCode: "017721804000621",
      address: "Saray bağları ev 4062/1",
      currentStatus: "yeni",
      phoneNumber: "",
      meter: "20110090127",
      inspectionDate: "	05/03/2025",
    },
    {
      id: 11874,
      inspector: "YƏHYAYEV MEHMAN KƏRİM OĞLU	",
      personalCode: "71946",
      subscriber: "HÜSEYNOV QALİB SİRAC OĞLU",
      subscriberCode: "017721804000609",
      address: "Saray bağları ev 4062/1",
      currentStatus: "yeni",
      phoneNumber: "",
      meter: "20110093929",
      inspectionDate: "	05/03/2025",
    },
    {
      id: 11873,
      inspector: "ORUCOV RAFİQ YUSİF OĞLU",
      personalCode: "71946",
      subscriber: "HÜSEYNOV QALİB SİRAC OĞLU",
      subscriberCode: "017721804000608",
      address: "Saray bağları ev 4062/1",
      currentStatus: "yeni",
      phoneNumber: "",
      meter: "20110092951",
      inspectionDate: "	05/03/2025",
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

                    if (col.key === "currentStatus") {
                      return (
                        <td key={col.key}>
                          <span className="fs-6 badge bg-light-primary text-primary">
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
                              { label: "Redaktə et" },
                              {
                                label: "Sil",
                                onClick: () => handleDeleteClick(),
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
      <DeleteModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        title={"Qeyd olunan Müayinə planı silmək istədiyinizdən əminsiniz?"}
      />
    </>
  );
}

export default List;
