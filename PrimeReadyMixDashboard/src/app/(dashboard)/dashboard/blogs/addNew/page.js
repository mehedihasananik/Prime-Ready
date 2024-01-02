// import React from "react";
// import CreateBlog from "@/components/blogsComponent/CreateBlog/CreateBlog";
// import CreateBlog from "../../../../../components//blogsComponent/CreateBlog/CreateBlog";
import dynamic from "next/dynamic";

const CreateBlog = dynamic(
  () =>
    import("../../../../../components/blogsComponent/CreateBlog/CreateBlog"),
  {
    ssr: false,
  }
);
const page = () => {
  return (
    <div>
      <CreateBlog />
    </div>
  );
};
export default page;
