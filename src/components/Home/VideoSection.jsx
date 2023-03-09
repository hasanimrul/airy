import React from 'react';
import img from '../../assets/bg.jpg'
import ReactPlayer from 'react-player/youtube'

const VideoSection = () => {
    return (
        <div className='grid grid-cols-2 bg-cover' style={{ backgroundImage: `url(${img})` }}>
            <div className='backdrop-brightness-50'>
                <ReactPlayer url='https://www.youtube.com/watch?v=6dnqGrSKudM&feature=youtu.be' />
            </div>
            <div className=' text-white text-center'>
                <div className='backdrop-brightness-50 py-16 px-10'>
                    <h2 className='text-3xl font-bold'>How to Work Drones</h2>
                    <p className='my-5'>Discover our products through videos filmed by drones.</p>
                    <p>Small drones are being utilized in monitoring, transport, safety and disaster man agement, and other domains. Envisioning that drones form autonomous.</p>
                    <button type="button" className="px-10 py-3 mt-5 font-semibold text-2xl rounded-full bg-white text-black hover:bg-gray-500 hover:text-white">Discover More</button>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;