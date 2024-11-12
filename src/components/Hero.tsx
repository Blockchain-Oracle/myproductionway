import { Button } from "~/components/ui/button";
import { BrandIcons } from "./shared/branded-icon";

export default function Hero() {
  return (
    <section className="flex w-full flex-col place-content-center space-y-20 py-16 transition-all ease-in-out md:py-20 lg:py-24 xl:py-10">
      <div className="mx-auto w-full max-w-2xl">
        <Button
          variant="default"
          className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 text-blue-700 transition-colors duration-300 hover:bg-blue-200"
        >
          <a href="github/blockchain-oracle.com">
            <SocialIcon />
          </a>
          Presentaion of chadNext
        </Button>
        <div className="text-balance bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center text-[40px] font-bold leading-tight tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear [word-spacing:theme(spacing.1)] dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900 md:text-7xl md:leading-[5rem]">
          Quick Start Template for your next project
        </div>
        <p className="p-4 text-center font-medium text-gray-400">
          Equired all the necessary functionalities to get started.
        </p>
        <div className="mx-auto flex place-content-center space-x-5 text-center">
          <Button variant="default">Start</Button>
          <Button variant="secondary">
            953 <StarIcon /> on GitHub
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap place-content-center gap-4">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className="flex items-center justify-center rounded-lg bg-gray-100 p-4 shadow-md transition-transform duration-300 hover:scale-110 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {tool.icon()}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
const SocialIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
    />
  </svg>
);

const tools = [
  {
    link: "https://www.typescriptlang.org/",
    icon: BrandIcons.ts,
  },
  {
    link: "https://nextjs.org/",
    icon: BrandIcons.nextjs,
  },
  {
    link: "https://tailwindcss.com/",
    icon: BrandIcons.tailwind,
  },
  {
    link: "https://www.prisma.io/",
    icon: BrandIcons.prisma,
  },
  {
    link: "https://vercel.com/",
    icon: BrandIcons.vercel,
  },
];
