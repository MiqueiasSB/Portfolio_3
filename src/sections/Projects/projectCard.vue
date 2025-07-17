<!-- src/components/ProjectCard.vue -->
<script setup>
defineProps({
  cover: Object,
  onClick: Function,
})
</script>

<template>
  <div class="w-full px-2 cursor-pointer md:w-1/3" @click="onClick">
    <div class="shadow-sm h-70 card bg-base-content">
      <figure class="relative overflow-hidden">
        <img :src="cover.image" :alt="cover.title" class="object-cover w-full h-full" />
        <div class="absolute bottom-0 left-0 w-full h-1/2 from-black/40 to-transparent"></div>
      </figure>
      
      <div class="p-3 text-white card-body">
        <h2 class="card-title">{{ cover.title }}</h2>
        <p class="m-0 font-light text-start">{{ cover.description }}</p>
        <div class="flex flex-wrap gap-1">
          <span
            v-for="(tag, i) in cover.tools"
            :key="i"
            class="badge badge-xs"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
