<script setup>
import BodyProject from './bodyProject.vue';
import DescricaoAuxiliar from './auxiliarTeep.vue';
import DescricaoDEV from './devTeep.vue';

import { getProjects } from '../../data/projects.js'
import { CodeXml } from 'lucide-vue-next';
import { Cpu } from 'lucide-vue-next';

// Usa a função para obter os projetos
const projects = getProjects()
const project = projects.find(p => p.title === 'Teep Tecnologia')
const selectedTab = true;

const classBtn = [
  
]
</script>
<template>
  <BodyProject :project="project">
    <template #extra>
      <!-- name of each tab group should be unique -->
      <div class="tabs tabs-sm md:tabs-lg tabs-lift">
        <label class="tab">
          <input type="radio" :value="selectedTab" name="my_tabs_4" checked="checked" />
          <Cpu class="mr-2" />
          Auxiliar Técnico
        </label>
        <div class="tab-content bg-base-100 border-base-300 p-4 md:p-6">
          <DescricaoAuxiliar />
        </div>

        <label class="tab">
          <input type="radio" name="my_tabs_4" />
          <CodeXml class="mr-2" />
          Desenvolvedor Junior
        </label>
        <div class="tab-content bg-base-100 border-base-300 p-4 md:p-6">
          <DescricaoDEV />
        </div>

      </div>
    </template>
  </BodyProject>
</template>
