import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Newslatter from '@/components/Newslatter';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const login = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  return (
    <>
      <Head>
        <title>Dental Clinic | Log In</title>
      </Head>
      <main>
        <Header />
        <Banner title="Log In" />
        <div className=' px-[0.6rem] py-[6rem] flex justify-center'>
          <div className="bg-opacity-50 space-y-[1.4rem] rounded-[20px] bg-[#ffde59] relative  flex flex-col items-center lg:w-[50%] w-[90%] md:p-[4rem] p-[40px_20px]" data-aos="zoom-out-up">

            <div className='w-full'>
              <input type="text" name="" id="" placeholder='Enter Your Email Address*' className="bg-opacity-25 w-full rounded-[10px] bg-[#ffde59] text-[16px] tracking-[0.5px] focus:outline-0 p-[13px_12px] placeholder-black text-medium" />
            </div>

            <div className='w-full'>
              <input type="password" name="" id="" placeholder='Enter Your Password*' className="bg-opacity-25 w-full rounded-[10px] bg-[#ffde59] text-[16px] tracking-[0.5px] focus:outline-0 p-[13px_12px] placeholder-black text-medium" />
            </div>
            <div className='text-right w-full '>
              <Link href='/' className="font-medium text-[16px]" >
                Forget Password
              </Link>
            </div>


            <button className="font-semibold text-[18px] tracking-[0.4px] leading-[1.55] rounded-[8px] bg-[#ffde59] hover:bg-opacity-70 text-center relative  py-[0.5rem] w-full text-[#FFFFFF]">
              Log In
            </button>

            <p className="font-medium text-[17px] text-[#676767]">
              Dont’t have an account? <Link href='/signup' className='text-black'>Sign Up</Link>
            </p>
            <div className="inline-block font-medium text-[17px]">
              OR
            </div>

            <div className="flex flex-row gap-4">
              <Link href='/' className="h-[35px]">
                <img src='/icons/facebook.png' className="h-[35px] hover:-mt-[2px]" />
              </Link>
              <Link href='/' className="h-[35px]">
                <img src='/icons/google.png' className="h-[35px] hover:-mt-[2px]" />
              </Link>
            </div>
          </div>
        </div>
        <Newslatter />
        <Footer />
      </main>

    </>
  )
}

export default login
