import CategoryCreate from "./CategoryCreate/CategoryCreate";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import PageTitle from "./../../../../components/PageTitle/PageTitle";

function CategoryListHeader() {
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
          <CategoryFilter />
          <CategoryCreate />
        </div>
      </div>
    </>
  );
}

export default CategoryListHeader;
