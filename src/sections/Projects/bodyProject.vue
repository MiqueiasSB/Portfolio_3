
<script setup>
defineProps({
  title: String,
  image: String,
  description: String,
  technologies: Array,
  github: String,
  demo: String
});
</script>


<!-- components/ProjectDetails.vue -->
<template>
  <section class="max-w-4xl p-6 mx-auto border shadow-xl bg-base-100 rounded-2xl border-base-200">
    <img v-if="image" :src="image" :alt="title" class="object-cover w-full mb-6 rounded-lg shadow max-h-96" />
    
    <h2 class="mb-4 text-3xl font-bold text-primary">{{ title }}</h2>

    <p class="mb-6 leading-relaxed whitespace-pre-line text-base-content">{{ description }}</p>

    <div v-if="technologies?.length" class="flex flex-wrap gap-2 mb-4">
      <span v-for="tech in technologies" :key="tech" class="badge badge-outline">
        {{ tech }}
      </span>
    </div>

    <div class="flex gap-4 mt-6">
      <a v-if="github" :href="github" target="_blank" class="btn btn-sm btn-outline">
        🌐 GitHub
      </a>
      <a v-if="demo" :href="demo" target="_blank" class="btn btn-sm btn-primary">
        🔗 Ver Demo
      </a>
    </div>

    <div v-if="$slots.extra" class="mt-6">
      <slot name="extra" />
    </div>
  </section>
</template>
