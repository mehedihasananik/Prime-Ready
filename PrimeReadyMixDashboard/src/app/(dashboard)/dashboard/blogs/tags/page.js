import React from "react";
import { getAllTagData } from "@/lib/utils";
import TagList from "../../../../../components/blogsComponent/TagList/TagList";
export default async function page() {
  const data = await getAllTagData();
  let blogTags;
  if (data) {
    blogTags = data?.blogTags;
  }
  return (
    <div>
      <TagList allTaglist={blogTags} />
    </div>
  );
}
