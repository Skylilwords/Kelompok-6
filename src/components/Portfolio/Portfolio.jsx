import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Dekor from "../../img/dekor.jpeg";
import Musik from "../../img/musik.png";
import Mua from "../../img/mua.jpeg";
import Catering from "../../img/catering.jpeg";
import Fotografer from "../../img/fotografer.jpeg";
import Host from "../../img/host.jpeg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portofolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Dekor} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Musik} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Catering} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mua} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fotografer} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Host} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
