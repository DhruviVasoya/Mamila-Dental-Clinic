import React from 'react'

const Aboutus = () => {
    return (
        <>
            <main>
                <div>
                    <div className='xl:px-[8rem] py-[6rem] md:px-[4rem] px-[0.6rem]'>
                        <div className='flex flex-wrap items-center justify-center'>
                            <div className='lg:w-6/12 relative p-1' data-aos="fade-right" data-aos-duration="3000">
                                <img src="/images/about1.png" alt="" className='md:w-[24rem]  xl:w-[34rem] w-[18rem] md:pt-[3.5rem] pt-4' />
                                <img src="/images/about2.png" alt="" className='absolute top-0 xl:w-[34rem] md:w-[24rem] w-[18rem] md:left-[3.5rem] left-4' />
                            </div>

                            <div className='lg:w-6/12 ms:ps-4 px-2'>
                                <div className="my-[1.8rem] space-y-5">

                                    <div className="justify-center self-start" data-aos="fade-left" data-aos-delay="150">
                                        <h2 className="font-bold lg:text-[40px] text-[30px] leading-[3rem]">
                                            Clinic with innovative approach to treatment
                                        </h2>
                                    </div>
                                    <div className='space-y-3' data-aos="fade-left" data-aos-delay="200">
                                        <p className="text-justify text-[14px]  text-[#666666]">
                                            At Mamilla Clinic, we believe that a healthy smile is the cornerstone of overall well-being. Nestled in the heart of Jerusalem, our clinic has been a trusted destination for personalized dental care for over 6 years. From routine cleanings to advanced cosmetic procedures, we are dedicated to helping you achieve optimal oral health and a smile that radiates confidence.
                                        </p>
                                    </div>
                                    <div className='space-y-3' data-aos="fade-left" data-aos-delay="250">
                                        <h4 className='text-[14px] font-bold'>Our Story</h4>
                                        <p className="text-justify text-[14px]  text-[#666666]">
                                            Our journey began with a simple vision: to create a dental practice where patients feel welcomed, valued, and truly cared for. Founded by Dr. Ibrahim Nashashibi, a seasoned dentist with a passion for excellence, Mamilla Clinic quickly earned a reputation for exceptional service and compassionate care.
                                        </p>
                                    </div>
                                    <div className='space-y-3' data-aos="fade-left" data-aos-delay="300">
                                        <h4 className='text-[14px] font-bold'>Meet Our Team</h4>
                                        <p className="text-justify text-[14px]  text-[#666666]">
                                            At the heart of Mamilla Clinic is our team of skilled professionals, each committed to your comfort and satisfaction. From our experienced dentists to our friendly support staff, every member of our team shares a common goal: to provide you with the highest standard of dental care in a warm and welcoming environment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Aboutus
