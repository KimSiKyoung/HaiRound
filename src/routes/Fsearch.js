import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Routes, Route } from 'react-router-dom';
import { AiOutlineDown } from 'react-icons/ai';
import { FaStar } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styless
import 'swiper/css';

/* 라우트 */
import Search from './Search';


const Fsearch = () => {
    return (
        <>
            {/* 컨텐츠 */}
            <Routes>
                <Route path='/' element={
                    <>
                        {/* 검색창 */}
                        <Search />
                        <Swiper
                            id='swiper1'
                            spaceBetween={10}
                            slidesPerView={4} 
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide id="slide1"><span>전체</span><AiOutlineDown/></SwiperSlide>
                            <SwiperSlide id="slide1">타임세일</SwiperSlide>
                            <SwiperSlide id="slide1">1인샵</SwiperSlide>
                            <SwiperSlide id="slide1">바버샵</SwiperSlide>
                            <SwiperSlide id="slide1">헤어샵</SwiperSlide>
                        </Swiper>

                        <Swiper
                            id='swiper2'
                            spaceBetween={40}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide id="slide2">미용실 이미지</SwiperSlide>
                            <br/>
                            <p>ooo 미용실</p>
                            <p><FaStar />&nbsp;5.0 | 10:30 ~ 20:30</p>
                            <SwiperSlide id="slide2">미용실 이미지</SwiperSlide>
                        </Swiper>

                        <Swiper
                            id='swiper3'
                            spaceBetween={40}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide id="slide3">미용실 이미지</SwiperSlide>
                            <br/>
                            <p>ooo 미용실</p>
                            <p><FaStar />&nbsp;5.0 | 10:30 ~ 20:30</p>
                            <SwiperSlide id="slide3">미용실 이미지</SwiperSlide>
                        </Swiper>
                    </>
                } />
            </Routes>
        </>
    )
};

export default Fsearch;