import Head from "next/head";
import Image from "next/image";

import HeroImage from "../public/images/hero.svg";
import Layout from "../components/Layouts/SiteLayout";
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <Layout>
        <Head>
            <title>Veldora Docs</title>
            <meta name="description" content="Veldora Docs" />
        </Head>
        <section className="flex flex-col items-center mr-24 md:h-screen pt-24">
            <div className="flex-1 flex flex-col">
                <Image
                    src={HeroImage}
                    alt="Veldora Docs"
                    />
                    <p className="text-gray-400  text-center">
                        This page is under construction.
                    </p>
                    <Link href="/">
                        <button className="p-5 py-2 mt-6 self-center italic text-black bg-primary">Go to Home</button>
                    </Link>

            </div>
            </section>
    </Layout>
  );
}
