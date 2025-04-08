import Create from "./Create/Create";
import Filter from "./Filter/Filter";
import PageTitle from "../../../../components/PageTitle/PageTitle";

function Header() {
  return (
    <>
      <PageTitle
        title="Kategoriyalar"
        breadcrumb={[
          { label: "Dashboard", path: "/dashboard" },
          {
            label: "Qəza Çağırışı",
            path: "/dashboard/accident-calls/category",
          },
          {
            label: "Kategoriyalar",
            path: "/dashboard/accident-calls/category",
          },
        ]}
      />
      <div className="py-8 px-2">
        <div className="d-flex justify-content-between">
          <Filter />
          <Create />
        </div>
      </div>
    </>
  );
}

export default Header;
