import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { IPricing } from "@/interfaces";

export function PricingPlanCard({
  className,
  ref,
  data,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref: React.Ref<HTMLDivElement>;
  data: IPricing;
}) {
  return (
    <div ref={ref} className="cards__card pricing-card">
      <h2 className="font-semibold ">{data?.name ?? ""}</h2>
      <p className="text-3xl font-semibold">${data?.price ?? ""}</p>
      <ul role="list" className="pricing-card__bullets leading-6">
        {React.Children.toArray(
          data?.features.map((feature) => (
            <li className="text-sm">{feature}</li>
          )),
        )}
      </ul>
      <div className="flex self-end ">
        <Link href="/login" className="flex-1">
          <Button variant="secondary" className="w-full px-6 font-semibold">
            Get Started
            <ArrowRight size={15} className="-mr-2 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
