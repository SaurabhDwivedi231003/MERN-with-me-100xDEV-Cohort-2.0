import './App.css'
import { Button } from "@repo/ui/button";
import Toolbar from "@repo/ui/toolbar";

function App() {

  return (
    <>
    <Toolbar />
      Hi there
      <Button appName='react-app'>
         Click me Here 
      </Button>
    </>
  )
}

export default App
