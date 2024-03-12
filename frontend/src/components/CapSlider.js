import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";


const ContentBlock = styled.div`
    padding: 10px;
    height: 300px;
    background-color: #9241eb;

`;


const Content = () =>{
    return(
        <ContentBlock>
            1
        </ContentBlock>
    )
}

const CapSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <button className="slick-prev">Previous</button>,
        nextArrow: <button className="slick-next">Next</button>
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Content/>
                </div>
                <div>
                    <Content/>
                </div>
                <div>
                    <Content/>
                </div>
            </Slider>
        </div>
    );
}

export default CapSlider;