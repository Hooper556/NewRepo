export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: "https://keenbetting.com/sitemap.xml",
    host: "https://keenbetting.com",
  }
}
