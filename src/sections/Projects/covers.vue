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
  <div>
    <!-- Se nenhum projeto estiver selecionado, mostra os cards -->
    <div v-if="!selectedProject" class="flex flex-wrap">
      <ProjectCard v-for="(project, index) in projects" :key="index" :cover="project"
        @click="showProjectDetails(project)" />
    </div>

    <!-- Se algum projeto estiver selecionado, mostra o conteúdo -->
    <div v-else class="relative mb-10">
      <!-- Botão para voltar -->
      <button @click="backToList" class="px-4 py-2 mb-4 text-white rounded bg-primary hover:bg-primary/80">
        Voltar
      </button>
      <component :is="selectedProject.contentComponent" />
    </div>

    <div  v-if="!selectedProject" class="max-w-sm mx-auto my-6">
      <div class="card bg-base-200 shadow-sm rounded-lg border border-base-300 px-4 py-2">
        <div class="flex items-center">
          <span class="me-2 loading loading-dots loading-sm text-primary"></span>
          <p class="text-sm text-center text-base-content">Estou trabalhando na descrição dos outros projetos</p>
        </div>
      </div>
    </div>

  </div>
</template>
