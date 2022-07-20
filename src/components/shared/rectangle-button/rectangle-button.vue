<template>
  <button class="rectangle-button">
    <img class="rectangle-button__image" :src="require(`@/assets/Rectangle-3.svg`)">
    <span class="rectangle-button__text">{{ title }}</span>
  </button>
</template>

<script lang="ts" src="./rectangle-button.ts"></script>
<style lang="scss" src="./rectangle-button.scss">
</style>