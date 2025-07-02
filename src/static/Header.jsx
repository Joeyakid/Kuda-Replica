import React from 'react'
import Button from "../reuseable/Button"
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom"
import { IoReorderTwoSharp } from "react-icons/io5";
import { MdOutlineFlagCircle } from "react-icons/md";

const Header = () => {
  return (
    <div>
        <header className='h-full max-w-[1280px] flex items-center justify-between mx-auto'>
            <section className=' flex items-center gap-10 text-purple-800 py-7'>
                <div className='w-30'>
                <img src="../logo.svg" alt="logo" />
                </div>
                <main className='tablet:block hidden'>
                <Link to="/">
                <nav className='flex items-center'>
                    <span>Personal</span>
                    <span><RiArrowDropDownLine size={30}/></span>
                </nav>
                </Link>
                </main>
                <main className='tablet:block hidden'>
                <Link to="/discoverbusiness">
                <nav className='flex items-center'>
                    <span>Business</span>
                    <span> <RiArrowDropDownLine size={30}/></span>
                </nav>
                </Link>
                </main>
                <main className='tablet:block hidden'>
                <Link to="/blog">
                <nav className='flex items-center'>
                    <span>Company</span>
                    <span> <RiArrowDropDownLine size={30}/></span>
                </nav>
                </Link>
                </main>
                <main className='tablet:block hidden'>
                <Link to="/gethelp">
                <nav className='flex items-center'>
                    <span>Help</span>
                    <span> <RiArrowDropDownLine size={30}/></span>
                </nav>
                </Link>
                </main>
                <main>
                <Link to="/contact">
                    <nav>Contact</nav>
                    </Link>
                </main>
            </section>
            <section className='flex gap-7'>
                <Button title="Sign in" textcolor="purple" />
                <Button title="Join Kuda" bgcolor="purple"
                textcolor="white"/>
            </section>
            <section className='max-mobile:block hidden'>
            <MdOutlineFlagCircle size={40}/>
           
            </section>
            <section className='max-mobile:block hidden'>
            <IoReorderTwoSharp size={40}/>
            </section>
        </header>
    </div>
  )
}

export default Header