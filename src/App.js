import { BrowserRouter, Route, Routes }from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import Home from "./home/home";
import ServicesPage from "./pages/servicesPage/servicesPage";
import ProductsPage from "./pages/productPages/ProductPages";
import Login from "./pages/ownerPages/ownerLogin/ownerLogin";
import Dashboard from "./pages/ownerPages/ownerDashboard/ownerDashboard";
import {Helmet} from "react-helmet";

import img from '../src/asset/img/Logo/imgLogo.jpg'
function App() {
  return(
    <BrowserRouter>
      <Helmet>
        <meta
          name="description"
          content="شرکت گسترش آلیاژ تندیس وارد کننده و تامین کننده مواد اولیه ریخته گری و نمایندگی رسمی ماسه ریخته گری "
        />
        <meta name="keywords" content="پخش ماسه , فروش مواد اولیه ریخته گری , مواد اولیه ریخته گری , تامین کننده معتبر مواد اولیه ریخته گری ,بهتری شرکت تامین کننده مواد اولیه ریخته گری , امید شهسواری "/>
        <link rel="apple-touch-icon" href={img} />
        <link rel="icon" href={img} />
        <title>شرکت گسترش آلیاژ تندیس</title>
      </Helmet>
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
