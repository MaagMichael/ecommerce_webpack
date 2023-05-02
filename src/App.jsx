import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

// import pages from components folder
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";
import { Store } from "./components/Store"
import { About } from "./components/About"

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />          
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
