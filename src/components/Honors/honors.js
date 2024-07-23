import './honors.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img from '../../asset/img/homePageImages/Team/teamImg1.jpg';
import img1 from '../../asset/img/homePageImages/Team/teamImg2.jpg';
import img2 from '../../asset/img/homePageImages/Team/teamImg3.jpg';
import img3 from '../../asset/img/homePageImages/Team/teamImg4.jpg';
import img4 from '../../asset/img/homePageImages/Team/teamImg5.jpg';
import img5 from '../../asset/img/homePageImages/Team/teamImg6.jpg';


import video from '../../asset/video/FILE 2024-07-01 18:03:47.mp4'

// import required modules
import { Pagination } from 'swiper/modules';


export default function Honors(){
    const [preVideo , setpreVideo]=useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const videoRefs = useRef([]);

    const handlePlay = (index) => {
        setActiveIndex(index);
            videoRefs.current.forEach((video, i) => {
            if (video && i !== index) {
                video.pause();
            }
            });
    };

    const playVideo = ()=>{
         setpreVideo(true)
    }

    return(
        <div className='honors-body-style text-light'>
            <h3 data-aos="fade-left" className='font-lalehar text-center py-4'>نمایشگاه بین المللی ایران متافو</h3>
            <div className='mb-5'>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                  }}
                  modules={[Pagination]}
                  className="swiper2"
                >
                  <SwiperSlide><img src={img}/></SwiperSlide>
                  <SwiperSlide><img src={img1}/></SwiperSlide>
                  <SwiperSlide><img src={img2}/></SwiperSlide>
                  <SwiperSlide><img src={img3}/></SwiperSlide>
                  <SwiperSlide><img src={img4}/></SwiperSlide>
                  <SwiperSlide><img src={img5}/></SwiperSlide>
                </Swiper>
            </div>
            <div className='honors-video-section d-flex justify-content-center flex-wrap'>
                    <div data-aos="fade-left" className='text-center'>
                            <p className='font-lalehar'>
                               ویدیو نمایشگاه سال ۱۴۰۲
                            </p>
                            <video
                              ref={el => videoRefs.current[0] = el}
                              src={video}
                              onPlay={() => handlePlay(0)}
                              onClick={playVideo}
                              // poster={playIcon}
                              controls = {preVideo}
                            />
                    </div>
            </div>
        </div>
    )
}