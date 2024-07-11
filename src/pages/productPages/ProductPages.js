import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import Navbarr from "../../components/navbar/Navbar";
import ProductCard from "../../components/productCard/ProductCard";
import './ProductPages.css'
import { BsJustify } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import { getProduct, searchProducts } from "../../services/api/ApiConfig";
import FilterBox from "../../components/filterBox/filterbox";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";


export default function ProductsPage(){
    const [data , setdata]=useState([]);
    const [Size , serSize] = useState(0);
    const [hide , sethide] =useState(false);
    const [filter , setfilter]=useState([]);
    const [value , setvalue]=useState(''); 

    const sizeController = ()=>{
      if(hide){
        sethide(false)
        setTimeout(() => {
          serSize(0)
        }, 100);
      }else{
        serSize(100)
        setTimeout(() => {
          sethide(true)
        }, 100);
      }
    }

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
      const uniqueData = filterUniqueByType(response.data.data);
      setfilter(uniqueData);   
      console.log(filter) 
    } 

    

    const filterUniqueByType = (data) => {
      const seenTypes = new Set();
      return data.filter(item => {
        if (seenTypes.has(item.type)) {
          return false;
        } else {
          seenTypes.add(item.type);
          return true;
        }
      });
      }

    useEffect(()=>{
      dataHandller()
    },[]);

    return(
        <div className="product-page-background">
            <div className={`d-md-none w-${Size} ${hide ? 'd-block product-page-filter-body-style' : 'd-none'}`}>
              <p><TiDeleteOutline size={'2.5rem'} color="red" onClick={sizeController}/></p>
              <div className="d-flex flex-wrap align-items-center flex-column font-lalehar">
              <Button onClick={()=>{
                setvalue('') 
                sizeController()
                }}>همه ی محصولات</Button>
                {
                  filter.map(data => (
                    <FilterBox sizeController={sizeController} setvalue={setvalue} {...data}/>
                  ))
                }
              </div>
            </div>
            <Navbarr />
            <div className="d-md-flex ">
              <Col md={9}>
                <div className="product-container-style-1">
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
                  <h1 className="font-lalehar text-center">محصولات</h1>
                    <div>
                        <div className="font-lalehar d-block text-center my-2">
                          <p onClick={sizeController} className="d-md-none filter-product-Btn">فیلتر محصولات<BsJustify /></p>
                        </div>
                        <div>
                            <div className="d-flex flex-wrap justify-content-center">
                              {
                                value ?data.filter((val => val.type === value)).map(data => (<ProductCard {...data}/>)) :  data.map(data =>(<ProductCard {...data}/> )) 
                              }
                            </div>
                        </div>
                    </div>
                </div>
              </Col>
              <Col md={3} className="product-filter-list-style d-none d-md-block font-lalehar text-center">
                <p className="text-dark">لیست محصولات</p>
                <div className="">
                  <Button onClick={()=>setvalue('')}>همه ی محصولات</Button>
                {
                  filter.map(data => (
                    <FilterBox sizeController={sizeController} setvalue={setvalue} {...data}/>
                  ))
                }
                </div>
              </Col>
            </div>
            <Footer />
        </div>
    )
}