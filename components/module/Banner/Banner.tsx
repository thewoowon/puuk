import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "@styles/banner-swiper.css";
import styled from "@emotion/styled";
import { PaginationOptions } from "swiper/types";
import { Banner1 } from "./assets";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<div class="' + className + '"></div>';
    },
  };

  const handleClick = () => {
    router.push("/story");
  };
  return (
    <Container>
      <StyledSwiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
      >
        <StyledSwiperSlide onClick={handleClick}>
          <Banner1 />
        </StyledSwiperSlide>
        <StyledSwiperSlide onClick={handleClick}>
          <Banner1 />
        </StyledSwiperSlide>
        <StyledSwiperSlide onClick={handleClick}>
          <Banner1 />
        </StyledSwiperSlide>
      </StyledSwiper>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0 16px;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 275px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .swiper-wrapper {
    height: fit-content;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
