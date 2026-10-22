const fallbackSiteUrl = "https://www.shreshthaconsultants.com";

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || fallbackSiteUrl).replace(/\/+$/, "");
}
