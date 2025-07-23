<script setup>
import { Rocket } from 'lucide-vue-next';
import Covers from './covers.vue';
</script>

<template>
  <section class="relative min-h-screen bg-accent px-2 sm:px-6 lg:px-8">
    <div class="flex justify-center pt-16 sm:pt-20">
      <div class="w-full max-w-4xl">
        <h2 class="flex items-center gap-3 pb-8 sm:pb-10 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-base-content">
          <Rocket class="w-8 h-8 sm:w-10 sm:h-10" />
          Projetos e Experiências!
        </h2>
        <Covers />
      </div>
    </div>
  </section>
</template>
