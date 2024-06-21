import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import Navbarr from "../../components/navbar/Navbar";
import ProductCard from "../../components/productCard/ProductCard";
import './ProductPages.css'
import axios from "axios";
import { getProduct, searchProducts } from "../../services/api/ApiConfig";
export default function ProductsPage(){
    const [data , setdata]=useState([]);

    const searchHanddler =async (e) =>{
      const value = e.target.value;
      if(value){
        const response = await axios.get(`${searchProducts}?t=${value}`);
        setdata(response.data.data);
      }else{
        const response = await axios.get(getProduct);
        setdata(response.data.data)
      }
    }

    const dataHandller =async ()=>{
      const response = await axios.get(getProduct);
      setdata(response.data.data)
    }

    useEffect(()=>{
      dataHandller()
    },[]);

    return(
        <div className="product-page-background">
            <Navbarr />
            <div>
                <div className="ui-input-container font-lalehar">
                  <input
                    onChange={searchHanddler}
                    placeholder="کالای مورد نظر را سرچ کنید"
                    className="ui-input"
                    type="text"
                  />
                  <div className="ui-input-underline"></div>
                  <div className="ui-input-highlight"></div>
                  <div className="ui-input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="currentColor"
                        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      ></path>
                    </svg>
                  </div>
                </div>
            </div>
            <h1 className="font-lalehar text-center">محصولات</h1>
            <div>
                <div className="d-flex flex-wrap justify-content-center">
                  {
                    data.map(data =>(
                      <ProductCard {...data}/>
                    ))
                  }
                </div>
            </div>
            <Footer />
        </div>
    )
}