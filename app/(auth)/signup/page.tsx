"use client";
import { Logo } from "@/components/Logo";
import Head from "next/head";
import { useEffect } from "react";
import authBG from "@/public/bg_1.jpg";
import AnimeQuote from "@/components/AnimeQuote";
import { useQuery } from "@tanstack/react-query";
import { wakeUpCall } from "@/services/UserService";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UserAuthForm } from "@/components/UserAuthForm";
import { UserSignupForm } from "@/components/UserSignupForm";

export default function Signup() {
  const appID = process.env.NEXT_PUBLIC_APP_ID;

  const wakeUpCallQuery = useQuery({
    queryKey: ["wakeUp"],
    queryFn: wakeUpCall,
  });

  return <UserSignupForm />;
}
