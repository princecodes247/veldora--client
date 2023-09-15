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

export default function Login() {
  const appID = process.env.NEXT_PUBLIC_APP_ID;

  const wakeUpCallQuery = useQuery({
    queryKey: ["wakeUp"],
    queryFn: wakeUpCall,
  });

  return <UserAuthForm />;
}
