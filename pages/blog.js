import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
// import OurBlog from '@/components/Blog/Blog';
import Newslatter from '@/components/Newslatter';
import Head from 'next/head';
import React, { useState } from 'react';
import Blogs from '@/components/Blog/Blogs';


const Blog = () => {

  return (
    <>
      <Head>
        <title>Dental Clinic | Blog</title>
      </Head>
      <main>
        <Header />
        <Banner title="Blog" />
        <Blogs />
        <Newslatter />
        <Footer />
      </main>

    </>
  )
}

export default Blog
