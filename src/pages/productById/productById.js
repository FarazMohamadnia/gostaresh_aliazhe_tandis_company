import axios from 'axios';
import Footer from '../../components/footer/footer'
import Navbarr from '../../components/navbar/Navbar'
import Loading from '../../components/loading/loading'
import './productById.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProductById , getProduct } from '../../services/api/ApiConfig';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard';

export default function ProductById(){
    const [loadingTime , setloadingTime]=useState(false)
    const [data , setdata]=useState([])
    const [productsData , setproductsData] = useState([])
    const navigate =  useNavigate()
    const {id} = useParams();

    const getproductsData =async()=>{
        try{
            const response = await axios.get(getProduct);
            setproductsData(response.data.data);
        }catch(err){
            console.log(err.message);
        }
    }

    const getData =async()=>{
        setloadingTime(true)
        try{
            const response = await axios.get(`${getProductById}${id}`);
            const processedText = response.data.data.text.replace(/[\.,.]/g, '$&<br/>');
            setloadingTime(false)
            setdata({...response.data.data, text:processedText});
        }catch(err){
            setloadingTime(false)
            navigate('/product')
        }
    }

    useEffect(()=>{
        getData();
        getproductsData();
    },[id])
    return(
        <div className='font-lalehar bg-dark text-light'>
            <Navbarr />
            {
            loadingTime ?
                <Loading />
            :
                <div>
                    <div className='ProductById-top-items d-sm-flex px-2 w-75 mx-auto my-4 align-items-center justify-content-between'>
                        <h1 className='fs-5'> اسم محصول: <span>{data.title}</span></h1>
                        <h2 className='fs-5'>دسته محصول : <span>{data.type}</span></h2>
                    </div>
                    <div className='ProductById-body-style mx-auto'>
                        <img className='ProductById-call-image' src={data.image}/>
                        <button className='ProductById-call-buttom'><Link to={'tel:09120709822'}>برای دریافت اطلاعات بیشتر تماس بگیرید</Link></button>
                        <p className='text-center fs-4'>توضیحات محصول : <span>{data.title}</span></p>
                        <p dangerouslySetInnerHTML={{ __html: data.text }} />
                        <p className='fs-4 mb-2'>انالیز محصول : </p>
                        <img className='w-100 my-2 rounded-4 ' src={data.image2}/>
                    </div>
                    <p className='fs-3 ps-1 ms-4 border-start'>محصولات مشابه : </p>
                    <div onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} className='ProductById-bottom-section-link'>
                        {
                            productsData.filter(filter => filter.type === data.type).map
                            (data => (<ProductCard {...data}/>))
                        }
                    </div>
                </div>
            }
            <Footer />
        </div>
    )
}