import About from "./components/About/About";
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
      </main>

      <Footer />
    </>
  );
}

export default App;
