import './ProductCard.css'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function ProductCard({title , text , image , _id}){
    return(
            <div className='product-card-body-style font-lalehar'>
                <Link to={`/product/${_id}`}>
                    <h6 className='m-1 fs-4'>{title}</h6>
                    <div style={{
                        backgroundImage:`url(${image})`
                    }} className='image-body-style'></div>
                </Link>
            </div>
    )
}