import Divider from "./components/Divider";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Link from "next/link";

const Home = () => {
  return (
    <>
    <Hero />
    <Divider />
    <Resume />
    <Contact />
    <About />
    <Footer />
    </>
  )
}

export default Home
