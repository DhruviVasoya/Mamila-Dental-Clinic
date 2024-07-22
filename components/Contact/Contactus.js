import React from 'react';
import Link from 'next/link';

const Contactus = () => {
    return (
        <>
            <>
                <div>
                    <div className="xl:px-[10rem] md:px-[3rem] pb-[6rem]  relative" style={{ zIndex: '1' }}>
                        <div className='flex flex-wrap'>
                            <div className="lg:w-6/12 w-full flex flex-wrap lg:justify-end justify-center"
                            data-aos="fade-up" data-aos-delay="500">
                                <div className="bg-opacity-50 rounded-[30px] bg-[#ffde59] md:p-[3rem] p-[2rem_1rem] -mt-[7rem] w-5/6 space-y-[2.5rem]" >
                                    <div className="space-y-2 ">
                                        <div className=" font-bold text-[40px] pb-3">
                                            Contact Us
                                        </div>
                                        <div className="opacity-30 bg-[#000000]  h-[1px]">
                                        </div>
                                    </div>
                                    <div className=" space-y-2 ">
                                        <div className="font-semibold text-[18px] ">
                                            Email
                                        </div>
                                        <div className="text-justify  text-[15px] ">
                                            <Link href="mailto:info@mamillaclinic.com">info@mamillaclinic.com</Link><br />
                                           <Link href="www.mamillaclinic.com">www.mamillaclinic.com </Link>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="  font-semibold text-[18px] ">
                                            Social Media
                                        </div>
                                        <div className="flex flex-row gap-[0_20px] ">
                                            <div className="flex flex-row justify-center ">
                                                <Link href="/"><img src='/icons/Face-black.png' className="h-[25px]" /></Link>
                                            </div>
                                            <div className="flex flex-row justify-center ">
                                                <Link href="/"><img src='/icons/Instag-black.png' className="h-[25px]" /></Link>
                                            </div>
                                            <div className="flex flex-row justify-center ">
                                                <Link href="/"><img src='/icons/Twirre-black.png' className="h-[25px]" /></Link>
                                            </div>
                                            <div className="flex flex-row justify-center ]">
                                                <Link href="/"><img src='/icons/In-black.png' className="h-[25px]" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className=" font-semibold text-[18px] ">
                                            Location
                                        </div>
                                        <span className="text-justify  text-[15px] ">
                                        Israel, Jerusalem, Yanai
                                        </span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="font-semibold text-[18px] ">
                                            Phone Number
                                        </div>
                                        <span className="text-justify  text-[15px] ">
                                            <Link href="tel:0737413007">+972 (0)73 7413 007</Link>,<br />
                                            <Link href="tel:0587882038">+972 (0)58 7882 038</Link>
                                        </span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="font-semibold text-[18px] ">
                                            Opening Time
                                        </div>
                                        <div>
                                            <div className="flex flex-row justify-between ">
                                                <div className="w-3/6    text-[15px] ">
                                                    09:30 AM To 08:30 PM
                                                </div>
                                                <div className="w-3/6  text-[15px] ">
                                                    Monday To Saturday
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-between ">
                                                <div className=" w-3/6  text-[15px] ">
                                                    09:30 AM To 01:30 PM
                                                </div>
                                                <div className="w-3/6  text-[15px] ">
                                                    Sunday
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           

                            <div className="lg:w-6/12 w-full flex items-center p-[0_3rem] mt-3">
                                <div className="space-y-5 w-full">
                                    <div data-aos="fade-left" data-aos-delay="100" data-aos-anchor-placement="center-bottom">
                                        <input type="text" name="" id="" placeholder='Full Name' className="bg-opacity-30 w-full rounded-[10px] bg-[#ffde59] text-[15px] focus:outline-0 p-[10px_10px]" />
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="200" data-aos-anchor-placement="center-bottom">
                                        <input type="email" name="" id="" placeholder='Email' className="bg-opacity-30 w-full rounded-[10px] bg-[#ffde59] text-[15px] focus:outline-0 p-[10px_10px]" />
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="300" data-aos-anchor-placement="center-bottom">
                                        <input type="number" name="" id="" placeholder='Phone Number' className="bg-opacity-30 w-full rounded-[10px] bg-[#ffde59] text-[15px] focus:outline-0 p-[10px_10px]" />
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="400" data-aos-anchor-placement="center-bottom">
                                        <input type="text" name="" id="" placeholder='Subject' className="bg-opacity-30 w-full rounded-[10px] bg-[#ffde59] text-[15px] focus:outline-0 p-[10px_10px]" />
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="500" data-aos-anchor-placement="center-bottom">
                                      
                                        <textarea rows={5} name="" id="" placeholder='Message' className="bg-opacity-30 w-full rounded-[10px] bg-[#ffde59] text-[15px] focus:outline-0 p-[10px_10px]"></textarea>
                                    </div>
                                   
                                    <button className="rounded-[10px] bg-[#ffde59] hover:bg-opacity-75 text-center w-full py-[8px]"
                                     data-aos="fade-left" data-aos-delay="500" data-aos-anchor-placement="center-bottom">
                                        <span className="font-semibold text-[18px]">
                                            Send Message
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        </>
    )
}

export default Contactus
