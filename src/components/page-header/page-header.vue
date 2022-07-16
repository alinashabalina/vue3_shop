<template>
  <header class="header">
    <div class="header__rectangle">
      <img class="header__rectangle-logo" :src="require('@/assets/-e-logo.svg')">
      <div class="header__rectangle-wrapper">
        <HeaderSearch class="header__search-field" :icon="require('@/assets/icon_search.svg')"></HeaderSearch>
        <div class="header__rectangle-menu">
          <div class="header__rectangle-menu-item header__rectangle-menu-item--noauth">
            <MenuButton title="Имя Фамилия" icon="icon_user" mode="dark" />
          </div>
          <div class="header__rectangle-menu-item">
            <MenuButton title="Войти" icon="icon_user" mode="dark" />
          </div>
          <div class="header__rectangle-menu-item header__rectangle-menu-item--compare">
            <MenuButton title="Сравнить" icon="icon_chart" mode="dark" />
          </div>
          <div class="header__rectangle-menu-item">
            <MenuButton title="Корзина" icon="icon_cart" mode="dark" />
          </div>
        </div>
      </div>

      <div class="header__rectangle-secondarymenu">
        <div class="header__rectangle-secondarymenu-item header__rectangle-secondarymenu-item--choose">
          <button>Каталог товаров<img class="header__rectangle-secondarymenu-item-pic"
              :src="require('@/assets/icon_plus.svg')" />
          </button>
        </div>
        <button class="header__rectangle-secondarymenu-item">Доставка</button>
        <button
          class="header__rectangle-secondarymenu-item header__rectangle-secondarymenu-item--warranty">Гарантия</button>
        <button class="header__rectangle-secondarymenu-item header__rectangle-secondarymenu-item">Контакты</button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" src="./page-header.ts"></script>
<style lang="scss" src="./page-header.scss">
</style>
