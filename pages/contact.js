import Banner from '@/components/Banner';
import Contactus from '@/components/Contact/Contactus';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Newslatter from '@/components/Newslatter';
import Head from 'next/head';
import React from 'react';


const Contact = () => {
  return (
    <>
      <Head>
        <title>Dental Clinic | Contact</title>
      </Head>
      <main>
        <Header />
        <div className='relative'>
          <Banner title="Contact Us" />
          <Contactus />
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5704.106960256783!2d35.222238640956256!3d31.77915022283992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150329d19dfe32fb%3A0xf140fb24a54640ca!2sYannai%2C%20Jerusalem%2C%20Israel!5e0!3m2!1sen!2sin!4v1716380246472!5m2!1sen!2sin" height="400" allowfullscreen="" style={{width:"100%"}} ></iframe>
        </div>

        <Newslatter />
        <Footer />
      </main>

    </>
  )
}

export default Contact
