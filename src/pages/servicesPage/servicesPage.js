import Footer from '../../components/footer/footer'
import Navbarr from '../../components/navbar/Navbar'
import './servicesPage.css'

export default function ServicesPage(){
    return(
        <div className='vw-100 ServicesPage-body-style'>
            <Navbarr />
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
            <Footer />
        </div>
    )
}