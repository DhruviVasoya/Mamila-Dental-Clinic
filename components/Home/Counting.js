import Head from 'next/head';
import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const Counting = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
            <Head>
                <script>

                </script>
            </Head>
            <main>
                <div className=''>
                    <div className="bg-[url('/images/home-bg3.jpg')] relative xl:px-[8rem] py-[3rem] md:px-[4rem] px-[0.6rem] min-h-[25rem] grid content-center">
                        <div className="opacity-30 bg-[#000000] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] h-[100%]">
                        </div>
                        <div className='h-full'>
                            <div className='flex flex-wrap w-full justify-center h-full'>
                                <div className="relative lg:w-3/12 w-6/12 flex flex-col items-center justify-center"
                                    data-aos="fade-right"
                                    data-aos-offset="200"
                                    data-aos-anchor-placement="bottom-bottom">
                                    <div className=" md:text-[65px] text-[55px] font-semibold text-[#FFFFFF]">
                                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            {counterOn &&
                                                <CountUp
                                                    start={0}
                                                    end={10}
                                                    duration={2}
                                                />
                                            }
                                        </ScrollTrigger>
                                    </div>
                                    <span className=" md:text-[21px] text-[14px] font-medium text-[#FFFFFF]">
                                        Incredible doctors
                                    </span>
                                </div>

                                <div className="relative lg:w-3/12 w-6/12 flex flex-col items-center justify-center"
                                    data-aos="fade-right"
                                    data-aos-offset="180"
                                    data-aos-anchor-placement="bottom-bottom">
                                    <div className="md:text-[65px] text-[55px] font-semibold text-[#FFFFFF]">

                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            {counterOn &&
                                                <CountUp
                                                    start={0}
                                                    end={25}
                                                    duration={2}
                                                />
                                            }
                                        </ScrollTrigger>
                                    </div>
                                    <span className=" md:text-[21px] text-[14px] font-medium text-[#FFFFFF]">
                                        Years of experience
                                    </span>
                                </div>

                                <div className="relative lg:w-3/12 w-6/12 flex flex-col items-center justify-center"
                                    data-aos="fade-right"
                                    data-aos-offset="140"
                                    data-aos-anchor-placement="bottom-bottom">
                                    <div className="md:text-[65px] text-[55px] font-semibold text-[#FFFFFF]">
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            {counterOn &&
                                                <CountUp
                                                    start={0}
                                                    end={8}
                                                    duration={2}
                                                />
                                            }
                                        </ScrollTrigger>
                                    </div>
                                    <span className=" md:text-[21px] text-[14px] font-medium text-[#FFFFFF]">
                                        Communities served
                                    </span>
                                </div>

                                <div className="relative lg:w-3/12 w-6/12 flex flex-col items-center justify-center"
                                    data-aos="fade-right"
                                    data-aos-offset="100"
                                    data-aos-anchor-placement="bottom-bottom">
                                    <div className="md:text-[65px] text-[55px] font-semibold text-[#FFFFFF]">
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                            {counterOn &&
                                                <CountUp
                                                    start={0}
                                                    end={15}
                                                    duration={2}
                                                />
                                            }
                                        </ScrollTrigger>
                                    </div>
                                    <span className=" md:text-[21px] text-[14px] font-medium text-[#FFFFFF]">
                                        Happy patients
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>



        </>
    )
}

export default Counting
