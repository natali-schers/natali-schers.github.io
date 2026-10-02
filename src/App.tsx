import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Credentials from "./components/Credentials/Credentials";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
