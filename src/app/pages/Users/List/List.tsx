import React, { useState } from "react";
import OperationsDropdown from "./../../../components/OperationsDropdown/OperationsDropdown";
import { DeleteModal } from "./../../../components/DeleteModal/DeleteModal";

type TableColumn = {
  key: string;
  label: string;
};

type TableRow = {
  id: number;
  name: string;
  email: string;
  title: string;
  number: string;
  region: string;
  rayon: string;
  role: string;
  date: string;
  time: string;
  actions: {
    edit: boolean;
    delete: boolean;
  };
};

const columns: TableColumn[] = [
  { key: "id", label: "ID" },
  { key: "name", label: "İstifadəçi" },
  { key: "number", label: "Nömrə" },
  { key: "region", label: "Region" },
  { key: "rayon", label: "Rayon" },
  { key: "role", label: "Rol" },
  { key: "date", label: "Qoşulma tarixi" },
  { key: "actions", label: "Əməliyyatlar" },
];

const data: TableRow[] = [
  {
    id: 1,
    name: "Zərifə Hüseynova",
    email: "zerife.huseynova@socar.az",
    title: "ZH",
    number: "+994501234567",
    region: "Sumqayıt",
    rayon: "Sumqayıt",
    role: "Qəza Dispetçer",
    date: "01.01.2021",
    time: "10:00",
    actions: { edit: true, delete: true },
  },
  {
    id: 2,
    name: "Yaşar Məmmədov",
    email: "yashar.memmedov@socar.az",
    title: "YM",
    number: "+994501234567",
    region: "Gəncə RQİİ",
    rayon: "Goranboy",
    role: "Qəza İşçi",
    date: "01.01.2021",
    time: "10:00",
    actions: { edit: true, delete: true },
  },
  {
    id: 3,
    name: "Aysel Hüseynova",
    email: "aysel.huseynova@socar.az",
    title: "AH",
    number: "+994501234567",
    region: "Sumqayıt",
    rayon: "Sumqayıt",
    role: "Qəza Dispetçer",
    date: "01.01.2021",
    time: "10:00",
    actions: { edit: true, delete: true },
  },
];

function List() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<TableRow | null>(null);

  const handleDeleteClick = (item: TableRow) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      console.log("Удаляем пользователя:", itemToDelete);
    }
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="card-body px-2 py-3">
        <div className="table-responsive">
          <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
            <thead>
              <tr className="fw-bold bg-primary text-white fs-5 text-uppercase">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="px-2 py-4 "
                    style={{ border: "1px solid white" }}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} style={{ height: "80px" }}>
                  <td className="text-center">{row.id}</td>

                  <td className="d-flex align-items-center">
                    <div className="symbol symbol-50px me-2 symbol-circle">
                      <span
                        className="symbol-label bg-light-danger  fs-2 fw-bol"
                        style={{ color: "red" }}
                      >
                        {row.title}
                      </span>
                    </div>
                    <div>
                      <div className="fw-bold fs-5">{row.name}</div>
                      <div className="text-muted fs-6">{row.email}</div>
                    </div>
                  </td>

                  <td className="fw-semibold">{row.number}</td>
                  <td className="fw-semibold">{row.region}</td>
                  <td className="fw-semibold">{row.rayon}</td>
                  <td>
                    <span
                      style={{ padding: "0 60px " }}
                      className={`text-primary border border-1 border-primary rounded px-2 py-1`}
                    >
                      {row.role}
                    </span>
                  </td>
                  <td>
                    <div className="fw-semibold">{row.date}</div>
                    <div className="text-muted fs-6">{row.time}</div>
                  </td>
                  <td>
                    <OperationsDropdown
                      items={[
                        {
                          label: "Redaktə et",
                          onClick: () => console.log("Edit:", row),
                        },
                        { label: "Sil", onClick: () => handleDeleteClick(row) },
                      ]}
                    />
                  </td>
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
        title="Silmək istədiyinizə əminsiniz?"
      />
    </>
  );
}

export default List;
