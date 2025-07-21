<script setup> 
import BodyProject from './bodyProject.vue';
import { getProjects } from '../../data/projects.js'

// Usa a função para obter os projetos
const projects = getProjects()
const project = projects.find(p => p.title === 'CNC Laser')
</script>
<template>
  <BodyProject
  :project="project">
  <template #extra>
    <p class="mt-2 text-sm text-base-content/70">
      Criado como projeto pessoal para organização de ideias e tarefas. Em constante evolução com novas funcionalidades.
    </p>
  </template>
</BodyProject>
</template>
