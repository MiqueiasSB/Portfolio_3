<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Links from './links.vue'
import Avatar from './avatar.vue'
import BtnCurriculo from './btnCurriculo.vue'


// Referência para o elemento onde o Vanta será aplicado
const vantaRef = ref(null)
let vantaEffect = null

onMounted(() => {
  // Certifique-se que o Vanta e THREE estejam disponíveis globalmente
  if (window.VANTA && window.VANTA.WAVES) {
    vantaEffect = window.VANTA.WAVES({
      el: vantaRef.value,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xc20,
      // Você pode passar o THREE aqui se usar import local
      // THREE: THREE,
    })
  }
})

onBeforeUnmount(() => {
  if (vantaEffect) {
    vantaEffect.destroy()
  }
})
</script>

  <template>
    <section ref="vantaRef" class="relative flex items-center justify-center min-h-screen bg-secondary">
      <div class="relative w-full max-w-4xl px-4 mx-auto">
        <!-- Card glass -->
        <div class="p-5 text-center border-white border-1 glass-transparent bg-neutral/30 rounded-xl pt-13">
          <h1 class="text-2xl font-bold text-white">
            Miquéias de Sousa Braga
          </h1>
          <h6 class="md:px-40 mt-2 text-sm font-light text-gray-400">
            Experiente e Versátil em Engenharia e Tecnologia, com Amplas Habilidades em Desenvolvimento de
            Sistemas.
          </h6>
          <Links />
        </div>

        <Avatar />

        <BtnCurriculo />

      </div>
    </section>
  </template>

<style>
.glass-transparent {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}
</style>