"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "./Icons";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useMutate } from "@/hooks/useMutate";
import { signUp } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface UserSignupFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserSignupForm({ className, ...props }: UserSignupFormProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [termsAccepted, setTermsAccepted] = React.useState<CheckedState>(false);
  const [passwordError, setPasswordError] = React.useState<string | null>(null);
  const [isValidEmail, setIsValidEmail] = React.useState<boolean | null>(null);

  const router = useRouter();
  const registerMutation = useMutate(signUp, {
    loadingMessage: "Registering...",
    onSuccessFunction: () => {
      router.replace("/dashboard");
    },
    errorMessage: "Could not create user",
  });

  const validatePassword = (
    _password: string,
    _passwordConfirmation: string,
  ) => {
    if (_password.trim().length < 8) {
      setPasswordError("Password must be at least 8 characters 😞");
    } else if (_password.trim() !== _passwordConfirmation.trim())
      setPasswordError("Passwords do not match 🟰");
    else {
      // Clear the error message when the password is valid
      setPasswordError(null);
    }
  };

  const handleUpdateEmail = (inputValue: string) => {
    setEmail(inputValue);

    if (inputValue.trim().length === 0) {
      setIsValidEmail(null);
      return;
    }
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputValue));
  };

  const handleUpdatePassword = (newPassword: string) => {
    validatePassword(newPassword, passwordConfirmation);
    setPassword(newPassword);
  };

  const handleUpdatePasswordConfirmation = (
    newPasswordConfirmation: string,
  ) => {
    validatePassword(password, newPasswordConfirmation);
    setPasswordConfirmation(newPasswordConfirmation);
  };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    // Password Match Validation
    if (password.trim() !== passwordConfirmation.trim()) {
      setPasswordError("Passwords do not match, chief 😞");
      return;
    }
    registerMutation.mutate({
      email: email.trim(),
      password: password.trim(),
      passwordConfirmation: passwordConfirmation.trim(),
    });
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
              value={email}
              onChange={(e) => handleUpdateEmail(e.target.value)}
              disabled={registerMutation.isLoading}
            />
          </div>
          {isValidEmail !== null && (
            <div
              className={clsx(
                "text-sm",
                isValidEmail ? "text-green-500" : "text-red-500",
              )}
            >
              {isValidEmail ? "Email is valid" : "Email is not valid"}
            </div>
          )}
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
              disabled={registerMutation.isLoading}
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
              disabled={registerMutation.isLoading}
            />
          </div>
          {passwordError && (
            <div className="text-sm text-red-500">{passwordError}</div>
          )}

          {/* Display Success Message */}
          {password.length >= 8 && !passwordError && (
            <div className="text-sm text-green-500">You are good to go! 😎</div>
          )}
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
          <Button
            disabled={
              registerMutation.isLoading || !termsAccepted || !!passwordError
            }
          >
            {registerMutation.isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
        </div>
      </form>
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-background text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <Button
          className="flex-1"
          variant="outline"
          type="button"
          disabled={registerMutation.isLoading}
        >
          {registerMutation.isLoading ? (
            <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Icons.gitHub className="w-4 h-4 mr-2" />
          )}{" "}
          Github
        </Button>
        <Button
          className="flex-1"
          variant="outline"
          type="button"
          disabled={registerMutation.isLoading}
        >
          {registerMutation.isLoading ? (
            <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Icons.google className="w-4 h-4 mr-2" />
          )}{" "}
          Google
        </Button>
      </div> */}
    </div>
  );
}
