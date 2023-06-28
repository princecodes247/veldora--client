import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { faqsList, featuresList } from "@/constants";
import Head from "next/head";
import React, { useEffect } from "react";
import { useMouse, useWindowScroll } from "react-use"

export default function Home() {
  
    const mouseTrackRef = React.useRef(null);
    const {y} = useWindowScroll();
  const {docX, docY,} = useMouse(mouseTrackRef);

  return (
    <>
      <div 
      style={ {
        transform: `translate(${docX - 100 + "px"}, ${docY - 100 - y + "px"})`
      }}
      className="cursor_glow"></div>
      <div className="bg_grid"></div>
      <main ref={mouseTrackRef}>
        <Head>
          <title>Veldora</title>
          <meta name="description" content="Form data managment" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="flex flex-col items-center justify-center h-screen gap-6 p-6 py-14 md:p-24">
     
          <h1 className="text-5xl text-center">
            Streamline Your Workflow with Veldora
          </h1>
          <p className="mx-auto max-w-[660px] px-6 text-center">
            Simplify your life and work smarter, not harder. Veldora offers a
            seamless platform to effortlessly organize your data, collaborate
            with your team, and optimize your workflow. Experience the beauty of
            efficiency and take control of your tasks like never before.
          </p>
          <Button>Get Started</Button>
        </section>
        <section className="text-center tracking-[0.4em] text-gray-300">
          <h3>Powerful Tools. Limitless Possibilities.</h3>
        </section>
        <section className="p-6 py-14 md:p-24">
          <p className="text-gray-500">Revolutionize</p>

          <h2 className="max-w-[600px] text-2xl font-semibold md:text-4xl">
            Data submission and analytics just got a whole lot sexier!
          </h2>
        </section>
  
        <section className="p-6 py-14 md:p-24">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Key Veldora Features
          </h2>
          <div className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {React.Children.toArray(
              featuresList.map((feature) => (
                <div className="mt-4">
                  <h4 className="mb-2 font-semibold text-lg md:text-lg">{feature.title}</h4>
                  <p className="max-w-[400px] text-gray-700">{feature.description}</p>
                </div>
              )),
            )}
          </div>
        </section>
        <section className="grid p-6 py-8 md:p-18 md:grid-cols-3 lg:grid-cols-6">
          {React.Children.toArray(
            [0, 0, 0, 0, 0, 0].map((feature) => (
              <div className="p-6 text-6xl text-center">💯</div>
            )),
          )}
        </section>
        <section className="p-6 py-14 md:p-24">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-8 pt-8 md:grid-cols-2">
            {React.Children.toArray(
              faqsList.map((faq) => (
                <div>
                  <h4 className="mb-2 font-semibold text-lg md:text-lg">{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              )),
            )}
          </div>
        </section>
        <section className="flex flex-col gap-6 p-6 py-14 md:p-24">
          <h2 className="text-2xl font-semibold text-center md:text-3xl">
            Stay Updated and Snag Exclusive Offers
          </h2>
          <div className="mx-auto flex max-w-[300px] gap-2">
            <Input type="text" placeholder="name@email.com" />
            <Button>Subcribe</Button>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
