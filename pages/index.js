import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Home/Banner";
import Service from "@/components/Home/Service";
import About from "@/components/Home/About";
import WhyCoose from "@/components/Home/WhyCoose";
import Banner2 from "@/components/Home/Banner2";
import OurDepartment from "@/components/Home/OurDepartment";
import Counting from "@/components/Home/Counting";
import DoctorsTeam from "@/components/Home/DoctorsTeam";
import OpeningTime from "@/components/Home/OpeningTime";
import Testimonials from "@/components/Home/Testimonials";
import OurBlog from "@/components/Home/OurBlog";
import Footer from "@/components/Footer";
import Newslatter from "@/components/Newslatter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return (
    <>
      <Head>
        <title>Dental Clinic</title>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <main className={` ${inter.className}`}>

        <Header />
        <Banner />
        <Service />
        <About />
        <WhyCoose />
        <Banner2 />
        <OurDepartment />
        <Counting />
        <DoctorsTeam />
        <OpeningTime />
        <Testimonials />
        <OurBlog />
        <Newslatter />
        <Footer />

      </main>
    </>
  );
}
