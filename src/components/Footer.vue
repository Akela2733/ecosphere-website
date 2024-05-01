<script setup>
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/vue/24/solid";

// imports goes here
</script>

<template>
  <div class="container" style="margin-bottom: -140px">
    <div
      class="sub-section-bg"
      style="
        padding: 4rem;
        border-radius: 2rem;
        position: relative;
        overflow: clip;
      "
    >
      <div
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000;
          opacity: 0.5;
        "
      />
      <div style="position: relative">
        <div style="max-width: 768px; margin-left: auto; margin-right: auto">
          <div
            style="
              margin-bottom: 10px;
              letter-spacing: 5px;
              font-weight: 500;
              text-transform: uppercase;
              color: #0cb058;
              font-size: 1.125rem;
              line-height: 1.75rem;
              text-align: center;
            "
          >
            forum
          </div>
          <div
            style="
              font-weight: 700;
              font-size: 2.5rem;
              line-height: 1;
              color: #fff;
              text-align: center;
            "
          >
            Give us your feedback
          </div>
          <div
            style="
              color: #fff;
              margin-top: 12px;
              opacity: 0.5;
              text-align: center;
            "
          >
            Whether you have suggestions for new sustainability initiatives, or
            simply want to share your experience with EcoSphere, we'd love to
            hear from you. Together, we can continue to grow and evolve as a
            community dedicated to making a positive impact on our planet.
          </div>
        </div>
        <div style="display: flex; justify-content: center; margin-top: 30px">
          <router-link to="/forum">
            <div class="solid-button">Send feedback</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div style="background-color: #08582d">
    <div class="container" style="padding-top: 220px; padding-bottom: 5rem">
      <div
        style="display: grid; grid-template-columns: repeat(5, minmax(0, 1fr))"
      >
        <div style="grid-column: span 3 / span 3">
          <router-link to="/">
            <div
              class=""
              style="
                font-size: 3rem;
                line-height: 2.25rem;
                color: #fff;
                font-weight: 400;
                font-style: normal;
                font-family: 'Abril Fatface', serif;
              "
            >
              EcoSphere
            </div>
          </router-link>
          <div
            style="
              opacity: 0.5;
              margin-top: 25px;
              color: #fff;
              padding-right: 6rem;
            "
          >
            our Guide to Sustainable Living! Immerse yourself in a world of
            eco-friendly possibilities as we embark on a journey towards a
            greener future. Our vibrant community is dedicated to sharing
            knowledge, inspiration, and practical tips for embracing
            sustainability in every aspect of life.
          </div>
          <div style="margin-top: 40px">
            <div style="display: flex; gap: 10px">
              <div>
                <PhoneIcon style="width: 20px; color: #fff" />
              </div>
              <div style="color: #fff">+94 71 12 34 567</div>
            </div>

            <div style="display: flex; gap: 10px; margin-top: 20px">
              <div>
                <PhoneIcon style="width: 20px; color: #fff" />
              </div>
              <div style="color: #fff">+94 71 12 34 567</div>
            </div>

            <div style="display: flex; gap: 10px; margin-top: 20px">
              <div>
                <EnvelopeIcon style="width: 20px; color: #fff" />
              </div>
              <div style="color: #fff">test@test.com</div>
            </div>

            <div style="display: flex; gap: 10px; margin-top: 20px">
              <div>
                <MapPinIcon style="width: 20px; color: #fff" />
              </div>
              <div style="color: #fff">11/A, Colombo street, Colombo 03000</div>
            </div>
          </div>
        </div>
        <div>
          <div style="color: #fff; font-weight: 500; font-size: 20px">
            Sitemap
          </div>
          <router-link to="/">
            <div style="margin-top: 20px; color: #fff">Home</div>
          </router-link>
          <router-link to="/about">
            <div style="margin-top: 20px; color: #fff">About</div>
          </router-link>
          <router-link to="/issues-and-solutions">
            <div style="margin-top: 20px; color: #fff">Issues & Solutions</div>
          </router-link>
          <router-link to="/forum">
            <div style="margin-top: 20px; color: #fff">Forum</div>
          </router-link>
          <router-link to="/contact">
            <div style="margin-top: 20px; color: #fff">Contact</div>
          </router-link>
        </div>
        <div>
          <div style="color: #fff; font-weight: 500; font-size: 20px">
            Legal
          </div>
          <div style="margin-top: 20px; color: #fff">Terms of service</div>
          <div style="margin-top: 20px; color: #fff">Privacy polivy</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        style="
          border-top: 1px solid #ffffff27;
          padding: 10px 0px;
          font-size: 12px;
          color: white;
        "
      >
        All right reserved 2024. Designed & Developed by Sakuni Akela
      </div>
    </div>
  </div>
</template>
