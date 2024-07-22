import React, { useState } from 'react';

const Service = () => {
    const [openModal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!openModal)
    }
    return (
        <>
            <main>
                <div className='flex justify-center'>
                    <div className="py-[6rem] lg:w-9/12">
                        <div className="text-center mb-[3rem] font-bold text-[46px] tracking-[-0.4px] "
                        data-aos="fade-right" data-aos-delay="350">
                            Better Services for your Teeth
                        </div>
                        <div className="flex flex-wrap ">
                            <div className="lg:w-4/12 md:w-6/12 w-full p-3 " 
                            data-aos="fade-up" data-aos-delay="300">
                                <div className='space-y-4 custom-shadow md:min-h-[15.5rem] rounded-[20px] p-5'>
                                    <div>
                                        <img src='/icons/service1.png' className=" h-[4rem]" />
                                    </div>
                                    <div className="font-bold text-[17px] tracking-[-0.4px]">
                                        Preventive Dentistry

                                    </div>
                                    <div className=" font-normal text-[14px] tracking-[-0.1px] text-[#676767]">
                                        Maintain optimal oral health with routine cleanings, exams, fluoride treatments, and dental sealants.
                                    </div>
                                    {/* <button className=" w-fit font-bold text-[14px] tracking-[-0.4px] text-gray-700 hover:underline  hover:text-[#ffde59]">
                                        Read More
                                    </button> */}
                                </div>
                            </div>

                            <div className="lg:w-4/12 md:w-6/12 w-full p-3 " 
                            data-aos="fade-up" data-aos-delay="300">
                                <div className='space-y-4 custom-shadow md:min-h-[15.5rem] rounded-[20px] p-5'>
                                    <div>
                                        <img src='/icons/service2.png' className="h-[4rem]" />
                                    </div>
                                    <div className="font-bold text-[17px] tracking-[-0.4px]">
                                        Restorative Dentistry

                                    </div>
                                    <div className=" font-normal text-[14px] tracking-[-0.2px] text-[#676767]">
                                        Restore the health and function of your smile with fillings, crowns, bridges, and dental implants.
                                    </div>
                                    {/* <button className=" w-fit font-bold text-[14px] tracking-[-0.4px] text-gray-700 hover:underline  hover:text-[#ffde59]">
                                        Read More
                                    </button> */}
                                </div>
                            </div>

                            <div className=" lg:w-4/12 md:w-6/12 w-full p-3" 
                            data-aos="fade-up" data-aos-delay="300">
                                <div className='space-y-4 custom-shadow md:min-h-[15.5rem] rounded-[20px] p-5'>
                                    <div className="flex flex-row ">
                                        <img src='/icons/service3.png' className="h-[4rem]" />
                                    </div>
                                    <div className="font-bold text-[17px] tracking-[-0.4px]">
                                        Esthetic Dentistry

                                    </div>
                                    <div className=" font-normal text-[14px] tracking-[-0.2px] text-[#676767]">
                                        Correct uneven gum lines or excessive gum tissue to improve the overall esthetics of your smile.

                                    </div>
                                    <button onClick={handleModal} className="w-fit  font-bold text-[14px] tracking-[-0.4px] text-gray-700 hover:underline  hover:text-[#ffde59]">
                                        Read More
                                    </button>
                                </div>
                            </div>

                            <div className="lg:w-4/12 md:w-6/12 w-full p-3 " 
                            data-aos="fade-up" data-aos-delay="500">
                                <div className='space-y-4 custom-shadow md:min-h-[15.5rem] rounded-[20px] p-5'>
                                    <div className="flex flex-row   ">
                                        <img src='/icons/service4.png' className="h-[4rem]" />
                                    </div>
                                    <div className="font-bold text-[17px] tracking-[-0.4px]">
                                        Endodontic Therapy
                                    </div>
                                    <div className=" font-normal text-[14px] tracking-[-0.2px] text-[#676767]">
                                        Relieve tooth pain and save damaged teeth with advanced endodontic therapy, including root canal treatments.

                                    </div>
                                    {/* <button  className="w-fit  font-bold text-[14px] tracking-[-0.4px] text-gray-700 hover:underline  hover:text-[#ffde59]">
                                        Read More
                                    </button> */}
                                </div>
                            </div>

                            <div className="lg:w-4/12 md:w-6/12 w-full p-3 " 
                            data-aos="fade-up" data-aos-delay="500">
                                <div className='space-y-4 custom-shadow md:min-h-[15.5rem] rounded-[20px] p-5'>
                                    <div className=" flex flex-row  ">
                                        <img src='/icons/service5.png' className=" h-[4rem]" />
                                    </div>
                                    <div className="font-bold text-[17px] tracking-[-0.4px]">
                                        Pediatric Dentistry
                                    </div>
                                    <div className=" font-normal text-[14px] tracking-[-0.2px] text-[#676767]">
                                        Ensure your child&#39;s smile grows healthy and strong with gentle and compassionate pediatric dental care.

                                    </div>
                                    {/* <button className="w-fit  font-bold text-[14px] tracking-[-0.4px] text-gray-700 hover:underline  hover:text-[#ffde59]">
                                        Read More
                                    </button> */}
                                </div>
                            </div>

                            <div className="lg:w-4/12 md:w-6/12 w-full p-3 " 
                            data-aos="fade-up" data-aos-delay="500">
                                <div className='space-y-4 custom-shadow md:min-h-[15.5rem] rounded-[20px] p-5'>
                                    <div>
                                        <img src='/icons/service6.png' className="h-[4rem]" />
                                    </div>
                                    <div className="font-bold text-[17px] tracking-[-0.4px]">
                                        Emergency Dentistry
                                    </div>
                                    <div className="font-normal text-[14px] tracking-[-0.2px] text-[#676767]">
                                        Receive prompt and compassionate care for dental emergencies, including severe tooth pain or dental injuries.

                                    </div>
                                    {/* <button className="w-fit  font-bold text-[14px] tracking-[-0.4px] text-gray-700 hover:underline  hover:text-[#ffde59]">
                                        Read More
                                    </button> */}
                                </div>
                            </div>

                            <div className="lg:w-4/12 md:w-6/12 w-full p-3 " 
                            data-aos="fade-up" data-aos-delay="500">
                                <div className='space-y-4 custom-shadow md:min-h-[15.5rem] rounded-[20px] p-5'>
                                    <div>
                                        <img src='/icons/service7.png' className="h-[4rem]" />
                                    </div>
                                    <div className="font-bold text-[17px] tracking-[-0.4px]">
                                        Facial Esthetics
                                    </div>
                                    <div className="font-normal text-[14px] tracking-[-0.2px] text-[#676767]">
                                    Defeat time and get younger with our wide variety of facial treatments that are aimed to keep you looking naturally younger. From lasers to skin boosters, Botox, HA fillers, and collagen production inducers we got you covered to look better than ever. Ask for our facial esthetic programs


                                    </div>
                                    {/* <button className="w-fit  font-bold text-[14px] tracking-[-0.4px] text-gray-700 hover:underline  hover:text-[#ffde59]">
                                        Read More
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div>

                    {openModal &&
                        <div className='fixed z-10 top-0 left-0 w-screen h-screen bg-opacity-30 bg-black flex justify-center items-center'>
                            <div className='max-w-[50rem] bg-white shadow-lg py-2 rounded-md relative'>
                                <div className='border-b border-gray-300 flex justify-between py-3 px-4'>

                                    <h2 className='text-[18px] font-medium text-gray-900 '>Esthetic Dentistry</h2>
                                    <button
                                        type='button'
                                        className='h-8 w-8 text-sm rounded-md bg-gray-700 text-white'
                                        onClick={handleModal}
                                    >
                                        X
                                    </button>
                                </div>
                                <div className='p-4 pb-4'>
                                    <div className='space-y-3'>

                                        <p className='text-sm font-medium'>
                                            <span className='font-bold'>Teeth Whitening Achieve a brighter,</span>
                                            more youthful smile with professional teeth whitening treatments.
                                        </p>
                                        <p className='text-sm font-medium'>
                                            <span className='font-bold'>
                                                Porcelain Veneers:</span> Transform your smile by concealing imperfections such as chips, cracks, and gaps with custom-made porcelain veneers.
                                        </p>
                                        <p className='text-sm font-medium'>
                                            <span className='font-bold'>
                                                Invisalign®:</span> Straighten your teeth discreetly and comfortably with clear aligners, the modern alternative to traditional braces.
                                        </p>
                                        <p className='text-sm font-medium'>
                                            <span className='font-bold'>
                                                Dental Implants:</span> Replace missing teeth with durable, natural-looking dental implants that restore your smiles function and appearance.
                                        </p>
                                        <p className='text-sm font-medium'>
                                            <span className='font-bold'>
                                                Smile Design:</span> Customize your smile with our smile design services, which consider factors like tooth shape, size, alignment, and symmetry to achieve your ideal look.
                                        </p>
                                        <p className='text-sm font-medium'>
                                            <span className='font-bold'>
                                                Gum Contouring:</span> Enhance the appearance of your smile by reshaping your gum line for a more balanced and attractive look.
                                        </p>
                                        <p className='text-sm font-medium'>
                                            <span className='font-bold'>
                                                Composite Bonding:</span> Repair minor imperfections in your teeth, such as chips or gaps, with composite bonding, a quick and cost-effective solution.
                                        </p>
                                        <p className='text-sm font-medium'>
                                            <span className='font-bold'>
                                                Full Mouth Reconstruction:</span> Restore the health, function, and appearance of your smile with our comprehensive full mouth reconstruction services.
                                        </p>
                                        <p className='text-sm font-medium'>
                                            <span className='font-bold'>
                                                Cosmetic Gum Surgery:</span> Correct uneven gum lines or excessive gum tissue to improve the overall esthetics of your smile.
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    }

                </div>






            </main>
        </>
    )
}


export default Service
