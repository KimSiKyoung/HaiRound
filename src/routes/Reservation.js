import { FaStar, FaWifi, FaCarSide, FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Reservation = () => {
    return (
        <>
           <div className="Rwrap"> 
               <div className='top_img'>
                    <h2>헤어샵 이미지</h2>
                </div>
                <div className='mid'>
                    <h3>헤어샵 이름</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised </p>
                    <div className='mid_icon'>
                        <span><FaStar /> 5.0 </span>
                        <span><FaClock /> time </span>
                        <span><FaWifi /> wifi </span>
                        <span><FaCarSide /> parking </span>
                    </div>
    
                    <div className='CM'>
                        <div className='CMbox1'>
                            <span><FaPhoneAlt /> Call </span>
                        </div>
                        <div className='CMbox2'>
                            <span><FaMapMarkerAlt /> Map </span>
                        </div>
                    </div>
                    <div className='Rbox'>
                        <span>Reservation</span>
                    </div>
                </div>
           </div>
        </>
    )
};

export default Reservation;