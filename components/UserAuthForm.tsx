"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "./Icons";
import Link from "next/link";
import { useMutate } from "@/hooks/useMutate";
import { signIn } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const loginMutation = useMutate(signIn, {
    loadingMessage: "Logging in...",
    successMessage: "Logged in successfully",
    onSuccessFunction: () => {
      router.replace("/dashboard");
    },
  });
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    console.log({ email, password });
    loginMutation.mutate({
      email,
      password,
    });
  }

  return (
    <div className={cn("light grid gap-6 px-4 md:px-0", className)} {...props}>
      <h1 className="text-xl md:text-3xl">Sign in</h1>
      <p className="text-sm text-gray-500">
        First time?{" "}
        <Link
          className="font-semibold text-sky-400 hover:underline"
          href="/signup"
        >
          Sign up for an account.
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
              onChange={(e) => setEmail(e.target.value)}
              disabled={loginMutation.isLoading}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loginMutation.isLoading}
            />
          </div>
          <Button disabled={loginMutation.isLoading}>
            {loginMutation.isLoading && (
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
          disabled={loginMutation.isLoading}
        >
          {loginMutation.isLoading ? (
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
          disabled={loginMutation.isLoading}
        >
          {loginMutation.isLoading ? (
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
UserAuthForm.theme = "dark";
