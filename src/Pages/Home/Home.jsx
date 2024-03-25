import Hero from "../../Component/Hero/Hero-component";
import Navbar from "../../Component/NavBar/Navbar";


function Home() {

    return (
        <>
            <section>
                <Navbar />
                <Hero />
            </section>
            <section>Parallax</section>
            <section>Services</section>
            <section>Parallax</section>
            <section>Portfolio1</section>
            <section>Portfolio2</section>
            <section>Portfolio3</section>
            <section>Contact</section>
        </>
    )
}

export default Home;