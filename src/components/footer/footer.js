import './footer.css';
import { FaHome  , FaCartPlus} from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import { FaInstagram ,FaTelegramPlane , FaWhatsapp } from "react-icons/fa";

import { TbMessageCircle2Filled } from "react-icons/tb";

import {Link} from 'react-router-dom'
export default function Footer(){
    return(
        <div className='bg-black'>
            <div className='footer-body-style flex-sm-wrap-reverse font-lalehar'>
                <Col className='footer-form-style' sm={12} md={4} lg={4}>
                    <Form>
                        <Form.Label><TbMessageCircle2Filled />-ارسال پیام به ما</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control className='text-start' type="email" placeholder="موضوع" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                          <Form.Control className='h-50' as="textarea" rows={3} placeholder='متن پیام' />
                        </Form.Group>
                        <Button className='w-100'>ارسال پیام</Button>
                    </Form>
                </Col>
                    <Col className='footer-text-style' sm={6} md={3}>
                        <p>صفحه ها</p>
                        <div>
                            <Link to={'/'}><p><FaHome />-خانه</p></Link>
                            <Link to={'/'}><p><FaCartPlus />-محصولات</p></Link>
                            <Link to={'/'}><p><FaEnvelopeOpenText /> -ارائه خدمات</p></Link>
                        </div>
                    </Col>
                    <Col className='footer-text-style' sm={6} md={3}>
                        <p>شبکه های اجتماعی</p>
                        <div>
                            <Link to={'/'}><p><FaInstagram />-اینستاگرام</p></Link>
                            <Link to={'/'}><p><FaWhatsapp />-واتساپ</p></Link>
                            <Link to={'/'}><p><FaTelegramPlane />-تلگرام</p></Link>
                        </div>
                    </Col>
            </div>
            <div className='text-light p-3 font-lalehar d-sm-flex flex-sm-row-reverse'>
                <Col sm={6} className='p-2'>
                    <p>آدرس : تهران ، فلکه اول تهرانپارس ، روبه روی پاساژ سپید ، مجتمع ۱۱۱۱۱ ،پلاک۹۰ واحد ۱ </p>
                    <div className='d-flex justify-content-around d-md-block '>
                        <p>شماره تماس</p>
                        <p>شماره تماس</p>
                        <p>شماره تماس</p>
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