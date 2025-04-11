import React, { useState } from "react";
import { DeleteModal } from "./../../../../components/DeleteModal/DeleteModal";
import OperationsDropdown from "./../../../../components/OperationsDropdown/OperationsDropdown";

type DataRow = {
  id: number;
  permissions: string;
  ability: string[];
};

type Column = {
  key: string;
  label: string;
  isAction?: boolean;
};

export const columns: Column[] = [
  { key: "id", label: "ID" },
  { key: "permissions", label: "səlahiyyət" },
  { key: "ability", label: "İmkanlar" },
  { key: "actions", label: "Əməliyyatlar", isAction: true },
];

const data: DataRow[] = [
  {
    id: 1,
    permissions: "Plan üzrə qrafiklər",
    ability: [
      "Yarat",
      "Redaktə",
      "Bax",
      "Hamısına",
      "bax",
      "Sil",
      "Bərpa et",
      "Qalıcı sil",
    ],
  },
  {
    id: 2,
    permissions: "Tənzimləyici iş planı",
    ability: ["Yarat", "Redaktə", "Sil", "Bərpa et", "Qalıcı sil"],
  },
  {
    id: 3,
    permissions: "Tənzimləyici baxış planı",
    ability: ["Yarat", "Redaktə", "Sil", "Bərpa et", "Qalıcı sil"],
  },
  {
    id: 4,
    permissions: "Texniki baxış mobil",
    ability: ["Yarat", "Redaktə", "Bax", "Hamısına", "bax", "Sil"],
  },
];

const List: React.FC = () => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [itemToDelete, setItemToDelete] = useState<DataRow | null>(null);

  const handleDeleteClick = (item: DataRow): void => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = (): void => {
    if (itemToDelete) {
      console.log("deleted:", itemToDelete);
    }
    setShowDeleteModal(false);
  };

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
                        <OperationsDropdown
                          items={[
                            { label: "Redaktə et" },
                            {
                              label: "Sil",
                              onClick: () => handleDeleteClick(row),
                            },
                          ]}
                        />
                      </div>
                    ) : (
                      <span className="text-gray-900 fw-bold fs-6 d-flex gap-2">
                        {column.key === "ability"
                          ? (row[column.key] as string[]).map(
                              (ability, index) => (
                                <span
                                  key={index}
                                  className="d-block text-primary border border-primary rounded p-1"
                                >
                                  {ability}
                                </span>
                              )
                            )
                          : String(row[column.key as keyof DataRow])}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DeleteModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        title="Dayandırma planı istədiyinizə əminsiniz?"
      />
    </div>
  );
};

export default List;
