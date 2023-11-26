import FeatureCard from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { faqsList, featuresList, pricingPlans } from "@/constants";
import { ArrowRight } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import React, { Ref, useEffect, useRef, useState } from "react";
import { useMouse, useWindowScroll } from "react-use";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useMutate } from "@/hooks/useMutate";
import { subscribeToNewsletter } from "@/services/BucketService";
import usePlanCardEffect from "@/hooks/usePlanCardEffect";
import { PricingPlanCard } from "@/components/PricingPlanCard";
import { PricingSection } from "@/fragments/home/PricingSection.fragment";
import { InAppLinks } from "@/constants/nav";

export default function Home() {
  const mouseTrackRef = React.useRef(null);
  const { y } = useWindowScroll();
  const { docX, docY } = useMouse(mouseTrackRef);
  const [email, setEmail] = useState("");
  const subscribeMutation = useMutate(subscribeToNewsletter, {
    loadingMessage: "Subscribing to newsletter",
    successMessage: "Subscribed",
    onSuccessFunction: () => {
      setEmail("");
    },
  });
  const handleSubscribe = () => {
    subscribeMutation.mutate(email);
  };

  return (
    <>
      <Header />
      <div
        style={{
          transform: `translate(${docX - 100 + "px"}, ${
            docY - 100 - y + "px"
          })`,
        }}
        className="md:cursor_glow hidden md:block"
      ></div>
      <div className="cursor_glow_mobile md:hidden"></div>
      <main className="home_main" ref={mouseTrackRef}>
        <div className="bg_grid"></div>
        <Head>
          <title>Veldora</title>
          <meta name="description" content="Form data managment made easy" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="relative flex h-screen flex-col items-center justify-center gap-6 p-6 py-14 md:p-24">
          <h1 className="max-w-[900px] text-center text-3xl md:text-6xl">
            Speed Up Your Workflow with Veldora
          </h1>
          <p className="mx-auto max-w-[660px] px-6 text-center text-gray-400">
            Simplify your life and work smarter, not harder. Veldora offers a
            seamless platform to setup your forms, analyze the data and boost
            your speed. Experience the beauty of efficiency and take control of
            your forms like never before.
          </p>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Link
              href={InAppLinks.Login}
              className="px-2 text-sm font-medium tracking-wide text-gray-400 transition-all hover:text-white"
            >
              Login
            </Link>
            <Link href={InAppLinks.GetStarted}>
              <Button variant="secondary" className="px-6 font-semibold">
                Get Started
                <ArrowRight size={15} className="-mr-2 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
        <section className="peer relative cursor-pointer py-8 text-center  text-white transition-all duration-500  md:tracking-[0.4em] md:hover:tracking-[0.45em]">
          <h3>Powerful Tools. Limitless Possibilities.</h3>
        </section>
        <section className="transition-border duration-900 relative rounded-3xl border-t border-slate-900 p-6 py-14 pt-20 md:p-24">
          <div
            aria-hidden="true"
            className="fade_line-parent user-select-none center pointer-events-none absolute left-1/2 top-0 h-[200px] w-full max-w-[200px] max-w-full -translate-x-1/2 -translate-y-1/2 md:max-w-[400px]"
          ></div>
          <div
            aria-hidden="true"
            className="fade_line user-select-none center pointer-events-none absolute left-1/2 top-0 h-px w-[300px] max-w-[300px] max-w-full -translate-x-1/2 -translate-y-1/2"
          ></div>
          <p className="text-gray-500">Revolutionize</p>

          <h2 className="max-w-[600px] text-2xl font-semibold md:text-4xl">
            Data submission and analytics just got a whole lot{" "}
            <span className="highlight_text">sexier!</span>
          </h2>

          {/* <VideoPlayer/> */}
        </section>

        <section className="relative p-6 py-14 md:p-24">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Key Veldora Features
          </h2>
          <div className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {React.Children.toArray(
              featuresList.map((feature) => <FeatureCard feature={feature} />),
            )}
          </div>
          <div className="flex items-center justify-center">
            <Link href={InAppLinks.GetStarted} className="">
              <Button variant="secondary" className="px-6 font-semibold">
                Get Started
                <ArrowRight size={15} className="-mr-2 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
        <PricingSection />
        {/* <section className="relative grid grid-cols-2 p-6 py-8 md:p-18 md:grid-cols-3 lg:grid-cols-6">
          {React.Children.toArray(
            [0, 0, 0, 0, 0, 0].map((feature) => (
              <div className="p-2 text-center text-6xl text-white opacity-10 brightness-[600%] grayscale-[100] sm:p-6">
                💯
              </div>
            )),
          )}
        </section> */}
        <section className="relative p-6 py-14 md:p-24">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-8 pt-16 md:grid-cols-2">
            {React.Children.toArray(
              faqsList.map((faq) => (
                <div className="max-w-[600px]">
                  <h4 className="mb-2 text-lg font-semibold md:text-lg">
                    {faq.question}
                  </h4>
                  <p>{faq.answer}</p>
                </div>
              )),
            )}
          </div>
        </section>
        <section className="relative flex flex-col gap-6 p-6 py-14 md:p-24">
          <h2 className="text-center text-2xl font-semibold md:text-3xl">
            Stay Updated and Snag Exclusive Offers
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubscribe();
            }}
            className="mx-auto flex w-full flex-col gap-2 md:max-w-[500px] md:flex-row"
          >
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:outline- bg-transparent"
              type="email"
              placeholder="name@email.com"
              required
            />
            <Button
              variant="secondary"
              disabled={subscribeMutation.isLoading || email.length === 0}
              className=""
            >
              Subscribe
            </Button>
          </form>
        </section>
        <Footer />
      </main>
      <div className="absolute inset-0 -z-10 bg-[#010101]"></div>
    </>
  );
}
