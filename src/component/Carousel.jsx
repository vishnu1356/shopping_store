import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Slider from '../assets/image/homesaty/Slider.jpeg';
import Slider2 from '../assets/image/homesaty/Slider2.jpg';
import Slider3 from '../assets/image/homesaty/Slider3.jpg';
import Slider4 from '../assets/image/homesaty/Slider4.jpeg';
import { Icon } from '@iconify/react';

const Carousel = () => {
    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0); // State to track the current slide index
    const [dynamicContent, setDynamicContent] = useState([
        { text: 'The Horizon Villa', button: 'Learn More' },
        { text: 'The Silverton Chalet', button: 'Explore' },
        { text: 'The Horizon Villa', button: 'Join Us' },
        { text: 'The Si Cottage', button: 'Contact Us' },
    ]);
    const [animateText, setAnimateText] = useState(false); // State to control h1 animation

    const slideImages = [Slider2, Slider, Slider3, Slider4];

    // Consolidated style objects for reuse
    const styles = {
        container: { position: 'relative', height: '100vh', width: '100vw' },
        slideImage: { width: '100%', height: '100%', objectFit: 'cover' },
        content: {
            position: 'absolute',
            top: '45%',
            left: '45%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            fontWeight: '600',
        },
        button: {
            position: 'absolute',
            background: 'transparent',
            zIndex: 10,
            color: 'white',
            padding: '10px 20px',
            fontSize: '23px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: '600',
        },
    };

    useEffect(() => {
        // Trigger animation after 0.5 seconds when component mounts
        setTimeout(() => setAnimateText(true), 500);

        const handleScrollToTop = () => {
            if (window.scrollY === 0 && swiperRef.current) {
                swiperRef.current.swiper.slideTo(0);
                swiperRef.current.swiper.mousewheel.enable();
            }
        };

        window.addEventListener('scroll', handleScrollToTop);

        return () => {
            window.removeEventListener('scroll', handleScrollToTop);
        };
    }, []);

    const handleReachEnd = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.mousewheel.disable();
            document.body.style.overflow = 'auto'; // Enable scrolling on the body
        }
    };

    // Function to update the current index on slide change
    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.activeIndex);
        setAnimateText(false); // Reset animation state on slide change
        setTimeout(() => setAnimateText(true), 500); // Re-trigger animation with delay
    };

    return (
        <div style={styles.container}>
            <Swiper
                ref={swiperRef}
                direction="vertical"
                slidesPerView={1}
                spaceBetween={0}
                speed={1000}  // Adjust transition speed here for smooth transition
                mousewheel={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Mousewheel, Autoplay, Navigation]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                onReachEnd={handleReachEnd}
                onSlideChange={handleSlideChange}
                style={{
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                }}
            >
                {dynamicContent.map((content, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={slideImages[index]}
                            alt={`Slide ${index + 1}`}
                            style={styles.slideImage}
                        />
                        <div style={styles.content}>
                            <h1
                                style={{
                                    color: 'white',
                                    fontSize:'100px',
                                    fontweight: '500',
                                    opacity: animateText ? 1 : 0,
                                    transform: animateText ? 'translateY(0)' : 'translateY(50px)',
                                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                                }}
                            >
                                {content.text}
                            </h1>
                            {/* <button style={{
                                background: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}>
                                {content.button}
                            </button> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Current Slide Number Display */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '20px',
                transform: 'translateY(-50%)',
                color: 'white',
                fontSize: '24px',
            }}>
                {`Slide ${currentIndex + 1} of 4`}
            </div>

            {/* Clickable Slide Numbers */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '20px',
                transform: 'translateY(-50%)',
                color: 'white',
                zIndex: '10',
                fontSize: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            }}>
                {[0, 1, 2, 3].map((index) => (
                    <button
                        key={index}
                        style={{
                            background: 'black',
                            border: 'none',
                            color: currentIndex === index ? 'green' : 'white',
                            cursor: 'pointer',
                            fontSize: '24px',
                            transition: 'color 0.3s',
                            padding: '5px 10px',
                            borderRadius: '5px',
                        }}
                        onClick={() => {
                            swiperRef.current.swiper.slideTo(index);
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        0{index + 1}
                    </button>
                ))} 
            </div>

            {/* Custom Navigation Buttons */}
            <button
                style={{ ...styles.button, bottom: '60px', left: '110px' }}
                onClick={() => swiperRef.current.swiper.slidePrev()}
                aria-label="Previous slide"
            >
                <Icon icon="bi:arrow-left" /> Prev
            </button>
            <button
                style={{ ...styles.button, bottom: '60px', right: '110px' }}
                onClick={() => swiperRef.current.swiper.slideNext()}
                aria-label="Next slide"
            >
                Next <Icon icon="bi:arrow-right" />
            </button>
        </div>
    );
};

export default Carousel;
