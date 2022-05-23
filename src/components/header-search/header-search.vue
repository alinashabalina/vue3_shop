<template>
  <div class="header__search">
    <img class="header__search-icon" :src="icon" />
    <input
      type="search"
      class="header__search-field"
      placeholder="Поиск по сайту"
    />
  </div>
</template>

<script lang="ts" src="./header-search.ts"></script>
<style lang="scss" src="./header-search.scss"></style>
