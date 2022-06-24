<template>
  <button class="category__button">
    <div class="category__button-container">
    <img class="category__button-icon" :src="require(`@/assets/${icon}.svg`)" />
    </div>
    <div class="category__button-title">{{ title }}</div>
  </button>
</template>

<script lang="ts" src="./category-button.ts"></script>
<style lang="scss" src="./category-button.scss"></style>