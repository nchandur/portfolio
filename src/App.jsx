import { Theme } from "@/components/Theme";
import { StarBackground } from "@/components/StarBackground";
import { Navigation } from "@/components/Navigation";

function App() {

  return (
    <>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        <Theme />

        <StarBackground />

        <Navigation />

      </div>;


    </>
  )
}

export default App
