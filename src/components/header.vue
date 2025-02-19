<template>
  <div class="header">
    <h1>xPenso</h1>
    <nav>
    <button v-on:click="showLogin = true" class="header-button">Sign Up</button>
    </nav>
    <loginPanel v-if="showLogin" v-on:close="showLogin = false"/>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #70B364;
  padding: 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

h1 {
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 0;
}

.header-button {
  background-color: #fff;
  color: #70B364;
  border: 2px solid #70B364;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;
  margin-right: 30px;
}

.header-button:hover {
  background-color: #70B364;
  color: #fff;
}

body {
  padding-top: 60px;
}
</style>

<script>
import loginPanel from './loginPanel.vue';

export default {
  components: { loginPanel },
  data() {
    return {
      showLogin: false,
    };
  },
}

</script>
