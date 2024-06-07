import Footer from "../../components/footer/footer";
import Navbarr from "../../components/navbar/Navbar";
import ProductCard from "../../components/productCard/ProductCard";

export default function ProductsPage(){
    return(
        <div>
            <Navbarr />
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