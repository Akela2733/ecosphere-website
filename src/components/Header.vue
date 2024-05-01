<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

router.beforeEach((to, from, next) => {
  window.scrollTo({ top: 0 });
  next();
});
</script>

<template>
  <main
    :class="{ scrolled: isScrolled }"
    style="position: fixed; top: 0; left: 0; width: 100%; z-index: 10"
  >
    <div
      class="container"
      style="padding-top: 0.75rem; padding-bottom: 0.75rem"
    >
      <div class="" style="display: flex; justify-content: space-between">
        <div style="display: flex; align-items: center">
          <router-link to="/">
            <div
              style="
                font-size: 1.875rem;
                line-height: 2.25rem;
                color: #08582d;
                font-weight: 400;
                font-style: normal;
                margin-bottom: 5px;
                font-family: 'Abril Fatface', serif;
              "
            >
              EcoSphere
            </div>
          </router-link>
        </div>
        <div class="" style="gap: 50px; display: flex; align-items: center">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/issues-and-solutions">
            Issues & Solutions
          </router-link>
          <router-link to="/forum"> Forum </router-link>
          <router-link to="/contact">
            <div class="solid-button">Contact us</div>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.scrolled {
  background-color: #fff;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.042))
    drop-shadow(0 2px 4px rgba(0, 0, 0, 0.023));
  transition-duration: 500ms;
}
</style>
