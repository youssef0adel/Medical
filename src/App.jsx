import "./App.css";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "../src/Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./components/Footer/Footer";
import Services from "./Pages/Services/Services";
import Faqs from "./Pages/Faqs/Faqs";
import Contact from "./Pages/Contact/Contact";
import Loading from "./Pages/Loading/Loading";
const App = () => {
  return(
    <>
      
      <BrowserRouter>
      <Loading/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/faq" element={<Faqs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  ) 
};

export default App;

