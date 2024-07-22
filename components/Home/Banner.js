import React from 'react'


const Banner = () => {
    return (
        <>

            <main>
                <div className="bg-[url(/images/home-bg1.jpg)] relative xl:ps-[200px] md:ps-[100px] ps-5 md:py-[150px] py-[90px] " style={{ backgroundSize: '100% 100%' }}>
                    <div className="opacity-50 bg-[#000000] absolute left-[0px] top-[0px] right-[0px] bottom-[0px] h-[100%]">
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000">

                        <div className="relative font-semibold md:text-[50px] text-[35px] tracking-[-1.2px] leading-[1.2] text-[#FFFFFF]">
                            Best Dentistry Services<br />
                            You Can Trust.
                        </div>
                        <div className="relative text-[14px] tracking-[0.3px] leading-[1.55] text-[#FFFFFF] py-[20px] xl:w-[40%] md:w-[70%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis nisl eu tortor euismod fermentum a eu elit. Proin facilisis tincidunt erat, et porta ante sodales at. Nullam sed convallis lacus. Etiam commodo nunc ornare felis pretium tincidunt.
                        </div>

                        <button className="font-semibold shadow-[0px_0px_4px_0px_rgba(135,134,39,0.5)] text-[14px] tracking-[0.4px] leading-[1.55] rounded-[10px] bg-[#ffde59] hover:bg-opacity-50 relative w-fit px-[24px] py-[8px]">
                            Book an Appoinment
                        </button>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Banner


