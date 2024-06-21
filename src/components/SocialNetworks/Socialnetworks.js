import './Socialnetworks.css'
import { FaInstagram ,FaTelegramPlane , FaWhatsapp } from "react-icons/fa";
import {Link} from 'react-router-dom'
import eitaaLogo from '../../asset/img/Logo/eitaa.251x256.png';
export default function SocialMedia(){
    return(
        <div className='bg-black'>
        <h3 data-aos="fade-left" className='font-lalehar text-center pb-4 text-light'>شبکه های اجتماعی</h3>
            <div className="SocialMedia-section-style">
                <div data-aos="flip-down">
                    <Link to={'/'}><img className='eitaa-logo-style' src={eitaaLogo}/></Link>
                </div>

                <div data-aos="flip-down">
                    <Link to={'/'}><FaInstagram size={'2rem'} color='red'/></Link>
                </div>
                <div data-aos="flip-down">
                    <Link to={'/'} ><FaTelegramPlane size={'2rem'} color='blue'/></Link>
                </div>
                <div data-aos="flip-down">
                    <Link to={'/'}><FaWhatsapp size={'2rem'} color='green'/></Link>
                </div>
            </div>
        </div>
    )
}