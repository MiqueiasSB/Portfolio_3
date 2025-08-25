<script setup>
import { ref } from 'vue'
import { getProjects } from '../../data/projects.js'
import ProjectCard from './projectCard.vue'

// Usa a função para obter os projetos
const projects = getProjects()

const selectedProject = ref(null)

function showProjectDetails(project) {
  selectedProject.value = project
}

function backToList() {
  selectedProject.value = null
}
</script>


<template>
  <div class="sm:px-6 lg:px-8">
    <!-- Lista de projetos -->
    <div v-if="!selectedProject" class="flex flex-wrap justify-center gap-3 md:gap-1 lg:gap-0">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :cover="project"
        @click="showProjectDetails(project)"
        class="w-full sm:w-1/2 lg:w-1/3"
      />
    </div>

    <!-- Detalhes do projeto selecionado -->
    <div v-else class="relative mb-10 max-w-5xl mx-auto mt-6">
      <button
        @click="backToList"
        class="px-5 py-2 mb-6 text-white bg-primary hover:bg-primary/80 rounded-md transition-colors"
      >
        ← Voltar
      </button>
      <component :is="selectedProject.contentComponent" />
    </div>

  </div>
</template>

