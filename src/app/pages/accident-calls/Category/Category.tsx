import React from "react";
import { Content } from "./../../../../_metronic/layout/components/content/Content";
import CategoryListHeader from "./CategoryListHeader/CategoryListHeader";
import CategoryList from "./CategoryList/CategoryList";
import CategoryListFooter from "./CategoryListFooter/CategoryListFooter";

function Category() {
  return (
    <Content>
      <div className={`card mb-5 mb-xl-8`}>
        <CategoryListHeader />
        <CategoryList />
        <CategoryListFooter />
      </div>
    </Content>
  );
}

export default Category;
