import React from 'react';
import Categories from '../../components/Home/Categories';
import ContactUs from '../../components/Home/ContactUs';
import FeaturedProducts from '../../components/Home/FeaturedProducts';
import FreeShipping from '../../components/Home/FreeShipping';
import OurStore from '../../components/Home/OurStore';
import PtzCamera from '../../components/Home/PtzCamera';
import Slider from '../../components/Home/Slider';
import VideoSection from '../../components/Home/VideoSection';

const Home = () => {
    return (
        <div>
            <Slider />
            <FreeShipping />
            <PtzCamera />
            <OurStore />
            <FeaturedProducts />
            <VideoSection />
            <Categories />
            <ContactUs />
        </div>
    );
};

export default Home;