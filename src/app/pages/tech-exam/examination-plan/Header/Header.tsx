import Create from "./Create/Create";
// import Filter from "./Filter/Filter";

function Header() {
  return (
    <>
      <div className="py-8 px-2">
        <div className="d-flex justify-content-between">
          {/* <Filter /> */}
          <Create />
        </div>
      </div>
    </>
  );
}

export default Header;
