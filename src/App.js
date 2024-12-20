// import "./App.css";
import Homepage from "./components/page/homepage";
import About from "./components/page/about";
import Projects from "./components/page/projects/projects";
import Connect from "./components/page/connect/connect";
import Navbar from "./components/page/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>

      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/connect" element={<Connect/>}></Route>
      </Routes>

        
      </header>
    </div>
  );
}

export default App;
