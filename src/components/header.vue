<template>
    <div class="header">
      <h1>xPenso</h1>
      <router-link>
        <button class="header-button">Account</button>
      </router-link>
    </div>
  </template>
  
  <style scoped>
  h1 {
    text-align: left;
    color: white;
    padding: 10px;
    border-radius: 10px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #70B364;
    padding: 20px;
    border: 0px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
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
  export default {
    name: 'headerComponent',
  }
  </script>