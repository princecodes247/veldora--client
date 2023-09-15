"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "./Icons";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

interface UserSignupFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserSignupForm({ className, ...props }: UserSignupFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [termsAccepted, setTermsAccepted] = React.useState<CheckedState>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6 px-4 md:px-0", className)} {...props}>
      <h1 className="text-xl md:text-3xl">Sign up</h1>
      <p className="text-sm text-gray-500">
        Already have an account?{" "}
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
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1 py-4">
            <Label className="" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="******* fast!"
              type="password"
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>
          <div className="pb-4">
            <p className="px-1 pb-4 text-sm text-muted-foreground">
              By registering, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={termsAccepted}
                onCheckedChange={(checked) => setTermsAccepted(checked)}
                id="terms"
              />
              <label
                htmlFor="terms"
                className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
          </div>
          <Button disabled={isLoading || !termsAccepted}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <Button
          className="flex-1"
          variant="outline"
          type="button"
          disabled={isLoading}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          Github
        </Button>
        <Button
          className="flex-1"
          variant="outline"
          type="button"
          disabled={isLoading}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{" "}
          Google
        </Button>
      </div>
    </div>
  );
}