<script setup>
import { Rocket } from 'lucide-vue-next';
import Covers from './covers.vue';
</script>

<template>
    <section class="relative min-h-screen bg-accent">
        <div class="flex justify-center pt-20">
            <div class="relative w-full max-w-4xl mx-auto">
                <h2 class="flex items-center gap-2 pb-16 text-4xl font-extrabold">
                    <Rocket class="w-10 h-10" />
                    Meus Projetos
                </h2>
                <Covers />
            </div>
        </div>
    </section>
</template>