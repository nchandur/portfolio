import { Theme } from "@/components/Theme";
import { StarBackground } from "@/components/StarBackground";
import { Navigation } from "@/components/Navigation";
import { Home } from "@/components/Home";

function App() {

  return (
    <>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        <Theme />

        <StarBackground />

        <Navigation />

        <main>
          
          <Home />

        </main>

      </div>;


    </>
  )
}

export default App
