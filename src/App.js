import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';

/* 라우트 */
import Search from './routes/Search';
import Fsearch from './routes/Fsearch';
import Ai from './routes/Ai';
import Experience from './routes/Experience';
import Reservation from './routes/Reservation';

/* 레이아웃 */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* 컴포넌트 */
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* 헤더 */}
      <Header />
      {/* 컨텐츠 */}
      <Routes>
        <Route path='/' element={
          <>
            {/* 검색창 */}
            <Search />
            <div className='contents'>
              {/* 배너 */}
              <Banner />
              <Row>
                <Col className='box2'>
                  <div>이미지</div>
                  헤어컷
                </Col>
                <Col className='box2'>
                  <div>이미지</div>
                  펌
                </Col>
                <Col className='box2'>
                  <div>이미지</div>
                  염색
                </Col>
                <Col className='box2'>
                  <div>이미지</div>
                  클리닉
                </Col>
              </Row>
              <Row>
                <Col className='box3'>가까운 미용실 찾기</Col>
              </Row>
              <Row className='box4'>
                <p>특가할인</p>
                <div className='box4_img'>
                  <p>이미지</p>
                  <p>이미지</p>
                  <p>이미지</p>
                </div>
                <div className='box4_content'>
                  <p>**디자이너(별점)<br/>시술형태<br/>00,000원</p>
                  <p>**디자이너(별점)<br/>시술형태<br/>00,000원</p>
                  <p>**디자이너(별점)<br/>시술형태<br/>00,000원</p>
                </div>
              </Row>
              <Row className='box5'>
                <p>요즘뜨는 스타일</p>
                <div className='box5_imgs'>
                  <div className='box5_img1'>
                    <p>이미지</p>
                  </div>
                  <div className='box5_img2'>
                    <p>이미지</p>
                    <p>이미지</p>
                  </div>
                </div>
                <div className='box5_content'></div>
              </Row>
            </div>
          </>
        } />
        <Route path='/Fsearch' element={<Fsearch />} />
        <Route path='/Ai' element={<Ai />} />
        <Route path='/Experience' element={<Experience />} />
        <Route path='/Reservation' element={<Reservation />} />
      </Routes>
      {/* 푸터 */}
      <Footer />
    </div>
  );
}

export default App;
