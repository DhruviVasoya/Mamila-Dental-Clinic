import React from 'react';

const Newslatter = () => {
    return (
        <>
            <main>
                <div>
                    <div className="bg-[#e5e5e5] relative flex flex-wrap justify-center xl:px-[8rem] py-[4rem] md:px-[2.5rem] px-[0.6rem]">
                        <div className="font-bold md:text-[40px] text-[30px] lg:w-5/12 text-center py-2" data-aos="fade-right">
                            Get Latest Update
                        </div>
                        <div className="flex flex-row lg:w-7/12 justify-center items-center md:gap-5 gap-1">

                            <div className="rounded-[10px] relative">
                                <input type="text" name="" id="" placeholder='Enter your email' className="bg-transparent placeholder-black h-[2.4rem] rounded-[7px] md:w-[25rem] px-2" style={{ border: "1px solid black" }} />
                            </div>

                            <div className=" relative ">
                                <button className="font-medium text-[14px] text-[#FFFFFF] h-[2.4rem] md:px-6 px-2 rounded-[10px] bg-[#000000] hover:bg-opacity-70">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Newslatter
