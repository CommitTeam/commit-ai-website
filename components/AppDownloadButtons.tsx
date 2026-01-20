import { Button } from "flowbite-react";

const badges = [
  {
    id: "app-store",
    href: "https://apps.apple.com/us/app/como-you-v-s-who/id6756032262",
    labelTop: "Download on the",
    labelMain: "App Store",
    src: "/app-store.png",
  },
  {
    id: "google-play",
    href: "https://play.google.com/store/apps/details?id=com.commit.ai.commit.ai&pcampaignid=web_share",
    labelTop: "Get it on",
    labelMain: "Google Play",
    src: "/google-play.png",
  },
];

const wrapperClasses =
  "inline-flex h-[90px] w-[250px] overflow-hidden rounded-[16px] border-[3px] border-black p-0 shadow-[4px_4px_0_rgba(0,0,0,0.85)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:!ring-0 focus-visible:!ring-black";

export const AppDownloadButtons = () => (
  <div className="flex flex-col gap-3">
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      {badges.map(({ id, href, labelTop, labelMain, src }) => (
        <Button
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${labelTop} ${labelMain}`}
          className={`p-0 bg-yellow-400 hover:bg-fuchsia-300 active:bg-fuchsia-400 border-0 shadow-none ${wrapperClasses}`}
        >
          <div className="m-[4px] flex h-[calc(100%-8px)] w-[calc(100%-8px)] items-center gap-4 rounded-[12px] bg-black px-5">
            {src ? (
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="h-[60px] w-[60px] object-contain opacity-90"
              />
            ) : null}

            <div className="flex flex-col text-left leading-tight text-white">
              <span className="text-[12px] font-semibold tracking-wide opacity-90">
                {labelTop}
              </span>
              <span className="text-[22px] font-extrabold tracking-tight">
                {labelMain}
              </span>
            </div>
          </div>
        </Button>
      ))}
    </div>
  </div>
);
