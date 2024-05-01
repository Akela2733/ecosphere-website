<script setup>
import { ref } from "vue";
import ForumItem from "@/components/ForumItem.vue";

const forumItems = ref([
  {
    author: "Kamal Jayawikrama",
    title: "Plastic-Free Kitchen Swaps",
    message:
      "Swap plastic-free living tips and recommendations for eco-friendly alternatives to common kitchen items such as food storage containers, utensils, and cleaning products.",
  },
  {
    author: "Ranindu Nimnada",
    title: "Teaching Sustainability in Schools",
    message:
      "Happy to say that i am Sharing lesson plans, educational resources, and classroom activities for teaching students about environmental sustainability, conservation, and climate change.",
  },
]);

const formData = ref({
  author: "",
  title: "",
  message: "",
});

const submitForm = () => {
  const newFeedback = {
    author: formData.value.author,
    title: formData.value.title,
    message: formData.value.message,
  };
  forumItems.value.push(newFeedback);
  console.log(forumItems.value);
  // Clear form fields after submission
  formData.value.author = "";
  formData.value.title = "";
  formData.value.message = "";
};
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
                    forum
                  </div>
                  <div
                    style="
                      font-weight: 700;
                      font-size: 3rem;
                      line-height: 1;
                      text-align: center;
                    "
                  >
                    EcoSphere Community Forum
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
                    Dive into discussions, share ideas, and connect with fellow
                    eco-enthusiasts in our vibrant community forum.
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
          <div style="margin-bottom: 2.5rem">
            <div style="font-weight: 700; font-size: 2rem; line-height: 1">
              Join the Conversation
            </div>
            <div style="max-width: 768px; margin-top: 12px; opacity: 0.5">
              Be part of the EcoSphere community, where ideas flourish,
              questions are answered, and solutions are shared.
            </div>
          </div>
          <div style="display: flex; gap: 2rem">
            <div style="width: 70%">
              <div style="display: flex; flex-direction: column; gap: 10px">
                <ForumItem
                  v-for="(item, index) in forumItems"
                  :key="index"
                  :author="item.author"
                  :title="item.title"
                  :message="item.message"
                />
              </div>
            </div>
            <div style="width: 30%">
              <div style="margin-bottom: 2.5rem">
                <div style="font-weight: 700; font-size: 23px; line-height: 1">
                  Add your feedback
                </div>
                <div style="max-width: 768px; margin-top: 12px; opacity: 0.5">
                  Please fill the below form to add your feedback
                </div>
              </div>
              <form @submit.prevent="submitForm">
                <div style="display: grid; gap: 1rem">
                  <div>
                    <div
                      style="
                        font-size: 14px;
                        margin-bottom: 5px;
                        padding-left: 10px;
                      "
                    >
                      Name
                    </div>
                    <input
                      class="input-field"
                      type="text"
                      placeholder="Enter your name"
                      v-model="formData.author"
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
                      Title
                    </div>
                    <input
                      class="input-field"
                      type="text"
                      placeholder="Enter your feedback title"
                      v-model="formData.title"
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
                      Message
                    </div>
                    <textarea
                      rows="5"
                      class="input-field"
                      type="text"
                      placeholder="Enter your message"
                      v-model="formData.message"
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
