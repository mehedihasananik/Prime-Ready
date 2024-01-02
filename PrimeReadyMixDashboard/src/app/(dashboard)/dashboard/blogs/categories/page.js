import React from "react";
import { getAllCategoryData } from "@/lib/utils";
import CategoryList from "@/components/blogsComponent/CategoryList/CategoryList";
export default async function page() {
  const data = await getAllCategoryData();
  let blogCategories;
  if (data) {
    blogCategories = data?.blogCategories;
  }
  return (
    <div>
      <CategoryList allCategorylist={blogCategories} />
    </div>
  );
}
