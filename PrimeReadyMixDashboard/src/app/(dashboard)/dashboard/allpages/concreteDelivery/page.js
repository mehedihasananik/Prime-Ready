import { getConcreteDeliveryMetaData } from "@/lib/utils";
import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
const page = async () => {
  const editRoute = "dashboard/allpages/concreteDelivery/editConcreteDelivery";
  const endPoints = "concreteDelivery";
  const data = await getConcreteDeliveryMetaData();
  let concreteDeliveryRouteAllMetaData;
  if (data) {
    concreteDeliveryRouteAllMetaData = data?.concreteDeliveryRouteAllMetaData;
  }
  return (
    <>
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={concreteDeliveryRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;
