"use client";
import React from "react";
import OtpInput from "react-otp-input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface Success extends React.HTMLAttributes<HTMLDivElement> {}
export default function Success() {
  const router = useRouter();
const redirect = () => {
  router.replace("/login");
};

  return (
    <div className={cn("grid gap-6 px-4 md:px-0")}>
      <div className="irems-center flex h-screen flex-col justify-center">
        <h1 className="text-xl text-center md:text-3xl">
          Password has been reset Successfully
        </h1>
        <p className="mt-2 text-center">You can now log in to your account</p>
        <Button className="mt-2" onClick={redirect}>
          Login
        </Button>
      </div>
    </div>
  );
}
