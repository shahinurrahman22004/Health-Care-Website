import React from 'react';
import { Carousel } from 'react-bootstrap';

import img1 from '../../../images/banner/banner-1.jpg';
import img2 from '../../../images/banner/banner-2.jpg';
import img3 from '../../../images/banner/banner-3.jpg';

const Banner = () => {
    return (
        <div>
            <>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1} alt="First Slide"
                />
                <Carousel.Caption>
                    <h3 className="text-dark fw-bold">WE PROVIDE TOTAL</h3>
                    <h1 className="text-dark fw-bold">HEALTH CARE SOLUTION</h1>
                    <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <button className="btn btn-primary">READ MORE</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="text-dark fw-bold">WE PROVIDE TOTAL</h3>
                    <h1 className="text-dark fw-bold">HEALTH CARE SOLUTION</h1>
                    <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="btn btn-primary">READ MORE</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="text-dark fw-bold">WE PROVIDE TOTAL</h3>
                    <h1 className="text-dark fw-bold">HEALTH CARE SOLUTION</h1>
                    <p className="text-dark">
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    <button className="btn btn-primary">READ MORE</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
        </div>
    );
};

export default Banner;