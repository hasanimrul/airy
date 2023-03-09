import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from '../../assets/home1-slider-thumbnail.webp'
import img2 from '../../assets/home1-slider-thumbnail2.webp'
import img3 from '../../assets/home1-slider-thumbnail3.webp'
import img4 from '../../assets/home1-slider-thumbnail4.webp'
import bg from '../../assets/home1-slider-bg.webp'

const Slider = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='py-32 bg-center w-cover'>
            <Swiper

                modules={[Navigation, Autoplay, Pagination, Scrollbar]}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className='flex'>
                        <img src={img2} className='' alt='' />
                        <div className='mx-20 text-justify'>
                            <h2 className='text-4xl font-bold mb-4'>DJI Air 2S</h2>
                            <p>Dramatically repurpose team driven scenarios whereas interdependent total linkage. Objectively reintermediate orthogonal total linkage vis-a-vis covalent convergence. Distinctively benchmark strategic intellectual capital without robust bandwidth. Seamlessly customize bleeding-edge niches.</p>
                            <button type="button" className="px-8 py-3 mt-5 font-semibold rounded bg-blue-800 text-gray-100 hover:bg-gray-800 hover:text-white">Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex'>
                        <img src={img4} className='' alt='' />
                        <div className='mx-20 text-justify'>
                            <h2 className='text-4xl font-bold mb-4'>DJI Mini 3 Pro</h2>
                            <p>Objectively integrate magnetic core competencies with standardized markets. Seamlessly matrix orthogonal functionalities with team building opportunities. Intrinsicly visualize reliable leadership skills without intuitive ROI. Interactively scale one-to-one action items.</p>
                            <button type="button" className="px-8 py-3 mt-5 font-semibold rounded bg-blue-800 text-gray-100 hover:bg-gray-800 hover:text-white">Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex'>
                        <img src={img3} className='' alt='' />
                        <div className='mx-20 text-justify'>
                            <h2 className='text-4xl font-bold mb-4'>DJI Avata</h2>
                            <p>Authoritatively deploy economically sound methodologies vis-a-vis next-generation communities. Completely brand user friendly supply chains before process-centric interfaces. Conveniently strategize team driven e-services without covalent best practices. Enthusiastically implement resource-leveling.</p>
                            <button type="button" className="px-8 py-3 mt-5 font-semibold rounded bg-blue-800 text-gray-100 hover:bg-gray-800 hover:text-white">Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex'>
                        <img src={img1} className='' alt='' />
                        <div className='mx-20 text-justify'>
                            <h2 className='text-4xl font-bold mb-4'>DJI Mavic 3</h2>
                            <p>Credibly matrix magnetic strategic theme areas through next-generation customer service. Quickly benchmark adaptive data without sustainable channels. Dramatically evisculate collaborative action items vis-a-vis extensive total linkage. Distinctively evisculate fully.</p>
                            <button type="button" className="px-8 py-3 mt-5 font-semibold rounded bg-blue-800 text-gray-100 hover:bg-gray-800 hover:text-white">Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;