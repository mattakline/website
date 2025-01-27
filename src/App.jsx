import About from "./components/About";
import Contact from "./components/Contact";
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div
        className="flex w-screen h-screen overflow-x-scroll snap-x snap-mandatory"
        id="scroll-container"
      >
        <section id="hero" className="snap-start w-screen h-screen">
          <Hero />
        </section>
        <section id="dishes" className="snap-start w-screen h-screen">
          <Dishes />
        </section>
        <section id="about" className="snap-start w-screen h-screen">
          <About />
        </section>
        <section id="contact" className="snap-start w-screen h-screen">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
