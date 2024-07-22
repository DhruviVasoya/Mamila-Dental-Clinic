import React from 'react'

const Service = () => {
    return (
        <>
            <main >
                <div>
                    <div className=" bg-[#ffeeac] relative ">
                        <div className='xl:px-[8rem] py-[3rem] md:px-[4rem] px-[0.6rem]'>
                            <div className="flex flex-wrap md:gap-0 gap-8 justify-center lg:divide-x-2 divide-[#99835a]">
                                <div className="lg:w-4/12 md:w-6/12 md:px-6 px-2" data-aos="zoom-in" data-aos-duration="2000">
                                    <div className="flex relative gap-3">
                                        <div className="">
                                            <img src='/icons/home-service1.png' className=" h-[4rem]" style={{maxWidth:"unset"}} />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="text-black text-[17px] font-bold tracking-[-0.8px] leading-[1.2]">
                                                Qualified Doctors
                                            </div>
                                            <span className=" text-[14px] pt-2  leading-[1.2] text-[#676767]">
                                                Experienced and devoted doctors are ready to
                                                help you with your problems.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-4/12 md:w-6/12 md:px-6 px-2" data-aos="zoom-in" data-aos-duration="2000">
                                    <div className="flex relative gap-3">
                                        <div className="">
                                            <img src='/icons/home-service3.png' className="h-[4rem]" style={{maxWidth:"unset"}}/>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="text-black text-[17px] font-bold tracking-[-0.8px] leading-[1.2]">
                                            Emergency Care
                                            </div>
                                            <span className="text-[14px] pt-2 leading-[1.2] text-[#676767]">
                                            We are always ready to help when you need urgent help! Our emergency team is here for you!
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-4/12 md:w-6/12 md:px-6 px-2" data-aos="zoom-in" data-aos-duration="2000">
                                    <div className="flex relative gap-3">
                                        <div className="">
                                            <img src='/icons/home-service2.png' className=" h-[4rem] " style={{maxWidth:"unset"}}/>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="text-black text-[17px] font-bold tracking-[-0.8px] leading-[1.2]">
                                            24-Hour Service
                                            </div>
                                            <span className="text-[14px] pt-2 leading-[1.2] text-[#676767]">
                                            Anytime you need help, you may contact us and our receptionist will make an appointment for you.
                                            </span>
                                        </div>
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

export default Service
