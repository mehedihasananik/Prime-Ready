import SiteMapComponent from "@/components/siteMapComponent/SiteMapComponent";
import { getSitemapData } from "@/lib/utils";
export default async function siteMap() {
  const { sitemap } = (await getSitemapData()) ?? { sitemap: null };
  return (
    <>
      <SiteMapComponent sitemap={sitemap} />
    </>
  );
}
