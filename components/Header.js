import React, { useState } from 'react'
import { useRouter } from "next/router";
import Link from 'next/link';

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  function NavLink({ to, children }) {
    return <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  }

  function MobileNav({ open, setOpen }) {
    return (
      <div className={`absolute top-0 left-0 h-fit py-10 z-10 w-screen bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
        <div className="flex items-center justify-center bg-black h-20">
          <Link className="text-xl font-semibold" href="/">
            <div>
              <img src="/images/black-logo.jpg" className='h-[80px]' alt="" />
            </div>
          </Link>
        </div>

        <div className="ml-4 text-white" >
          <div><Link className="text-xl font-medium" href="/" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
            Home
          </Link></div><br />
          <div><Link className="text-xl font-medium" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
            About
          </Link></div><br />
          <div><Link className="text-xl font-medium" href="/services" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
            Services
          </Link></div><br />
          <div><Link className="text-xl font-medium" href="/blog" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
            Blog
          </Link></div><br />
          <div><Link className="text-xl font-medium" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
            Contact
          </Link></div>

        </div>
      </div>
    )
  }

  return (
    <div>
      <>
        <div className='flex items-center md:h-[50px]  bg-[#ffde59] md:p-0 py-2' >
          <div className='mini-header xl:mx-[130px] md:mx-[30px] mx-[5px] md:flex items-center justify-between block' >
            <div className='flex justify-center items-center gap-x-[25px]  text-[14px]'>
              <img src="/icons/Frame.png" alt="" />
              <div>
                <Link href="tel:0737413007">+972 (0)73 7413 007</Link>, <Link href="tel:0587882038">+972 (0)58 7882 038</Link>
              </div>
            </div>
            <div className='flex justify-center gap-x-3'>
              <Link href="/"><img src="/icons/Face-black.png" alt="" className='hover:-mt-[1px]'/></Link>
              <Link href="/"><img src="/icons/Twirre-black.png" alt="" className='hover:-mt-[1px]'/></Link>
              <Link href="/"><img src="/icons/In.png" alt="" className='hover:-mt-[1px]'/></Link>
              <Link href="/"><img src="/icons/Instag-black.png" alt="" className='hover:-mt-[1px]'/></Link>
            </div>
          </div>
        </div>

        <div className='lg:h-[130px] h-fit bg-black grid items-center'>
          <div className='xl:mx-[130px] md:mx-[30px] mx-[10px]'>

            <nav className="flex items-center justify-between py-3">
              <MobileNav open={open} setOpen={setOpen} />
              <div>
                <Link href="/"><img src="/images/black-logo.jpg" className='h-[80px]' alt="" /></Link>
              </div>

              <div className="flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden" onClick={() => {
                  setOpen(!open)
                }}>
                  {/* hamburger button */}
                  <span className={`h-1 w-full bg-[#ffde59] rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5 " : ""}`} />
                  <span className={`h-1 w-full bg-[#ffde59] rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0 hidden" : "w-full"}`} />
                  <span className={`h-1 w-full bg-[#ffde59] rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5 " : ""}`} />
                </div>

                <div className="hidden lg:flex">
                  <ul className='flex header-menu xl:gap-5 gap-3 '>
                    <li className={router.pathname == "/" ? "active" : "text-white"}>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className={router.pathname == "/about" ? "active" : "text-white"}>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li className={router.pathname == "/services" ? "active" : "text-white"}>
                      <NavLink to="/services">Services</NavLink>
                    </li>
                    <li className={router.pathname == "/blog" ? "active" : "text-white"}>
                      <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li className={router.pathname == "/contact" ? "active" : "text-white"}>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-[20px]">
                <Link href="/">
                  <button className='book-btn hover:text-[#8a5f3b]'>Book Now</button></Link>
                <Link href="/login" className='w-[1.6rem]' title='Login'>
                  <img src="/icons/user-yellow.png" alt="" className='w-[1.6rem] hover:w-[1.4rem]' />
                </Link>
              </div>

            </nav>

          </div>
        </div>
        <div>

        </div>
      </>
    </div>
  )
}

export default Header
