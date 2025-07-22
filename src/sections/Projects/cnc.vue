<script setup>
import BodyProject from './bodyProject.vue';
import { getProjects } from '../../data/projects.js'
import Post1 from '../../assets/img/postCNC1.png';
import Post2 from '../../assets/img/postCNC2.png';
// Usa a função para obter os projetos
const projects = getProjects()
const project = projects.find(p => p.title === 'CNC Laser')
</script>
<template>
  <BodyProject :project="project">
    <template #extra>
      <div class="space-y-6 text-base text-base-content">
        <p>
          Projeto desenvolvido como <span class="font-semibold">Trabalho de Conclusão de Curso (TCC)</span> no curso
          de Engenharia Mecatrônica, com o objetivo de construir uma <span class="font-semibold">máquina CNC de corte
            a laser</span> de baixo custo, aplicando conceitos de automação e <span class="font-semibold">economia
            circular</span>.
        </p>
        <p>
          A estrutura foi montada com <span class="font-semibold">materiais reaproveitados</span>, e a parte
          eletrônica utilizou <span class="font-semibold">Arduino</span>, drivers para motores de passo e controle via
          <span class="font-semibold">firmware GRBL</span>, permitindo a execução de comandos <span
            class="font-semibold">G-code</span> em superfícies como MDF e acrílico.
        </p>
        <p>
          O sistema permitiu controle preciso dos eixos, ajustes de potência e validação do processo de corte e
          gravação. O projeto foi documentado e validado com testes práticos, sendo uma solução viável para educação
          tecnológica e pequenos negócios.
        </p>
        <div class="w-full shadow rounded-lg border border-base-300 overflow-hidden">
          <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
              <img :src=Post1 class="w-full" />
              <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" class="btn btn-circle">❮</a>
                <a href="#slide2" class="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img :src=Post2 class="w-full" />
              <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" class="btn btn-circle">❮</a>
                <a href="#slide3" class="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BodyProject>
</template>
