import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { AzureMP } from 'react-azure-mp';


//images
import trending from "../../../assets/images/trending/trending-label.png";
import movie1 from "../../../assets/images/movies/01.jpg";
import movie2 from "../../../assets/images/movies/01.jpg";
import movie3 from "../../../assets/images/movies/01.jpg";
import movie4 from "../../../assets/images/movies/01.jpg";
import movie5 from "../../../assets/images/movies/01.jpg";
import upcoming1 from "../../../assets/images/movies/07.jpg";
import upcoming2 from "../../../assets/images/movies/07.jpg";
import upcoming3 from "../../../assets/images/movies/07.jpg";
import upcoming4 from "../../../assets/images/movies/07.jpg";
import upcoming5 from "../../../assets/images/movies/07.jpg";
import videovid from "../../../assets/video/trailer.mp4";



// install Swiper modules
SwiperCore.use([Navigation]);


const AddMovie = () => {
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
        src={[{src: "https://cdn-edge.slzr.cloud/12d3d789-a6ec-4f0d-ae3f-6c8ffccc89f9/soundcity_1080p.ism/manifest", type: "application/vnd.ms-sstr+xml" }]}
      />
      </div>
        


      <div className="main-content movi">
        <section className="movie-detail container-fluid">
          <Row>
            <Col lg="12">
              <div className="trending-info g-border">
                <h1 className="trending-text big-title text-uppercase mt-0">
                  Sound City
                </h1>
                 
                <ul className="p-0 list-inline d-flex align-items-center movie-content">
                  <li className="text-white">Music</li>
                  <li className="text-white">Documentary</li>
                </ul>
                <div className="d-flex align-items-center text-white text-detail">
                  <span className="badge badge-secondary p-3">13+</span>
                  <span className="ml-3">3h 15m</span>
                  <span className="trending-year">2020</span>
                </div>
                <p className="trending-dec w-100 mb-0">
                  Sound City Studios was located in the San Fernando Valley,
                  amidst rows of dilapidated warehouses. The little-known
                  recording studio housed a rare analog Neve recording console
                  and had a reputation for recording drums. Artists such as
                  Nirvana, Kyuss, Red Hot Chili Peppers, Fleetwood Mac, Neil
                  Young, Rick Springfield, Tom Petty, Rage Against the Machine,
                  and Slipknot recorded groundbreaking music at the studio. In
                  1991 Nirvana recorded the album Nevermind at Sound City
                  Studios
                </p>
                <ul className="list-inline p-0 mt-4 share-icons music-play-lists">
                  <li>
                    <span>
                      <i className="ri-add-line"></i>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-heart-fill"></i>
                    </span>
                  </li>
                  <li className="share">
                    <span>
                      <i className="ri-share-fill"></i>
                    </span>
                    <div className="share-box">
                      <div className="d-flex align-items-center">
                        <Link to="#" className="share-ico">
                          <i className="ri-facebook-fill"></i>
                        </Link>
                        <Link to="#" className="share-ico">
                          <i className="ri-twitter-fill"></i>
                        </Link>
                        <Link to="#" className="share-ico">
                          <i className="ri-links-fill"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </section>
        <section id="iq-favorites" className="s-margin iq-rtl-direction">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                {/* <AzureMP skin="amp-flush" className="video d-block" controls loop  
                      options={
                        { 
                          heuristicProfile: "HighQuality",
                          controls: true, 
                          autoplay: true,
                          width: 1280,
                          height: 720
                        }}
                adaptRatio={[16, 9]}
                src={[{src: "../../../assets/video/trailer.mp4", type: "application/mp4" }]}
              />  */}

               

                      <div className="video-container iq-main-slider">
                              <video className="video d-block" controls loop>
                                <source
                                  src={videovid} type="video/mp4"
                                  />
                              </video> 


                            </div>


                  <h4 className="main-title">
                    <Link to="#">More Like This</Link>
                  </h4>
                </div>
                <div id="favorites-contens">
                  <div id="prev1" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next1" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={{
                      prevEl: "#prev1",
                      nextEl: "#next1",
                    }}
                    loop={true}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      550: { slidesPerView: 2 },
                      991: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                    }}
                    className="list-inline favorites-slider row p-0 m-0"
                  >
                    <SwiperSlide className="slide-item">
                      <div className="block-images1 block-images position-relative">
                        <div className="img-box">
                          <img src={movie1} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="#">The Lost Journey</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              20+
                            </div>
                            <span className="text-white">2h 15m</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i
                                className="fa fa-play mr-1"
                                aria-hidden="true"
                              ></i>
                              Play Now
                            </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li className="share">
                              <span>
                                <i className="ri-share-fill"></i>
                              </span>
                              <div className="share-box">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-facebook-fill"></i>
                                  </Link>
                                  <Link
                                    to="https://twitter.com/intent/tweet?text=Currentlyreading"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-twitter-fill"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    className="share-ico iq-copy-link"
                                    tabIndex="0"
                                  >
                                    <i className="ri-links-fill"></i>
                                  </Link>
                                </div>
                              </div>
                            </li>
                            <li>
                              <span>
                                <i className="ri-heart-fill"></i>
                              </span>
                              <span className="count-box">19+</span>
                            </li>
                            <li>
                              <span>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className=" block-images position-relative">
                        <div className="img-box">
                          <img src={movie2} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="#">Boop Bitty</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              11+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i
                                className="fa fa-play mr-1"
                                aria-hidden="true"
                              ></i>
                              Play Now
                            </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li className="share">
                              <span>
                                <i className="ri-share-fill"></i>
                              </span>
                              <div className="share-box">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-facebook-fill"></i>
                                  </Link>
                                  <Link
                                    to="https://twitter.com/intent/tweet?text=Currentlyreading"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-twitter-fill"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    className="share-ico iq-copy-link"
                                    tabIndex="0"
                                  >
                                    <i className="ri-links-fill"></i>
                                  </Link>
                                </div>
                              </div>
                            </li>
                            <li>
                              <span>
                                <i className="ri-heart-fill"></i>
                              </span>
                              <span className="count-box">19+</span>
                            </li>
                            <li>
                              <span>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className=" block-images position-relative">
                        <div className="img-box">
                          <img src={movie3} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="#">Unknown Land</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              17+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i
                                className="fa fa-play mr-1"
                                aria-hidden="true"
                              ></i>
                              Play Now
                            </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li className="share">
                              <span>
                                <i className="ri-share-fill"></i>
                              </span>
                              <div className="share-box">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-facebook-fill"></i>
                                  </Link>
                                  <Link
                                    to="https://twitter.com/intent/tweet?text=Currentlyreading"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-twitter-fill"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    className="share-ico iq-copy-link"
                                    tabIndex="0"
                                  >
                                    <i className="ri-links-fill"></i>
                                  </Link>
                                </div>
                              </div>
                            </li>
                            <li>
                              <span>
                                <i className="ri-heart-fill"></i>
                              </span>
                              <span className="count-box">19+</span>
                            </li>
                            <li>
                              <span>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className=" block-images position-relative">
                        <div className="img-box">
                          <img src={movie4} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="#">Blood Block</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              13+
                            </div>
                            <span className="text-white">2h 40m</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i
                                className="fa fa-play mr-1"
                                aria-hidden="true"
                              ></i>
                              Play Now
                            </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li className="share">
                              <span>
                                <i className="ri-share-fill"></i>
                              </span>
                              <div className="share-box">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-facebook-fill"></i>
                                  </Link>
                                  <Link
                                    to="https://twitter.com/intent/tweet?text=Currentlyreading"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-twitter-fill"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    className="share-ico iq-copy-link"
                                    tabIndex="0"
                                  >
                                    <i className="ri-links-fill"></i>
                                  </Link>
                                </div>
                              </div>
                            </li>
                            <li>
                              <span>
                                <i className="ri-heart-fill"></i>
                              </span>
                              <span className="count-box">19+</span>
                            </li>
                            <li>
                              <span>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className=" block-images position-relative">
                        <div className="img-box">
                          <img src={movie5} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="#">Champions</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              13+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i
                                className="fa fa-play mr-1"
                                aria-hidden="true"
                              ></i>
                              Play Now
                            </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li className="share">
                              <span>
                                <i className="ri-share-fill"></i>
                              </span>
                              <div className="share-box">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-facebook-fill"></i>
                                  </Link>
                                  <Link
                                    to="https://twitter.com/intent/tweet?text=Currentlyreading"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-twitter-fill"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    className="share-ico iq-copy-link"
                                    tabIndex="0"
                                  >
                                    <i className="ri-links-fill"></i>
                                  </Link>
                                </div>
                              </div>
                            </li>
                            <li>
                              <span>
                                <i className="ri-heart-fill"></i>
                              </span>
                              <span className="count-box">19+</span>
                            </li>
                            <li>
                              <span>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="iq-upcoming-movie" className="iq-rtl-direction">
          <Container fluid>
            <Row>
              <Col sm="12" className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="main-title">
                    <Link to="#">Upcoming Movies</Link>
                  </h4>
                </div>
                <div id="upcoming-contens">
                  <div id="prev2" className="swiper-button swiper-button-prev">
                    <i className="fa fa-chevron-left"></i>
                  </div>
                  <div id="next2" className="swiper-button swiper-button-next">
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={{
                      prevEl: "#prev2",
                      nextEl: "#next2",
                    }}
                    loop={true}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      550: { slidesPerView: 2 },
                      991: { slidesPerView: 3 },
                      1400: { slidesPerView: 4 },
                    }}
                    className="favorites-slider list-inline  row p-0 m-0"
                  >
                    <SwiperSlide className="slide-item">
                      <div className="block-images1 block-images position-relative">
                        <div className="img-box">
                          <img src={upcoming1} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="#">The Last Breath</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              5+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i
                                className="fa fa-play mr-1"
                                aria-hidden="true"
                              ></i>
                              Play Now
                            </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li className="share">
                              <span>
                                <i className="ri-share-fill"></i>
                              </span>
                              <div className="share-box">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-facebook-fill"></i>
                                  </Link>
                                  <Link
                                    to="https://twitter.com/intent/tweet?text=Currentlyreading"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-twitter-fill"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    className="share-ico iq-copy-link"
                                    tabIndex="0"
                                  >
                                    <i className="ri-links-fill"></i>
                                  </Link>
                                </div>
                              </div>
                            </li>
                            <li>
                              <span>
                                <i className="ri-heart-fill"></i>
                              </span>
                              <span className="count-box">19+</span>
                            </li>
                            <li>
                              <span>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={upcoming2} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="#">Last Night</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              22+
                            </div>
                            <span className="text-white">2h 15m</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i
                                className="fa fa-play mr-1"
                                aria-hidden="true"
                              ></i>
                              Play Now
                            </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li className="share">
                              <span>
                                <i className="ri-share-fill"></i>
                              </span>
                              <div className="share-box">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-facebook-fill"></i>
                                  </Link>
                                  <Link
                                    to="https://twitter.com/intent/tweet?text=Currentlyreading"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-twitter-fill"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    className="share-ico iq-copy-link"
                                    tabIndex="0"
                                  >
                                    <i className="ri-links-fill"></i>
                                  </Link>
                                </div>
                              </div>
                            </li>
                            <li>
                              <span>
                                <i className="ri-heart-fill"></i>
                              </span>
                              <span className="count-box">19+</span>
                            </li>
                            <li>
                              <span>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={upcoming3} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="#">1980</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              25+
                            </div>
                            <span className="text-white">3h</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i
                                className="fa fa-play mr-1"
                                aria-hidden="true"
                              ></i>
                              Play Now
                            </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li className="share">
                              <span>
                                <i className="ri-share-fill"></i>
                              </span>
                              <div className="share-box">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-facebook-fill"></i>
                                  </Link>
                                  <Link
                                    to="https://twitter.com/intent/tweet?text=Currentlyreading"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-twitter-fill"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    className="share-ico iq-copy-link"
                                    tabIndex="0"
                                  >
                                    <i className="ri-links-fill"></i>
                                  </Link>
                                </div>
                              </div>
                            </li>
                            <li>
                              <span>
                                <i className="ri-heart-fill"></i>
                              </span>
                              <span className="count-box">19+</span>
                            </li>
                            <li>
                              <span>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={upcoming4} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="#">Looters</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              11+
                            </div>
                            <span className="text-white">2h 45m</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i
                                className="fa fa-play mr-1"
                                aria-hidden="true"
                              ></i>
                              Play Now
                            </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li className="share">
                              <span>
                                <i className="ri-share-fill"></i>
                              </span>
                              <div className="share-box">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-facebook-fill"></i>
                                  </Link>
                                  <Link
                                    to="https://twitter.com/intent/tweet?text=Currentlyreading"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-twitter-fill"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    className="share-ico iq-copy-link"
                                    tabIndex="0"
                                  >
                                    <i className="ri-links-fill"></i>
                                  </Link>
                                </div>
                              </div>
                            </li>
                            <li>
                              <span>
                                <i className="ri-heart-fill"></i>
                              </span>
                              <span className="count-box">19+</span>
                            </li>
                            <li>
                              <span>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img src={upcoming5} className="img-fluid" alt="" />
                        </div>
                        <div className="block-description">
                          <h6 className="iq-title">
                            <Link to="#">Vugotronic</Link>
                          </h6>
                          <div className="movie-time d-flex align-items-center my-2">
                            <div className="badge badge-secondary p-1 mr-2">
                              9+
                            </div>
                            <span className="text-white">2h 30m</span>
                          </div>
                          <div className="hover-buttons">
                            <span className="btn btn-hover">
                              <i
                                className="fa fa-play mr-1"
                                aria-hidden="true"
                              ></i>
                              Play Now
                            </span>
                          </div>
                        </div>
                        <div className="block-social-info">
                          <ul className="list-inline p-0 m-0 music-play-lists">
                            <li className="share">
                              <span>
                                <i className="ri-share-fill"></i>
                              </span>
                              <div className="share-box">
                                <div className="d-flex align-items-center">
                                  <Link
                                    to="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-facebook-fill"></i>
                                  </Link>
                                  <Link
                                    to="https://twitter.com/intent/tweet?text=Currentlyreading"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-ico"
                                    tabIndex="0"
                                  >
                                    <i className="ri-twitter-fill"></i>
                                  </Link>
                                  <Link
                                    to="#"
                                    data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                    className="share-ico iq-copy-link"
                                    tabIndex="0"
                                  >
                                    <i className="ri-links-fill"></i>
                                  </Link>
                                </div>
                              </div>
                            </li>
                            <li>
                              <span>
                                <i className="ri-heart-fill"></i>
                              </span>
                              <span className="count-box">19+</span>
                            </li>
                            <li>
                              <span>
                                <i className="ri-add-line"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};
export default AddMovie;
