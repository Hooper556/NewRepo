import Image from "next/image"
import DownloadBadge from "./home/download-badge"
import IPhonePreview from "./home/iphone-preview"
import React from "react"
// import EmailWaitlist from "@/components/email-waitlist"
import BackgroundImage from "../../public/bball.webp"

export default async function Home() {
  function PreviewSection({
    id,
    title,
    description,
    type,
  }: {
    id?: string
    title: string
    description: string
    type?: string
  }) {
    let src
    if (id === "expect-more-value") {
      src = "/ev.jpeg"
    } else if (id === "guarentee-profits") {
      src = "/arb.jpeg"
    }

    if (type === "text-left") {
      return (
        <section key={id} id={id} className="w-full flex items-center ">
          <div className="mx-auto flex flex-col md:flex-row max-w-screen-md gap-12 md:gap-12">
            <div
              className={`md:w-1/10  gap-4 md:gap-8 px-8 md:px-4 flex flex-col justify-center text-left"
            }`}
            >
              <h3 className="hidden md:block text-white text-4xl md:text-6xl font-semibold">
                {title}
              </h3>
              <p className="hidden md:block text-white md:text-2xl text-gray-700 font-semibold">
                {description}
              </p>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <IPhonePreview image={src || ""} />
            </div>
          </div>
        </section>
      )
    }

    return (
      <section key={id} id={id} className="w-full flex items-center ">
        <div className="mx-auto flex flex-col md:flex-row max-w-screen-md gap-12 md:gap-12">
          <div className="md:w-1/2 flex items-center justify-center">
            <IPhonePreview image={src || ""} />
          </div>
          <div
            className={`md:w-1/10  gap-4 md:gap-8 px-8 md:px-4 flex flex-col justify-center text-left"
            }`}
          >
            <h3 className="hidden md:block text-white text-4xl md:text-6xl font-semibold">
              {title}
            </h3>
            <p className="hidden md:block text-white md:text-2xl text-gray-700 font-semibold">
              {description}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <main className="w-full bg-[linear-gradient(0.15turn,_#3fa0ef,_#080808,_#080808)]">
      <section className="h-screen w-full relative">
        <Image
          src={BackgroundImage}
          alt="basketball stadium"
          className="object-cover"
          priority
          fill
        />

        <div className="absolute inset-0 flex-col items-center justify-center z-10">
          <div className="flex flex-col gap-12 items-center justify-center h-full w-full">
            <div className="text-white flex flex-col gap-8 text-center justify-center items-center font-semibold">
              <div className="transition ease-in-out duration-1000 hover:scale-110">
                <h1 className="text-5xl md:text-8xl">Join the betting revolution. 💰</h1>
              </div>
              <h2 className=" text-white md:text-3xl font-semibold px-4 md:px-8 w-full md:w-2/3">
                {
                  "Leveraging 'mathematical advantage' to generate massive growth in sports betting profits"
                }
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center h-[67px] min-h-[67px]">
              <DownloadBadge />
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-2xl md:text-6xl text-center text-white font-bold mt-[90px] md:mt-[140px] pb-[32px] md:pb-[184px]">
        Shop odds across sportsbooks
      </h2>
      <section key="analyze-odds" className="w-full justify-center gap-20 flex flex-row">
        <Image
          src="/shop.jpeg"
          className="rounded-[10px] hidden md:block"
          alt="comparing odds"
          width={300}
          height={649}
        />
        <Image
          src="/home.jpeg"
          alt="sports schedule"
          width={300}
          height={649}
          className="rounded-[10px] transform md:translate-y-[-100px]"
        />
        <Image
          src="/odds-chart.jpeg"
          alt="odds change over time"
          width={300}
          height={649}
          className="rounded-[10px] hidden md:block"
        />
      </section>
      <h2 className="text-2xl md:text-6xl text-center text-white font-bold mt-[90px] md:mt-[140px] pb-[0px] md:pb-[84px]">
        Arbitrage and expected value betting strategies
      </h2>
      <div className="flex flex-col gap-[80px] mb-[120px]">
        <PreviewSection
          key="guarentee-profits"
          id="guarentee-profits"
          title="Guarentee profits."
          description="Explore the world of calculated wins with the arbitrage engine."
          type="text-left"
        />
        <div className="hidden md:block">
          <PreviewSection
            key="expect-more-value"
            id="expect-more-value"
            title="Expect more value."
            description="Make higher probability bets with the Expected Value bet calculation engine."
          />
        </div>
      </div>
    </main>
  )
}
