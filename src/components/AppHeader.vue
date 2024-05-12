<script setup>
import AppTheme from "./AppTheme.vue";
import { navConfig, siteConfig } from "@/config.ts"
</script>

<template>
  <header>
    <div class="sc-flex sc-card h-20 px-1 py-0 b-rd-b-4">
      <div class="sc-flex p-x text-5 fw-bold">
        <a href="/">
          <span>{{siteConfig.title}}</span>
        </a>
      </div>
      <div class="sc-flex flex-auto">
        <template v-for="item in navConfig">
          <a
            class="sc-flex sc-ts fw-bold gap-2 py-2 px-4"
            un-text="5 decoration-none"
            :href="item.url"
          >
            <span>{{item.name}}</span>
          </a>
        </template>
      </div>
      <div class="sc-flex">
        <AppTheme />
      </div>
    </div>
  </header>
</template>
