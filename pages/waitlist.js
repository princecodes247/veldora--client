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
    <div className="flex flex  relative px-12 lg:px-24 text-white bg-black">
      <Head>
        <title>Veldora Waitlist</title>
        <meta name="description" content="Veldora waitlist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-12">
        <Header />
        <section className="flex flex-1 flex-col-reverse sm:flex-row items-start md:h-screen pt-24">
          <div className="flex flex-col flex-1 text-center sm:text-left gap-4">
            <h1 className="text-3xl md:text-6xl font-bold">
              Need
              <span className="text-orange-400"> backend </span>
              for your form?
            </h1>
            <p className="text-gray-400 w-3/4 sm:w-full mx-auto">
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
        <section className="lg:pr-32">
          <div className="border-b pb-20 border-yellow-500">
            <h2 className="pb-3 text-3xl border-b mb-4 border-yellow-500 italic font-bold">How it works</h2>
            <div className="flex gap-6">
              <div className="w-24 h-24 bg-blue-300"></div>
              <div className="w-24 h-24 bg-blue-300"></div>
              <div className="w-24 h-24 bg-blue-300"></div>
            </div>
          </div>
        </section>
        <section className="lg:pr-32">
        <div className="flex items-end justify-between pb-3 border-b border-yellow-500">
          <h2 className="text-3xl italic font-bold">Feedback</h2>
          <div className="w-5 h-5 bg-red-500"></div>
        </div>
          
          {/* <FeedbackSlider /> */}
        </section>
        <section className="flex flex-col items-center gap-4 pt-24 lg:pr-32 text-center">
          <h2 className="text-3xl font-bold">Join our Waitlist</h2>
          <WaitlistForm alt />
        </section>
        <Footer />
      </main>
      <SideMenu />
    </div>
  );
}
