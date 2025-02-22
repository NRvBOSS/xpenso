<template>
  <div class="container">
    <button @click="showModal = true" class="login-button">Login</button>

    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h2>Welcome</h2>
        <p>Sign into your account.</p>

        <label>Email</label>
        <input type="email" v-model="email" placeholder="johndoe@work.com" />

        <label>Password</label>
        <input type="password" v-model="password" placeholder="********" />

        <a href="#">Forgot Password?</a>

        <button @click="submitLogin" class="submit-button">Submit</button>

        <p>Or Sign in with:</p>
        <div class="social-buttons">
          <button>Google</button>
          <button>LinkedIn</button>
          <button>GitHub</button>
        </div>

        <p>Not registered yet? <a href="#">Sign Up Now</a></p>

        <button @click="showModal = false" class="close-button">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      email: "",
      password: "",
    };
  },
  methods: {
    submitLogin() {
      alert(`Logging in as ${this.email}`);
      this.showModal = false;
    }
  }
};
</script>

<style scoped>

.container {
  text-align: center;
  margin-top: 50px;
}
.login-button {
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}
input {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.submit-button {
  background: #007bff;
  color: white;
  padding: 10px;
  border: none;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}
.close-button {
  background: #dc3545;
  color: white;
  padding: 10px;
  border: none;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}
.social-buttons button {
  margin: 5px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
</style>
