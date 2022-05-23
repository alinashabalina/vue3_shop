<template>
  <div class="header">
    <div class="header__rectangle">
      <img
        class="header__rectangle-logo"
        :src="require('@/assets/-e-logo.svg')"
      />
      <HeaderSearch :icon="require('@/assets/icon_search.svg')"></HeaderSearch>
      <div class="header__rectangle-menu">
        <div class="header__rectangle-menu--item1">
          <HeaderButton
            title="Войти"
            :icon="require('@/assets/icon_user.svg')"
          />
        </div>
        <div class="header__rectangle-menu--item2">
          <HeaderButton
            title="Сравнить"
            :icon="require('@/assets/icon_chart.svg')"
          />
        </div>
        <div class="header__rectangle-menu--item3">
          <HeaderButton
            title="Корзина"
            :icon="require('@/assets/icon_cart.svg')"
          />
        </div>
      </div>
      <div class="header__rectangle-secondarymenu">
        <div class="header__rectangle-secondarymenu--item1">
          <button>Каталог товаров</button
          ><img
            class="header__rectangle-secondarymenu--item1---pic"
            :src="require('@/assets/icon_plus.svg')"
          />
        </div>
        <button class="header__rectangle-secondarymenu--item2">Доставка</button>
        <button class="header__rectangle-secondarymenu--item3">Гарантия</button>
        <button class="header__rectangle-secondarymenu--item4">Контакты</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./page-header.ts"></script>
<style lang="scss" src="./page-header.scss"></style>
