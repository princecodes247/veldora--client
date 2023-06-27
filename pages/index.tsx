import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { faqsList, featuresList } from "@/constants";
import Head from "next/head";
import React, { useEffect } from "react";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Veldora</title>
        <meta name="description" content="Form data managment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-screen flex items-center justify-center">
        <h1>VELDORA</h1>
      </section>
      <section className="p-6 py-14 md:p-24">
      <p>Revolutionize</p>

<h2 className="text-2xl md:text-4xl">Data submission and analytics just got a whole lot sexier!</h2>
      </section>

      <section className="p-6 py-14 md:p-24">
        <h2 className="text-2xl md:text-4xl">Key Veldora Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 py-12 gap-6">
          {
            React.Children.toArray(featuresList.map(feature => (
              <div >
                <h4 className="text-lg md:text-xl mb-2">{feature.title}</h4>
                <p className="max-w-[400px]">{feature.description}</p>
              </div>
            )))
          }
        </div>
      </section>
      <section className="p-6 py-8 md:p-18 grid md:grid-cols-3 lg:grid-cols-6">
      {
            React.Children.toArray([0,0,0,0,0,0].map(feature => (
              <div className="text-center p-6 text-6xl">
                💯
              </div>
            )))
          }
      </section>
      <section className="p-6 py-14 md:p-24">
        <h2 className="text-2xl md:text-4xl">Frequently Asked Questions</h2>
        <div className="pt-8 grid md:grid-cols-2 gap-8">
          {
            React.Children.toArray(faqsList.map(faq => (
              <div>
                <h4 className="text-lg mb-2 md:text-xl">{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            )))
          }
        </div>
      </section>
      <section className="flex flex-col gap-6 p-6 py-14 md:p-24">
        <h2 className="text-2xl md:text-3xl text-center">Stay Updated and Snag Exclusive Offers</h2>
        <div className="flex gap-2 max-w-[300px] mx-auto">
          <Input type="text" placeholder="name@email.com" />
          <Button>
              Subcribe
          </Button>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
