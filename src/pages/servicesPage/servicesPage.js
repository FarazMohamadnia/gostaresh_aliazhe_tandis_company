import Col from 'react-bootstrap/esm/Col'
import Footer from '../../components/footer/footer'
import Navbarr from '../../components/navbar/Navbar'
import './servicesPage.css'

import img from '../../asset/img/Logo/logo2.png'
import { useState } from 'react'
import axios from 'axios'
import { getusers } from '../../services/api/ApiConfig'
import Swal from 'sweetalert2'

export default function ServicesPage(){
    const [data , setdata]=useState({});
    const [BtnContoller , setBtnContoller] = useState(false)
    const dataHandller =(e)=>{
        const name = e.target.name
        const value = e.target.value

        setdata({
            ...data , 
            [name] : value
        });

    }

    const sendData =async ()=>{
        setBtnContoller(true)
        try{
        const response = await axios.post(getusers , data);
        setBtnContoller(false)
        if(response.status == 201){
            Swal.fire({
                title:'اطلاعات شما با موفقیت ارسال شد',
                icon:'success'
            })
        }
        }catch(err){
            setBtnContoller(false)
            Swal.fire({
                title:'مشکلی در ارسال اطلاعات شما پیش آمده ،لطفا دوباره امتحان کنید',
                icon:'error'
            })
        }
    }

    return(
        <div className='vw-100 ServicesPage-body-style'>
            <Navbarr />
            <div className='d-lg-flex'>
                <Col className='d-none d-lg-block' lg={5}>
                    <div className='bg-dark w-100 h-100'>
                        <div className='hidden-section-servicesPage font-lalehar'>
                            <div className='hidden-section-servicesPage-img'></div>
                            <h3>شرکت گسترش آلیاژ تندیس</h3>
                            <p className='w-75 mt-2'>برای دریافت خدمات ، مشاوره و استعلام قیمت اطلاعات خود را وارد کنید تا در سریع ترین زمان با شما تماس بگیریم</p>
                        </div>
                    </div>
                </Col>
                <Col lg={7}>
                    <div className='display-flex-config height-sizing-form m-5 font-lalehar'>
                        <form className="form-services">
                            <p className="title-services">درخواست خدمات</p>
                            <p className="message">برای گرفتن هرگونه خدمات از شرکت ما اطلاعات خود را ارسال کنید تا با شما تماس بگیریم</p>
                                <div className="flex">
                                <label>
                                    <input className="input-services" onChange={dataHandller} name='firstName' type="text" placeholder="مثال : محمد" required="" />
                                    <span>نام</span>
                                </label>

                                <label>
                                    <input className="input-services" onChange={dataHandller} name='lastName' type="text" placeholder="مثال : محمدی" required="" />
                                    <span>نام خانوادگی</span>
                                </label>
                            </div>  

                            <label>
                                <input className="input-services" onChange={dataHandller} name='phoneNumber' type="number" placeholder="مثال: 09121111111" required="" />
                                <span>شماره تماس</span>
                            </label> 

                            <label>
                                <input className="input-services" onChange={dataHandller} name='email' type="text" placeholder="مثال: a@gmail.com" required="" />
                                <span>ایمیل</span>
                            </label>
                            <button disabled={BtnContoller} onClick={sendData} type='button' className="submit-services">Submit</button>
                        </form>
                    </div>
                </Col>
            </div>
            <Footer />
        </div>
    )
}