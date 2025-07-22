<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <section class="max-w-4xl p-2 md:p-6 mx-auto border shadow-xl bg-base-100 rounded-2xl border-base-200">
    <img
      v-if="project.image"
      :src="project.image"
      :alt="project.title"
      class="object-cover w-full mb-6 rounded-lg shadow max-h-96"
    />
    
    <h2 class="mb-4 text-3xl font-bold text-primary">{{ project.title }}</h2>

    <p class="mb-6 leading-relaxed whitespace-pre-line text-base-content">{{ project.description }}</p>

    <div v-if="project.tools?.length" class="flex flex-wrap gap-2 mb-4">
      <span v-for="tech in project.tools" :key="tech" class="badge badge-outline">
        {{ tech }}
      </span>
    </div>

    <div class="flex gap-4 mt-6">
      <a v-if="project.github" :href="project.github" target="_blank" class="btn btn-sm btn-outline">
        🌐 GitHub
      </a>
      <a v-if="project.demo" :href="project.demo" target="_blank" class="btn btn-sm btn-primary">
        🔗 Acesso
      </a>
    </div>

    <div v-if="$slots.extra" class="mt-6">
      <slot name="extra" />
    </div>
  </section>
</template>
