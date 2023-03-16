import { EastOutlined, WestOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import "./Slider.scss";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1000",
        "https://images.pexels.com/photos/354957/pexels-photo-354957.jpeg?auto=compress&cs=tinysrgb&w=1000",
        "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev-1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev+1);
    }

    return (
        <div className='slider'>
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="data" />
                <img src={data[1]} alt="data" />
                <img src={data[2]} alt="data" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlined/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlined/>
                </div>
            </div>
        </div>
    )
}

export default Slider