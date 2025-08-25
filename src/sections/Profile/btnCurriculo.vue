<script setup>
import { ArrowBigDownDash } from 'lucide-vue-next'

</script>
<template>
    <div class="absolute -translate-x-1/2 top-3 -right-5">
          <a href="/pdfs/curriculo.pdf" target="_blank" rel="noopener noreferrer">
            <button class="py-0 border-accent btn rounded-xl btn-sm btn-primary text-bold">
              Currículo
              <ArrowBigDownDash :size="18" />
            </button>
          </a>
    </div>
</template>