import Head from "next/head";
import Image from "next/image";

import HeroImage from "../public/images/hero.svg";
import Layout from "../components/layouts/SiteLayout";
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
        <Head>
            <title>Veldora Docs</title>
            <meta name="description" content="Veldora Docs" />
        </Head>
        <section className="flex flex-col items-center mr-24 md:h-screen pt-24">
            
                <Image
                    src={HeroImage}
                    alt="Veldora Docs"
                    />
                    <p className="text-gray-400">
                        Page not found
                    </p>
                    <Link href="/">
                        <a className="p-5 py-2 mt-4 italic text-black bg-primary">Go to Home</a>
                    </Link>

            
            </section>
    </Layout>
  );
}
