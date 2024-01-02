import React from "react";
import dynamic from "next/dynamic";
import { getAllBlogsData } from "@/lib/utils";
const BlogList = dynamic(
  () => import("../../../../components/blogsComponent/BlogList/BlogList")
);
const page = async () => {
  const data = await getAllBlogsData();

  return (
    <div>
      <BlogList allBlogList={data} />
    </div>
  );
};
export default page;
