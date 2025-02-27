<template>
    <HeaderComponent></HeaderComponent>
    <MainComponents></MainComponents>
    <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from './headerComponent.vue';
import FooterComponent from './footerComponent.vue';
import MainComponents from './mainComponents.vue';

export default {
    components: {
        HeaderComponent,
        MainComponents,
        FooterComponent
    }
    
}
</script>