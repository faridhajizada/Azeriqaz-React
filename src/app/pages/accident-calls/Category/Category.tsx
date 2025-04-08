import React from "react";
import { Content } from "./../../../../_metronic/layout/components/content/Content";
import CategoryListHeader from "./Header/Header";
import List from "./List/List";
import Footer from "./Footer/Footer";

function Category() {
  return (
    <Content>
      <div className={`card mb-5 mb-xl-8`}>
        <CategoryListHeader />
        <List />
        <Footer />
      </div>
    </Content>
  );
}

export default Category;
