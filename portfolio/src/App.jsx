import Navbar from "./component/Navbar";
import About from "./sections/About";
import Contect from "./sections/Contect";
import Experience from "./sections/Experience";
import Footer from "./sections/footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testimonial from "./sections/Testimonials";


export default function App(){
  return(
    <div className="relative gradient text-white">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Testimonial/>
      <Contect/>
      <Footer/>
    </div>
  )
}