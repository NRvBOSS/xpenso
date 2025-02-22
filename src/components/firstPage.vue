<template>
  <div class="container">
    <h1 class="fade-in title">Welcome to xPenso</h1>
    <p class="fade-in description">
      Welcome to xPenso - your smart finance tracker! Easily monitor your
      income, track expenses, and optimize your budget. Stay in control of your
      financial future today!
    </p>
    <p class="fade-in description" style="animation-delay: 0.75s">
      Let's start follow your expenses!
    </p>
    <button @click="showModal = true" class="login-button">Sign Up!</button>
  </div>
  <div class="modal-button">
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h2>Sign Up</h2>
        <p>Sign into your account.</p>

        <label>Name</label>
        <input type="name" v-model="name" placeholder="John Doe" />

        <label>Email</label>
        <input type="email" v-model="email" placeholder="johndoe@work.com" />

        <label>Password</label>
        <input type="password" v-model="password" placeholder="********" />

        <!-- <a href="#">Forgot Password?</a> -->

        <button @click="submitLogin" class="submit-button">Submit</button>

        <!-- <p>Or Sign in with:</p>
        <div class="social-buttons">
          <button>Google</button>
          <button>LinkedIn</button>
          <button>GitHub</button>
        </div>

        <p>Not registered yet? <a href="#">Sign Up Now</a></p> -->

        <button @click="showModal = false" class="close-button">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "firstPage",
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
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

.title {
  color: #70b364;
  font-size: 3em;
  margin-top: 30px;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

.description {
  color: #a2933b;
  font-size: 1.8em;
  margin-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
  animation-delay: 0.5s;
  text-align: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-button {
  text-align: center;
  margin-top: 50px;
}

.login-button {
  padding: 10px 20px;
  background: #70b364;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
  animation-delay: 1s;
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
  width: 400px;
  text-align: center;
}

input {
  width: 90%;
  padding: 8px;
  margin: 10px 0 ;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background: #70b364;
  color: white;
  cursor: pointer;
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
