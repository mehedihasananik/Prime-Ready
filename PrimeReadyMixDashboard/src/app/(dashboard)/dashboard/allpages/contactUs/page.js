import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
import { getContactMetaData } from "@/lib/utils";
const page = async () => {
  const editRoute = "dashboard/allpages/contactUs/editContactUs";
  const endPoints = "contactUs";
  const data = await getContactMetaData();
  let contactRouteAllMetaData;
  if (data) {
    contactRouteAllMetaData = data?.contactRouteAllMetaData;
  }
  return (
    <>
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={contactRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;
