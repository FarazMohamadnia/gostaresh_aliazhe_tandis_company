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
                          <img src={teamImg}/>
                          <h3 className='font-style fw-bold'>تیم ما</h3>
                          <p className='px-4'>
                            به حق که با ارزشترین سرمایه ی هر مجموعه ای منابع انسانی آن است.
                            مفتخریم که از این حیث ثروتمند ترین هستیم.
                            شرکت گسترش آلیاژ تندیس در طول سالها درخشش خود در زمینه تامین مواد اولیه صنایع با در اختیار داشتن متخصص ترین و محبوب ترین همکاران توانسته سهم بسزایی ازگستره بازار صنایع ریخته گری، سرامیک و نسوز را بخود اختصاص دهد.
                            خانواده ما متشکل از مدیر عامل ، اعضای هیئت مدیره، بازرگانی خارجی و داخلی، بازاریابی و مهندسی فروش ، امور مالی، مشاوره و تحقیقات ، امور اداری، خدمات انبار و حمل و نقل آماده ارائه خدمات درخود تحسین به صنایع به عنوان منابع ارزشمند رشد و تعالی میهن عزیزمان می باشد.
                            در دنیای پیشرفت و تحقق اهداف ، واژه تیم همچون چراغی فروزان روشنی بخش راه دست اندرکاران صنعت است.
                            در خانواده نیرومند گسترش آلیاژ تندیس با شعار رسیدن به اهداف چند ذهن بهتر از یک ذهن عمل خواهد کرد همواره ایده ها و تخصص هایمان را با طعم صمیمیت به اشتراک خواهیم گذاشت .
                            بدیهیست که این مهم به پیشرفت ما و اعتلای نام گسترش آلیاژ تندیس کمک خواهد کرد .
                          </p>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </Col>
            </div>
    )
}