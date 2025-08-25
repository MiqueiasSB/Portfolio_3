<script setup>
import { Rocket, Apple } from 'lucide-vue-next';
import Covers from './covers.vue';
import MiniCovers from './miniCovers.vue';

</script>

<template>
  <section class="relative min-h-screen bg-accent px-2 sm:px-6 lg:px-8">
    <div class="flex justify-center pt-16 sm:pt-20">
      <div class="w-full max-w-4xl">
        <h2
          class="flex items-center gap-3 pb-8 sm:pb-10 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-base-content">
          <Rocket class="w-8 h-8 sm:w-10 sm:h-10" />
          Projetos e Experiências!
        </h2>
        <Covers />
      </div>
    </div>

    <div class="flex justify-center pt-16 sm:pt-20">
      <div class="w-full max-w-4xl">
        <h4
          class="flex items-center gap-3 pb-8 sm:pb-10 text-2xl sm:text-3xl lg:text-2xl font-extrabold text-base-content">
          <Apple class="w-8 h-8 sm:w-8 sm:h-8" />
          Mini apps
        </h4>
        <MiniCovers />
      </div>
    </div>

    <!-- Mensagem de aviso -->
  <div v-if="!selectedProject" class="max-w-md mx-auto py-8">
    <div class="card bg-base-200 shadow rounded-lg border border-base-300 px-4 py-3">
      <div class="flex items-center justify-center gap-2">
        <span class="loading loading-dots loading-sm text-primary"></span>
        <p class="text-sm text-base-content text-center">
          Estou trabalhando na descrição dos outros projetos
        </p>
      </div>
    </div>
  </div>
  </section>

  
</template>
