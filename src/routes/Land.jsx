import styles from '../Land.module.css';
import Home from "../components/Home";
import About from "../components/About";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";


function Land() {
    return <div className={styles.body}>
        <Home/>
        <About />
        <Work />
        <Carousel />
        <Testimonials />
        <Contact />
        <Accordion />
        <Footer />
    </div>
}


export default Land