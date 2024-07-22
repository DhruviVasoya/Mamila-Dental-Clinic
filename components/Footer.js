import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const date = new Date();
   
    return (
        <>
            <main>
                <div>
                    <div className="bg-[#000000] relative flex flex-col items-center xl:px-[5rem] py-[3.5rem] md:px-[2.5rem] px-[0.6rem]">
                        <div className=" flex flex-wrap w-full">
                            <div className=" md:w-1/4 md:flex flex-wrap justify-center w-full my-5">
                                <div className='space-y-5'>
                                    <img src="/images/black-logo.jpg" alt="" className='w-[15rem]' />
                                    {/* <img src="/icons/logo-white.png" alt="" className='w-[15rem]' /> */}
                                    <div className=" flex flex-row gap-3">
                                        <div className=" flex flex-row items-center">
                                            <img src='/icons/Locations.png' className=" h-[24px]" />
                                        </div>
                                        <div className="font-light text-[14px] text-[#FFFFFF] max-w-[70%]">
                                        Israel, Jerusalem, Yanai
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-3">
                                        <div className="flex flex-row justify-center  items-center">
                                            <img src='/icons/phone-white.png' className="h-[24px]" />
                                        </div>
                                        <div className="m-[3px_0_6px_0] inline-block font-light text-[14px] text-[#FFFFFF]">
                                            <Link href="tel:0737413007">+972 (0)73 7413 007</Link>,<br />
                                            <Link href="tel:0587882038">+972 (0)58 7882 038</Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-3">
                                        <div className="flex flex-row justify-center ">
                                            <img src='/icons/mail-white.png' className="h-[24px]" />
                                        </div>
                                        <span className="font-light text-[14px] text-[#FFFFFF]">
                                            <Link href="mailto:info@mamillaclinic.com">info@mamillaclinic.com</Link><br />
                                            <Link href="www.mamillaclinic.com">www.mamillaclinic.com </Link>

                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className=" md:w-1/4 w-full  md:flex flex-wrap justify-center my-5">
                                <div>
                                    <div className="font-normal lg:text-[22px] text-[18px] text-[#E7E7E7] mb-6">
                                        Quick links
                                    </div>
                                    <div className="font-extralight lg:text-[14px] text-[14px]  text-[#eaeaea]">
                                        <ul className='space-y-4'>
                                            <li><Link href="/">Home</Link></li>
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/services">Services</Link></li>
                                            <li><Link href="/blog">Blogs</Link></li>
                                            <li><Link href="/contact">Contact Us</Link></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/4 w-full md:flex flex-wrap justify-center my-5">
                                <div>
                                    <div className=" font-normal lg:text-[22px] text-[18px] text-[#E7E7E7] mb-6">
                                        Company
                                    </div>
                                    <div className="font-extralight lg:text-[14px] text-[14px]  text-[#eaeaea]">
                                        <ul className='space-y-4'>
                                            <li><Link href="/">My Accounts</Link></li>
                                            <li><Link href="/">Book Appointment</Link></li>
                                            <li><Link href="/">Download</Link></li>
                                            <li><Link href="/">Privacy Policy</Link></li>
                                            <li><Link href="/">Terms & Condition</Link></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/4 w-full md:flex flex-wrap justify-center my-5">
                                <div>
                                    <div className="font-normal lg:text-[22px] text-[18px] text-[#E7E7E7] mb-6">
                                        Follow Us
                                    </div>
                                    <div className="flex flex-row lg:gap-4 gap-2">
                                        <Link href='/'  className="h-[25px]">
                                            <img src='/icons/face-white.png' className="h-[25px] hover:-mt-1" />
                                        </Link>
                                        <Link href='/'  className="h-[25px]">
                                            <img src='/icons/twirre-white.png' className="h-[25px] hover:-mt-1" />
                                        </Link>
                                        <Link href='/'  className="h-[25px]">
                                            <img src='/icons/in-white.png' className="h-[25px] hover:-mt-1" />
                                        </Link>
                                        <Link href='/' className="h-[25px]">
                                            <img src='/icons/instag-white.png' className="h-[25px] hover:-mt-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-opacity-[95%] bg-[#000000] relative flex flex-row justify-center py-[1.6rem] w-full">
                        <span className="font-light text-[14px] tracking-normal text-[#FFFFFF]">
                            ©{date.getFullYear()} Mamilla Dental Clinic
                        </span>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Footer
