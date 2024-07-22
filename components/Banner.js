import Link from 'next/link';
import React from 'react'

const Banner = ({title}) => {
    return (
        <>
            <main>
                <div>
                    <div className='bg-[url(/images/banner.jpg)] h-[22rem] relative bg-size'>
                        <div className='bg-[#000000] bg-opacity-50 absolute left-[0px] top-[0px] right-[0px] bottom-[0px] h-[100%]'>
                            <div className='flex justify-center items-center flex-col h-full'>

                                <h1 className='text-[2.5rem] font-bold text-white'
                                data-aos="fade-down">{title}</h1>
                                <nav className="flex relative justify-center" aria-label="Breadcrumb">
                                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                        <li className="">
                                            <Link href="/" className="text-sm font-medium text-white text-[1.1rem] hover:text-[#FDB913]">
                                                Home
                                            </Link>
                                        </li>

                                        <li aria-current="page">
                                            <div className="flex items-center ">
                                                <span className='text-white'>/</span>
                                                <span className="ms-1 text-sm font-medium text-[#FDB913] text-[1.1rem] md:ms-2 dark:text-gray-400">{title}</span>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Banner
