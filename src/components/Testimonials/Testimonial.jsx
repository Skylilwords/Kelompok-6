import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.png";
import profilePic3 from "../../img/profile3.png";
import profilePic4 from "../../img/profile4.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Sangat puas dengan layanan wedding organizer ini! Mereka sangat professional membantu, mengatur segala detail, dan acara pernikahan kami berjalan sempurna berkat bantuan mereka.",
    },
    {
      img: profilePic2,
      review:
        "WO ini luar biasa! Mereka sangat responsif terhadap kebutuhan kami, memiliki ide-ide kreatif, dan mengatur segalanya dengan baik. Terimakasih telah menjadi WO terbaik.",
    },
    {
      img: profilePic3,
      review:
        "Pilihan Terbaik! Dari dekorasi hingga management acara, mereka benar-benar memperhatikan setiap detail. Pernikahan kami berjalan lancar berkat kerjasama dan dedikasi mereka.",
    },
    {
      img: profilePic4,
      review:
        "Saya sangat senang bekerjasama dengan WO ini, mereka sangat terorganisir, membantu mengurangi stress persiapan pernikahan, dan hasilnya lebih dari yang saya harapkan.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--white)" }}></div>
      <div className="blur t-blur2" style={{ background: "white" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
