import { BrowserRouter, Routes ,Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import ShopPage from "./pages/ShopPage";

const App=()=>{
  return(
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;