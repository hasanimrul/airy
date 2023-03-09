import React from 'react';
import { BiMap, BiSearchAlt } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import img from '../../assets/drone.png'

const NavbarTop = () => {
    return (
        <div className='grid grid-cols-2 items-center  gap-5 my-3 mx-auto'>
            <div className='flex items-center justify-around'>
                <div className='flex items-center justify-center gap-2'>
                    <img src={img} alt='logo' className='w-2/12' />
                    <h2 className='text-4xl font-bold'>Airy</h2>
                </div>
                <label class="relative block">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-4 pl-2 pr-96 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for products..." type="text" name="search" />
                </label>
                <button className='rounded-full border p-2 bg-blue-700 text-xl text-white  z-10 -ml-12'>
                    <BiSearchAlt />
                </button>
            </div>
            <div className='flex items-center justify-around'>
                <div className='flex items-center gap-2 ml-5'>
                    <BiMap className='text-2xl' />
                    <div>
                        <p className='text-sm'>Select Location</p>
                        <p className='font-bold text-blue-600'>United States</p>
                    </div>

                </div>
                <div className='flex items-center gap-2 ml-5'>
                    <FiPhoneCall className='text-2xl' />
                    <div>
                        <p className='text-sm'>Hotline</p>
                        <p className='font-bold'>1900-6789</p>
                    </div>

                </div>
                <div className='flex items-center gap-2 ml-5'>
                    <AiOutlineShoppingCart className='text-2xl' />
                    <div>
                        <p className='text-sm'>Cart (0)</p>
                        <p className='font-bold'>$0.00 USD</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default NavbarTop;