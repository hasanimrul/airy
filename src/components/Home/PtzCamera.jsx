import React from 'react';
import { BsDisc } from "react-icons/bs";
import { GiScales } from "react-icons/gi";
import { SlSpeedometer } from "react-icons/sl";
import img from '../../assets/ptz.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PtzCamera = () => {
    AOS.init();
    return (
        <div className='grid grid-cols-2 mt-20'>
            <div className='ml-28' data-aos="fade-right">
                <h2 className='font-bold text-4xl leading-normal mb-6'>Integrated <span className='text-blue-500'>PTZ camera</span> <br /> Stabilizes every single pixel <br /> in the image</h2>
                <p className='mb-5'>PTZ camera includes a processor that calculates and compensates additional movements, and highly sensitive 3-axis gambal stabilizes up to 2000 vibrations per second, ± 0.02° accuracy.</p>
                <div className='grid grid-cols-3'>
                    <div className='flex items-center gap-3'>
                        <BsDisc className='text-4xl text-blue-400' />
                        <div>
                            <p><span className='text-4xl'> 58</span> mm</p>
                            <p>Diameter</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <GiScales className='text-4xl text-blue-400' />
                        <div>
                            <p><span className='text-4xl'> 40</span> fps</p>
                            <p>4k video</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <SlSpeedometer className='text-4xl text-blue-400' />
                        <div>
                            <p><span className='text-4xl'> 450</span> g</p>
                            <p>Weight</p>
                        </div>
                    </div>
                </div>
                <button type="button" className="px-8 py-3 mt-5 font-semibold rounded-full hover:rounded-full border hover:bg-blue-800 hover:text-white mt-10"> View Product</button>
            </div>
            <div>
                <img src={img} alt='ptz camera' data-aos="zoom-out-up" />
            </div>
        </div>
    );
};

export default PtzCamera;