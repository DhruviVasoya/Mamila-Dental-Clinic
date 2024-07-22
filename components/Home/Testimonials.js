import React from 'react'

const Testimonials = () => {
    return (
        <>
            <main>
                <div>
                    <div className=" bg-[#e5e5e5] relative xl:px-[6rem] py-[4rem] md:px-[2.5rem] px-[0.6rem]">
                        <div className="text-center font-bold text-[45px]" data-aos="fade-up" data-aos-duration="300" data-aos-easing="linear">
                            Testimonial
                        </div>
                        <div className="flex flex-wrap">
                            <div className='lg:w-6/12 my-2 p-[1rem_2rem]' data-aos="fade-up" data-aos-delay="300" data-aos-easing="linear">
                                <div className=" custom-shadow rounded-[20px] bg-[#FFFFFF] relative p-9 space-y-4">
                                    <div className="rounded-[10px] self-start">
                                        <img src='/icons/Review.png' className=" h-[15px]" />
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-row space-x-2">
                                            <div>
                                                <img src="/images/user-icon.png" alt="" className='w-[50px] h-[50px]' />
                                            </div>

                                            <div className="">
                                                <div className=" inline-block font-bold text-[16px]">
                                                Elisheva Beavers
                                                </div>
                                                <div className="self-start font-medium text-[14px] text-[#676767]">
                                                    Patient
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" flex flex-row justify-center w-[50px] h-[42px]">
                                            <img src='/icons/quote.png' className="h-[40px]" />
                                        </div>
                                    </div>
                                    <div className=" font-light text-[14px] tracking-[-0.4px] text-[#8d8c8c]">
                                    The facility is modern, clean, beautiful, and easy to access. Dr. Shedi has provided comforting and exceptional care. The staff has been pleasant and professional. I am so thankful that I found this office. My whole family will use their services in the future. I highly recommend this dental clinic.
                                    </div>

                                </div>
                            </div>

                            <div className='lg:w-6/12 my-2 p-[1rem_2rem]' data-aos="fade-up" data-aos-delay="400" data-aos-easing="linear">
                                <div className=" custom-shadow rounded-[20px] bg-[#FFFFFF] relative p-9 space-y-4">
                                    <div className="rounded-[10px] self-start">
                                        <img src='/icons/Review.png' className="h-[15px]" />
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-row space-x-2">
                                            <div>
                                                <img src="/images/user-icon.png" alt="" className='w-[50px] h-[50px]' />
                                            </div>
                                            <div >
                                                <div className=" inline-block font-bold text-[16px]">
                                                Franco D Pittui  
                                                </div>
                                                <div className="self-start font-medium text-[14px] text-[#676767]">
                                                    Patient
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" flex flex-row justify-center w-[50px] h-[42px]">
                                            <img src='/icons/quote.png' className="h-[40px]" />
                                        </div>
                                    </div>
                                    <div className=" font-light text-[14px] tracking-[-0.4px] text-[#8d8c8c]">
                                    Amazing clinic, and the professionalism of the dentist is far beyond any OTHER DENTISTRY CLINIC ANYWHERE. State of the art equipment and a pleasant atmosphere when you arrive. Highly recommended.
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

export default Testimonials
