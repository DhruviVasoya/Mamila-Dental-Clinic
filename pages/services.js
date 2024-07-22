import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Newslatter from '@/components/Newslatter';
import Quote from '@/components/Service/Quote';
import Service from '@/components/Service/Service';
import Head from 'next/head';
import React from 'react';


const Services = () => {
  return (
    <>
      <Head>
        <title>Dental Clinic | Services</title>
      </Head>
      <main>
        <Header />
        <Banner title="Services" />
        <Service />
        <Quote />
        <Newslatter />
        <Footer />
      </main>

    </>
  )
}

export default Services
