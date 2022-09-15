import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { AzureMP } from 'react-azure-mp';


//images
// import trending from "../../../assets/images/trending/trending-label.png";
// import movie1 from "../../../assets/images/movies/01.jpg";
// import movie2 from "../../../assets/images/movies/01.jpg";
// import movie3 from "../../../assets/images/movies/01.jpg";
// import movie4 from "../../../assets/images/movies/01.jpg";
// import movie5 from "../../../assets/images/movies/01.jpg";
// import upcoming1 from "../../../assets/images/movies/07.jpg";
// import upcoming2 from "../../../assets/images/movies/07.jpg";
// import upcoming3 from "../../../assets/images/movies/07.jpg";
// import upcoming4 from "../../../assets/images/movies/07.jpg";
// import upcoming5 from "../../../assets/images/movies/07.jpg";

// install Swiper modules
SwiperCore.use([Navigation]);


const RTMPSTest = () => {
  return (
    <>
      <div className="video-container iq-main-slider">
           <AzureMP skin="amp-flush" className="video d-block" controls loop  
              options={
                { 
                  heuristicProfile: "HighQuality",
                  controls: true, 
                  autoplay: true,
                  width: 1280,
                  height: 720
                }}
        adaptRatio={[16, 9]}
        src={[{src: "https://streamlive-cdnblobapp-usea.streaming.media.azure.net/11539f72-2cb5-4f82-9a3c-27571eb1b30e/3e987a09-f04b-4131-8cf0-30def5652f5d.ism/manifest(format=m3u8-cmaf)", type: "application/vnd.ms-sstr+xml" }]}
      />
      </div>
      <div className="main-content movi">
        <section className="movie-detail container-fluid">
          <Row>
            <Col lg="12">
             <div className="trending-info g-border">
                <h1 className="trending-text big-title text-uppercase mt-0">
                 RTMPS Stream test
                </h1>
                </div>
                </Col>
                </Row>
              </section >
              </div>

    </>
  );
};
export default RTMPSTest;
