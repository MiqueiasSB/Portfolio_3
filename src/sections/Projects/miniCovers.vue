<script setup>
import { ref } from 'vue'
import { getProjects } from '../../data/miniApps.js'
import MiniProjectCard from './miniProjectCard.vue'

// Usa a função para obter os projetos
const projects = getProjects()

const selectedProject = ref(null)
</script>

<template>
  <div class="px-7 sm:px-6 lg:px-8">
    <!-- Lista de projetos -->
    <div v-if="!selectedProject" class="flex flex-wrap justify-center gap-3 md:gap-1 lg:gap-0">
      <MiniProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :cover="project"
        @click="showProjectDetails(project)"
        class="w-full sm:w-1/2 lg:w-1/3"
      />
    </div>
  </div>
</template>

