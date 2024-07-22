import Head from 'next/head';
import React from 'react';
import Slider from "react-slick";
import Link from 'next/link';

const OurDepartment = () => {
    
    var settings = {
      
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
      
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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
            <main>
                <div>
                    <div className='xl:px-[6.5rem] py-[5rem] md:px-[3rem] px-[0.6rem]'>
                        <div className=" text-center font-bold md:text-[44px] text-[35px]" 
                        data-aos="fade-down" data-aos-duration="2000" data-aos-easing="linear">
                            Our Department
                        </div>
                        <div className="">
                            <Slider {...settings}>
                                <div>
                                    <div className=" lg:p-[1rem] md:p-[0.5rem] p-2">
                                        <div className='custom-shadow rounded-[10px] bg-[#FFFFFF] relative p-[15px] overflow-hidden'>
                                            <div className="rounded-[10px] bg-[url('/images/dept1.jpg')] bg-[50%_50%] bg-cover bg-no-repeat h-[250px]">
                                            </div>
                                            <div className="relative ">
                                                <div className="text-[20px] font-semibold m-[0.6rem_0]">
                                                    Eye Care
                                                </div>
                                                <div className="  text-[14px] text-[#868585]">
                                                    Sudden up my excuse to suffer ladies though or. Bachelor possible marianne one directly confined the mention process.
                                                </div>
                                                <p className="text-[14px] m-[1rem_0]">
                                                    <span className="font-semibold">Department-head: </span><span className="text-[#767575]">Dr.ibrahim-nashashibi</span>
                                                </p>
                                                <div className="self-start">
                                                    <Link href='/' className='focus:outline-none w-fit inline-block'>
                                                        <img src='/icons/dept-btn.png' className="w-[40px] h-[40px]" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="rounded-[10px] absolute right-[0px] bottom-[0px] w-[104px] h-[85px]">
                                                <div className="bg-[url('/icons/dept-bg.png')] bg-[50%_50%] bg-cover bg-no-repeat rotate-[-4.29deg] absolute right-[0.4px] bottom-[0.5px] w-[88.6px] h-[68.5px]">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className=" lg:p-[1rem] md:p-[0.5rem] p-2">
                                        <div className='custom-shadow rounded-[10px] bg-[#FFFFFF] relative p-[15px] overflow-hidden'>
                                            <div className="rounded-[10px] bg-[url('/images/dept2.jpg')] bg-[50%_50%] bg-cover bg-no-repeat h-[250px]">
                                            </div>
                                            <div className="relative ">
                                                <div className="text-[20px] font-semibold m-[0.6rem_0]">
                                                Dental Care
                                                </div>
                                                <div className="  text-[14px] text-[#868585]">
                                                    Sudden up my excuse to suffer ladies though or. Bachelor possible marianne one directly confined the mention process.
                                                </div>
                                                <p className="text-[14px] m-[1rem_0]">
                                                    <span className="font-semibold">Department-head: </span><span className="text-[#767575]">Dr.ibrahim-nashashibi</span>
                                                </p>
                                                <div className="self-start">
                                                    <Link href='/' className='focus:outline-none w-fit inline-block'>
                                                        <img src='/icons/dept-btn.png' className="w-[40px] h-[40px]" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="rounded-[10px] absolute right-[0px] bottom-[0px] w-[104px] h-[85px]">
                                                <div className="bg-[url('/icons/dept-bg.png')] bg-[50%_50%] bg-cover bg-no-repeat rotate-[-4.29deg] absolute right-[0.4px] bottom-[0.5px] w-[88.6px] h-[68.5px]">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className=" lg:p-[1rem] md:p-[0.5rem] p-2">
                                        <div className='custom-shadow rounded-[10px] bg-[#FFFFFF] relative p-[15px] overflow-hidden'>
                                            <div className="rounded-[10px] bg-[url('/images/dept3.jpg')] bg-[50%_50%] bg-cover bg-no-repeat h-[250px]">
                                            </div>
                                            <div className="relative ">
                                                <div className="text-[20px] font-semibold m-[0.6rem_0]">
                                                Primary Care
                                                </div>
                                                <div className="  text-[14px] text-[#868585]">
                                                     Sudden up my excuse to suffer ladies though or. Bachelor possible marianne one directly confined the mention process.
                                                </div>
                                                <p className="text-[14px] m-[1rem_0]">
                                                    <span className="font-semibold">Department-head: </span><span className="text-[#767575]">Dr.ibrahim-nashashibi</span>
                                                </p>
                                                <div className="self-start">
                                                    <Link href='/' className='focus:outline-none w-fit inline-block'>
                                                        <img src='/icons/dept-btn.png' className="w-[40px] h-[40px]" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="rounded-[10px] absolute right-[0px] bottom-[0px] w-[104px] h-[85px]">
                                                <div className="bg-[url('/icons/dept-bg.png')] bg-[50%_50%] bg-cover bg-no-repeat rotate-[-4.29deg] absolute right-[0.4px] bottom-[0.5px] w-[88.6px] h-[68.5px]">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className=" lg:p-[1rem] md:p-[0.5rem] p-2">
                                        <div className='custom-shadow rounded-[10px] bg-[#FFFFFF] relative p-[15px] overflow-hidden'>
                                            <div className="rounded-[10px] bg-[url('/images/dept4.png')] bg-[50%_50%] bg-cover bg-no-repeat h-[250px]">
                                            </div>
                                            <div className="relative ">
                                                <div className="text-[20px] font-semibold m-[0.6rem_0]">
                                                Children’s Health
                                                </div>
                                                <div className="  text-[14px] text-[#868585]">
                                                     Sudden up my excuse to suffer ladies though or. Bachelor possible marianne one directly confined the mention process.
                                                </div>
                                                <p className="text-[14px] m-[1rem_0]">
                                                    <span className="font-semibold">Department-head: </span><span className="text-[#767575]">Dr.ibrahim-nashashibi</span>
                                                </p>
                                                <div className="self-start">
                                                    <Link href='/' className='focus:outline-none w-fit inline-block'>
                                                        <img src='/icons/dept-btn.png' className="w-[40px] h-[40px]" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="rounded-[10px] absolute right-[0px] bottom-[0px] w-[104px] h-[85px]">
                                                <div className="bg-[url('/icons/dept-bg.png')] bg-[50%_50%] bg-cover bg-no-repeat rotate-[-4.29deg] absolute right-[0.4px] bottom-[0.5px] w-[88.6px] h-[68.5px]">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </Slider>

                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}



export default OurDepartment
