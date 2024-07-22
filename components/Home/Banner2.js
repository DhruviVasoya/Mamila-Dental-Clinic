import React from 'react'

const Banner2 = () => {
    return (
        <>
            <main>
                <div className="bg-[url('/images/home-bg2.jpg')]   " style={{ backgroundSize: '100% 100%' }}>
                    <div className='xl:px-[8rem] md:px-[4rem] px-[0.6rem] relative h-[35rem]' >
                        <div className="opacity-40 bg-[#000000] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] h-[100%]">
                        </div>
                        <div className='relative font-semibold text-[40px] text-[#FFFFFF] flex items-center h-full'
                        >
                            <span className="lg:w-[50%] md:w-[80%] inline-block"
                                data-aos="fade-left"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="3000">
                                High-class specialists are ready to help you at any time.
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Banner2
