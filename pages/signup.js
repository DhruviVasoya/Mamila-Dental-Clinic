import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Newslatter from '@/components/Newslatter';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

const signup = () => {
  return (
    <>
      <Head>
        <title>Dental Clinic | Sign Up</title>
      </Head>
      <main>
        <Header />
        <Banner title="Create Account" />
        <div>
          <div className=' px-[0.6rem] py-[6rem] flex justify-center'>
            <div className="bg-opacity-40 space-y-[1.4rem] rounded-[20px] bg-[#ffde59] relative  flex flex-col items-center lg:w-[50%] w-[90%] md:p-[4rem] p-[40px_20px]" data-aos="zoom-out-up">

              <div className='w-full'>
                <input type="text" name="" id="" placeholder='Enter Your Firast Name*' className="bg-opacity-20 w-full rounded-[10px] bg-[#ffde59] text-[16px] tracking-[0.5px] focus:outline-0 p-[13px_12px] placeholder-black text-medium" />
              </div>

              <div className='w-full'>
                <input type="text" name="" id="" placeholder='Enter Your Last Name*' className="bg-opacity-20 w-full rounded-[10px] bg-[#ffde59] text-[16px] tracking-[0.5px] focus:outline-0 p-[13px_12px] placeholder-black text-medium" />
              </div>
              <div className='w-full'>
                <input type="number" name="" id=""
                  placeholder='Enter Your Phone Number*'
                  onKeyDown={e => (e.key === "e" || e.key === "-" || e.key === "+" || e.key === ".") && e.preventDefault()}
                  className="bg-opacity-20 w-full rounded-[10px] bg-[#ffde59] text-[16px] tracking-[0.5px] focus:outline-0 p-[13px_12px] placeholder-black text-medium" />
              </div>
              <div className='w-full'>
                <input type="email" name="" id="" placeholder='Enter Your Email Address*' className="bg-opacity-20 w-full rounded-[10px] bg-[#ffde59] text-[16px] tracking-[0.5px] focus:outline-0 p-[13px_12px] placeholder-black text-medium" />
              </div>
              <div className='w-full'>
                <input type="password" name="" id="" placeholder='Enter Your Password*' className="bg-opacity-20 w-full rounded-[10px] bg-[#ffde59] text-[16px] tracking-[0.5px] focus:outline-0 p-[13px_12px] placeholder-black text-medium" />
              </div>
              <div className='w-full'>
                <input type="password" name="" id="" placeholder='Re - Enter Your Password*' className="bg-opacity-20 w-full rounded-[10px] bg-[#ffde59] text-[16px] tracking-[0.5px] focus:outline-0 p-[13px_12px] placeholder-black text-medium" />
              </div>




              <button className="font-semibold text-[18px] tracking-[0.4px] leading-[1.55] rounded-[8px] bg-[#ffde59] hover:bg-opacity-70 text-center relative  py-[0.5rem] w-full text-[#FFFFFF]">
                Sign Up
              </button>

              <p className="font-medium text-[17px] text-[#676767]">
                Already have an account? <Link href='/login' className='text-black'>Log In</Link>
              </p>

            </div>
          </div>
        </div>
        <Newslatter />
        <Footer />
      </main>

    </>
  )
}

export default signup
