import{Col} from 'react-bootstrap'
import './body1.css'
import img from '../../asset/img/Logo/imgLogo.jpg'
import ownerImg from '../../asset/img/homePageImages/ownerImg/ownerImg.jpg'
import aboutUsImg from '../../asset/img/homePageImages/aboutUsImage/backgroundImg.jpg'
import teamImg from '../../asset/img/homePageImages/aboutUsImage/aboutUs.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip, Pagination, Navigation } from 'swiper/modules';



export default function Body1(){
    return(
            <div className='body1-container d-md-flex font-lalehar'>
                <Col md={'6'} className=' display-flex-config-column p-3 text-center'>
                    <h2 data-aos="fade-left">
                        درباره ما
                    </h2>
                    <img data-aos="zoom-in" className='about-us-image' src={aboutUsImg}/>
                    <p data-aos="fade-left" className='text-center mt-3 body1-about-us-p'>
                      شرکت گسترش آلیاژ تندیس با هدف ایجاد یک فضای رقابتی جهت بهبود و گسترش روابط تجاری داخلی و بازرگانی خارجی و همچنین با توجه به لزوم دسترسی مصرف
                      کنندگان و تولیدکنندگان به مواد اولیه با کیفیت و قیمت مطلوب تاسیس گردید. 
                      این شرکت به عنوان یکی از پیشتازان در عرصه تامین مواد اولیه صنایع مذکور با تکیه بر دانش فنی ،تجربه و عملکرد درخشان و متفاوت توانسته است گام مهمی در اعتلای اهداف بلند مدت خود بردارد و در ۲۰ سال گذشته با در اختیار داشتن تولید کنندگان مطرح متخصصین و کارشناسان با تجربه در زمینه تجارت و تامین مواد اولیه صنایع ریخته گری چدن و فولاد، ریخته گری دقیق و ... باعث کسب اعتبار و رضایتمندی مشتریان به عنوان متولی صنایع تخصصی و مادر در میهن عزیزمان باشد. 
                      فعالیت اصلی ما تامین محصولات شامل انواع مواد اولیه مورد استفاده در صنایع ریخته گری فولاد، چدن و آلومینیوم، ریخته گری دقیق لعاب و سرامیک نسوز و دیر گداز و سایر محصولات مرتبط می باشد.
                      شرکت گسترش آلیاژ تندیس با افتخار جهت رفاه حال مشتریان محترم با استفاده از روشهای نوین در بازرگانی به عنوان وارد کننده و تامین کننده مواد اولیه و سایر ملزومات مورد استفاده در صنایع مذکور همواره سعی در ارائه خدمات و محصولات با كيفيت بالا و قیمت قابل رقابت در میان سایر رقبا و شرکتها با زمینه فعالیت مشابه
                          دارد
                    </p>
                </Col>
                <Col md={'6'} className=' display-flex-config-column  p-3 text-center'>
                    <h2 data-aos="zoom-in">
                        تیم ما
                    </h2>
                    <div className='mt-3' data-aos="flip-left">
                    <Swiper
                      effect={'flip'}
                      grabCursor={true}
                      pagination={true}
                      navigation={true}
                      modules={[EffectFlip, Pagination, Navigation]}
                      className="swiper-personaliti-sectiopn"
                    >
                      <SwiperSlide>
                        <img src={ownerImg}/>
                        <h3 className='font-style fw-bold'>مدیر عامل</h3>
                        <span className='d-block mb-1'>امید شهسواری</span>
                        <p className='px-4'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={ownerImg}/>
                          <h3 className='font-style fw-bold'>تیم ما</h3>
                          <span className='d-block mb-1'>کارمندان</span>
                          <p className='px-4'>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                          </p>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </Col>
            </div>
    )
}