<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <img class="footer__logo" :src="require('@/assets/-e-logo-y.svg')">
      <div class="footer__menu-secondary">
        <div class="footer__menu-secondary-item footer__menu-secondary-item--noauth">
          <MenuButton title="Имя Фамилия" icon="icon_user" mode="light" />
        </div>
        <div class="footer__menu-secondary-item">
          <MenuButton title="Войти" icon="icon_user" mode="light" />
        </div>
        <div class="footer__menu-secondary-item">
          <MenuButton title="Сравнить" icon="icon_chart" mode="light" />
        </div>
        <div class="footer__menu-secondary-item">
          <MenuButton title="Корзина" icon="icon_cart" mode="light" />
        </div>
      </div>
    </div>
    <div class="footer__wrapper footer__wrapper--spacebetween footer__wrapper--secondrow">
      <address class="footer__address">г. Москва, ул. Строителей, 15</address>
      <div class="footer__menu-main">
        <button class="footer__menu-main-item">Доставка</button>
        <button class="footer__menu-main-item">Гарантия</button>
        <button class="footer__menu-main-item">Контакты</button>
      </div>
      <address class="footer__tel">Тел.: +7 (495) 495-95-95</address>
    </div>

    <div class="footer__wrapper footer__wrapper--spacebetween">
      <img class="footer__rectangle" :src="require('@/assets/Rectangle 15.svg')">

      <div class="footer__socials">
        <img class="footer__socials-icon" :src="require('@/assets/icon_witter.svg')">
        <img class="footer__socials-icon" :src="require('@/assets/icon_book.svg')">
        <img class="footer__socials-icon" :src="require('@/assets/icon_gram.svg')">
      </div>
      <img class="footer__logo-html" :src="require('@/assets/logo-html.svg')">
    </div>
  </footer>
</template>

<script lang="ts" src="./page-footer.ts"></script>
<style lang="scss" src="@/stylesheets/layout/_page-footer.scss">
</style>
