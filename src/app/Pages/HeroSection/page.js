// Your Slider component

"use client";

import { Carousel } from "react-bootstrap";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <Carousel style={{ marginTop: "20%"}} >
      <Carousel.Item interval={3000}>
        <div className="d-flex align-items-center justify-content-center">
          <Image
            src="/b1.png"
            alt="background"
            width={1920}
            height={1080}
            layout="fixed"
            className="object-fit-contain"
          />
        </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="d-flex align-items-center justify-content-center">
          <Image src="/b2.png" alt="bg" width={1920}
            height={1080} className="object-fit-contain" />
        </div>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex align-items-center justify-content-center">
          <Image src="/b3.png" alt="bg" width={1920}
            height={1080} className="object-fit-contain" />
        </div>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="d-flex align-items-center justify-content-center">
          <Image src="/b4.png" alt="bg" width={1920}
            height={1080} className="object-fit-contain" />
        </div>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
