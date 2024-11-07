import React from 'react'
import Carousel from "../../component/Carousel";
import Footer from "../../component/Footer";
import FullAccrodian from "../../component/FullAccrodian";
import Navbar from "../../component/Header";
import NewsLetter from "../../component/NewsLetter";
import SingleCard from "../../component/SingleCard";
import TestimonialSection from "../../component/TestimonialSection";
function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <h1 className="text-2xl sm:text-4xl md:text-5xl mt-16 mb-16  text-center">OUR TRENDY PRODUCTS!</h1>

            <SingleCard />
            <TestimonialSection />
            <h1 className="text-xl sm:text-4xl md:text-5xl mt-4 md:mt-16 mb-4 md:mb-16  text-center">Frequently Asked Questions</h1>
            <FullAccrodian />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home;
