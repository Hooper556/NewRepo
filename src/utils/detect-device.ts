export default function detectDevice(): "android" | "iphone" | "desktop" {
  const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";

  if (/Android/i.test(userAgent)) {
    return "android";
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return "iphone";
  } else {
    return "desktop";
  }
}
