<script setup>
defineProps({
  author: String,
  title: String,
  message: String,
});
</script>

<template>
  <div style="background-color: #f2f2f2; border-radius: 14px; padding: 1.5rem">
    <div style="display: flex; justify-content: space-between; gap: 1rem">
      <div>
        <div style="font-size: 12px; opacity: 0.5">{{ author }}</div>
        <div style="font-weight: 600; font-size: 18px">{{ title }}</div>
      </div>
      <div style="opacity: 0.5; font-size: 14px; font-weight: 500">
        2 days ago
      </div>
    </div>
    <div style="margin-top: 8px; opacity: 0.5">{{ message }}</div>
    <div
      style="
        margin-top: 1rem;
        padding: 3px 10px;
        border: 1px solid #0cb058;
        border-radius: 999px;
        width: fit-content;
        font-size: 12px;
        background-color: #0cb0582d;
        font-weight: 500;
        color: #0cb058;
      "
    >
      Active
    </div>
  </div>
</template>
