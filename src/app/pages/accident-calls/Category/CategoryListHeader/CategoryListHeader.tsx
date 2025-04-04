import CategoryCreate from "./CategoryCreate/CategoryCreate";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import CategoryTitle from "./CategoryTitle/CategoryTitle";

function CategoryListHeader() {
  return (
    <>
      <CategoryTitle />
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
