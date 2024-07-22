import React from 'react';
import Slider from "react-slick";

const DoctorsTeam = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
            <main>
                <div className='py-[6rem]'>
                    <div className="xl:px-[6rem] py-[2rem] md:px-[3rem] px-[0.6rem]">
                        <div className="font-bold md:text-[40px] text-[35px] text-center mb-[1.5rem]">
                            Our Doctor
                        </div>

                        {/* <div className="flex flex-wrap w-full justify-center h-full">

                            <div className="lg:w-3/12 md:w-6/12 xl:px-5 lg:px-2 px-4 py-1"
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                <div className='hover:-mt-[5px] transition-all'>
                                    <div className="rounded-t-[10px]">
                                        <img src="/images/team4.jpg" alt="" className='w-full' />
                                    </div>
                                    <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                        <div className="font-medium text-[18px] text-[#FFFFFF]">
                                            Dr. Namrata Sarma
                                        </div>
                                        <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                            Dentist
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className=" lg:w-3/12 md:w-6/12 xl:px-5 lg:px-2 px-4 py-1"
                                data-aos="fade-up"
                                data-aos-delay="350"
                            >
                                <div className='hover:-mt-[5px] transition-all'>
                                    <div className="rounded-t-[10px]">
                                        <img src="/images/team3.jpg" alt="" className='w-full' />
                                    </div>
                                    <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                        <div className="font-medium text-[18px] text-[#FFFFFF]">
                                            Dr. Ibrahim Nashashibi
                                        </div>
                                        <span className="opacity-80 text-[16px] text-[#FFFFFF]">
                                            Traumatologist
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="slider-container">
                            <Slider {...settings}>
                                <div>
                                    <div className="px-4 py-1" >
                                        <div className='hover:-mt-[5px] transition-all'>
                                            <div className="rounded-t-[10px]">
                                                <img src="/images/team1.jpg" alt="" className='w-full' />
                                            </div>
                                            <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                                <div className="font-medium text-[18px] text-[#FFFFFF]">
                                                    Dr. Namrata Sarma
                                                </div>
                                                <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                                    Dentist
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="px-4 py-1" >
                                        <div className='hover:-mt-[5px] transition-all'>
                                            <div className="rounded-t-[10px]">
                                                <img src="/images/team2.jpg" alt="" className='w-full' />
                                            </div>
                                            <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                                <div className="font-medium text-[18px] text-[#FFFFFF]">
                                                    Dr. Namrata Sarma
                                                </div>
                                                <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                                    Dentist
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="px-4 py-1" >
                                        <div className='hover:-mt-[5px] transition-all'>
                                            <div className="rounded-t-[10px]">
                                                <img src="/images/team3.jpg" alt="" className='w-full' />
                                            </div>
                                            <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                                <div className="font-medium text-[18px] text-[#FFFFFF]">
                                                    Dr. Namrata Sarma
                                                </div>
                                                <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                                    Dentist
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="px-4 py-1" >
                                        <div className='hover:-mt-[5px] transition-all'>
                                            <div className="rounded-t-[10px]">
                                                <img src="/images/team4.jpg" alt="" className='w-full' />
                                            </div>
                                            <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                                <div className="font-medium text-[18px] text-[#FFFFFF]">
                                                    Dr. Namrata Sarma
                                                </div>
                                                <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                                    Dentist
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="px-4 py-1" >
                                        <div className='hover:-mt-[5px] transition-all'>
                                            <div className="rounded-t-[10px]">
                                                <img src="/images/team5.jpg" alt="" className='w-full' />
                                            </div>
                                            <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                                <div className="font-medium text-[18px] text-[#FFFFFF]">
                                                    Dr. Namrata Sarma
                                                </div>
                                                <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                                    Dentist
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="px-4 py-1" >
                                        <div className='hover:-mt-[5px] transition-all'>
                                            <div className="rounded-t-[10px]">
                                                <img src="/images/team6.jpg" alt="" className='w-full' />
                                            </div>
                                            <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                                <div className="font-medium text-[18px] text-[#FFFFFF]">
                                                    Dr. Namrata Sarma
                                                </div>
                                                <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                                    Dentist
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                        </div>

                    </div>

                    <div className="xl:px-[6rem] py-[2rem] md:px-[3rem] px-[0.6rem]">
                        <div className="font-bold md:text-[40px] text-[35px] text-center mb-[1.5rem]">
                            Our Workers
                        </div>

                        {/* <div className="flex flex-wrap w-full justify-center h-full">
                            <div className="lg:w-3/12 md:w-6/12 xl:px-5 lg:px-2 px-4 py-1"
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                <div className='hover:-mt-[5px] transition-all'>
                                    <div className="rounded-t-[10px]">
                                        <img src="/images/team7.jpg" alt="" className='w-full' />
                                    </div>
                                    <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                        <div className="font-medium text-[18px] text-[#FFFFFF]">
                                            Dr. Ravi Nakrani
                                        </div>
                                        <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                            Dentist
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className=" lg:w-3/12 md:w-6/12 xl:px-5 lg:px-2 px-4 py-1"
                                data-aos="fade-up"
                                data-aos-delay="350"
                            >
                                <div className='hover:-mt-[5px] transition-all'>
                                    <div className="rounded-t-[10px]">
                                        <img src="/images/team6.jpg" alt="" className='w-full' />
                                    </div>
                                    <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                        <div className="font-medium text-[18px] text-[#FFFFFF]">
                                            Dr. Bhavik Patel
                                        </div>
                                        <span className="opacity-80 text-[16px] text-[#FFFFFF]">
                                            Traumatologist
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-3/12 md:w-6/12 xl:px-5 lg:px-2 px-4 py-1"
                                data-aos="fade-down"
                                data-aos-delay="350"
                            >
                                <div className='hover:-mt-[5px] transition-all'>
                                    <div className="rounded-t-[10px]">
                                        <img src="/images/team1.jpg" alt="" className='w-full' />
                                    </div>
                                    <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                        <div className="font-medium text-[18px] text-[#FFFFFF]">
                                            Dr. Tanvi Patel
                                        </div>
                                        <span className="opacity-80 text-[16px] text-[#FFFFFF]">
                                            Dentist
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-3/12 md:w-6/12 xl:px-5 lg:px-2 px-4 py-1"
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className='hover:-mt-[5px] transition-all'>
                                    <div className="rounded-t-[10px]">
                                        <img src="/images/team2.jpg" alt="" className='w-full' />
                                    </div>
                                    <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                        <div className="font-medium text-[18px] text-[#FFFFFF]">
                                            Dr. Ibrahim Nashashibi
                                        </div>
                                        <span className="opacity-80 text-[16px] text-[#FFFFFF]">
                                            Dentist
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div>
                                    <div className="px-4 py-1" >
                                        <div className='hover:-mt-[5px] transition-all'>
                                            <div className="rounded-t-[10px]">
                                                <img src="/images/team1.jpg" alt="" className='w-full' />
                                            </div>
                                            <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                                <div className="font-medium text-[18px] text-[#FFFFFF]">
                                                    Dr. Namrata Sarma
                                                </div>
                                                <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                                    Dentist
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="px-4 py-1" >
                                        <div className='hover:-mt-[5px] transition-all'>
                                            <div className="rounded-t-[10px]">
                                                <img src="/images/team2.jpg" alt="" className='w-full' />
                                            </div>
                                            <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                                <div className="font-medium text-[18px] text-[#FFFFFF]">
                                                    Dr. Namrata Sarma
                                                </div>
                                                <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                                    Dentist
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="px-4 py-1" >
                                        <div className='hover:-mt-[5px] transition-all'>
                                            <div className="rounded-t-[10px]">
                                                <img src="/images/team3.jpg" alt="" className='w-full' />
                                            </div>
                                            <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                                <div className="font-medium text-[18px] text-[#FFFFFF]">
                                                    Dr. Namrata Sarma
                                                </div>
                                                <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                                    Dentist
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="px-4 py-1" >
                                        <div className='hover:-mt-[5px] transition-all'>
                                            <div className="rounded-t-[10px]">
                                                <img src="/images/team4.jpg" alt="" className='w-full' />
                                            </div>
                                            <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                                <div className="font-medium text-[18px] text-[#FFFFFF]">
                                                    Dr. Namrata Sarma
                                                </div>
                                                <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                                    Dentist
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="px-4 py-1" >
                                        <div className='hover:-mt-[5px] transition-all'>
                                            <div className="rounded-t-[10px]">
                                                <img src="/images/team5.jpg" alt="" className='w-full' />
                                            </div>
                                            <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                                <div className="font-medium text-[18px] text-[#FFFFFF]">
                                                    Dr. Namrata Sarma
                                                </div>
                                                <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                                    Dentist
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="px-4 py-1" >
                                        <div className='hover:-mt-[5px] transition-all'>
                                            <div className="rounded-t-[10px]">
                                                <img src="/images/team6.jpg" alt="" className='w-full' />
                                            </div>
                                            <div className="rounded-b-[10px] bg-[#ffde59] relative flex flex-col items-center p-[1rem_0]">
                                                <div className="font-medium text-[18px] text-[#FFFFFF]">
                                                    Dr. Namrata Sarma
                                                </div>
                                                <span className="opacity-80  text-[16px] text-[#FFFFFF]">
                                                    Dentist
                                                </span>
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

export default DoctorsTeam
