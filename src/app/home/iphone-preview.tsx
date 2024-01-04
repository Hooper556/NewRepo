"use client"
import React from "react"
import Image from "next/image"
import Iphone from "../../../public/iphone.webp"

export default function IPhonePreview({ image }: { image: string }) {
  return (
    <div className="min-h-[649px] max-h-[649px] h-[649px]" style={{ width: "300px" }}>
      {/* <div className="absolute h-[722px]">
        <Image
          src={Iphone}
          alt="iPhone 14"
          className="pointer-events-none"
          height={722}
          width={360}
        />
      </div> */}
      <div className="">
        <div className="">
          <Image src={image} alt={image} width={300} height={649} className="rounded-[10px]" />
        </div>
      </div>
    </div>
  )
}
