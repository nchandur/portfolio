import { Theme } from "./components/Theme";
import { StarBackground } from "./components/StarBackground";

function App() {

  return (
    <>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        <Theme />

        <StarBackground />


      </div>;


    </>
  )
}

export default App
