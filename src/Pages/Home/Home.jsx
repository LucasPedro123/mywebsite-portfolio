import Hero from "../../Component/Hero/Hero-component";
import Navbar from "../../Component/NavBar/Navbar";
import Parallax from "../../Component/Parallax/Parallax-component";
import Service from "../../Component/Services/Services-component";


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
            <section>Portfolio1</section>
            <section>Portfolio2</section>
            <section>Portfolio3</section>
            <section>Contact</section>
        </>
    )
}

export default Home;