import Carousel from "./component/Carousel";
import Footer from "./component/Footer";
import Navbar from "./component/Header";
import NewsLetter from "./component/NewsLetter";
import AllRoutes from "./Routes/AllRoutes";


export default function App() {
  return (
    <>
    <Navbar />

    <AllRoutes />
    <NewsLetter />
    <Footer />
    </>
  )
}
