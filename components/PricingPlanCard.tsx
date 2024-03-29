import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { IPricing } from "@/interfaces";

export function PricingPlanCard({
  className,
  refs,
  data,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  refs: React.Ref<HTMLDivElement>;
  data: IPricing;
}) {
  return (
    <div
      ref={refs}
      className={`cards__card pricing-card ${
        data.disabled && "pricing-card-disabled"
      }`}
    >
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
        <Link
          href={data.cta.link}
          className={`flex-1 ${
            data.disabled && "pointer-events-none cursor-not-allowed"
          }`}
        >
          <Button
            variant="secondary"
            disabled={data.disabled}
            className="w-full px-6 font-semibold"
          >
            {data.disabled ? "Coming Soon" : data.cta.text}
            <ArrowRight size={15} className="-mr-2 ml-2 mt-px" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
