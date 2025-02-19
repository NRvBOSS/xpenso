<template>
  <div class="modal-overlay">
    <div class="modal">
      <button class="close-btn" @click="$emit('close')">X</button>
      <h1>Create Account</h1>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="number" placeholder="Budget" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPanel',
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  max-width: 600px;
  padding: 50px 80px;
  background-color: #70B364;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: red;
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 10px;
}

h1 {
  text-align: center;
  color: black;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
