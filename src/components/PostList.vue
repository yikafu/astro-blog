<script setup>
// 接收astro的数据
const { allposts } = defineProps({
  allposts: Array,
});
</script>

<template>
  <div>
    <a :href="`/posts/${post.slug}`" v-for="post in allposts" :key="post.data.title">
      <div class="sc-card h-42 px-8 py-10 m-b-7 b-rd-4" hover="shadow-xl">
        <div class="m-0 text-6 fw-700">{{ post.data.title }}</div>
        <div class="mt-4 text-0.9rem">
          <span>{{ `创建于：${post.data.date}` }}</span>
        </div>
      </div>
    </a>
  </div>
</template>
