import './honors.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img from '../../asset/img/container/stacked-waves-haikei.png';

import playIcon from '../../asset/img/playIcon/icon.jpg'

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
            <h3 data-aos="fade-left" className='font-lalehar text-center py-4'>افتخارات ما</h3>
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
                  <SwiperSlide><img src={img}/></SwiperSlide>
                  <SwiperSlide><img src={img}/></SwiperSlide>
                  <SwiperSlide><img src={img}/></SwiperSlide>
                  <SwiperSlide><img src={img}/></SwiperSlide>
                  <SwiperSlide><img src={img}/></SwiperSlide>
                </Swiper>
            </div>
            <div className='honors-video-section d-flex justify-content-center flex-wrap'>
                    <div data-aos="fade-left" className='text-center'>
                            <p className='font-lalehar'>
                                نمایشگاه سال ۱۳۹۹
                            </p>
                            <video
                              ref={el => videoRefs.current[0] = el}
                              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                              onPlay={() => handlePlay(0)}
                              onClick={playVideo}
                              poster={playIcon}
                              controls = {preVideo}
                            />
                    </div>
                    <div data-aos="fade-left" className='text-center'>
                            <p className='font-lalehar'>
                                نمایشگاه سال ۱۴۰۰
                            </p>
                            <video
                              ref={el => videoRefs.current[1] = el}
                              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                              onPlay={() => handlePlay(1)}
                              onClick={playVideo}
                              poster={playIcon}
                              controls = {preVideo} 
                            />
                    </div>
                    <div data-aos="fade-left" className='text-center'>
                            <p className='font-lalehar'>
                                نمایشگاه سال ۱۴۰۱
                            </p>
                            <video
                              ref={el => videoRefs.current[2] = el}
                              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                              onPlay={() => handlePlay(2)}
                              onClick={playVideo}
                              poster={playIcon}
                              controls = {preVideo}
                            />
                    </div>
            </div>
        </div>
    )
}