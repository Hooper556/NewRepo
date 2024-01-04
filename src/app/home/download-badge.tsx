"use client"

import React from "react"
import detectDevice from "../../utils/detect-device"
import Image from "next/image"
// import EmailWaitlist from "@/components/email-waitlist"
import Link from "next/link"
import { GOOGLE_PLAY_URL, APPLE_APP_STORE_URL } from "../constants"

export default function DownloadBadge() {
  const [device, setDevice] = React.useState("")

  React.useEffect(() => {
    const d = detectDevice()
    setDevice(d)
  }, [])

  if (device === "") {
    return <></>
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {device !== "android" && (
          <Link href={APPLE_APP_STORE_URL} target="_blank" className="cursor-pointer">
            <Image
              width={200}
              height={100}
              src="/apple-app-store-badge.svg"
              alt="Download in Apple App Store"
            />
          </Link>
        )}
        {device !== "iphone" && (
          <Link href={GOOGLE_PLAY_URL} target="_blank" className="cursor-pointer">
            <Image
              width={260}
              height={100}
              src="/google-play-badge.png"
              alt="Download in Google Play Store"
              className="cursor-pointer"
            />
          </Link>
        )}
      </div>
    </>
  )
}
