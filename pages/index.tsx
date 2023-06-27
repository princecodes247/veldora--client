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
      <section className="bg-screen flex items-center justify-center">
        <h1>VELDORA</h1>
      </section>
      <section>
      <p>Revolutionize</p>

<h2>Data submission and analytics just got a whole lot sexier!</h2>
      </section>

      <section>
        <h2>Key Veldora Features</h2>
        <div>
          {
            React.Children.toArray(featuresList.map(feature => (
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            )))
          }
        </div>
      </section>
      <section>
      {
            React.Children.toArray([0,0,0,0,0,0].map(feature => (
              <div>
                💯
              </div>
            )))
          }
      </section>
      <section>
        <h2>Frequently Asked Questions</h2>
        <div>
          {
            React.Children.toArray(faqsList.map(faq => (
              <div>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            )))
          }
        </div>
      </section>
    </main>
  );
}
