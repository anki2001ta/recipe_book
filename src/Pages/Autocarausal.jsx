import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Crausal.css"

import { Autoplay} from "swiper";
import { Box } from '@chakra-ui/react'
export default function Autocrausel() {
  return (
    <Box mt={"3px"}>
      <Swiper
     
     
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          
        }}
        
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
            <img style={{height:"550px"}} src="https://www.outlookindia.com/traveller/wp-content/uploads/2018/02/Punjabi1_FI.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
        <img style={{height:"550px"}} src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2022/1/11/north-indian-cuisine.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
        <img style={{height:"550px"}} src="https://travelfoodatlas.com/wp-content/uploads/2020/08/indian-food.jpg"></img> </SwiperSlide>
        <SwiperSlide>
        <img style={{height:"550px"}} src="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
        <img style={{height:"550px"}} src="https://www.onmanorama.com/content/dam/mm/en/food/features/images/2022/1/11/north-indian-cuisine.jpg.transform/845x440/image.jpg"></img>
        </SwiperSlide>
       
      </Swiper>
    </Box>
  );
}
