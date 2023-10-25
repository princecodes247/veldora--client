"use client";
import React from "react";
import OtpInput from "react-otp-input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const handleOpenGmail = () => {
  window.open("https://mail.google.com/", "_blank");
};

interface Reset extends React.HTMLAttributes<HTMLDivElement> {}
export default function Reset() {
  return (
    <div className={cn("grid gap-6 px-4 md:px-0")}>
      <div className="flex flex-col justify-center">
        <div className="mt-20 flex flex-col justify-center md:mt-0">
          <h1 className="text-center text-xl md:text-3xl">Sent Successfully</h1>
          <p className="mt-2 text-center">
            A Password reset link has been sent to your mail, Click on it to
            reset your Password.
          </p>
          <Button className="mt-6" onClick={handleOpenGmail}>
            Open Gmail
          </Button>
        </div>
      </div>
    </div>
  );
}
