import Hero from "../../Component/Hero/Hero-component";
import Navbar from "../../Component/NavBar/Navbar";
import Parallax from "../../Component/Parallax/Parallax-component";
import Portfolio from "../../Component/Portfolio1/portfolio-component";
import Service from "../../Component/Services/Services-component";
import Contact from "../../Component/contact/Contact-component";


function Home() {

    return (
        <>
            <section>
                <Navbar />
                <Hero />
            </section>
            <section>
                <Parallax type="What We Do"/>
            </section>
            <section>
                <Service/>
            </section>
            <section>
                <Parallax type="What Web Did"/>
            </section>
            <Portfolio/>
            <section>
                <Contact/>
            </section>
        </>
    )
}

export default Home;