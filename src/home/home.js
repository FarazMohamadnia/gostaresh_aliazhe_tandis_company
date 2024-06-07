import Header1 from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import './home.css'
import AdvertisingStory from "../components/Story/Story";
import Body1 from "../components/body1/body1";
import ServicesProvided from "../components/ServicesSection/ServiceSection";
import Product from "../components/products/products";
import Honors from "../components/Honors/honors";
import SocialMedia from "../components/SocialNetworks/Socialnetworks";
import Footer from "../components/footer/footer";

export default function Home(){
    return(
        <>
            <div>
                <div>
                    <Navbar/>
                </div>
                <div className="font-lalehar">
                    <Header1 />
                </div>
                <div className='Advertising-story-container pb-4'>
                        <AdvertisingStory/> <AdvertisingStory/> <AdvertisingStory/> <AdvertisingStory/> <AdvertisingStory/> <AdvertisingStory/> <AdvertisingStory/>
                </div>
                <div>
                    <Body1/>
                </div>
                <div>
                    <ServicesProvided />
                </div>
                <div className="Product-home-section-1">
                    <h2 className="font-lalehar text-center mb-4 pt-3">محصولات ما</h2>
                    <div className="display-flex-config flex-wrap">
                        <Product />  <Product />  <Product />  <Product />  <Product />
                    </div>
                </div>
                <div>
                    <Honors />
                </div>
                <div>
                    <SocialMedia />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}