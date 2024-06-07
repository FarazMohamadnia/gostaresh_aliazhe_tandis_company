import { BrowserRouter, Route, Routes }from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import Home from "./home/home";
import ServicesPage from "./pages/servicesPage/servicesPage";
import ProductsPage from "./pages/productPages/ProductPages";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/product" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
