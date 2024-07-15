import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Header.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';


export default function Header1() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="header-section-style"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          تامین مواد اولیه ریخته گری با بهترین قیمت 
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            شرکت ما با افتخار سالهای طولانی در خدمت تولید کنندگان و کارخانه داران بوده و در تامین مواد اولیه ریخته گری ، جز بهترین شرکت های حال حاضر کشور هستیم و بهترین خدمات مشاوره ای را به مشتریان خود  ارائه میدهیم ،
همچنین افتخار میکنیم که با بهترین هزینه و در کمترین زمان و بالاترین بهره وری در خدمت همه مشتریان خود بوده ایم و خواهیم بود .
گسترش آلیاژ تندیس با شما برای پیشرفت صنعت            
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          مشتری مداری
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              با ارزش ترین دارایی ما مشتری های ما هستند و ما همیشه در تلاشیم تا با ارائه بهترین خدمات به شما عزیزان و مخاطبان گرامی رضایت شما را جلب کنیم . 
              بی شک برای اینکه تجربه ای زیبا از همکاری با شرکت ما داشته باشید لحظه ای درنگ نخواهیم کرد و مشتری مداری از اصول اصلی شرکت گسترش آلیاژ تندیس است .
              سوابق ما گویای صحت تمام ادعا های ماست و افتخار ما این است که هیچگاه مشتری ناراضی نداشته ایم و نخواهیم داشت.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          سخنی با مشتریان
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              ما همیشه در تلاش بودیم تا مخاطب را به خواسته خویش برسانیم و تا به الان در این امر موفق بودیم ، 
              افرادی که طی سالیان سال با ما همکاری کرده اند رضایت کامل از خدمات ما داشته اند و با بهینه ترین حالت ممکن محصولات مورد نیاز خود را از ما تهیه کردند و این برای شرکت ما اعتباری بالا در بازار ساخت که امروزه با ادعا میگوییم جز بهترین ها هستیم .
              شما هم برای همکاری با ما فرصت را از دست ندهین تا شاهد پیشتازی شرکت ما نسبت به رقبا باشید .
            </p>
          </div>
          
        </SwiperSlide>
      </Swiper>
    </>
  );
}
