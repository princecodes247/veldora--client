import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SideMenu from "../components/SideMenu";
import WaitlistForm from "../components/WaitlistForm/WaitlistForm";
import HeroImage from "../public/images/hero.svg";
import styles from "../styles/Waitlist.module.css";
import FeedbackSlider from "../components/FeedbackSlider/FeedbackSlider";
import Layout from "../components/Layouts/SiteLayout";

import logo from "../public/images/logo.svg"

export default function Waitlist() {
  return (
    <Layout>
    
      <Head>
        <title>Veldora Waitlist</title>
        <meta name="description" content="Veldora waitlist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <section className="flex flex-col-reverse items-start flex-1 pt-24 sm:flex-row md:h-screen">
          <div className="flex flex-col flex-1 gap-4 sm:text-left">
            <h1 className="text-4xl font-bold md:text-6xl font-header">
              Need
              <span className="text-primary"> backend </span>
              for your form?
            </h1>
            <p className="w-3/4 my-4 text-gray-400 sm:w-full">
              Veldora solves that problem by providing you with quality form
              services. save your email to join the waitlist.
            </p>
            <WaitlistForm />
          </div>
          <div className="">
            <Image
                src={HeroImage}
                alt="Veldora Waitlist"
                />
          </div>
        </section>

        <section className="my-16 sm:mt-2 lg:pr-32">
          <h2 className="pb-3 mb-4 text-3xl italic font-bold border-b border-primary">
            What we do
          </h2>
          <div className="flex gap-4">
            <div className="hidden w-96 sm:block">
              <Image src={logo} alt="Veldora" className="w-full" />
            </div>
            <div className="">

            <p className="text-sm text-gray-400">
              With Veldora you can create your form and send the forms data to
              our server. we handle the rest. from email notifications, to
              submission management and even data validation can be handled
              flawlessly without any backend from your end. validation can be
              handled flawlessly without any backend from your endvalidation can
              be handled flawlessly without any backend from your end.
            </p>
            <button className="p-5 py-2 mt-4 italic text-black bg-primary">Join our Waitlist</button>
            </div>
          </div>
        </section>
        <section className="lg:pr-32">
          <div className="pb-20">
            <h2 className="pb-3 mb-4 text-3xl italic font-bold border-b border-primary">
              How it works
            </h2>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="w-full bg-blue-900 bg-opacity-10 lg:w-24 h-44 lg:h-24"></div>
              <div className="w-full bg-blue-900 bg-opacity-10 lg:w-24 h-44 lg:h-24"></div>
              <div className="w-full bg-blue-900 bg-opacity-10 lg:w-24 h-44 lg:h-24"></div>
            </div>
          </div>
        </section>
        {/* <section className="lg:pr-32">
          <div className="flex items-end justify-between pb-3 border-b border-primary">
            <h2 className="text-3xl italic font-bold">Feedback</h2>
            <div className="w-5 h-5 bg-red-500"></div>
          </div>

          <FeedbackSlider />
        </section> */}
        <section className="flex flex-col items-center gap-4 pt-24 text-center lg:pr-32">
          <h2 className="text-3xl font-bold">Join our Waitlist</h2>
          <WaitlistForm alt />
        </section>
  
    </Layout>
  );
}
