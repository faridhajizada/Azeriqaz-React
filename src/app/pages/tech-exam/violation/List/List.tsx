import React, { useState } from "react";
import { DeleteModal } from "./../../../../components/DeleteModal/DeleteModal";
import OperationsDropdown from "./../../../../components/OperationsDropdown/OperationsDropdown";

type DataRow = {
  id: number;
  violation: string;
  code: number;
  action: boolean;
};

type Column = {
  key: string;
  label: string;
  isAction?: boolean;
};

const columns: Column[] = [
  { key: "id", label: "ID" },
  { key: "violation", label: "Pozuntu" },
  { key: "code", label: "Kod" },
  { key: "actions", label: "Əməliyyatlar", isAction: true },
];

const data: DataRow[] = [
  {
    id: 1,
    code: 32,
    violation: "Yataq otağında radiator peçi quraşdırılıb	 1",
    action: true,
  },
  {
    id: 2,
    code: 32,
    violation: "Yataq otağında radiator peçi quraşdırılıb	",
    action: true,
  },
  {
    id: 3,
    code: 32,
    violation: "Yataq otağında radiator peçi quraşdırılıb	",
    action: true,
  },
  {
    id: 4,
    code: 32,
    violation: " Yataq otağında radiator peçi quraşdırılıb	",
    action: true,
  },
];

function List() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<DataRow | null>(null);

  const handleDeleteClick = (item: DataRow) => {
    console.log("mauuu");
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      console.log("Удаляем категорию:", itemToDelete);
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
      <DeleteModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        title={"Pozuntunu silmək istədiyinizə əminsiniz?"}
      />
    </div>
  );
}

export default List;
