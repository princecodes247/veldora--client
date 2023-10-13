"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useMutate } from "@/hooks/useMutate";
import { signUp } from "@/services/AuthService";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
  }

  return (
    <div className={cn("grid gap-6 px-4 md:px-0")}>
      <h1 className="text-xl md:text-3xl">Forgot Password</h1>
      <p className="text-sm text-gray-500">
        Go back to{" "}
        <Link
          className="font-semibold text-sky-400 hover:underline"
          href="/login"
        >
          Sign in.
        </Link>
      </p>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1 py-4 pb-0">
            <Label className="" htmlFor="email">
              OTP
            </Label>
          </div>

          <Button disabled={true}>Confirm OTP</Button>
        </div>
      </form>
    </div>
  );
}
