import { getHomeMetaData } from "@/lib/utils";
import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
const page = async () => {
  const editRoute = "dashboard/allpages/home/editHome";
  const endPoints = "home";
  const data = await getHomeMetaData();
  let homeRouteAllMetaData;
  if (data) {
    homeRouteAllMetaData = data?.homeRouteAllMetaData;
  }
  return (
    <>
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={homeRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;
