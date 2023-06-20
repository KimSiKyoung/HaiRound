import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Routes, Route } from 'react-router-dom';
import { GrPrevious, GrNext } from 'react-icons/gr';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styless
import 'swiper/css';

const Ai = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <>
                        <div className='Hslide'>
                            <GrPrevious className='prev' /><p>효과 적용하기</p><GrNext className='next' />
                        </div>
                        <div className='ai'>얼굴 사진</div>
                        <Swiper
                            id='Aswiper1'
                            spaceBetween={10}
                            slidesPerView={5}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide id="Aslide1">All</SwiperSlide>
                            <SwiperSlide id="Aslide1">긴머리</SwiperSlide>
                            <SwiperSlide id="Aslide1">짧은머리</SwiperSlide>
                            <SwiperSlide id="Aslide1">커트</SwiperSlide>
                            <SwiperSlide id="Aslide1">염색</SwiperSlide>
                        </Swiper>
                        <div className='color'>
                            <Swiper
                                id='Aswiper1'
                                spaceBetween={40}
                                slidesPerView={5}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide id="Aslide2">color</SwiperSlide>
                                <SwiperSlide id="Aslide2">color</SwiperSlide>
                                <SwiperSlide id="Aslide2">color</SwiperSlide>
                                <SwiperSlide id="Aslide2">color</SwiperSlide>
                                <SwiperSlide id="Aslide2">color</SwiperSlide>
                                <SwiperSlide id="Aslide2">color</SwiperSlide>
                                <SwiperSlide id="Aslide2">color</SwiperSlide>
                            </Swiper>
                        </div>
                    </>
                } />
            </Routes>
        </>
    )
};

export default Ai;