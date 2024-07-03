import './footer.css';
import { FaHome  , FaCartPlus} from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import { FaInstagram ,FaTelegramPlane , FaWhatsapp } from "react-icons/fa";

import { TbMessageCircle2Filled } from "react-icons/tb";

import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { getComments } from '../../services/api/ApiConfig';
import Swal from 'sweetalert2';
export default function Footer(){
    const [Data , setData] =useState({});
    const [deactiveBTN , setdeactiveBTN] = useState(false);
    const DataHandller = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setData({
            ...Data ,
            [name] : value
        });
    }

    const commentSendHandller = async()=>{
        setdeactiveBTN(true)
        try{
        const response =await axios.post(getComments , Data);
        setdeactiveBTN(false)
        console.log(response);
        console.log(response.status);
        if(response.status == 201){
            setdeactiveBTN(true)
            Swal.fire({
                title: "کامنت شما با موفقیت ارسال شد",
                icon: "success"
            });
        }
        }catch(err){
            setdeactiveBTN(false)
            Swal.fire({
                title: "مشکلی در ارسال پیام پیش امده دوباره امتحان کنید",
                icon: "error"
            });

        }        

    }
    return(
        <div className='bg-black'>
            <div className='footer-body-style flex-sm-wrap-reverse font-lalehar'>
                <Col className='footer-form-style' sm={12} md={4} lg={4}>
                    <Form>
                        <Form.Label><TbMessageCircle2Filled />-ارسال پیام به ما</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control onChange={DataHandller} name='title' className='text-start' type="email" placeholder="موضوع" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                          <Form.Control onChange={DataHandller} name='text' className='h-50' as="textarea" rows={3} placeholder='متن پیام' />
                        </Form.Group>
                        <Button onClick={commentSendHandller} disabled={deactiveBTN} className='w-100'>ارسال پیام</Button>
                    </Form>
                </Col>
                    <Col className='footer-text-style' sm={6} md={3}>
                        <p>صفحه ها</p>
                        <div>
                            <Link to={'/'}><p><FaHome />-خانه</p></Link>
                            <Link to={'/product'}><p><FaCartPlus />-محصولات</p></Link>
                            <Link to={'/services'}><p><FaEnvelopeOpenText /> -ارائه خدمات</p></Link>
                        </div>
                    </Col>
                    <Col className='footer-text-style' sm={6} md={3}>
                        <p>شبکه های اجتماعی</p>
                        <div>
                            <Link to={'https://www.instagram.com/gostareshaliazh?igsh=cG43bjBtbnMyc3dv'}><p><FaInstagram />-اینستاگرام</p></Link>
                            <Link to={'https://wa.me/989120709822'}><p><FaWhatsapp />-واتساپ</p></Link>
                            <Link to={'https://t.me/Gostareshaliazh'}><p><FaTelegramPlane />-تلگرام</p></Link>
                        </div>
                    </Col>
            </div>
            <div className='text-light p-3 font-lalehar d-sm-flex flex-sm-row-reverse'>
                <Col sm={6} className='p-2'>
                    <p>آدرس : تهران، تهرانپارس، فلکه اول، خیابان برادران قانع، پلاک 39، واحد 9 </p>
                    <div className='d-flex justify-content-around d-md-block '>
                        <p>تلفن : 02177713034 </p>
                        <p>تلفن : 02177713035 </p>
                        <p>شماره موبایل : 09120709822</p>
                    </div>
                </Col>
                <Col sm={6}>
                    <div><iframe className='rounded' width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=35.726000396324395,%2051.52690569118079+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>
                </Col>
            </div>
            <div className='text-center p-4 end-footer-content font-lalehar'>
                 این وب سایت به صورت اختصاصی برای شرکت گسترش آلیاژ تندیس ساخته شده 
            </div>
        </div>
    )
}