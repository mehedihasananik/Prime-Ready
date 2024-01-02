import { getBlogMetaData } from "@/lib/utils";
import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
const page = async () => {
  const editRoute = "dashboard/allpages/blogs/editblogs";
  const endPoints = "blogs";
  const data = await getBlogMetaData();
  let blogRouteAllMetaData;
  if (data) {
    blogRouteAllMetaData = data?.blogRouteAllMetaData;
  }
  return (
    <>
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={blogRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;
