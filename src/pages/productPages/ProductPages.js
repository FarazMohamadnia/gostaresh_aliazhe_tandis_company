import Footer from "../../components/footer/footer";
import Navbarr from "../../components/navbar/Navbar";
import ProductCard from "../../components/productCard/ProductCard";
import './ProductPages.css'
export default function ProductsPage(){
    return(
        <div className="product-page-background">
            <Navbarr />
            <div>
                <div className="ui-input-container font-lalehar">
                  <input
                    required=""
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
                    <ProductCard /> <ProductCard /> <ProductCard /><ProductCard />
                </div>
                <div>
                    jlklkjlkjkl
                </div>
            </div>
            <Footer />
        </div>
    )
}