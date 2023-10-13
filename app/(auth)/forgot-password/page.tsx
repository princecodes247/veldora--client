"use client";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useMutate } from "@/hooks/useMutate";
import { forgotPassword, signUp } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { useValidEmail } from "@/hooks/useValidEmail";

export default function ForgotPassword() {
  const router = useRouter();
  const { email, handleUpdateEmail, isValidEmail } = useValidEmail();
  const requestPasswordChangeMutation = useMutate(forgotPassword, {
    loadingMessage: "Requesting for password change...",
    onSuccessFunction: ({ data }) => {
      router.replace("/forgot-password/" + data?.data?.id);
    },
    errorMessage: "Could not complete request",
  });

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    requestPasswordChangeMutation.mutate({
      email: email.trim(),
    });
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
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              value={email}
              onChange={(e) => handleUpdateEmail(e.target.value)}
              disabled={requestPasswordChangeMutation.isLoading}
            />
          </div>

          <Button
            disabled={requestPasswordChangeMutation.isLoading || !isValidEmail}
          >
            Forgot Password
          </Button>
        </div>
      </form>
    </div>
  );
}
