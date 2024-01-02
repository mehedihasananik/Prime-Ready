import { getTestimonialMetaData } from "@/lib/utils";
import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
const page = async () => {
  const editRoute = "dashboard/allpages/testimonials/editTestimonials";
  const endPoints = "testimonials";
  const data = await getTestimonialMetaData();

  let testimonialRouteAllMetaData;
  if (data) {
    testimonialRouteAllMetaData = data?.testimonialRouteAllMetaData;
  }
  return (
    <>
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={testimonialRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;
