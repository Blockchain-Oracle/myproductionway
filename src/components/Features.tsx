import { BrandIcons } from "./shared/branded-icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "./ui/button";
import TypingAnimation from "./ui/typing-animation";
export default function Features() {
  return (
    <section className="container flex h-full w-full flex-col place-content-center space-y-20 bg-secondary py-16 md:py-20 lg:py-24">
      <div>
        <h1 className="text-center text-2xl font-bold">Features</h1>
        <p className="text-wrap p-5 text-center font-medium text-gray-500">
          This template comes with features like Authentication, API routes,
          File uploading and more in Next.js App dir.
        </p>
      </div>
      <div className="">
        <ul className="grid place-content-center gap-6 shadow-md sm:grid-cols-2 md:grid-cols-3 xl:gap-12">
          {FeatureTools.map((tools) => (
            <li
              key={tools.description}
              className="scale-105 transform list-none shadow-md shadow-zinc-500 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <FeaturesCard {...tools} />
            </li>
          ))}
        </ul>
        {/* <p className="text-wrap p-10 text-center font-semibold text-gray-500">
          
        </p> */}

        <TypingAnimation
          duration={80}
          className="text-md text-wrap p-8 text-center font-bold text-black dark:text-white"
          text="ChadNext also includes Changelog & About page built using Velite and
          Markdown."
        />
      </div>
    </section>
  );
}

const FeatureTools = [
  { icon: BrandIcons.resend, description: "email and verification " },
  { icon: BrandIcons.tailwind, description: "TailwindCSS" },
  { icon: BrandIcons.vercel, description: "React" },
  { icon: BrandIcons.nextjs, description: "Next.js" },
  { icon: BrandIcons.ts, description: "TypeScript" },
  { icon: BrandIcons.vercel, description: "Vercel" },
  { icon: BrandIcons.stripe, description: "Stripe" },
  { icon: BrandIcons.uploadthing, description: "File Upload" },
  { icon: BrandIcons.luciaAuth, description: "Authentication" },
];

const FeaturesCard = ({
  icon,
  description,
}: {
  icon: () => React.JSX.Element;
  description: string;
}): React.JSX.Element => (
  <Card>
    <CardHeader>{icon()} </CardHeader>
    <CardContent>
      <CardTitle>{description}</CardTitle>
      <CardDescription>
        This template comes with features like Authentication, API routes, File
        uploading and more in Next.js App dir.
      </CardDescription>
    </CardContent>
    <CardFooter>
      <Button variant="default">Learn More</Button>
    </CardFooter>
  </Card>
);
