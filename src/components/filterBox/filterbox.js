import { useState } from 'react';
import './filterbox.css';

export default function FilterBox({image , title , type , setvalue , sizeController}){

    const typeHandller = ()=>{
        setvalue(type);
        sizeController();
    }

    return(
        <div onClick={typeHandller} name={type} className='filter-Box-Style' style={{backgroundImage : `url(${image})`}}>
            <p className='filter-p-background-style fs-4 m-3 font-lalehar w-100 h-100 d-flex justify-content-center align-items-center'>{type}</p>
        </div>
    )
}