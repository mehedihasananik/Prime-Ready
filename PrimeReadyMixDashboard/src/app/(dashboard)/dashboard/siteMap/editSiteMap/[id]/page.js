import SiteMapComponent from "@/components/siteMapComponent/SiteMapComponent";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const sitemapData = await getSiteMapDataById(id);
  const { title, url } = sitemapData;
  return <SiteMapComponent id={id} titleValue={title} urlValue={url} />;
};

export default page;

const getSiteMapDataById = async (id) => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/siteMap/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
