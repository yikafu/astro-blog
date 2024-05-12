<script setup>
import { profileConfig } from "@/config";
import { navConfig } from "@/config.ts";
</script>

<template>
  <div class="w-280px gap-4" flex="~ col">
    <div class="sc-card text-center">
      <a href="/about">
        <div
          class="ma my-6 w-200px h-200px border-rd-50% bg-bgcolor dark:bg-dark-bgcolor"
        >
          <img
            class="transform-scale-85 border-rd-50%"
            :src="profileConfig.avatar"
            alt=""
            loading="lazy"
          />
        </div>
      </a>

      <div class="sc-flex gap-3 m-6">
        <template v-for="item in profileConfig.links">
          <a
            class="sc-flex sc-hover w-14 h-14 b-rd-50%"
            transition="all duration-0.3s"
            :href="item.url"
            target="_blank"
          >
            <div v-if="item.icon" :class="item.icon" />
          </a>
        </template>
      </div>

      <!-- navComfig 竖直列表  -->
      <ul class="flex flex-col gap-5 p-0 my-12">
        <template v-for="item in navConfig">
          <li
            class="ma fw-bold text-6 w-70% lh-12 text-center list-none"
            hover="bg-bgcolor dark:bg-dark-bgcolor b-rd-2"
          >
            <a class="block" :href="item.url">
              {{ item.name }}
            </a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
