import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";


function App() {
  return (
    <div className="App">
      
      <Header/>


        <div className="pageContent">

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutMe" element={<AboutMe/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>


        </div>


      <Footer/>
    
    </div>
  );
}

export default App;
