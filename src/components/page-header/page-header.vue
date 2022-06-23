<template>
  <header class="header">
    <div class="header__rectangle">
      <img
        class="header__rectangle-logo"
        :src="require('@/assets/-e-logo.svg')"
      />
      <HeaderSearch
        class="header__search-field"
        :icon="require('@/assets/icon_search.svg')"
      ></HeaderSearch>
      <div class="header__rectangle-menu">
        <div class="header__rectangle-menu-item0">
          <MenuButton title="Имя Фамилия" icon="icon_user" mode="dark" />
        </div>
        <div class="header__rectangle-menu-item1">
          <MenuButton title="Войти" icon="icon_user" mode="dark" />
        </div>
        <div class="header__rectangle-menu-spring12" />
        <div class="header__rectangle-menu-item2">
          <MenuButton title="Сравнить" icon="icon_chart" mode="dark" />
        </div>
        <div class="header__rectangle-menu-item3">
          <MenuButton title="Корзина" icon="icon_cart" mode="dark" />
        </div>
      </div>
      <div class="header__rectangle-secondarymenu">
        <div class="header__rectangle-secondarymenu-item1">
          <button>Каталог товаров</button
          ><img
            class="header__rectangle-secondarymenu-item1-pic"
            :src="require('@/assets/icon_plus.svg')"
          />
        </div>
        <div class="header__rectangle-secondarymenu-spring12" />
        <button class="header__rectangle-secondarymenu-item2">Доставка</button>
        <button class="header__rectangle-secondarymenu-item3">Гарантия</button>
        <button class="header__rectangle-secondarymenu-item4">Контакты</button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" src="./page-header.ts"></script>
<style lang="scss" src="./page-header.scss"></style>
