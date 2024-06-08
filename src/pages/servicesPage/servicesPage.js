import Col from 'react-bootstrap/esm/Col'
import Footer from '../../components/footer/footer'
import Navbarr from '../../components/navbar/Navbar'
import './servicesPage.css'

import img from '../../asset/img/Logo/imgLogo.jpg'

export default function ServicesPage(){
    return(
        <div className='vw-100 ServicesPage-body-style'>
            <Navbarr />
            <div className='d-lg-flex'>
                <Col className='d-none d-lg-block' lg={5}>
                    <div className='bg-dark w-100 h-100'>
                        <div className='hidden-section-servicesPage font-lalehar'>
                            <img src={img} />
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
                                    <input className="input-services" type="text" placeholder="مثال : محمد" required="" />
                                    <span>نام</span>
                                </label>

                                <label>
                                    <input className="input-services" type="text" placeholder="مثال : محمدی" required="" />
                                    <span>نام خانوادگی</span>
                                </label>
                            </div>  

                            <label>
                                <input className="input-services" type="number" placeholder="مثال: 09121111111" required="" />
                                <span>شماره تماس</span>
                            </label> 

                            <label>
                                <input className="input-services" type="text" placeholder="مثال: a@gmail.com" required="" />
                                <span>ایمیل</span>
                            </label>
                            <button className="submit-services">Submit</button>
                        </form>
                    </div>
                </Col>
            </div>
            <Footer />
        </div>
    )
}