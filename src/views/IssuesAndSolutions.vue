<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <main>
    <section>
      <div class="heroBg" style="height: 70dvh">
        <div class="container" style="height: 100%; position: relative">
          <div style="height: 100%; display: flex; width: 100%">
            <div style="display: flex; justify-content: center; width: 100%">
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
                      text-align: center;
                    "
                  >
                    issues & solutions
                  </div>
                  <div
                    style="
                      font-weight: 700;
                      font-size: 3rem;
                      line-height: 1;
                      text-align: center;
                    "
                  >
                    Navigating Environmental Challenges
                  </div>
                  <div
                    style="
                      max-width: 768px;
                      margin-left: auto;
                      margin-right: auto;
                      margin-top: 20px;
                      opacity: 0.5;
                      text-align: center;
                    "
                  >
                    Embark on a journey to understand and address pressing
                    environmental issues. Join us in championing sustainability
                    and forging a path towards a healthier planet for future
                    generations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div>
          <div style="padding-bottom: 5rem; padding-top: 5rem">
            <div style="margin-bottom: 2.5rem">
              <div style="font-weight: 700; font-size: 2rem; line-height: 1">
                Common issues & solutions
              </div>
              <div style="max-width: 768px; margin-top: 12px; opacity: 0.5">
                From climate change to pollution, we delve into pressing issues
                affecting our planet and offer practical strategies to mitigate
                their impact.
              </div>
            </div>
            <div
              style="
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 1.5rem;
              "
            >
              <div
                style="
                  display: grid;
                  grid-template-columns: repeat(2, minmax(0, 1fr));
                  gap: 0rem;
                "
              >
                <div
                  style="
                    padding: 2rem;
                    background-color: #08582d;
                    border-top-left-radius: 1.5rem;
                    border-bottom-left-radius: 1.5rem;
                  "
                >
                  <div
                    style="
                      text-transform: uppercase;
                      color: #fff;
                      font-weight: 600;
                      opacity: 0.7;
                    "
                  >
                    issue
                  </div>
                  <div style="font-size: 24px; font-weight: 500; color: #fff">
                    Food Waste
                  </div>
                  <div style="margin-top: 10px; color: #fff; opacity: 0.5">
                    Food waste contributes to environmental degradation,
                    greenhouse gas emissions, and resource depletion.
                    Inefficient food production, distribution, and consumption
                    systems result in significant quantities of food being
                    discarded, even as millions of people suffer from hunger and
                    food insecurity.
                  </div>
                </div>
                <div
                  style="
                    padding: 2rem;
                    background-color: #0cb058;
                    border-top-right-radius: 1.5rem;
                    border-bottom-right-radius: 1.5rem;
                  "
                >
                  <div
                    style="
                      text-transform: uppercase;
                      color: #fff;
                      font-weight: 600;
                      opacity: 0.7;
                    "
                  >
                    solution
                  </div>
                  <div style="font-size: 24px; font-weight: 500; color: #fff">
                    Educate consumers
                  </div>
                  <div style="margin-top: 10px; color: #fff; opacity: 0.5">
                    Educate consumers about food waste reduction strategies,
                    such as meal planning, proper storage, and composting.
                    Encourage food businesses to donate surplus food to
                    charities and implement waste reduction measures in food
                    production and distribution chains. Support initiatives to
                    redistribute surplus food and reduce food loss throughout
                    the supply chain.
                  </div>
                </div>
              </div>
              <div
                style="
                  display: grid;
                  grid-template-columns: repeat(2, minmax(0, 1fr));
                  gap: 0rem;
                "
              >
                <div
                  style="
                    padding: 2rem;
                    background-color: #08582d;
                    border-top-left-radius: 1.5rem;
                    border-bottom-left-radius: 1.5rem;
                  "
                >
                  <div
                    style="
                      text-transform: uppercase;
                      color: #fff;
                      font-weight: 600;
                      opacity: 0.7;
                    "
                  >
                    issue
                  </div>
                  <div style="font-size: 24px; font-weight: 500; color: #fff">
                    Water Pollution
                  </div>
                  <div style="margin-top: 10px; color: #fff; opacity: 0.5">
                    Water pollution from industrial discharge, agricultural
                    runoff, and improper waste disposal contaminates freshwater
                    sources, threatens aquatic ecosystems, and jeopardizes
                    public health. Polluted water can lead to waterborne
                    diseases, ecosystem degradation, and loss of biodiversity.
                  </div>
                </div>
                <div
                  style="
                    padding: 2rem;
                    background-color: #0cb058;
                    border-top-right-radius: 1.5rem;
                    border-bottom-right-radius: 1.5rem;
                  "
                >
                  <div
                    style="
                      text-transform: uppercase;
                      color: #fff;
                      font-weight: 600;
                      opacity: 0.7;
                    "
                  >
                    solution
                  </div>
                  <div style="font-size: 24px; font-weight: 500; color: #fff">
                    Stricter regulations
                  </div>
                  <div style="margin-top: 10px; color: #fff; opacity: 0.5">
                    Implement stricter regulations on industrial and
                    agricultural pollution, including wastewater treatment and
                    runoff management. Promote sustainable agriculture practices
                    to minimize chemical runoff and soil erosion. Invest in
                    infrastructure for safe drinking water and sanitation, and
                    support community-based water quality monitoring
                    initiatives.
                  </div>
                </div>
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
            FAQ
          </div>
          <div
            style="
              font-weight: 700;
              font-size: 2.5rem;
              line-height: 1;
              text-align: center;
            "
          >
            Frequently asked questions
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
            Find answers to common queries and gain insights into sustainable
            living practices through our comprehensive frequently asked
            questions section.
          </div>
        </div>
        <div style="">
          <div
            style="
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 1rem;
            "
          >
            <div style="display: flex; flex-direction: column; gap: 1rem">
              <div>
                <Disclosure>
                  <DisclosureButton
                    style="
                      width: 100%;
                      text-align: left;
                      padding: 20px;
                      background-color: #f2f2f2;
                      border-radius: 10px;
                      border: none;
                      font-family: inherit;
                      cursor: pointer;
                    "
                  >
                    <div
                      style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                      "
                    >
                      <div style="font-size: 16px">
                        How can I reduce my carbon footprint?
                      </div>
                      <div style="display: flex; align-items: center">
                        <ChevronDownIcon
                          style="width: 20px; stroke-width: 2; color: #08582d"
                        />
                      </div>
                    </div>
                  </DisclosureButton>
                  <DisclosurePanel
                    style="opacity: 0.5; padding: 1rem 20px; font-size: 16px"
                  >
                    You can reduce your carbon footprint by making simple
                    lifestyle changes such as using energy-efficient appliances,
                    reducing meat consumption, carpooling or using public
                    transportation, conserving water, and supporting renewable
                    energy initiatives.
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div>
                <Disclosure>
                  <DisclosureButton
                    style="
                      width: 100%;
                      text-align: left;
                      padding: 20px;
                      background-color: #f2f2f2;
                      border-radius: 10px;
                      border: none;
                      font-family: inherit;
                      cursor: pointer;
                    "
                  >
                    <div
                      style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                      "
                    >
                      <div style="font-size: 16px">What is sustainability?</div>
                      <div style="display: flex; align-items: center">
                        <ChevronDownIcon
                          style="width: 20px; stroke-width: 2; color: #08582d"
                        />
                      </div>
                    </div>
                  </DisclosureButton>
                  <DisclosurePanel
                    style="opacity: 0.5; padding: 1rem 20px; font-size: 16px"
                  >
                    Sustainability is the practice of meeting the needs of the
                    present without compromising the ability of future
                    generations to meet their own needs. It involves balancing
                    environmental, social, and economic considerations to ensure
                    a healthy and equitable future for all.
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div>
                <Disclosure>
                  <DisclosureButton
                    style="
                      width: 100%;
                      text-align: left;
                      padding: 20px;
                      background-color: #f2f2f2;
                      border-radius: 10px;
                      border: none;
                      font-family: inherit;
                      cursor: pointer;
                    "
                  >
                    <div
                      style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                      "
                    >
                      <div style="font-size: 16px">
                        What are some eco-friendly alternatives to single-use
                        plastics?
                      </div>
                      <div style="display: flex; align-items: center">
                        <ChevronDownIcon
                          style="width: 20px; stroke-width: 2; color: #08582d"
                        />
                      </div>
                    </div>
                  </DisclosureButton>
                  <DisclosurePanel
                    style="opacity: 0.5; padding: 1rem 20px; font-size: 16px"
                  >
                    Eco-friendly alternatives to single-use plastics include
                    reusable water bottles, stainless steel or glass straws,
                    cloth grocery bags, beeswax wraps, and compostable or
                    biodegradable packaging made from plant-based materials.
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem">
              <div>
                <Disclosure>
                  <DisclosureButton
                    style="
                      width: 100%;
                      text-align: left;
                      padding: 20px;
                      background-color: #f2f2f2;
                      border-radius: 10px;
                      border: none;
                      font-family: inherit;
                      cursor: pointer;
                    "
                  >
                    <div
                      style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                      "
                    >
                      <div style="font-size: 16px">
                        How can I recycle properly?
                      </div>
                      <div style="display: flex; align-items: center">
                        <ChevronDownIcon
                          style="width: 20px; stroke-width: 2; color: #08582d"
                        />
                      </div>
                    </div>
                  </DisclosureButton>
                  <DisclosurePanel
                    style="opacity: 0.5; padding: 1rem 20px; font-size: 16px"
                  >
                    To recycle properly, familiarize yourself with your local
                    recycling guidelines and sort your recyclables accordingly.
                    Rinse containers before recycling, remove caps and labels,
                    and avoid contaminating recyclables with food or liquid
                    waste. Check with your local recycling facility for specific
                    instructions on what materials are accepted.
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div>
                <Disclosure>
                  <DisclosureButton
                    style="
                      width: 100%;
                      text-align: left;
                      padding: 20px;
                      background-color: #f2f2f2;
                      border-radius: 10px;
                      border: none;
                      font-family: inherit;
                      cursor: pointer;
                    "
                  >
                    <div
                      style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                      "
                    >
                      <div style="font-size: 16px">
                        What are some ways to save energy at home?
                      </div>
                      <div style="display: flex; align-items: center">
                        <ChevronDownIcon
                          style="width: 20px; stroke-width: 2; color: #08582d"
                        />
                      </div>
                    </div>
                  </DisclosureButton>
                  <DisclosurePanel
                    style="opacity: 0.5; padding: 1rem 20px; font-size: 16px"
                  >
                    You can save energy at home by turning off lights and
                    electronics when not in use, using programmable thermostats
                    to regulate heating and cooling, insulating your home to
                    reduce heat loss, and upgrading to energy-efficient
                    appliances and light bulbs.
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div>
                <Disclosure>
                  <DisclosureButton
                    style="
                      width: 100%;
                      text-align: left;
                      padding: 20px;
                      background-color: #f2f2f2;
                      border-radius: 10px;
                      border: none;
                      font-family: inherit;
                      cursor: pointer;
                    "
                  >
                    <div
                      style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                      "
                    >
                      <div style="font-size: 16px">
                        How can I get involved in environmental activism?
                      </div>
                      <div style="display: flex; align-items: center">
                        <ChevronDownIcon
                          style="width: 20px; stroke-width: 2; color: #08582d"
                        />
                      </div>
                    </div>
                  </DisclosureButton>
                  <DisclosurePanel
                    style="opacity: 0.5; padding: 1rem 20px; font-size: 16px"
                  >
                    There are many ways to get involved in environmental
                    activism, including volunteering with local conservation
                    organizations, participating in clean-up events, advocating
                    for policy changes, supporting sustainable businesses, and
                    raising awareness through education and outreach efforts.
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
