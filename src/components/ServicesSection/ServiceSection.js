import './ServiceSection.css';
import img from '../../asset/img/Logo/imgLogo.jpg';


export default function ServicesProvided(){
    return(
        <div className='bg-dark text-light pb-5 '>
            <h1 className='text-center font-Casablanca pt-3'> تامین مواد اولیه ریخته گری</h1>
            <div className='d-flex flex-wrap justify-content-center'>
                <div className='Services-card-body'>
                    <div className='d-flex justify-content-between align-items-center p-3 border-bottom'>
                        <p className='font-Casablanca fs-5'>۱- ماسه و سنگ</p>
                        <img src={img}/>
                    </div>
                    <div className='overflow-auto p-3'>
                        <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

                        </p>
                    </div>
                </div>
                <div className='Services-card-body'>
                    <div className='d-flex justify-content-between align-items-center p-3 border-bottom'>
                        <p className='font-Casablanca fs-5'>۲- ماسه و سنگ</p>
                        <img src={img}/>
                    </div>
                    <div className='overflow-auto  p-3'>
                        <p>
                              سیمنسنمیتستن یتشنمتی رریب 
                        </p>
                    </div>
                </div>
                <div className='Services-card-body'>
                    <div className='d-flex justify-content-between align-items-center p-3 border-bottom'>
                        <p className='font-Casablanca fs-5'>۳- ماسه و سنگ</p>
                        <img src={img}/>
                    </div>
                    <div className='overflow-auto  p-3'>
                        <p>
                              سیمنسنمیتستن یتشنمتی رریب 
                        </p>
                    </div>
                </div>
                <div className='Services-card-body'>
                    <div className='d-flex justify-content-between align-items-center p-3 border-bottom'>
                        <p className='font-Casablanca fs-5'>۴- ماسه و سنگ</p>
                        <img src={img}/>
                    </div>
                    <div className='overflow-auto  p-3'>
                        <p>
                              سیمنسنمیتستن یتشنمتی رریب 
                        </p>
                    </div>
                </div>
                <div className='Services-card-body'>
                    <div className='d-flex justify-content-between align-items-center p-3 border-bottom'>
                        <p className='font-Casablanca fs-5'>۵- ماسه و سنگ</p>
                        <img src={img}/>
                    </div>
                    <div className='overflow-auto  p-3'>
                        <p>
                              سیمنسنمیتستن یتشنمتی رریب 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


