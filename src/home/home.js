// images
import frocromeimg from '../asset/img/homePageImages/productimage/frocrome.jpg'
import fromangnezimg from '../asset/img/homePageImages/productimage/fromangnez.jpg'
import froniobiomimg from '../asset/img/homePageImages/productimage/froniobiom.jpg'
import frosiliconmangnezimg from '../asset/img/homePageImages/productimage/frosiliconmangnez.jpg'
import graphitcharbimg from '../asset/img/homePageImages/productimage/graphitcharb.jpg'
import graphitkamsolphorimg from '../asset/img/homePageImages/productimage/graphitkamsolphor.jpg'
import graphitporsolforimg from '../asset/img/homePageImages/productimage/graphitporsolfor.jpg'
import mangnezmetalimg from '../asset/img/homePageImages/productimage/mangnezmetal.jpg'
import nickleimg from '../asset/img/homePageImages/productimage/nickle.jpg'
import frowondiom from '../asset/img/homePageImages/productimage/frowondiom.jpg'
/////////////////////////////////////////////////
import Header1 from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import './home.css'
import AdvertisingStory from "../components/Story/Story";
import Body1 from "../components/body1/body1";
import ServicesProvided from "../components/ServicesSection/ServiceSection";
import Product from "../components/products/products";
import Honors from "../components/Honors/honors";
import SocialMedia from "../components/SocialNetworks/Socialnetworks";
import Footer from "../components/footer/footer";
import Loading from "../components/loading/loading";
import { useEffect, useState } from "react";
import axios from "axios";
import { getStory } from "../services/api/ApiConfig";

import AOS from 'aos';
import 'aos/dist/aos.css';
import BodyContainerSection from '../components/Bodycontainer/BodyContainer'
// ..
AOS.init({
    delay: 75, 
    offset: 150
});

const productList =[{
    img : nickleimg,
    title:'نیکل',
    text:
    `
    فلز نیکل در صنعت به صورت های متفاوتی مثل نيكل ورقه اى ، نيكل ساچمه اى و نيكل پليت وجود دارد و در زندگی امروزه ما بسیار نقش مهمی را ایفا می کند.
    به طور کلی و در مقایسه با دیگر فلز ها می توان گفت محصولات حاوى نيكل مقاومت به خوردگى بهتر، استحكام بیشتر، كاركرد بيشتر در دماهای بالا و پايين دارند و طيف وسيعى از خواص مغناطيسى و الكتريكی ويژه را شامل می شوند. در نتیجه بيشتر توليد نيكل پليت برای عناصر آلياژي ، باتری ، پوشش ها ، مواد دیگری مثل وسايل آشيزخانه، تلفن همراه، تجهيزات يزشكي، حمل و نقل، ساختمان ها، مبدل برق و جواهرات مورد استفاده قرار می گیرد.
    نيكل تركيبی مهم با کاربرد بسیار بالا در بین فولاد های آلیاژی است. اين ماده بيشتر به عنوان تقويت كننده ی محلول جامد و یا عنصری با قابليت سختى پذيرى متوسط و میانه و مهم تر آن که به عنوان ابزارى برا تقويت چقرمگى ، مخصوصا در دمای پایین شناخته می شود.
    نيكل عنصر مهمى از فولادهای ضد زنگ است و جلوگیری از زنگ زدن، خراش و مقامت در برابر حرارت نقش مهمی داشته و به آن کمک می کند. 65% تولید جهانی نیکل صرف تولید فولاد ضد زنگ می گردد.
    `
},
{
    img: frosiliconmangnezimg ,
    title : 'فرو سیلیکو منگنز',
    text : `
    با پیشرفت علم و تکنولوژی مواد و تجهیزاتی که در فرایند تولید استفاده می‌شوند نیز پیشرفت چشمگیری داشته‌اند. یکی از این مواد که به‌تازگی به‌شدت مورداستفاده قرار گرفته است، فروآلیاژها هستند. این فروآلیاژها جهت تولید انواع آلیاژهای مختلف مورداستفاده قرار می‌گیرند و همین امر بر محبوبیت آن‌ها افزوده است. یکی از فروآلیاژهای بسیار پرکاربرد که می‌توان از آن در صنعت فولاد نیز استفاده کرد، فرو سیلیکو منگنز است.
    `
},
{
    img : frocromeimg,
    title : 'فرو کروم',
    text : 
    `
    روکروم آلیاژی تشکیل شده از آهن و کروم است که بیشتر در تولید فولاد هایی که زنگ نمیزنند استفاده میگردد. نسبت ترکیب این دوعنصر متغیر بوده و کروم میتواند درصد ترکیبی بین 50 تا 70 درصد داشته باشد.
    کروم آلیاژی است با کاربرد های فراوان و استفاده ی گسترده در اکثر آلیاژ ها و فولاد ها که بهره گیری از آن منجر به ایجاد خواص مهمی چون بهبود در برابر سایش، مقاومت به اکسیداسیون و خورگی و جلوگیری از افت استحکام در دماهای بالا میگردد. عنصر کروم معمولا به شکل کرومات آهن یا سنگ معدن آهن کروم وجود دارد. رنگ نقره ای و سختی بالا همراه با جلای فلزی از ویژگی های خاص کروم محسوب میشود.
    افزودن کروم تا حد اندکی به عنوان عامل سختی پذیری نیز میتواند عمل کند. می توان گفت تمام فولاد های زنگ نزن مقداری کروم را در خود جای داده اند و 70 درصد کرومی که در صنعت فولاد سازی مصرف میگردد صرف تولید فولاد های زنگ نزن میشود.
    `
},
{
    img : fromangnezimg,
    title : 'فرو منگنز',
    text : `
        فرومنگنز (پرکربن -متوسط کربن -کم کربن) : فرومنگنز یک نوع فروآلیاژ فلزی است که از ترکیب آهن و منگنز بدست می آید. منگنز یک نوع فلز مهم و استراتژیکی است که در صنایعی مانند فولاد و چدن بسیار کاربردی است. این فلز آنقدر در ساخت فولاد کاربردی است که به عنوان یکی از مهم ترین فروآلیاژها شناخته می شود. در فرومنگنزها معمولا بین 65 تا 95 درصد منگنز به کار رفته است. برای تولید فرومنگنز، سنگ معدنی با میزان سیلیس حداکثر 7 تا 8 درصد مورد نیاز است.
    یکی از دلایلی استفاده از فرومنگنز حذف مواد زائد همچون گوگرد و اکسیژن در کوره های فولاد سازی است. چرا که غلظت زیاد گوگرد در مذاب همگن باعث می شود تا غلظت فولاد تولید شده کاهش پیدا کند و همین امر باعث شکننده شدن آن می شود. اما هنگامی که به مواد مذاب، فرو منگنز اضافه می گردد، گوگرد با منگنز ترکیب می شود و در نهایت سولفید منگنز بوجود می آید و در سرباره مذاب قرار میگیرد و به این ترتیب از مذاب جدا و حذف می شود.
    فرو منگنز به دلیل اصلاح سیستم آهن-کربن استحکام کششی، سختی، سختی‌پذیری، چقرمگی و کارپذیری فولاد را بهبود می‌دهد و به عنوان یکی از اجزای آلیاژی برای افزایش مقاومت و کاهش شکنندگی و بهبود رفتار حرارتی انواع فولاد بکار می رود.
    همانگونه که در ابتدا نیز گفته شد منگنز به عنوان ماده اساسی برای تولید چدن و فولاد است. همچنین یکی از مهم ترین کاربردهای آن در صنعت و تجارت تهیه آلیاژ آهن می باشد.

    `
},
{
    img : froniobiomimg,
    title : 'فرو نیوبیوم',
    text : `
    فرو نیوبیوم ماده ای افزودنی به فرآیند تولید فلزات آمورف بوده ، و خواص مطلوب متعددی را به ترکیب حاصل انتقال می دهد. از مزایای اصلی اضافه کردن فرو نیوبیوم به یک آلیاژ ،در خواص ضد خوردگی آن می باشد. علاوه براین، اضافه کردن فرو نیوبیوم به یک آلیاژ، آن را قابل جوش تر و بسیار قوی تر می کند. با اضافه کردن عناصر دیگر مانند زیرکونیوم و فرو نیوبیوم ، فولاد تولیدی برای کاربردهای حساس مانند پلهای معلق بسیار عالی می باشد. اکثر فولادهای درجه SAE از فرو نیوبیوم می باشد، چرا که فرو نیوبیوم مقاومت در برابر درجه حرارت بالا، مقاومت در برابر خوردگی، مقاومت در برابر اکسیداسیون، مقاومت در برابر خزش و همینطور کاهش فرسایش در دماهای بالاتر را افزایش می دهد.
    `
},
{
    img : frowondiom,
    title : 'فرو وانادیوم',
    text : `
    وانادیوم جزء مهمی از فلزات غیرآهنی است که گاهی به آن فلز آهنی نیز گفته می شود. این عنصر فلزی، ترکیبات و آلیاژهای آن دارای خواص منحصر به فرد و عالی است که به عصر تحول در تمدن صنعتی جهانی کمک بزرگی کرده است. وانادیم همچنین توسعه سریع صنایع مدرن، به ویژه صنایع فولاد، شیمیایی، نفت، انرژی و هسته ای، معماری و حفاظت از محیط زیست را تسهیل کرده است. بنابراین وانادیوم به خاطر نقشش در تاریخ بشر به یادگار خواهد ماند.
    `
},
{
    img : graphitporsolforimg,
    title : 'گرافیت پر سولفور',
    text : `
    گرافيت پر سولفور ( كك نفتى كلسينه شده ) درواقع همان نفتى خام است كه در دمای 1200 تا 1300 درجه ى سانتى گراد تكليس مى گردد. اين کک، کک تكليس شده نامیده میشود. کک کلسينه شده به صورت گسترده ای برای گدازگری (ذوب و احيا) آلومينيوم در صنعت آلومينيوم، به عنوان عامل كربن ده در فولاد های با کربن بالا در ريخته گري ، به عنوان پشت بندی رسانا در محل استقرار الكترود و همچنین در توليد بسيارى از محصولات كربن و گرافيتى به کار برده می شود.

    `
},
{
    img : graphitcharbimg,
    title : 'گرافیت چرب',
    text : `
        می توان گفت گرافیت چرب آشنا ترین ماده‌ی گرافیتی طبیعی است چرا که در بسیاری از مکان ها از گرافیت پودری ریز دانه شده به عنوان روان کننده‌ی قفل یا سرب در مداد ها استفاده می شود. هر دو این محصولات پرکاربرد حاوی پودر گرافیت چرب یا ورقه ای می‌باشند. پودر گرافیت طبیعی یا چرب به علت نرمی ذاتی کاربرد های بسیار زیادی دارد؛ مخصوصاً در فرمولاسیون های روان کننده و یا افزودنی در مواد ساختاری و آلیاژهای فلزی
    این شکل از گرافیت درجه بالای بلورینگی ، رسانایی حرارتی و الکتریکی بالا و خصوصیات ترکیبی کمی دارد.
    گرافیک چرب موروفولوژی  ورقه ای یا صاف دارد. بیشتر گرافیت ها از نظر سطح دارای موروفولوژی ورقه ای بوده و در اکثر موارد گرافیت ورقه ای بدون توجه به اندازه ذرات از این ساختار برخوردار است.

    `
},
{
    img : graphitkamsolphorimg,
    title : 'گرافیت کم سولفور',
    text : `
    گرافیت کم سولفور محصولی تهیه شده از کک نفتی است که در کوره ی گرافیتی قرار گرفته و در دمای بالا فراوری میگردد.در صنعت فولاد سازی بهترین افزودنی کربنی برای ذوب کاری کک نفت گرافیتی است.که تا حدی نیز میتواند جایگزین ضایعات گرافیتی شده و تقاضای بازار را هرساله افزایش دهد. کک نفتی گرافیتی شده با درصد خلوص بالا از کک نفتی با کیفیت و در دمای بالا ساخته میشود. و محتوای گوگرد از مهمترین موارد در کک GPC می باشد. به عنوان ماده ای کربنی با خالصی بالا مشخصه هایی مثل میزان بالای کربن، میزان گوگرد کم با خاکستر و تخلخل کم را داراست.

    `
},
{
    img : mangnezmetalimg,
    title : 'منگنز متال',
    text : `
        منگنز متال درصد خلوص بالايى داشته و وظیفه افزايش سختى مواد فلزى را بر عهده دارد. بيشترين کاربرد این عنصر آلياژ مس منگنز ، آلومينيوم منگنز و سرى 200 فولاد ضد زنگ است. منگنز موجود در اين آلياژ ها منجر به تقويت استحكام ، چقرمگى ، سايش و مقاومت به خوردگى مى گردد.
        منگنز متال ظاهری مانند آهن ، با ورق های نامنظم ، جامد و مجعد ، يك طرف زبر و طرف ديگر روشن و رنگی نقره اى متمایل به قهوه اى دارد. بعد از تبديل شدن به پودر، رنگی نقره اى مایل به خاکسترى پیدا می کند.

    `
}
]

export default function Home(){
    const [loading , setloading] = useState(true);
    const [storyData , setstoryData] = useState([]);
    const [loadingController , setloadingController] = useState(true)
    const storyDataHandller =async ()=>{
        const response = await axios.get(getStory);
        setstoryData(response.data.data);
    }

    const loadedPages = ()=>{
        const currentTime = new Date().getTime();
        const expirationTime = localStorage.getItem('expirationTime');
        
        if (expirationTime && currentTime < parseInt(expirationTime)) {
          setloading(false);
        } else {
          localStorage.removeItem('hasLoadedBefore');
          localStorage.removeItem('expirationTime');
          setTimeout(() => {
            setloading(false);
            localStorage.setItem('hasLoadedBefore', 'true');
            localStorage.setItem('expirationTime', currentTime + 30 * 60 * 1000);
          }, 4500); 
        }
    }

    useEffect(()=>{
        loadedPages();
        storyDataHandller();
    },[])
    
    return(
        <>
        {
            loading?
            <Loading />
            :
            <div>
                <div>
                    <Navbar/>
                </div>
                <div className="font-lalehar">
                    <Header1 />
                </div>
                <div className='Advertising-story-container pb-4'>
                    {
                        storyData.map(data=>(
                            <AdvertisingStory key={data._id} {...data}/>
                        ))
                    }
                </div>
                <div>
                    <BodyContainerSection />
                </div>
                <div className="Product-home-section-1">
                    <h2 data-aos="fade-left" className="font-lalehar text-center mb-4 pt-3">محصولات ما</h2>
                    <div className="display-flex-config flex-wrap">
                    {
                        productList.map(data =>(
                            <Product {...data}/>
                        ))
                    }
                    </div>
                </div>
                <div>
                    <ServicesProvided data ={productList}/>
                </div>
                <div>
                    <Body1/>
                </div>
                <div>
                    <Honors />
                </div>
                <div>
                    <SocialMedia />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        }
        </>
    )
}