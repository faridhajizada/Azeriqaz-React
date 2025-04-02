import CreateModal from "./CreateModal/CreateModal";
import ExportBtn from "./ExportBtn/ExportBtn";

function UsersListHeader() {
  return (
    <div className="card-header border-0 pt-5">
      <h3 className="card-title align-items-start flex-column">
        <span className="card-label fw-bold fs-1 mb-1 text-gray-900">
          İstifadəçilər
        </span>
        <span className="text-muted mt-1 fw-semibold fs-7 text-gray-800">
          Dashboard / Istifadəçilər
        </span>
      </h3>
      <div className="d-flex justify-content-end">
        <ExportBtn />
        <CreateModal />
      </div>
    </div>
  );
}

export default UsersListHeader;
