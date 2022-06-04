import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SideMenu from "../components/SideMenu";
import WaitlistForm from "../components/WaitlistForm/WaitlistForm";

import styles from "../styles/Waitlist.module.css";
import FeedbackSlider from "../components/FeedbackSlider/FeedbackSlider";

export default function Waitlist() {
  return (
    <div className="flex px-24 pr-24 text-white bg-black">
      <Head>
        <title>Veldora Waitlist</title>
        <meta name="description" content="Veldora waitlist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-12">
        <Header />
        <section className="flex items-start h-screen pt-24">
          <div className="flex flex-col flex-1 gap-4">
            <h1 className="text-6xl font-bold">
              Need
              <span className="text-6xl text-orange-400"> backend </span>
              for your form?
            </h1>
            <p>
              Veldore solves that problem by providing you with quality form
              services. save your email to join the waitlist.
            </p>
            <WaitlistForm />
          </div>
          <div className="flex-1">
            {/* <Image
                src=
                alt="Veldora Waitlist"
                /> */}
          </div>
        </section>

        {/* <section>
        What we do
        <p>
        With Veldora you can creae your form and send the forms data to our server. we handle the rest. from email notifications, to submission management and even data validation can be handled flawlessly without any backend from your end.
validation can be handled flawlessly without any backend from your endvalidation can be handled flawlessly without any backend from your end.
        </p>
        </section> */}
        <section className="pr-32">
          <div className="border-b border-yellow-500">
            <h2 className="pb-3 text-3xl italic font-bold">How it works</h2>
          </div>
        </section>
        <section className="pr-32">
        <div className="flex items-end justify-between pb-3 border-b border-yellow-500">
          <h2 className="text-3xl italic font-bold">Feedback</h2>
          <div className="w-5 h-5 bg-red-500"></div>
        </div>
          
          <FeedbackSlider />
        </section>
        <section className="flex flex-col items-center gap-4 pt-24 pr-32 text-center">
          <h2 className="text-3xl font-bold">Join our Waitlist</h2>
          <WaitlistForm alt />
        </section>
        <Footer />
      </main>
      <SideMenu />
    </div>
  );
}
