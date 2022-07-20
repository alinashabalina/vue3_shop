<template>
    <div class="contact-info">
        <img class="contact-info__logos" :src="require(`@/assets/logotypes.svg`)">
        <div class="contact-info__items">
            <ContactItem class="contact-info__item" headertitle="О нас" btntitle="Подробнее о нас">
                    <div class="contact-info__text">
                        <p>Огромный выбор гаджетов не оставит равнодушным гика,
                            который есть в каждом из нас.</p>

                        <p>Мы можем доставить ваш товар в самые отдаленные точки
                            России! DEVICE работает со многими транспортными компаниями:</p>

                        <ul class="contact-info__group-list">
                            <li><span class="contact-info__group-item">Деловые линии</span></li>
                            <li><span class="contact-info__group-item">Автотрейдинг</span></li>
                            <li><span class="contact-info__group-item">ЖелДорЭкспедиция</span></li>
                        </ul>
                    </div>
            </ContactItem>
            <ContactItem class="contact-info__item contact-info__item--right" headertitle="Контакты"
                btntitle="Напишите нам">
                    <div class="contact-info__text">
                        <p>Вы можете забрать товар сами, заехав в наш офис. Заодно, вы сможете
                            проверить работоспособность покупки. Всякое бывает.</p>
                        <div class="contact-info__map"><iframe width="560" height="222" frameborder="0" scrolling="no"
                                marginheight="0" marginwidth="0"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=37.52454400062562%2C55.68460113856969%2C37.5345540046692%2C55.689106907491535&amp;layer=mapnik&amp;marker=55.68685408792824%2C37.5295490026474"
                                style="border: none"></iframe></div>
                    </div>
            </ContactItem>
        </div>
    </div>
</template>

<script lang="ts" src="./contact-info.ts">
</script>
<style lang="scss" src="./contact-info.scss">
</style>