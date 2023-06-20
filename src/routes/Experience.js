import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Routes, Route } from 'react-router-dom';
import { GrPrevious } from 'react-icons/gr';
import { AiOutlineDown } from 'react-icons/ai';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styless
import 'swiper/css';

/* 레이아웃 */
import Row from 'react-bootstrap/Row';

const Experience = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <>
                        <div className='Eslide'>
                            <GrPrevious className='Eprev' />
                            <p>체험단</p>
                        </div>
                        <Swiper
                            id='Eswiper1'
                            spaceBetween={10}
                            slidesPerView={5}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide id="Eslide1"><span>전체</span><AiOutlineDown /></SwiperSlide>
                            <SwiperSlide id="Eslide1">지역</SwiperSlide>
                        </Swiper>
                        <Row className='Ebox Ebox1'>
                            <div className='Ebox_img'>
                                <p>이미지</p>
                                <p>이미지</p>
                            </div>
                            <div className='Ebox_content'>
                                <p>5일 남음<br />[지역] 미용실 이름<br />헤어 스타일</p>
                                <p>5일 남음<br />[지역] 미용실 이름<br />헤어 스타일</p>
                            </div>
                        </Row>
                        <Row className='Ebox'>
                            <div className='Ebox_img'>
                                <p>이미지</p>
                                <p>이미지</p>
                            </div>
                            <div className='Ebox_content'>
                                <p>5일 남음<br />[지역] 미용실 이름<br />헤어 스타일</p>
                                <p>5일 남음<br />[지역] 미용실 이름<br />헤어 스타일</p>
                            </div>
                        </Row>
                        <Row className='Ebox'>
                            <div className='Ebox_img'>
                                <p>이미지</p>
                                <p>이미지</p>
                            </div>
                            <div className='Ebox_content'>
                                <p>5일 남음<br />[지역] 미용실 이름<br />헤어 스타일</p>
                                <p>5일 남음<br />[지역] 미용실 이름<br />헤어 스타일</p>
                            </div>
                        </Row>
                    </>
                } />
            </Routes>
        </>
    )
};

export default Experience;