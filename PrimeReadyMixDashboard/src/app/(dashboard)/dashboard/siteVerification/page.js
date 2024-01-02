// import SiteVerificationComponent from "@/components/siteVerificationComponent/SiteVerificationComponent";
import { getVerificationData } from "@/lib/utils";
import dynamic from "next/dynamic";
const SiteVerificationComponent = dynamic(
  () => import("../../../../components/siteMapComponent/SiteMapComponent")
);
export default async function SeoSiteVerification() {
  const { verificationUrl } = (await getVerificationData()) ?? {
    verificationUrl: null,
  };

  return (
    <>
      <SiteVerificationComponent verificationUrl={verificationUrl} />
    </>
  );
}
