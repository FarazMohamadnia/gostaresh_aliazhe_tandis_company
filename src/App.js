import { BrowserRouter, Route, Routes }from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import Home from "./home/home";
import ServicesPage from "./pages/servicesPage/servicesPage";
import ProductsPage from "./pages/productPages/ProductPages";
import Login from "./pages/ownerPages/ownerLogin/ownerLogin";
import Dashboard from "./pages/ownerPages/ownerDashboard/ownerDashboard";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/owner/login" element={<Login />} />
        <Route path="/owner/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
