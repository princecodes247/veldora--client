import AnimatedIcon from "@/components/AnimatedIcon";
import FeatureCard from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { faqsList, featuresList } from "@/constants";
import { ArrowRight } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { useMouse, useWindowScroll } from "react-use"

export default function Home() {
  
    const mouseTrackRef = React.useRef(null);
    const {y} = useWindowScroll();
  const {docX, docY,} = useMouse(mouseTrackRef);

  return (
    < >

    <Header/>
      <div 
      style={ {
        transform: `translate(${docX - 100 + "px"}, ${docY - 100 - y + "px"})`
      }}
      className="md:cursor_glow hidden md:block"></div>
      <div className="md:hidden cursor_glow_mobile"></div>
      <main className="home_main" ref={mouseTrackRef}>
      <div className="bg_grid"></div>
        <Head>
          <title>Veldora</title>
          <meta name="description" content="Form data managment" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="relative flex flex-col items-center justify-center h-screen gap-6 p-6 py-14 md:p-24">
     
          <h1 className="md:text-6xl text-3xl max-w-[900px] text-center">
            Speed Up Your Workflow with Veldora
          </h1>
          <p className="mx-auto text-gray-400 max-w-[660px] px-6 text-center">
            Simplify your life and work smarter, not harder. Veldora offers a
            seamless platform to setup your forms, analyze the data and boost your speed. Experience the beauty of
            efficiency and take control of your forms like never before.
          </p>
          <Link href="/dashboard">

          <Button variant="secondary" className="font-semibold px-6">Get Started
          <ArrowRight size={15} className="-mr-2 ml-2"/>
          </Button>
          </Link>
        </section>
        <section className="aqws relative text-center peer py-8 transition-all  tracking-[0.4em] duration-500 cursor-pointer hover:tracking-[0.45em] text-white">
          <h3>Powerful Tools. Limitless Possibilities.</h3>
        </section>
        <section className=" p-6 py-14 md:p-24 relative rounded-3xl transition-border duration-900 border-t border-slate-900 pt-20">
          <div aria-hidden="true" className="fade_line-parent top-0 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] user-select-none center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"></div>
          <div aria-hidden="true" className="fade_line top-0 left-1/2 w-[300px] max-w-[300px] user-select-none center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"></div>
          <p className="text-gray-500">Revolutionize</p>

          <h2 className="max-w-[600px] text-2xl font-semibold md:text-4xl">
            Data submission and analytics just got a whole lot {" "}
             <span className="highlight_text">
            sexier!
              </span>
          </h2>
          {/* <h2 className="max-w-[600px] text-2xl font-semibold md:text-4xl">

            Implement before <span className="highlight_text">
              tea
              </span>
          </h2> */}
        </section>
  
        <section className="relative p-6 py-14 md:p-24">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Key Veldora Features
          </h2>
          <div className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {React.Children.toArray(
              featuresList.map((feature) => (
                <FeatureCard feature={feature}/>
              )),
            )}
          </div>
         <div className="flex items-center justify-center">
         <Link href="/dashboard" className="">

<Button variant="secondary" className="font-semibold px-6">Get Started
<ArrowRight size={15} className="-mr-2 ml-2"/>
</Button>
</Link>
         </div>
        </section>
        <section className="relative grid p-6 py-8 md:p-18 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {React.Children.toArray(
            [0, 0, 0, 0, 0, 0].map((feature) => (
              <div className="p-2 sm:p-6 text-white grayscale-[100] brightness-[600%] opacity-10 text-6xl text-center">💯</div>
            )),
          )}
        </section>
        <section className="relative p-6 py-14 md:p-24">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-8 pt-16 md:grid-cols-2">
            {React.Children.toArray(
              faqsList.map((faq) => (
                <div className="max-w-[600px]">
                  <h4 className="mb-2 font-semibold text-lg md:text-lg">{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              )),
            )}
          </div>
          
        </section>
        <section className="relative flex flex-col gap-6 p-6 py-14 md:p-24">
          <h2 className="text-2xl font-semibold text-center md:text-3xl">
            Stay Updated and Snag Exclusive Offers
          </h2>
          <div className="mx-auto flex max-w-[300px] gap-2">
            <Input type="text" placeholder="name@email.com" />
            <Button variant="outline" className="bg-transparent hover:text-primary">Subscribe</Button>
          </div>
        </section>
        <Footer />
      </main>
       <div className="absolute inset-0 bg-[#010101] -z-10">

    </div>
    </>
  );
}
