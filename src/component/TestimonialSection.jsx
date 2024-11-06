import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import SwiperCore, { Autoplay } from 'swiper';

// Install Swiper modules
SwiperCore.use([Autoplay]);

// Testimonial Component
const TestimonialSection = () => {
  useEffect(() => {
    // Optional: You can add swiper initialization here if needed
  }, []);

  return (
    <section className="py-16  bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between  ">
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/3  text-center lg:text-left">
            <h2 className="text-2xl tracking-wider text-gray-900">TESTIMONIALS</h2>
            <h3 className="text-4xl font-semibold text-gray-700 mt-2">
              What Our Students Have To Say
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>

          {/* Right Side: Swiper Slider */}
          <div className="w-full lg:w-[55%]  p-8">
            <Swiper
              spaceBetween={20} // Space between slides
              slidesPerView={2} // Show 2 cards at a time
              autoplay={{
                delay: 3000, // Auto-slide every 3 seconds
                disableOnInteraction: false, // Keep autoplay on interaction
              }}
              loop={true} // Infinite loop
              className="testimonial-slider"
              breakpoints={{
                250: {
                  slidesPerView: 1, 
                },
                320: {
                  slidesPerView: 1, 
                },
                640: {
                  slidesPerView: 1, 
                },
                1024: {
                  slidesPerView: 2, 
                },
              }}
            >
              {/* Testimonial Card 1 */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 italic mb-4">
                    "This course transformed my career! The instructors were
                    incredible and the content was practical and easy to follow."
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/41.jpg"
                      alt="Student"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">John Doe</p>
                      <p className="text-sm text-gray-500">Web Developer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Testimonial Card 2 */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 italic mb-4">
                    "I gained so much confidence after taking this course! It was
                    well structured and gave me the skills to pursue my dream job."
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Student"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">Jane Smith</p>
                      <p className="text-sm text-gray-500">UI/UX Designer</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Testimonial Card 3 */}
              <SwiperSlide>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 italic mb-4">
                    "Amazing experience! The course content was relevant, and the
                    community was supportive. Highly recommend it to anyone
                    looking to grow their skills."
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      alt="Student"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">Mike Johnson</p>
                      <p className="text-sm text-gray-500">Data Scientist</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
