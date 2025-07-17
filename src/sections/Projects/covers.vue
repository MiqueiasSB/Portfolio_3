<script setup>
import { ref } from 'vue'
import MNotas from '../../assets/img/projects/MNotas.png'
import MNotasContent from './mnotas.vue'
import ProjectCard from './projectCard.vue'

// Lista de projetos
const projects = [
  {
    title: 'MNotas',
    description: 'Um aplicativo de notas completo desenvolvido com Laravel e Vue.js',
    tools: ['Laravel', 'Vue', 'MySQL'],
    image: MNotas,
    contentComponent: MNotasContent
  },
   {
    title: 'CNC',
    description: 'Um aplicativo de notas completo desenvolvido com Laravel e Vue.js',
    tools: ['Laravel', 'Vue', 'MySQL'],
    image: MNotas,
    contentComponent: MNotasContent
  },
   {
    title: 'MNotas',
    description: 'Um aplicativo de notas completo desenvolvido com Laravel e Vue.js',
    tools: ['Laravel', 'Vue', 'MySQL'],
    image: MNotas,
    contentComponent: MNotasContent
  },
]

// Armazena o projeto selecionado
const selectedProject = ref(null)

// Função para mostrar os detalhes
function showProjectDetails(project) {
  selectedProject.value = project
}

// Função para voltar
function backToList() {
  selectedProject.value = null
}
</script>

<template>
  <div>
    <!-- Se nenhum projeto estiver selecionado, mostra os cards -->
    <div v-if="!selectedProject" class="flex flex-wrap">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :cover="project"
        @click="showProjectDetails(project)"
      />
    </div>

    <!-- Se algum projeto estiver selecionado, mostra o conteúdo -->
    <div v-else class="relative mb-10">
       <!-- Botão para voltar -->
      <button @click="backToList" class="px-4 py-2 mb-4 text-white rounded bg-primary hover:bg-primary/80">
        Voltar
      </button>
      <component :is="selectedProject.contentComponent" />
      
     
    </div>
  </div>
</template>
