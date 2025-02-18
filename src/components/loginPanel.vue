<template>
  <div class="wrapper">
    <div class="container">
      <h1>Create Account</h1>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="budget" placeholder="Budget" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: black;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 80px;
  border: 1px solid #ccc;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#70B364;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>

