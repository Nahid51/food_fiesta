import React from 'react';
import Slider from "react-slick";
import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';
import ava04 from '../../../assets/images/ava-4.jpg';
import '../../../styles/testimonialSlider.css';

const TestimonialSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <p className="review_text">
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vel cumque placeat illo voluptate ullam, recusandae necessitatibus sed nemo nobis totam optio culpa unde repellat, nihil rerum. Optio, dolore expedita?"
                    </p>
                    <div className='slider_content d-flex align-items-center gap-3'>
                        <img src={ava01} alt="avatar" className='rounded' />
                        <h6>Jhon Deo</h6>
                    </div>
                </div>

                <div>
                    <p className="review_text">
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vel cumque placeat illo voluptate ullam, recusandae necessitatibus sed nemo nobis totam optio culpa unde repellat, nihil rerum. Optio, dolore expedita?"
                    </p>
                    <div className='slider_content d-flex align-items-center gap-3'>
                        <img src={ava02} alt="avatar" className='rounded' />
                        <h6>Mitchel Marsh</h6>
                    </div>
                </div>

                <div>
                    <p className="review_text">
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vel cumque placeat illo voluptate ullam, recusandae necessitatibus sed nemo nobis totam optio culpa unde repellat, nihil rerum. Optio, dolore expedita?"
                    </p>
                    <div className='slider_content d-flex align-items-center gap-3'>
                        <img src={ava03} alt="avatar" className='rounded' />
                        <h6>Steven Crock</h6>
                    </div>
                </div>

                <div>
                    <p className="review_text">
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vel cumque placeat illo voluptate ullam, recusandae necessitatibus sed nemo nobis totam optio culpa unde repellat, nihil rerum. Optio, dolore expedita?"
                    </p>
                    <div className='slider_content d-flex align-items-center gap-3'>
                        <img src={ava04} alt="avatar" className='rounded' />
                        <h6>William Carry</h6>
                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default TestimonialSlider;