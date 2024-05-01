<script setup>
import { GoogleMap, Marker } from "vue3-google-map";

const center = { lat: 6.8829260331347735, lng: 79.88678974274568 };
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
                    Contact us
                  </div>
                  <div
                    style="
                      font-weight: 700;
                      font-size: 3rem;
                      line-height: 1;
                      text-align: center;
                    "
                  >
                    Contact EcoSphere
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
                    Reach out to us with any questions, feedback, or your
                    inquiries. We're here to help and eager to hear from you!
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
        <div style="padding-bottom: 5rem; padding-top: 5rem">
          <div
            style="
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 3rem;
            "
          >
            <div style="border-radius: 20px; overflow: clip">
              <GoogleMap
                api-key=""
                style="width: 100%; height: 100%"
                :center="center"
                :zoom="15"
              >
                <Marker :options="{ position: center }" />
              </GoogleMap>
            </div>
            <div>
              <div style="margin-bottom: 2.5rem">
                <div style="font-weight: 700; font-size: 2rem; line-height: 1">
                  Send us a message
                </div>
                <div style="max-width: 768px; margin-top: 12px; opacity: 0.5">
                  We'd love to hear from you! Use the form below to send us a
                  message, and we'll get back to you as soon as possible.
                </div>
              </div>
              <form action="">
                <div
                  style="
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 1rem;
                  "
                >
                  <div>
                    <div
                      style="
                        font-size: 14px;
                        margin-bottom: 5px;
                        padding-left: 10px;
                      "
                    >
                      First name
                    </div>
                    <input
                      class="input-field"
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <div
                      style="
                        font-size: 14px;
                        margin-bottom: 5px;
                        padding-left: 10px;
                      "
                    >
                      Last name
                    </div>
                    <input
                      class="input-field"
                      type="text"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div>
                    <div
                      style="
                        font-size: 14px;
                        margin-bottom: 5px;
                        padding-left: 10px;
                      "
                    >
                      Email
                    </div>
                    <input
                      class="input-field"
                      type="text"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <div
                      style="
                        font-size: 14px;
                        margin-bottom: 5px;
                        padding-left: 10px;
                      "
                    >
                      Mobile number
                    </div>
                    <input
                      class="input-field"
                      type="text"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div style="grid-column: span 2 / span 2">
                    <div
                      style="
                        font-size: 14px;
                        margin-bottom: 5px;
                        padding-left: 10px;
                      "
                    >
                      Subject
                    </div>
                    <input
                      class="input-field"
                      type="text"
                      placeholder="Enter your subject"
                    />
                  </div>
                  <div style="grid-column: span 2 / span 2">
                    <div
                      style="
                        font-size: 14px;
                        margin-bottom: 5px;
                        padding-left: 10px;
                      "
                    >
                      Message
                    </div>
                    <textarea
                      rows="5"
                      class="input-field"
                      type="text"
                      placeholder="Enter your message"
                    />
                  </div>
                </div>
                <div
                  style="
                    margin-top: 10px;
                    display: flex;
                    justify-content: flex-end;
                  "
                >
                  <button type="submit" class="solid-button">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
