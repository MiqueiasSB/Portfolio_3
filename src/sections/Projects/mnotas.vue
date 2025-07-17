<script setup> 
import BodyProject from './bodyProject.vue';
import MNotasImage from '../../assets/img/projects/MNotas.png';
</script>
<template>
  <BodyProject
  title="MNotas"
  :image="MNotasImage"
  description="Sistema de anotações com Laravel + Livewire. Permite criar, editar, fixar e organizar notas por categorias e status. Totalmente responsivo e leve."
  :technologies="['Laravel', 'Livewire', 'Alpine.js', 'MySQL']"
  github="https://github.com/usuario/mnotas"
  demo="https://mnotas.com.br"
>
  <template #extra>
    <p class="mt-2 text-sm text-base-content/70">
      Criado como projeto pessoal para organização de ideias e tarefas. Em constante evolução com novas funcionalidades.
    </p>
  </template>
</BodyProject>
</template>
