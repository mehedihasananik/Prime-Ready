import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCapitalLettersOfName(name: string) {
  const splitted = name.split(" ");

  if (splitted.length > 1) {
    const firstLetter = splitted[0].charAt(0);
    const lastLetter = splitted[1].charAt(0);

    const capitalLetters = (firstLetter + lastLetter).toLocaleUpperCase();

    return capitalLetters;
  } else {
    const firstLetter = name[0];
    const lastLetter = name.at(-1);

    const capitalLetters = (firstLetter + lastLetter).toLocaleUpperCase();

    return capitalLetters;
  }
}

export async function getAllBlogsData() {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/blogContent`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs list");
    }
    return res.json();
  } catch (error) {
    console.log("error", error);
  }
}

export async function getSitemapData() {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/siteMap`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch sitemap url");
    }
    return res.json();
  } catch (error) {
    console.log("error", error);
  }
}

export async function getVerificationData() {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/verificationUrl`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch verification url & meta title");
    }
    return res.json();
  } catch (error) {
    console.log("error", error);
  }
}

export async function getBlogMetaData() {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/blogs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs meta data");
    }
    return res.json();
  } catch (error) {
    console.log("error", error);
  }
}

export async function getHomeMetaData() {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/home`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch metaData");
    }
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getContactMetaData() {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/contactUs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch metaData");
    }
    return res.json();
  } catch (error) {
    console.log("Error contact metadata: ", error);
  }
}

export async function getConcreteDeliveryMetaData() {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/concreteDelivery`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch metaData");
    }
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getTestimonialMetaData() {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/testimonials`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch metaData");
    }
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getAllCategoryData() {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/blogCategory`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch metaData");
    }
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
}
export async function getAllTagData() {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/blogTag`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch metaData");
    }
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
}
