import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import { AiOutlineHome, AiOutlineGift, AiOutlineMedium, AiOutlineCalendar } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Container>
                <Row className='footer'>
                    <Col>
                        <Link className='link' to='/'><AiOutlineHome /><br />홈</Link>
                    </Col>
                    <Col>
                        <Link className='link' to="/Fsearch"><FiSearch /><br />검색</Link>
                    </Col>
                    <Col>
                        <Link className='link' to='/Experience'><AiOutlineGift /><br />체험단</Link>
                    </Col>
                    <Col>
                        <Link className='link' to='/Ai'><AiOutlineMedium /><br />M스타일</Link>
                    </Col>
                    <Col>
                        <Link className='link' to='/Reservation'><AiOutlineCalendar /><br />예약</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Footer;