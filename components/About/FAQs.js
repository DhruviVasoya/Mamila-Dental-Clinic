import { useState } from 'react';

const FAQs = () => {
    const [accordions, setAccordion] = useState([
        {
            key: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, neque maximus tincidunt laoreet, nisl massa tincidunt neque, eu blandit nisi ex non erat. Ut efficitur pulvinar leo nec varius. Sed dignissim felis eu suscipit molestie.`,
            isOpen: false
        },
        {
            key: 2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, neque maximus tincidunt laoreet, nisl massa tincidunt neque, eu blandit nisi ex non erat. Ut efficitur pulvinar leo nec varius. Sed dignissim felis eu suscipit molestie.`,
            isOpen: false
        },
        {
            key: 3,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, neque maximus tincidunt laoreet, nisl massa tincidunt neque, eu blandit nisi ex non erat. Ut efficitur pulvinar leo nec varius. Sed dignissim felis eu suscipit molestie.`,
            isOpen: false
        },
    ]);

    const toggleAccordion = (accordionkey) => {
        const updatedAccordions = accordions.map((accord) => {
            if (accord.key === accordionkey) {
                return { ...accord, isOpen: !accord.isOpen };
            } else {
                return { ...accord, isOpen: false };
            }
        });

        setAccordion(updatedAccordions);
    };

    return (
        <>
            <main>
                <div>

                    <div className="xl:px-[6rem] pb-[6rem] md:px-[3rem] px-[0.6rem]">
                        <h1 className="text-center text-[2.5rem]  font-bold mb-3" data-aos="fade-up" data-aos-delay="350">FAQ's</h1>

                        <div className="lg:w-9/12 w-full mx-auto">

                            {accordions.map((accordion) => (

                                <div className=" mb-1" style={{ borderBottom: "1px solid #b7b4af" }} data-aos="fade-up" data-aos-delay="350">
                                    <button
                                        className="w-full py-[2rem] text-left hover:bg-yellow-50 flex items-center justify-between transition duration-300"
                                        onClick={() => toggleAccordion(accordion.key)}
                                    >
                                        <div className='flex items-center gap-5'>
                                            <img src="/icons/faqs.png" alt="" className='h-[1.4rem]' />
                                            <p className='font-bold'>{accordion.title}</p>
                                        </div>
                                        <div className={` min-w-6 transform ${accordion.isOpen ? 'rotate-180' : 'rotate-0'}  transition-transform duration-300`}>

                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler" className='w-6' />
                                        </div>
                                    </button>
                                    {accordion.isOpen && (
                                        <div className="p-4 bg-white">
                                            {accordion.data}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}


export default FAQs

