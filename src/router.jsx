import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Nopage from './pages/no-page';
import Header from "./pages/header";
import Footer from "./pages/footer";

const Router = ()=>{


    return(<>
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="*" element={<Nopage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>)
}

export default Router;