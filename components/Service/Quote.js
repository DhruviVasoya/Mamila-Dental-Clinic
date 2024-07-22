import React from 'react'

const Quote = () => {
    return (
        <>
            <main>
                <div className=''>
                    <div className="bg-[url('/images/service-banner.jpg')] bg-[50%_50%] bg-cover bg-no-repeat relative h-[75vh] flex items-center justify-end xl:px-[6rem] md:px-[3rem] px-[0.6rem]">
                        <div className="bg-opacity-[30%] bg-[#000000] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] h-[100%]">
                        </div>
                        <div className="bg-opacity-50 rounded-[20px] bg-[#D9D9D9] relative space-y-5 lg:w-[35%] p-[1rem_2rem]" 
                        data-aos="zoom-out-up">
                            <div>
                                <img src="/icons/quote-icon.png" alt="" />
                            </div>
                            <div className="relative inline-block font-normal text-[23px] leading-[1.4] text-[#FFFFFF]">
                                &#34;I enjoy being involved with my
                                community. As a dentist, you get
                                to meet a lot of people,and potentially help a lot of people, too.&#34;
                            </div>
                            <div className="relative font-semibold text-[18px] leading-[1.909] text-[#FFFFFF]">
                                Dr. Ibrahim
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Quote
