
import type { Metadata } from 'next';
import { UNFURL_API } from "../../constants";
import Image from "next/image";
import DownloadBadge from "../../home/download-badge";
import BackgroundImage from "../../../../public/bball.webp";

type Props = {
  params: { sport: string, eventId: string; };
};

const sportMap = { 'NCAAB': 'basketball_ncaab' };

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  const sport = sportMap[params.sport] || params.sport;

  return {
    title: 'Download Keen, the only app that lets you shop odds in 21 books & never miss the best betting line.',
    openGraph: {
      description: "Download Keen, the only app that lets you shop odds in 21 books & never miss the best betting line.",
      images: [
        {
          url: `${UNFURL_API}/keen/odds-shop?sport=${sport}&eventId=${params.eventId}`,
          width: 1200,
          height: 630,
          alt: "Keen Betting",
        },
      ],
    },
  };
}

export default function EventPage({
  params,
}: {
  params: {
    sport: string;
    eventId: string;
  };
}) {
  return <section className="h-screen w-full relative">
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
  </section>;
}
