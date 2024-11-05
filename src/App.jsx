import Carousel from "./component/Carousel";
import Navbar from "./component/Header";
import SingleCard from "./component/SingleCard";

export default function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <h1 className="text-3xl sm:text-4xl md:text-5xl mt-16 mb-16 font-semibold text-center">Welcome to shopping Store!</h1>

      <SingleCard />

    </>
  )
}
