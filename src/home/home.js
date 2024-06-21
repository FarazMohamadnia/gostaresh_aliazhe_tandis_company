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
import Loading from "../components/loading/loading";
import { useEffect, useState } from "react";
import axios from "axios";
import { getStory } from "../services/api/ApiConfig";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    delay: 75, 
    offset: 150
});

export default function Home(){
    const [loading , setloading] = useState(true);
    const [storyData , setstoryData] = useState([]);

    const storyDataHandller =async ()=>{
        const response = await axios.get(getStory);
        setstoryData(response.data.data);
    }


    useEffect(()=>{
        setTimeout(() => {
            setloading(false);
        }, 7000);
        storyDataHandller();
    },[])
    
    return(
        <>
        {
            loading?
            <Loading />
            :
            <div>
                <div>
                    <Navbar/>
                </div>
                <div className="font-lalehar">
                    <Header1 />
                </div>
                <div className='Advertising-story-container pb-4'>
                    {
                        storyData.map(data=>(
                            <AdvertisingStory key={data._id} {...data}/>
                        ))
                    }
                </div>
                <div>
                    <Body1/>
                </div>
                <div>
                    <ServicesProvided />
                </div>
                <div className="Product-home-section-1">
                    <h2 data-aos="fade-left" className="font-lalehar text-center mb-4 pt-3">محصولات ما</h2>
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
        }
        </>
    )
}