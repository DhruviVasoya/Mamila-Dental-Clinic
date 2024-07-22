import React from 'react'

const WhyCoose = () => {
    return (
        <div>
            <main>
                <div>
                    <div className='xl:px-[8rem] pb-[6rem] md:px-[4rem] px-[0.6rem]'>
                        <div className="font-bold md:text-[45px] text-[30px] text-center mb-[2.5rem]"
                        data-aos="fade-right" data-aos-duration="2000">
                            Why choose our Dental Clinic
                        </div>
                        <div className="flex flex-wrap justify-center">
                            <div className='xl:w-3/12 lg:w-6/12 grid justify-center' 
                            data-aos="fade-up"  data-aos-delay="200">
                                <div className="custom-shadow rounded-[20px] bg-[#FFFFFF] m-2 p-[30px] w-[300px]" >
                                    <div className="font-bold text-[18px] text-center tracking-[-0.4px] leading-[1.2]">
                                        Modern equipment
                                    </div>
                                    <div className="my-[20px]  text-center  text-[14px] tracking-[-0.4px] leading-[1.2] text-[#676767]" style={{minHeight:"7rem"}}>
                                        We have all the necessary advanced equipment for diagnosis &amp;amp; treatment: CT machine Orthophos SL, CJ-Optic microscope, CEREC system that allows you to make dental crowns in 1 day.
                                    </div>
                                    <div className='self-start'>
                                        <img src='/icons/dental1.png' className="w-[75px] h-[75px]" />
                                    </div>
                                </div>
                            </div>

                            <div className='xl:w-3/12 lg:w-6/12 grid justify-center'
                            data-aos="fade-up"  data-aos-delay="400">
                                <div className="custom-shadow rounded-[20px] bg-[#FFFFFF] m-2 p-[30px] w-[300px] " >
                                    <div className="font-bold text-[18px] text-center tracking-[-0.4px] leading-[1.2]">
                                    Pain-free treatment
                                    </div>
                                    <div className="my-[20px]  text-center  text-[14px] tracking-[-0.4px] leading-[1.2] text-[#676767]" style={{minHeight:"7rem"}}>
                                    Know-how and professionalism of our doctors allow you to painlessly perform dental manipulations.
                                    </div>
                                    <div className='self-start'>
                                        <img src='/icons/dental2.png' className="w-[75px] h-[75px]" />
                                    </div>
                                </div>
                            </div>

                            <div className='xl:w-3/12 lg:w-6/12 grid justify-center' 
                            data-aos="fade-up"  data-aos-delay="600">
                                <div className="custom-shadow rounded-[20px] bg-[#FFFFFF] m-2 p-[30px] w-[300px]" >
                                    <div className="font-bold text-[18px] text-center tracking-[-0.4px] leading-[1.2]">
                                    Transparent prices
                                    </div>
                                    <div className="my-[20px]  text-center  text-[14px] tracking-[-0.4px] leading-[1.2] text-[#676767]" style={{minHeight:"7rem"}}>
                                    No hidden fees. The prices on our website correspond to reality. You will not have “unpleasant surprises” during final calculations for the treatment.
                                    </div>
                                    <div className='self-start'>
                                        <img src='/icons/dental3.png' className="w-[75px] h-[75px]" />
                                    </div>
                                </div>
                            </div>

                            <div className='xl:w-3/12 lg:w-6/12 grid justify-center'
                            data-aos="fade-up"  data-aos-delay="800">
                                <div className="custom-shadow rounded-[20px] bg-[#FFFFFF] m-2 p-[30px] w-[300px]" style={{minHeight:"19rem"}}>
                                    <div className="font-bold text-[18px] text-center tracking-[-0.4px] leading-[1.2]">
                                    Highly-qualified staff
                                    </div>
                                    <div className="my-[20px]  text-center  text-[14px] tracking-[-0.4px] leading-[1.2] text-[#676767]" style={{minHeight:"7rem"}}>
                                    Our doctors are constantly improving their skills by participating in international medical conferences and quality improvement courses.
                                    </div>
                                    <div className='self-start'>
                                        <img src='/icons/dental4.png' className="w-[75px] h-[75px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default WhyCoose
