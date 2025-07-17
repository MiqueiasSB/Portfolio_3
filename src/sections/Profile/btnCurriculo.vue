<script setup>
import curriculoPDF from '../../assets/curriculo.pdf'
import { ArrowBigDownDash } from 'lucide-vue-next'

</script>
<template>
    <div class="absolute -translate-x-1/2 top-3 -right-5">
          <a :href="curriculoPDF" download="Curriculo-Miqueias.pdf">
            <button class="py-0 border-accent btn rounded-xl btn-sm btn-primary text-bold">
              Currículo
              <ArrowBigDownDash :size="18" />
            </button>
          </a>
    </div>
</template>