import Index from "./pages/Index"
import "./pages/css/backgrounds-style.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  AOS.init();
  return (<div id="app"><Index /></div>)
}

export default App
