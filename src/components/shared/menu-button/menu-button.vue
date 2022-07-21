<template>
  <button class="header__button" :class="mode">
    <img class="header__button-icon" :src="require(`@/assets/${mode}/${icon}.svg`)">
    {{ title }}
  </button>
</template>

<script lang="ts" src="./menu-button.ts"></script>
<style lang="scss" src="@/stylesheets/components/_menu-button.scss">
</style>
