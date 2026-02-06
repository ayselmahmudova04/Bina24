import React from 'react'
import "./Navbar.css"
import Logo from '../images/logo.svg'
import { IoIosArrowDown } from "react-icons/io";
import user from '../images/userikon.svg'
import { LuArrowUpRight } from "react-icons/lu";


function Navbar() {
  return (
    <>
      <header>
        <div className="fixed-nav">
          <div className="container">
            <nav className='flex justify-between items-center border-[0.5px] border-[#C6C8CA] py-2 px-5 rounded-[500px] bg-[#8D8D8D1A]'>
              <div className="w-36">
                <img src={Logo} alt="" />
              </div>
              <div className="nav-right flex gap-5 items-center">
                <div className="services">
                  <button className='flex items-center gap-2.5 text-[#F5F6F4]'>Xidmətlər <IoIosArrowDown /></button>
                </div>
                <div className="languages">
                  <button className='flex items-center gap-2.5  text-[#F5F6F4]'>AZ <IoIosArrowDown /></button>
                </div>
                <div className="login flex items-center gap-2.5 text-[#F5F6F4]">
                  <img src={user} alt="" />
                  <p>Daxil ol</p>
                </div>
                <div className="create-ann">
                  <button className='text-[#F5F6F4] bg-[#257E37] py-2 px-5 rounded-[60px]'>Elan Yerləşdir</button>
                </div>

              </div>
            </nav>
          </div>
        </div>
        <div className="header-content">
          <h1 className='text-[40px] text-[#F5F6F4] w-170 text-center leading-[1.2]'>Əmlak tapmaq indi çox asandır, sadəcə bax və seç</h1>
          <p className='text-[22px] text-[#F5F6F4] mt-2.5'> Bütün əmlak elanlarını bir platformada kəşf et, uyğununu asan tap.</p>
          <button className='text-[#F5F6F4] text-[18px] bg-[#257E37] py-2 px-5 rounded-[60px] flex items-center gap-2 mt-5' >Elanlara bax <LuArrowUpRight  className='text-[20px]'/></button>
        </div>
      </header>
    </>
  )
}

export default Navbar