import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Col, Row } from "antd";
import { Heading } from "@chakra-ui/react";


function App() {
  return (
    <div className="App">
      
    <Row>

    <Col span={6} className="sideBar">
          <Header/>
          <Footer/>
        </Col>

    <Col span={18}>

        <div className="pageContent">

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutMe" element={<AboutMe/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>


        </div>


  

        </Col>

       

</Row>

    
    </div>
  );
}

export default App;
