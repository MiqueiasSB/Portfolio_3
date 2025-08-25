<!-- src/components/ProjectCard.vue -->
<script setup>
import { Github } from 'lucide-vue-next';


defineProps({
  cover: Object,
})
</script>

<template>
  <div class="w-full px-2 md:w-1/4">
    <div class="shadow-sm h-45 card bg-base-content">
      <figure class="relative overflow-hidden">
        <img :src="cover.image" :alt="cover.title" class="object-cover w-full h-full" />
        <div class="absolute bottom-0 left-0 w-full h-1/5  to-transparent"></div>
      </figure>

      <div class="p-3 text-white card-body ">
        <h4 class="card-title">{{ cover.title }}</h4>
        <div class="flex flex-wrap gap-1">
          <small v-for="(tag, i) in cover.tools.slice(0, 12)" :key="i" class="badge badge-xs">
            {{ tag }}
          </small>
        </div>
      </div>

      <!-- Botões de links -->
      <div class="flex flex-row gap-2 mb-3 mx-3">
        <a :href="cover.github" target="_blank"
          class="btn btn-xs flex-1 bg-gray-800 hover:bg-gray-700 text-white text-center">
          <Github class="w-4"/> GitHub
        </a>
        <a :href="cover.demo" target="_blank"
          class="btn btn-xs flex-1 bg-primary text-white hover:bg-primary/90 text-center">
          🌐 Acesse
        </a>
      </div>

    </div>
  </div>
</template>
