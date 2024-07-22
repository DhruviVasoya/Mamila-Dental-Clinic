import React from 'react'

const Blogs = () => {
    const data = [
        {
            id: 1,
            title: "Blog Title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquam ullam, voluptatum doloremque voluptatibus praesentium error maiores. Sequi, temporibus necessitatibus.",
            date: "Jan 6, 2024",
            comment: 2,
            category: "Blog Category",
            img: "/images/blog4.jpg",
        },
        {
            id: 2,
            title: "Blog Title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquam ullam, voluptatum doloremque voluptatibus praesentium error maiores. Sequi, temporibus necessitatibus.",
            date: "Jan 7, 2024",
            comment: 5,
            category: "Blog Category",
            img: "/images/blog5.jpg",
        },
        {
            id: 3,
            title: "Blog Title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquam ullam, voluptatum doloremque voluptatibus praesentium error maiores.",
            date: "Feb 7, 2024",
            comment: 5,
            category: "Blog Category",
            img: "/images/blog4.jpg",
        }
    ]
    return (
        <>
            <main>
                <div className='xl:px-[8rem] py-[6rem] md:px-[1rem] px-[0.3rem]'>
                    <div className="flex flex-wrap justify-center">
                        {data && data.map((item, index) => (
                            <div className="lg:w-4/12 md:w-6/12 w-full p-3">
                                <div className='p-3 custom-shadow'
                                    data-aos="zoom-in" data-aos-delay="300">
                                    <div className='relative'>
                                        <img src={item.img} alt="" className='h-[15rem]  w-full' />
                                        <div className='absolute top-0 right-0 bg-[#ffeeac] p-[5px_10px] text-[14px] font-semibold'>{item.category}</div>
                                    </div>
                                    <div className='py-3 space-y-3'>
                                        <h5 className='text-[19px] font-semibold'>{item.title}</h5>
                                        <p className='text-[14px] text-gray-800 tracking-wide leading-6 min-h-[5rem]'>{item.description.length > 150 ? (item.description.slice(0,150))+"..." : item.description}</p>
                                    </div>
                                    <hr />
                                    <div className='pt-3 pb-1 font-medium text-[14px] items-center text-[#946611] flex justify-between'>
                                        <div>{item.date}</div>
                                        <div className=''>{item.comment} Comment</div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Blogs
