import CreateModal from "./CreateModal/CreateModal";
import Filter from "./Filter/Filter";

function Header({ toggleFilter, showFilter }: any) {
  return (
    <>
      <div className="py-8 px-2">
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-light-primary me-3"
            onClick={toggleFilter}
          >
            <i className="fs-2 fas fa-filter"></i> Filter
          </button>
          <CreateModal />
        </div>
        <Filter showFilter={showFilter} />
      </div>
    </>
  );
}

export default Header;
