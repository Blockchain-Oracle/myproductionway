type PlanCardProps = {
  planName: string;
  description: string;
  price: string;
  duration: string;
};

import { desc } from "drizzle-orm";
import { validateRequest } from "~/actions/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default async function Pricing() {
  const { user } = await validateRequest();
  return (
    <section className="container flex h-full w-full flex-col place-content-center space-y-20 py-16 md:py-20 lg:py-24">
      <div>
        <h1 className="text-center text-2xl font-bold">Pricing</h1>
        <p className="text-wrap py-7 text-center font-semibold text-gray-500">
          Choose the plan that rights for you and start enjoying it all
        </p>
      </div>
      <ul className="gap-6object-contain grid grid-cols-1 place-content-center gap-10 shadow-md sm:grid-cols-2 md:grid-cols-3">
        {plans.map((plan) => (
          <li
            key={plan.planName}
            className="scale-105 transform list-none shadow-md shadow-zinc-500 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <PlanCard {...plan} />
          </li>
        ))}
      </ul>
    </section>
  );
}
const PlanCard = ({
  planName,
  description,
  price,
  duration,
}: PlanCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{planName}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
      <p>
        {price} / {duration}
      </p>
    </CardContent>
    <CardFooter>
      <Button variant="default">Get Started</Button>
    </CardFooter>
  </Card>
);

const plans: PlanCardProps[] = [
  {
    planName: "free plan",
    description: "up to 3 projects",
    price: "$0",
    duration: "month",
  },
  {
    planName: "basic plan",
    description: "up to 10 projects",
    price: "$10",
    duration: "month",
  },
  {
    planName: "premium plan",
    description: "unlimited projects",
    price: "$20",
    duration: "month",
  },
];
