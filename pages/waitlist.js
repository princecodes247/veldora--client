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
    <div className={styles.container}>
      <Head>
        <title>Veldora Waitlist</title>
        <meta name="description" content="Veldora waitlist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <section>
          <h1>Need backend for your form?</h1>
          <p>
          Veldore solves that problem by providing you with quality form services. save your email to join the waitlist.
          </p>
          <WaitlistForm/>
        </section>
        <section>
        Feedback
        <FeedbackSlider/>
        </section>
        <section>
        What we do
        <p>
        With Veldora you can creae your form and send the forms data to our server. we handle the rest. from email notifications, to submission management and even data validation can be handled flawlessly without any backend from your end.
validation can be handled flawlessly without any backend from your endvalidation can be handled flawlessly without any backend from your end.
        </p>
        </section>
        <section>
          <h2>How it works</h2>
          
        </section>
       <Footer/>
      </main>
      <SideMenu/>
      
    </div>
  )
}
