import AccordionExpandDefault from "./component/Accordian";
import Carousel from "./component/Carousel";
import Navbar from "./component/Header";
import SingleCard from "./component/SingleCard";
import TestimonialSection from "./component/TestimonialSection";

export default function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <h1 className="text-2xl sm:text-4xl md:text-5xl mt-16 mb-16  text-center">OUR TRENDY PRODUCTS!</h1>

      <SingleCard />
      <TestimonialSection />
      <h1 className="text-2xl sm:text-4xl md:text-5xl mt-16 mb-16  text-center">Frequently Asked Questions</h1>
      <AccordionExpandDefault />

    </>
  )
}
