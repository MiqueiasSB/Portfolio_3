<script setup>
import BodyProject from './bodyProject.vue';
import Post1 from '../../assets/img/postMnotas1.png';
import { getProjects } from '../../data/projects.js'
import { NotebookPen, LayoutDashboard, Code2, Wrench, Rocket } from 'lucide-vue-next'


// Usa a função para obter os projetos
const projects = getProjects()
const project = projects.find(p => p.title === 'MNotas')
</script>
<template>
  <BodyProject :project="project">
    <template #extra>
      <div class="space-y-6 text-base text-base-content">
        <!-- Descrição Geral do MNotas -->
        <div>
          <h3 class="text-lg font-bold text-primary flex items-center gap-2">
            <NotebookPen class="w-5 h-5" /> Sobre o MNotas
          </h3>
          <p>
            O <span class="font-semibold">MNotas</span> é um sistema web desenvolvido com o objetivo inicial de ajudar
            meus pais a organizar suas finanças de maneira prática. Com o tempo, outras pessoas demonstraram interesse,
            levando-me a expandir o projeto e torná-lo acessível ao público geral.
          </p>
        </div>

        <!-- Funcionalidades Principais -->
        <div>
          <h3 class="text-lg font-bold text-primary flex items-center gap-2">
            <LayoutDashboard class="w-5 h-5" /> Funcionalidades-Chave
          </h3>
          <ul class="list-disc list-inside space-y-2">
            <li><span class="font-semibold">Registro de Transações:</span> Controle de entradas e saídas com rapidez e
              simplicidade.</li>
            <li><span class="font-semibold">Categorias Personalizadas:</span> Organização financeira segmentada por
              categoria.</li>
            <li><span class="font-semibold">Painel Gerencial:</span> Visualização de lucros e despesas em tempo real.
            </li>
            <li><span class="font-semibold">Gestão de Clientes:</span> Histórico financeiro separado por cliente.</li>
            <li><span class="font-semibold">Design Responsivo:</span> Acesso completo por qualquer dispositivo, a
              qualquer momento.</li>
          </ul>
        </div>

        <!-- Tecnologias Utilizadas -->
        <div>
          <h3 class="text-lg font-bold text-primary flex items-center gap-2">
            <Code2 class="w-5 h-5" /> Tecnologias Utilizadas
          </h3>
          <p>
            A primeira versão foi desenvolvida com <span class="font-semibold">Laravel</span>, <span
              class="font-semibold">Livewire</span>, <span class="font-semibold">Alpine.js</span>, e layout feito no
            <span class="font-semibold">Figma</span>. Para monetização, implementei <span class="font-semibold">planos
              pagos com Stripe</span>, o que foi um grande aprendizado envolvendo autenticação, pagamentos recorrentes e
            gestão de assinaturas.
          </p>
        </div>

        <!-- Dashboard com Gráficos -->
        <div>
          <h3 class="text-lg font-bold text-primary flex items-center gap-2">
            <LayoutDashboard class="w-5 h-5" /> Dashboard de Análise Financeira
          </h3>
          <p>
            O <span class="font-semibold">Dashboard</span> foi uma parte fundamental do sistema. Inicialmente,
            implementei gráficos utilizando <span class="font-semibold">Chart.js</span>, fazendo o cruzamento de dados
            para gerar gráficos que ajudam a visualizar lucros, despesas e outras métricas importantes para o controle
            financeiro. Posteriormente, migrei para <span class="font-semibold">Google Charts</span>, pois oferece maior
            flexibilidade, customização e mais tipos de gráficos interativos.
          </p>
          <p>
            Além disso, comecei a implementar a <span class="font-semibold">opção de filtros dinâmicos</span> para os
            usuários, permitindo que eles selecionem o período, categorias ou clientes específicos para visualizar dados
            segmentados. O uso de <span class="font-semibold">Bootstrap</span> garantiu que o layout fosse responsivo e
            acessível em qualquer dispositivo.
          </p>
        </div>

        <div class="w-full shadow rounded-lg border border-base-300 overflow-hidden">
            <img :src=Post1 class="w-full" />
        </div>
        <!--
         
        <div>
          <h3 class="text-lg font-bold text-primary flex items-center gap-2">
            <Wrench class="w-5 h-5" /> Refatoração e Evolução
          </h3>
          <p>
            Atualmente, estou refatorando o sistema utilizando <span class="font-semibold">Vue.js</span>, <span
              class="font-semibold">TailwindCSS</span> e <span class="font-semibold">DaisyUI</span>, com a arquitetura
            reestruturada usando o <span class="font-semibold">Repository Pattern</span>, para garantir maior
            organização e escalabilidade.
          </p>
        </div>
 -->
        <!-- Acesso e Experimente -->
        <div>
          <h3 class="text-lg font-bold text-primary flex items-center gap-2">
            <Rocket class="w-5 h-5" /> Acesse e Experimente
          </h3>
          <p>
            O sistema está disponível em: <a href="https://mnotas.miqueiasbraga.com"
              class="link link-primary font-semibold" target="_blank">mnotas.miqueiasbraga.com</a>
            <br />
            <span class="italic">🎯 Transforme a gestão financeira do seu negócio com 30 dias gratuitos!</span>
          </p>
        </div>
      </div>
    </template>
  </BodyProject>
</template>
