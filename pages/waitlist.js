import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import Footer from '../components/Footer'
import SideMenu from '../components/SideMenu'
import WaitlistForm from '../components/WaitlistForm/WaitlistForm'

import styles from '../styles/Waitlist.module.css'
import FeedbackSlider from '../components/FeedbackSlider/FeedbackSlider'


export default function Waitlist() {
  return (
    <div className="flex text-white bg-black">
      <Head>
        <title>Veldora Waitlist</title>
        <meta name="description" content="Veldora waitlist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <section>
          <div className="">
          <h1 className='text-6xl'>Need 
          <span className='text-6xl text-orange-400'>{' '}backend{' '}</span>
           for your form?</h1>
          <p>
          Veldore solves that problem by providing you with quality form services. save your email to join the waitlist.
          </p>
          <WaitlistForm/>
          </div>
          <div
            className=""
            >
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
        <section>
          <h2>How it works</h2>
          
        </section>
        <section>
        Feedback
        <FeedbackSlider/>
        </section>
        <section>
        <h2>Join our Waitlist</h2>
        <p>
        We are always looking for new developers to join our team.
        </p>
        <WaitlistForm/>
        </section>
       <Footer/>
      </main>
      <SideMenu/>
      
    </div>
  )
}
