import Header from "./components/Header"
import ScoreBody from "./components/ScoreBody"
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {

  return (
    <div className="h-[100vh] bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <Header/> 
      <ScoreBody/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
