import { Theme } from "@/components/Theme";
import { StarBackground } from "@/components/StarBackground";
import { Navigation } from "@/components/Navigation";
import { Home } from "@/components/Home";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {

  return (
    <>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        <Theme />

        <StarBackground />

        <Navigation />

        <main>

          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />

        </main>

        <Footer />

      </div>


    </>
  )
}

export default App
