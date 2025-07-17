<script setup>
import photoProfile from '../../assets/img/photoProfile.png'
</script>

<template>
    <div class="absolute -translate-x-1/2 -top-20 left-1/2">
          <div class="avatar">
            <div class="rounded-full border-3 border-accent w-30 ring-primary ring-offset-base-100 ring-offset-2">
              <img :src="photoProfile" />
            </div>
          </div>
        </div>
</template>