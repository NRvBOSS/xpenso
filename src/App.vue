<template>
    <my-header></my-header>
</template>

<script>
import Header from './components/header.vue';
import loginPanel from '@/components/loginPanel.vue'

export default {
  components: {
    "my-header": Header,
    "login-panel": loginPanel
  }
}

</script>