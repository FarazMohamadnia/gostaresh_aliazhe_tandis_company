import './products.css';
import {Link} from 'react-router-dom';
import img from '../../asset/img/Logo/imgLogo.jpg';

export default function Product({img , title}){
    return(
        <div data-aos="zoom-in" className='Product-body'>
            <Link to={'/product'}>
                <div
                style={{backgroundImage : `url(${img})`}}
                className='font-lalehar product-shape-body'
                >
                    <div className='product-shape-body-inside display-flex-config'>
                        <h3 className='text-center'>{title}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}