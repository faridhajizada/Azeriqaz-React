import CallListFilter from "./Filter/Filter";

function Header() {
  return (
    <>
      <div className="py-8 px-2">
        <div className="d-flex justify-content-between">
          <CallListFilter />
        </div>
      </div>
    </>
  );
}

export default Header;
