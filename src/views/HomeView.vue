<script setup>
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  InformationCircleIcon,
} from "@heroicons/vue/24/outline";
import TestimonialSlider from "../components/Sliders/TestimonialSlider.vue";
</script>

<template>
  <main>
    <div class="heroBg" style="height: 100dvh">
      <div class="container" style="height: 100%; position: relative">
        <div style="height: 100%; display: flex; width: 100%">
          <div
            style="display: flex; justify-content: space-between; width: 100%"
          >
            <div style="display: flex; align-items: center">
              <div>
                <div
                  style="
                    margin-bottom: 20px;
                    letter-spacing: 5px;
                    font-weight: 500;
                    text-transform: uppercase;
                    color: #08582d;
                    font-size: 1.125rem;
                    line-height: 1.75rem;
                  "
                >
                  SUSTAINABLE LIVING
                </div>
                <div style="font-weight: 700; font-size: 3rem; line-height: 1">
                  Welcome to EcoSphere
                </div>
                <div
                  style="
                    margin-top: 10px;
                    font-size: 1.875rem;
                    line-height: 2.25rem;
                  "
                >
                  Your Guide to Sustainable Living!
                </div>
                <div style="max-width: 768px; margin-top: 20px; opacity: 0.5">
                  our Guide to Sustainable Living! Immerse yourself in a world
                  of eco-friendly possibilities as we embark on a journey
                  towards a greener future. Our vibrant community is dedicated
                  to sharing knowledge, inspiration, and practical tips for
                  embracing sustainability in every aspect of life.
                </div>
                <div style="margin-top: 30px">
                  <div style="gap: 10px; display: flex">
                    <router-link to="/about">
                      <div class="ghost-button">Learn more</div>
                    </router-link>
                    <a href="#explore-tips">
                      <div class="solid-button">Explore tips</div>
                    </a>
                  </div>
                </div>
                <div style="bottom: 40px; position: absolute">
                  <div>
                    <div style="gap: 4px; display: flex">
                      <div>
                        <InformationCircleIcon
                          style="
                            width: 18px;
                            stroke: currentColor;
                            stroke-width: 2px;
                          "
                        />
                      </div>
                      <div
                        style="
                          font-weight: 600;
                          font-size: 0.875rem;
                          line-height: 1.25rem;
                        "
                      >
                        Tip of the day
                      </div>
                    </div>
                    <div
                      style="
                        margin-top: 2px;
                        max-width: 400px;
                        opacity: 0.5;
                        font-size: 0.875rem;
                        line-height: 1.25rem;
                      "
                    >
                      Say No to On-The-Go Plastics
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="align-items: end; justify-content: end; display: flex">
              <img
                src="../assets/images/HomePage/heroElement.png"
                alt="EcoSphere"
                style="width: 550px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="container">
        <div>
          <div
            style="
              padding-top: 5rem;
              padding-bottom: 5rem;
              font-size: 1.875rem;
              line-height: 2.25rem;
              text-align: center;
              color: #08582d;
              font-weight: 500;
            "
          >
            Embrace renewable energy, minimize waste, and prioritize ethical
            consumption: our eco-conscious principles for a brighter future.
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div>
          <div style="padding-bottom: 5rem">
            <div
              style="
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 3rem;
              "
            >
              <div>
                <img
                  src="../assets/images/HomePage/about.jpg"
                  alt="EcoSphere"
                  style="width: 100%; border-radius: 20px"
                />
              </div>
              <div style="display: flex; align-items: center">
                <div>
                  <div
                    style="
                      margin-bottom: 10px;
                      letter-spacing: 5px;
                      font-weight: 500;
                      text-transform: uppercase;
                      color: #08582d;
                      font-size: 1.125rem;
                      line-height: 1.75rem;
                    "
                  >
                    about us
                  </div>
                  <div
                    style="font-weight: 700; font-size: 2.5rem; line-height: 1"
                  >
                    Our EcoSphere vision
                  </div>
                  <div style="margin-top: 12px; opacity: 0.5">
                    our Guide to Sustainable Living! Immerse yourself in a world
                    of eco-friendly possibilities as we embark on a journey
                    towards a greener future. Our vibrant community is dedicated
                    to sharing knowledge, inspiration, and practical tips for
                    embracing sustainability in every aspect of life.
                  </div>
                  <div style="margin-top: 10px; opacity: 0.5">
                    our Guide to Sustainable Living! Immerse yourself in a world
                    of eco-friendly possibilities as we embark on a journey
                    towards a greener future. Our vibrant community is dedicated
                    to sharing knowledge, inspiration, and practical tips for
                    embracing sustainability in every aspect of life.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div style="position: relative; top: -70px" id="explore-tips" />
    <section>
      <div style="background-color: #08582d">
        <div class="container" style="padding-bottom: 5rem; padding-top: 5rem">
          <div style="margin-bottom: 2.5rem">
            <div
              style="
                margin-bottom: 10px;
                letter-spacing: 5px;
                font-weight: 500;
                text-transform: uppercase;
                color: #0cb058;
                font-size: 1.125rem;
                line-height: 1.75rem;
              "
            >
              Green Living Tips
            </div>
            <div
              style="
                font-weight: 700;
                font-size: 2.5rem;
                line-height: 1;
                color: #fff;
              "
            >
              Journey with Green Living Tips
            </div>
            <div
              style="
                color: #fff;
                max-width: 768px;
                margin-top: 12px;
                opacity: 0.5;
              "
            >
              Explore our curated collection of practical tips and tricks to
              incorporate sustainable practices into your daily life
              effortlessly.
            </div>
          </div>
          <div
            style="
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 1rem;
            "
          >
            <div
              style="
                padding: 2rem;
                background-color: #ffffff29;
                border-radius: 1.5rem;
              "
            >
              <div
                style="
                  padding: 4px 10px;
                  border-radius: 999px;
                  font-size: 12px;
                  color: #fff;
                  background-color: #0cb058;
                  width: fit-content;
                  margin-bottom: 5px;
                "
              >
                Energy Conservation
              </div>
              <div style="font-size: 24px; font-weight: 500; color: #fff">
                Unplug and Save
              </div>
              <div style="margin-top: 10px; color: #fff; opacity: 0.5">
                Reduce your energy consumption by unplugging electronic devices
                when not in use. Standby power, also known as 'vampire power,'
                can account for a significant portion of your electricity bill.
                Save energy and money by simply unplugging chargers, appliances,
                and electronics when they're not in use.
              </div>
            </div>
            <div
              style="
                padding: 2rem;
                background-color: #ffffff29;
                border-radius: 1.5rem;
              "
            >
              <div
                style="
                  padding: 4px 10px;
                  border-radius: 999px;
                  font-size: 12px;
                  color: #fff;
                  background-color: #0cb058;
                  width: fit-content;
                  margin-bottom: 5px;
                "
              >
                Waste Reduction
              </div>
              <div style="font-size: 24px; font-weight: 500; color: #fff">
                Recycle Right
              </div>
              <div style="margin-top: 10px; color: #fff; opacity: 0.5">
                Maximize your recycling efforts by learning what materials are
                accepted in your local recycling program. Rinse containers,
                remove caps, and flatten cardboard to ensure proper recycling.
                By recycling right, you help reduce landfill waste and conserve
                valuable resources.
              </div>
            </div>
            <div
              style="
                padding: 2rem;
                background-color: #ffffff29;
                border-radius: 1.5rem;
              "
            >
              <div
                style="
                  padding: 4px 10px;
                  border-radius: 999px;
                  font-size: 12px;
                  color: #fff;
                  background-color: #0cb058;
                  width: fit-content;
                  margin-bottom: 5px;
                "
              >
                Water Conservation
              </div>
              <div style="font-size: 24px; font-weight: 500; color: #fff">
                Conserve Water in the Kitchen
              </div>
              <div style="margin-top: 10px; color: #fff; opacity: 0.5">
                Save water in the kitchen by fixing leaks, using a dishwasher
                efficiently, and collecting excess water for plants. Small
                changes like using a basin for washing vegetables or turning off
                the tap while brushing your teeth can add up to significant
                water savings over time.
              </div>
            </div>
            <div
              style="
                padding: 2rem;
                background-color: #ffffff29;
                border-radius: 1.5rem;
              "
            >
              <div
                style="
                  padding: 4px 10px;
                  border-radius: 999px;
                  font-size: 12px;
                  color: #fff;
                  background-color: #0cb058;
                  width: fit-content;
                  margin-bottom: 5px;
                "
              >
                Sustainable Outdoors
              </div>
              <div style="font-size: 24px; font-weight: 500; color: #fff">
                Choose Eco-Friendly Transportation
              </div>
              <div style="margin-top: 10px; color: #fff; opacity: 0.5">
                Reduce your carbon footprint by opting for eco-friendly
                transportation options such as walking, biking, carpooling, or
                using public transit whenever possible. By choosing sustainable
                transportation methods, you can decrease air pollution and
                promote cleaner, healthier communities.
              </div>
            </div>
            <div
              style="
                padding: 2rem;
                background-color: #ffffff29;
                border-radius: 1.5rem;
              "
            >
              <div
                style="
                  padding: 4px 10px;
                  border-radius: 999px;
                  font-size: 12px;
                  color: #fff;
                  background-color: #0cb058;
                  width: fit-content;
                  margin-bottom: 5px;
                "
              >
                Green Innovations
              </div>
              <div style="font-size: 24px; font-weight: 500; color: #fff">
                Switch to LED Lighting
              </div>
              <div style="margin-top: 10px; color: #fff; opacity: 0.5">
                Upgrade to energy-efficient LED light bulbs to reduce energy
                consumption and lower your electricity bills. LED bulbs last
                longer and use less energy than traditional incandescent bulbs,
                making them a cost-effective and environmentally friendly
                lighting choice for your home.
              </div>
            </div>
            <div
              style="
                padding: 2rem;
                background-color: #ffffff29;
                border-radius: 1.5rem;
              "
            >
              <div
                style="
                  padding: 4px 10px;
                  border-radius: 999px;
                  font-size: 12px;
                  color: #fff;
                  background-color: #0cb058;
                  width: fit-content;
                  margin-bottom: 5px;
                "
              >
                Sustainable Gardening
              </div>
              <div style="font-size: 24px; font-weight: 500; color: #fff">
                Start Composting
              </div>
              <div style="margin-top: 10px; color: #fff; opacity: 0.5">
                Reduce food waste and enrich your soil by starting a compost
                pile or bin in your backyard. Composting kitchen scraps, yard
                waste, and other organic materials creates nutrient-rich compost
                that can be used to fertilize gardens and landscaping. Not only
                does composting divert waste from landfills, but it also
                promotes healthy soil and reduces the need for chemical
                fertilizers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container" style="padding-bottom: 5rem; padding-top: 5rem">
        <div style="margin-bottom: 5rem">
          <div
            style="
              margin-bottom: 10px;
              letter-spacing: 5px;
              font-weight: 500;
              text-transform: uppercase;
              color: #08582d;
              font-size: 1.125rem;
              line-height: 1.75rem;
              text-align: center;
            "
          >
            explore
          </div>
          <div
            style="
              font-weight: 700;
              font-size: 2.5rem;
              line-height: 1;
              text-align: center;
            "
          >
            Explore Diverse Environmental Frontiers
          </div>
          <div
            style="
              margin-top: 12px;
              opacity: 0.5;
              text-align: center;
              max-width: 1024px;
              margin-left: auto;
              margin-right: auto;
            "
          >
            Embark on a journey of discovery as we delve into the multifaceted
            realms of environmental conservation, from biodiversity hotspots to
            renewable energy innovations.
          </div>
        </div>
        <div
          style="
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 5rem;
          "
        >
          <div>
            <div style="display: flex; gap: 10px; align-items: center">
              <div
                style="
                  border-radius: 7px;
                  width: 25px;
                  height: 25px;
                  background-color: #0cb058;
                "
              ></div>
              <div style="font-size: 24px; font-weight: 500; color: #08582d">
                Biodiversity Hotspots
              </div>
            </div>
            <div style="margin-top: 8px; font-weight: 500; opacity: 0.5">
              Explore interactive maps or galleries showcasing biodiversity
              hotspots around the world. Learn about endangered species,
              conservation efforts, and ways to protect biodiversity.
            </div>
          </div>
          <div>
            <div style="display: flex; gap: 10px; align-items: center">
              <div
                style="
                  border-radius: 7px;
                  width: 25px;
                  height: 25px;
                  background-color: #0cb058;
                "
              ></div>
              <div style="font-size: 24px; font-weight: 500; color: #08582d">
                Renewable Energy Innovations
              </div>
            </div>
            <div style="margin-top: 8px; font-weight: 500; opacity: 0.5">
              Discover the latest advancements in renewable energy technologies
              such as solar, wind, and hydro power. Learn how renewable energy
              is transforming the global energy landscape and reducing carbon
              emissions.
            </div>
          </div>
          <div>
            <div style="display: flex; gap: 10px; align-items: center">
              <div
                style="
                  border-radius: 7px;
                  width: 25px;
                  height: 25px;
                  background-color: #0cb058;
                "
              ></div>
              <div style="font-size: 24px; font-weight: 500; color: #08582d">
                Ecosystem Conservation
              </div>
            </div>
            <div style="margin-top: 8px; font-weight: 500; opacity: 0.5">
              Dive into virtual tours or multimedia presentations highlighting
              diverse ecosystems like forests, wetlands, and coral reefs.
              Understand the importance of ecosystem conservation for
              biodiversity, climate regulation, and human well-being.
            </div>
          </div>
          <div>
            <div style="display: flex; gap: 10px; align-items: center">
              <div
                style="
                  border-radius: 7px;
                  width: 25px;
                  height: 25px;
                  background-color: #0cb058;
                "
              ></div>
              <div style="font-size: 24px; font-weight: 500; color: #08582d">
                Sustainable Agriculture
              </div>
            </div>
            <div style="margin-top: 8px; font-weight: 500; opacity: 0.5">
              Explore sustainable farming practices, agroecology, and
              regenerative agriculture techniques. Learn about the link between
              agriculture, food security, and environmental sustainability.
            </div>
          </div>
          <div>
            <div style="display: flex; gap: 10px; align-items: center">
              <div
                style="
                  border-radius: 7px;
                  width: 25px;
                  height: 25px;
                  background-color: #0cb058;
                "
              ></div>
              <div style="font-size: 24px; font-weight: 500; color: #08582d">
                Waste Management Solutions
              </div>
            </div>
            <div style="margin-top: 8px; font-weight: 500; opacity: 0.5">
              Discover innovative waste management solutions such as zero waste
              initiatives, circular economy models, and upcycling projects.
              Explore case studies and success stories from communities
              implementing effective waste reduction strategies.
            </div>
          </div>
          <div>
            <div style="display: flex; gap: 10px; align-items: center">
              <div
                style="
                  border-radius: 7px;
                  width: 25px;
                  height: 25px;
                  background-color: #0cb058;
                "
              ></div>
              <div style="font-size: 24px; font-weight: 500; color: #08582d">
                Water Conservation Strategies
              </div>
            </div>
            <div style="margin-top: 8px; font-weight: 500; opacity: 0.5">
              Learn about water conservation techniques, water recycling, and
              watershed management approaches. Explore the importance of
              freshwater conservation for ecosystems, wildlife, and human
              communities.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container" style="padding-bottom: 5rem">
        <div
          class="sub-section-bg"
          style="
            height: 70dvh;
            border-radius: 2rem;
            position: relative;
            overflow: clip;
            width: 100%;
          "
        >
          <!-- <div
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
          /> -->
          <div
            style="
              position: relative;
              display: flex;
              height: 100%;
              align-items: center;
              justify-content: center;
            "
          >
            <div>
              <div
                style="
                  color: #fff;
                  font-weight: 700;
                  font-size: 3.5rem;
                  line-height: 1;
                  text-align: center;
                "
              >
                Green today for a brighter tomorrow
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container" style="padding-bottom: 5rem">
        <div style="margin-bottom: 2.5rem">
          <div
            style="
              margin-bottom: 10px;
              letter-spacing: 5px;
              font-weight: 500;
              text-transform: uppercase;
              color: #08582d;
              font-size: 1.125rem;
              line-height: 1.75rem;
              text-align: center;
            "
          >
            events
          </div>
          <div
            style="
              font-weight: 700;
              font-size: 2.5rem;
              line-height: 1;
              text-align: center;
            "
          >
            Join the Green Movement
          </div>
          <div
            style="
              margin-top: 12px;
              opacity: 0.5;
              text-align: center;
              max-width: 1024px;
              margin-left: auto;
              margin-right: auto;
            "
          >
            Stay informed and engaged with our curated selection of upcoming
            environmental events, from local clean-up initiatives to global
            sustainability conferences.
          </div>
        </div>
        <div
          style="
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.5rem;
          "
        >
          <div
            style="
              box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
              border-radius: 30px;
            "
          >
            <img
              src="../assets/images/HomePage/costal-cleanup.png"
              style="
                width: 100%;
                border-radius: 30px;
                border-bottom-left-radius: 0px;
                border-bottom-right-radius: 0px;
              "
              alt="EcoSphere"
            />
            <div style="padding: 20px; padding-top: 10px">
              <div style="opacity: 0.5; font-weight: 500; font-size: 14px">
                Saturday, May 18th
              </div>
              <div
                style="margin-bottom: 10px; font-size: 20px; font-weight: 500"
              >
                Coastal Cleanup Day
              </div>
              <div style="opacity: 0.5; font-size: 14px">
                Join us for a day of action as we come together to clean up our
                local beaches and shorelines. Help protect marine life, reduce
                plastic pollution, and preserve coastal ecosystems. All ages and
                skill levels welcome!
              </div>
            </div>
          </div>
          <div
            style="
              box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
              border-radius: 30px;
            "
          >
            <img
              src="../assets/images/HomePage/expo.png"
              style="
                width: 100%;
                border-radius: 30px;
                border-bottom-left-radius: 0px;
                border-bottom-right-radius: 0px;
              "
              alt="EcoSphere"
            />
            <div style="padding: 20px; padding-top: 10px">
              <div style="opacity: 0.5; font-weight: 500; font-size: 14px">
                Thursday, June 6th - Saturday, June 8th
              </div>
              <div
                style="margin-bottom: 10px; font-size: 20px; font-weight: 500"
              >
                GreenTech Expo 2024
              </div>
              <div style="opacity: 0.5; font-size: 14px">
                Explore the latest innovations in green technology at the
                GreenTech Expo 2024. From renewable energy solutions to
                sustainable transportation, discover groundbreaking technologies
                that are shaping the future of environmental sustainability.
              </div>
            </div>
          </div>
          <div
            style="
              box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
              border-radius: 30px;
            "
          >
            <img
              src="../assets/images/HomePage/climate.png"
              style="
                width: 100%;
                border-radius: 30px;
                border-bottom-left-radius: 0px;
                border-bottom-right-radius: 0px;
              "
              alt="EcoSphere"
            />
            <div style="padding: 20px; padding-top: 10px">
              <div style="opacity: 0.5; font-weight: 500; font-size: 14px">
                Wednesday, July 10th
              </div>
              <div
                style="margin-bottom: 10px; font-size: 20px; font-weight: 500"
              >
                Climate Action Panel Discussion
              </div>
              <div style="opacity: 0.5; font-size: 14px">
                Join leading experts and activists for an insightful panel
                discussion on climate change and collective action. Explore
                strategies for mitigating climate impacts, advocating for policy
                change, and building resilient communities in the face of
                environmental challenges.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container" style="padding-bottom: 5rem">
        <div style="margin-bottom: 2.5rem">
          <div
            style="
              margin-bottom: 10px;
              letter-spacing: 5px;
              font-weight: 500;
              text-transform: uppercase;
              color: #08582d;
              font-size: 1.125rem;
              line-height: 1.75rem;
              text-align: center;
            "
          >
            testimonials
          </div>
          <div
            style="
              font-weight: 700;
              font-size: 2.5rem;
              line-height: 1;
              text-align: center;
            "
          >
            Hear from Our Eco-Champions
          </div>
          <div
            style="
              margin-top: 12px;
              opacity: 0.5;
              text-align: center;
              max-width: 1024px;
              margin-left: auto;
              margin-right: auto;
            "
          >
            Discover how our community members are making a difference and
            inspiring others to join the eco-movement through their stories of
            sustainability and positive impact.
          </div>
        </div>
        <div>
          <div>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
