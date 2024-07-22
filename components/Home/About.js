import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <>
            <main>
                <div className='xl:px-[8rem] py-[6rem] md:px-[4rem] px-[0.6rem]'>
                    <div className='flex flex-wrap items-center justify-center'>
                        <div className='lg:w-6/12 relative p-1' data-aos="zoom-out-up" data-aos-duration="3000">
                            <img src="/images/about1.png" alt="" className='md:w-[24rem]  xl:w-[34rem] w-[18rem] md:pt-[3.5rem] pt-4' />
                            <img src="/images/about2.png" alt="" className='absolute top-0 xl:w-[34rem] md:w-[24rem] w-[18rem] md:left-[3.5rem] left-4' />
                        </div>

                        <div className='lg:w-6/12 ps-4'>
                            <div className="my-[1.8rem] flex flex-col">
                                <div className="justify-center self-start" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="linear">
                                    <span className="font-bold lg:text-[40px] text-[30px] leading-[3rem]">
                                        Clinic with innovative approach to treatment
                                    </span>
                                </div>

                                <div className="m-[1.5rem_0] text-justify text-[14px] leading-[1.556] text-[#8c8b8b]"
                                data-aos="fade-left" data-aos-duration="2500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis nisl eu tortor euismod fermentum a eu elit. Proin facilisis tincidunt erat, et porta ante sodales at. Nullam sed convallis lacus. Etiam commodo nunc ornare felis pretium tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                                <div className="my-[8px] flex self-start" data-aos="fade-left" data-aos-delay="100" data-aos-anchor-placement="bottom-bottom">
                                    <div className="me-2 flex justify-center ">
                                        <img src='/icons/right.png' className="h-[17px] w-[18px]" />
                                    </div>
                                    <span className="font-bold text-[14px]">
                                        Friendly team you can call friends
                                    </span>
                                </div>
                                <div className="my-[8px] flex self-start" data-aos="fade-left" data-aos-delay="150" data-aos-anchor-placement="bottom-bottom">
                                    <div className="me-2 flex justify-center ">
                                        <img src='/icons/right.png' className="h-[17px] w-[18px]" />
                                    </div>
                                    <span className="font-bold text-[14px]">
                                        Sedation dentistry to help you relax
                                    </span>
                                </div>
                                <div className="my-[8px] flex self-start" data-aos="fade-left" data-aos-delay="200" data-aos-anchor-placement="bottom-bottom">
                                    <div className="me-2 flex justify-center ">
                                        <img src='/icons/right.png' className="h-[17px] w-[18px]" />
                                    </div>
                                    <span className="font-bold text-[14px]">
                                        We accept many insurance plans and offer discounts
                                    </span>
                                </div>
                                <div className="my-[8px] flex self-start" data-aos="fade-left" data-aos-delay="250" data-aos-anchor-placement="bottom-bottom">
                                    <div className="me-2 flex justify-center ">
                                        <img src='/icons/right.png' className="h-[17px] w-[18px]" />
                                    </div>
                                    <span className="font-bold text-[14px]">
                                        We use energy-saving and waste-reducing methods
                                    </span>
                                </div>
                                <div className="my-[8px] flex self-start" data-aos="fade-left" data-aos-delay="300" data-aos-anchor-placement="bottom-bottom">
                                    <div className="me-2 flex justify-center ">
                                        <img src='/icons/right.png' className="h-[17px] w-[18px]" />
                                    </div>
                                    <span className="font-bold text-[14px]">
                                        Adult and Children&#39;s Trauma Center
                                    </span>
                                </div>
                                <div className="my-[8px] flex self-start" data-aos="fade-left" data-aos-delay="350" data-aos-anchor-placement="bottom-bottom">
                                    <div className="me-2 flex justify-center ">
                                        <img src='/icons/right.png' className="h-[17px] w-[18px]" />
                                    </div>
                                    <span className="font-bold text-[14px]">
                                        Heart and Vascular Institute
                                    </span>
                                </div>

                            </div>
                            <Link href='/about' data-aos="fade-left" data-aos-delay="500" data-aos-anchor-placement="bottom-bottom" className="font-semibold text-[14px]  p-[10px_28px] rounded-[10px] bg-[#ffde59] relative w-fit hover:bg-opacity-70">
                                Read More
                            </Link>



                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About
