<template>
  <footer class="footer">
    <img class="footer__logo" :src="require('@/assets/-e-logo-y.svg')" />
    <div class="footer__menu-secondary">
      <div class="footer__menu-secondary-item--noauth">
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
    <address class="footer__address">г. Москва, ул. Строителей, 15</address>
    <address class="footer__tel">Тел.: +7 (495) 495-95-95</address>
    <div class="footer__menu-main">
      <button class="footer__menu-main-item">Доставка</button>
      <button class="footer__menu-main-item">Гарантия</button>
      <button class="footer__menu-main-item">Контакты</button>
    </div>
    <img class="footer__rectangle" :src="require('@/assets/Rectangle 15.svg')" />
    <div class="footer__socials">
      <img
        class="footer__socials-icon"
        :src="require('@/assets/icon_witter.svg')"
      />
      <img
        class="footer__socials-icon"
        :src="require('@/assets/icon_book.svg')"
      />
      <img
        class="footer__socials-icon"
        :src="require('@/assets/icon_gram.svg')"
      />
    </div>
  </footer>
</template>

<script lang="ts" src="./page-footer.ts"></script>
<style lang="scss" src="./page-footer.scss"></style>
