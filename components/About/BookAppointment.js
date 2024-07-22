import React from 'react'

const BookAppointment = () => {
    return (
        <>
            <main>
                <div className="xl:px-[13rem] md:px-[3rem] px-[0.6rem] pb-[6rem]">
                    <div className="rounded-[30px] bg-[#ffeeac]  relative lg:p-[3rem_5rem] p-[3rem_2rem]">
                        <div className="text-center font-bold text-[40px] leading-[3.2rem] mb-[2rem]" data-aos="fade-up" data-aos-delay="100">
                            Book Your<br />
                            Appointment Today
                        </div>
                        <div className=" flex flex-col items-center ">
                            <div className=" flex flex-wrap items-center w-full py-[1.2rem]" 
                            data-aos="fade-up" data-aos-delay="150"
                            style={{ borderBottom: "1px solid #685129" }}>
                                <div className="md:w-7/12 w-full font-medium text-[23px] md:text-start text-center">
                                    Dental Check Up
                                </div>
                                <div className='md:w-5/12 w-full flex justify-between mt-2'>
                                    <div className="font-normal text-[17px] ">
                                        30 Min<br />
                                        200₪
                                    </div>
                                    <button className="rounded-[8px] bg-[#fcd94e] lg:p-[7px_25px] hover:bg-opacity-70 p-[8px] tracking-[0.8px] h-fit">
                                        <span className="font-semibold text-[14px] tracking-[0.4px]">
                                            Request To Book
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className=" flex flex-wrap items-center w-full py-[1.2rem]" 
                            data-aos="fade-up" data-aos-delay="200"
                            style={{ borderBottom: "1px solid #685129" }}>
                                <div className="md:w-7/12 w-full font-medium text-[23px] md:text-start text-center">
                                Orthodontic Consultation
                                </div>
                                <div className='md:w-5/12 w-full flex justify-between mt-2'>
                                    <div className="font-normal text-[17px] ">
                                        30 Min
                                    </div>
                                    <button className="rounded-[8px] bg-[#fcd94e] hover:bg-opacity-70 lg:p-[7px_25px] p-[8px] tracking-[0.8px] h-fit">
                                        <span className="font-semibold text-[14px] tracking-[0.4px] ">
                                            Request To Book
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className=" flex flex-wrap items-center w-full py-[1.2rem]" 
                            data-aos="fade-up" data-aos-delay="250"
                            style={{ borderBottom: "1px solid #685129" }}>
                                <div className="md:w-7/12 w-full font-medium text-[23px] md:text-start text-center">
                                Dental Cleaning
                                </div>
                                <div className='md:w-5/12 w-full flex justify-between mt-2'>
                                    <div className="font-normal text-[17px] ">
                                    30 Min<br />
                                    250₪
                                    </div>
                                    <button className="rounded-[8px] bg-[#fcd94e] hover:bg-opacity-70 lg:p-[7px_25px] p-[8px] tracking-[0.8px] h-fit">
                                        <span className="font-semibold text-[14px] tracking-[0.4px]">
                                            Request To Book
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className=" flex flex-wrap items-center w-full py-[1.2rem]" 
                            data-aos="fade-up" data-aos-delay="300"
                            style={{ borderBottom: "1px solid #685129" }}>
                                <div className="md:w-7/12 w-full font-medium text-[23px] md:text-start text-center">
                                Teeth Whitening
                                </div>
                                <div className='md:w-5/12 w-full flex justify-between mt-2'>
                                    <div className="font-normal text-[17px] ">
                                    1 hr<br />
                                    1.750₪
                                    </div>
                                    <button className="rounded-[8px] bg-[#fcd94e] hover:bg-opacity-70 lg:p-[7px_25px] p-[8px] tracking-[0.8px] h-fit">
                                        <span className="font-semibold text-[14px] tracking-[0.4px] ">
                                            Request To Book
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className=" flex flex-wrap items-center w-full py-[1.2rem]" 
                            data-aos="fade-up" data-aos-delay="350"
                            style={{ borderBottom: "1px solid #685129" }}>
                                <div className="md:w-7/12 w-full font-medium text-[23px] md:text-start text-center">
                                Emergency treatment
                                </div>
                                <div className='md:w-5/12 w-full flex justify-between mt-2'>
                                    <div className="font-normal text-[17px] ">
                                    30 Min<br />
                                    Starting at 250₪
                                    </div>
                                    <button className="rounded-[8px] bg-[#fcd94e] hover:bg-opacity-70 lg:p-[7px_25px] p-[8px] tracking-[0.8px] h-fit">
                                        <span className="font-semibold text-[14px] tracking-[0.4px]">
                                            Request To Book
                                        </span>
                                    </button>
                                </div>
                            </div>

                        </div>

                       
                    </div>
                </div>
            </main>
        </>
    )
}

export default BookAppointment
