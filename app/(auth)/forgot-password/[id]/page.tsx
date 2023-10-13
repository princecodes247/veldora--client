"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useMutate } from "@/hooks/useMutate";
import {
  resetPassword,
  signUp,
  verifyPasswordReset,
} from "@/services/AuthService";
import { useRouter } from "next/navigation";
import OTPInput from "@/components/OTPInput";
import { useValidPassword } from "@/hooks/useValidPassword";

export default function ForgotPassword({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const [isVerified, setIsVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const {
    password,
    passwordConfirmation,
    handleUpdatePassword,
    handleUpdatePasswordConfirmation,
    passwordError,
  } = useValidPassword();

  const verifyPasswordChangeMutation = useMutate(verifyPasswordReset, {
    loadingMessage: "Checking OTP...",
    onSuccessFunction: ({ data }) => {
      console.log("verified");
      setIsVerified(true);
    },
    errorMessage: "Could not complete request",
  });

  const makePasswordChangeMutation = useMutate(resetPassword, {
    loadingMessage: "Checking OTP...",
    onSuccessFunction: ({ data }) => {
      console.log("verified");
    },
    errorMessage: "Could not complete request",
  });
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log({
      otp,
      id: params.id,
    });
    if (isVerified) {
      makePasswordChangeMutation.mutate({
        otp,
        id: params.id,
        password,
        passwordConfirmation,
      });
    } else {
      verifyPasswordChangeMutation.mutate({
        otp,
        id: params.id,
      });
    }
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
            <OTPInput value={otp} onChange={(text: string) => setOtp(text)} />
          </div>
          {isVerified && (
            <>
              <div className="grid gap-1 py-4 pb-0">
                <Label className="" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="******* fast!"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    handleUpdatePassword(e.target.value);
                  }}
                  disabled={makePasswordChangeMutation.isLoading}
                />
              </div>
              <div className="grid gap-1 py-4">
                <Label className="" htmlFor="password">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  placeholder="******* fast! again"
                  type="password"
                  value={passwordConfirmation}
                  onChange={(e) => {
                    handleUpdatePasswordConfirmation(e.target.value);
                  }}
                  disabled={makePasswordChangeMutation.isLoading}
                />
              </div>
              {passwordError && (
                <div className="text-sm text-red-500">{passwordError}</div>
              )}

              {/* Display Success Message */}
              {password.length >= 8 && !passwordError && (
                <div className="text-sm text-green-500">
                  You are good to go! 😎
                </div>
              )}
            </>
          )}
          <Button
            disabled={
              makePasswordChangeMutation.isLoading ||
              verifyPasswordChangeMutation.isLoading ||
              otp.trim().length === 0
            }
          >
            Confirm OTP
          </Button>
        </div>
      </form>
    </div>
  );
}
