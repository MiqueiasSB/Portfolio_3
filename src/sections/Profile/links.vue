<script setup>
import { Mail, MapPin, Phone, Github, Linkedin, Box } from 'lucide-vue-next';
import { ref } from 'vue';

const buttons = [
    { icon: Mail, link: 'miqueiasbraga2001@gmail.com', description: 'miqueiasbraga2001@gmail.com' },
    { icon: Phone, link: 'https://api.whatsapp.com/send/?phone=5511997073041&text=Ol%C3%A1%21+Conheci+seu+curr%C3%ADculo...&type=phone_number&app_absent=0', description: '+55 (11) 9 9707-3041' },
    { icon: MapPin, link: 'https://www.google.com/maps/place/R.+Cumari,+303+-+Jardim+Ouro+Negro,+Paul%C3%ADnia+-+SP,+13145-131/@-22.7492633,-47.1714505,17z/data=!3m1!4b1!4m6!3m5!1s0x94c895094236e6c3:0x5248b36a6b96e550!8m2!3d-22.7492633!4d-47.1714505!16s%2Fg%2F11c5mwyltj?entry=ttu', description: 'R. Cumari, 303, Jardim Planalto, Paulínia - SP' },
    { icon: Github, link: 'https://github.com/MiqueiasSB', description: 'github.com/MiqueiasSB' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/miqu%C3%A9ias-braga/', description: 'linkedin.com/in/miquéias-braga/' },
    { icon: Box, link: 'https://thangs.com/designer/Miqu%C3%A9iasSB', description: 'thangs.com/designer/MiquéiasSB' }
];

const description = ref('miqueiasbraga2001@gmail.com');

function copiarTexto() {
    navigator.clipboard.writeText(description.value)
        .then(() => {
            // Mostrar toast simples (você pode customizar com DaisyUI)
            const toast = document.createElement('div');
            toast.innerText = 'Copiado!';
            toast.className = 'toast toast-top toast-center';
            toast.innerHTML = `
        <div class="z-10 py-1 alert alert-accent">
          <small>Copiado!</small>
        </div>
        `;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 2000);
        });
}
</script>

<template>
    <div class="flex flex-wrap justify-center gap-10 mt-8">
        <a v-for="(btn, index) in buttons" :key="index" :href="btn.link" target="_blank" rel="noopener"
            @mouseenter="description = btn.description"
            class="text-gray-700 transition-shadow shadow btn btn-outline btn-lg btn-circle btn-primary hover:shadow-xl border-accent">
            <component class="text-white" :is="btn.icon" :size="20" />
        </a>
    </div>

    <div class="mt-10 text-center">
        <p class="text-sm text-gray-400 transition-colors cursor-pointer hover:text-accent" @click="copiarTexto">
            {{ description }}
        </p>
    </div>
</template>
