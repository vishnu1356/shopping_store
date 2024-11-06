import React from 'react'
import VideoURL from "../assets/image/faqvideo.mp4"
import AccordionExpandDefault from './Accordian';
function FullAccrodian() {
    return (
        <div className='flex justify-around gap-8 mb-20'>
            <div className='mt-10 hidden md:block'>
                <video
                    src={VideoURL}
                    controls
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    width="400"
                    height="80"
                    poster="preview-image.jpg"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            <div>
            <AccordionExpandDefault />
            </div>
        </div>
    )
}

export default FullAccrodian;
