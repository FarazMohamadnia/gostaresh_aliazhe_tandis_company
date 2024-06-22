import './ServiceSection.css';
import img from '../../asset/img/Logo/imgLogo.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, useState } from 'react';
// ..
AOS.init();


export default function ServicesProvided(data){
    const [Data , setData]=useState([])
    useEffect(()=>{
        setData(data.data)
    },[])
    return(
        <div className='bg-dark text-light pb-5 '>
            <h1 data-aos="fade-left" className='text-center font-Casablanca pt-3'> تامین مواد اولیه ریخته گری</h1>
            <div className='d-flex flex-wrap justify-content-center'>
            {
                Data.map(data =>(
                        <div data-aos="flip-left" className='Services-card-body'>
                            <div className='d-flex justify-content-between align-items-center p-3 border-bottom'>
                                <p className='font-Casablanca fs-5'>{data.title}</p>
                                <img src={data.img}/>
                            </div>
                            <div className='overflow-auto p-3 font-lalehar'>
                                <p className='text-center'>توضیحات محصول</p>
                                <p>
                                    {data.text}
                                </p>
                            </div>
                        </div>
                ))
            }
            </div>            
        </div>
    )
}


