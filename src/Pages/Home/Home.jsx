import Hero from "../../Component/Hero/Hero-component";
import Navbar from "../../Component/NavBar/Navbar";
import Parallax from "../../Component/Parallax/Parallax-component";
import Portfolio from "../../Component/Portfolio1/portfolio-component";
import Service from "../../Component/Services/Services-component";
import Contact from "../../Component/contact/Contact-component";


function Home() {

    return (
        <>
            <section id="home">
                <Navbar />
                <Hero />
            </section>
            <section>
                <Parallax type="Saiba Mais Sobre Mim"/>
            </section>
            <section id="servicos">
                <Service/>
            </section>
            <section >
                <Parallax type="Veja Meus Projetos"/>
            </section>
            <Portfolio/>
            <section id="contato">
                <Contact/>
            </section>
        </>
    )
}

export default Home;