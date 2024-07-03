import './BodyContainer.css'
import { PiMedalFill } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";

export default function BodyContainerSection(){
    return(
        <div className="body-container-section-background font-lalehar">
            <div data-aos="fade-left" className=" body-background-center-section">
                <p>مشتری مداری به عنوان حیاتی ترین عنصر بقا در صدر ارزش های ویژه شرکت گسترش آلیاژ تندیس قراردارد</p>
                <div className='p-2'>
                    <div className='mb-1'>
                        <p className='p-0 m-0'><FaRegHandshake size={'2rem'}/></p>
                        <p className='p-0 m-0'>اخلاق مداری</p>
                        <p className='p-0 m-0'>صداقت و اخلاق حرفه ای موجب ارتباط خوب و پایدار با مشتریان است</p>
                    </div>
                    <div className='mb-1'> 
                        <p className='m-0 p-0'><TiMessages size={'2rem'}/></p>
                        <p className='m-0 p-0'>مشاوره</p>
                        <p className='m-0 p-0'>مشاور و بررسی درخواست مشتری قبل از خرید و ارسال کالا توسط کارشناسان فروش گسترش آلیاژ تندیس از اصول ماست</p>
                    </div>
                    <div className='mb-1'>
                        <p className='m-0 p-0'><PiMedalFill size={'2rem'}/></p>
                        <p className='m-0 p-0'>ضمانت خرید</p>
                        <p className='m-0 p-0'>تامین کالا شامل خرید از منابع معتبر داخلی و خارجی، بسته بندی مناسب کالا،
                            کنترل و بررسی های مختلف توسط سازمانهای معتبر،
                            حمل کالا به روشهای صحیح، تحویل کالا قبل از موعد به مشتری،
                            نگهداری کالا در انبار های استاندارد با شرایط ویژه انبار، کنترل مجدد،
                            بارگیری صحیح و اصولی کالا و حمل آن توسط نیروهای ورزیده و استفاده از امکانات تتیس می باشد
                            محصول را با آرامش خاطر مصرف و محصولات نهایی نیز با کیفیت مطلوب تولید خواهد گردید
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}