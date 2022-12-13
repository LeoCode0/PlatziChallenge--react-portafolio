import './App.css'
import { Timeline } from "./components/Timeline";

import { TweetsContext } from "./context/TweetsContext";

function App() {
  return (
    <div className="App">
      <TweetsContext>
       <Timeline />
      </TweetsContext>
    </div>
  )
}

export default App
