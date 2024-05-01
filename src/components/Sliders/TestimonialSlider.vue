<script setup>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/outline";

</script>

<template>
  <div style="display: flex; align-items: center; gap: 20px">
    <div
      class="swiper-testimonial-prev"
      style="
        width: 60px;
        height: 60px;
        background-color: #08582d;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        cursor: pointer;
        flex-shrink: 0;
      "
    >
      <ArrowLeftIcon style="width: 24px; color: #fff" />
    </div>
    <Swiper
      :modules="[Navigation, Autoplay]"
      :loop="true"
      :autoplay="{
        delay: 2000,
      }"
      :speed="700"
      :navigation="{
        nextEl: '.swiper-testimonial-next',
        prevEl: '.swiper-testimonial-prev',
      }"
    >
      <SwiperSlide>
        <div style="max-width: 1024px; margin-left: auto; margin-right: auto">
          <div
            style="display: flex; justify-content: center; margin-bottom: 20px"
          >
            <img
              src="../../assets/images/HomePage/testimonial-one.png"
              alt="EcoSphere"
              style="border-radius: 999px; width: 120px"
            />
          </div>
          <div style="text-align: center; opacity: 0.5">
            EcoSphere has been my go-to resource for inspiration and practical
            tips on living sustainably. From eco-friendly recipes to community
            clean-up events, I've found endless ways to reduce my environmental
            footprint and make a positive impact. Thanks to EcoVibes, I feel
            empowered to contribute to a greener future!
          </div>
          <div
            style="
              text-align: center;
              font-weight: 500;
              font-size: 20px;
              margin-top: 20px;
            "
          >
            Kasun Weerasekara
          </div>
          <div style="text-align: center; font-weight: 500; opacity: 0.5">
            EcoSphere Member
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style="max-width: 1024px; margin-left: auto; margin-right: auto">
          <div
            style="display: flex; justify-content: center; margin-bottom: 20px"
          >
            <img
              src="../../assets/images/HomePage/testimonial-one.png"
              alt="EcoSphere"
              style="border-radius: 999px; width: 120px"
            />
          </div>
          <div style="text-align: center; opacity: 0.5">
            EcoSphere has been my go-to resource for inspiration and practical
            tips on living sustainably. From eco-friendly recipes to community
            clean-up events, I've found endless ways to reduce my environmental
            footprint and make a positive impact. Thanks to EcoVibes, I feel
            empowered to contribute to a greener future!
          </div>
          <div
            style="
              text-align: center;
              font-weight: 500;
              font-size: 20px;
              margin-top: 20px;
            "
          >
            Kasun Weerasekara
          </div>
          <div style="text-align: center; font-weight: 500; opacity: 0.5">
            EcoSphere Member
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div
      class="swiper-testimonial-next"
      style="
        width: 60px;
        height: 60px;
        background-color: #08582d;
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        cursor: pointer;
      "
    >
      <ArrowRightIcon style="width: 24px; color: #fff" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
</script>
