import './ProductCard.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function ProductCard({title , text , image}){
    return(
        <div className='product-card-body-style font-lalehar m-1'>
            <div style={{
                backgroundImage:`url(${image})`
            }} className='image-body-style'></div>
            <div className='p-1 overflow-auto h-50'>
                <h6 className='m-1'>{title}</h6>
                <p>{text}</p>
            </div>
        </div>
    )
}