import './products.css';
import {Link} from 'react-router-dom';
import img from '../../asset/img/Logo/imgLogo.jpg';

export default function Product(){
    return(
        <div data-aos="zoom-in" className='Product-body'>
            <Link to={'/'}>
                <div
                style={{backgroundImage : `url(${img})`}}
                className='font-lalehar product-shape-body'
                >
                    <div className='product-shape-body-inside display-flex-config'>
                        <h3 className='text-center text-light'>فرو آلیاژ ها</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}