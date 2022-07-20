<template>
    <div class="contact-item">
        <img class="contact-item__rectangle" :src="require(`@/assets/Rectangle-14.svg`)">
        <div class="contact-item__title"> {{ headertitle }}</div>
        <slot></slot>
        <RectangleButton class="contact-item__button" :title="btntitle" />
    </div>
</template>

<script lang="ts" src="./contact-item.ts">
</script>
<style lang="scss" src="./contact-item.scss">
</style>