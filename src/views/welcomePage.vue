<template>
  <div class="container">
    <h1 class="fade-in title">Welcome to xPenso</h1>
    <p class="fade-in description">
      Welcome to xPenso - your smart finance tracker! Easily monitor your
      income, track expenses, and optimize your budget. Stay in control of your
      financial future today!
    </p>
    <p class="fade-in description" style="animation-delay: 0.5s">
      Let's start follow your expenses!
    </p>
    <button @click="showLoginModal = true" class="login-button"
    style="animation-delay: 0.75s">Login!</button>
    
    <button @click="showSignUpModal = true" 
    class="signup-button"
    style="animation-delay: 1s">Sign Up!</button>
  </div>



  <div class="modal-button">
    <div v-if="showLoginModal" class="login-modal-overlay">
      <div class="login-modal">
        <h2>Login!</h2>
        <p>Login into your account.</p>

        <label>Name</label>
        <input type="name" v-model="name" placeholder="John Doe" />

        <label>Email</label>
        <input type="email" v-model="email" placeholder="johndoe@work.com" />

        <label>Password</label>
        <input type="password" v-model="password" placeholder="********" />

        <!-- <a href="#">Forgot Password?</a> -->
        <button @click="submitLogin" class="submit-button">Login</button>

        <!-- <p>Or Sign in with:</p>
        <div class="social-buttons">
          <button>Google</button>
          <button>LinkedIn</button>
          <button>GitHub</button>
        </div>

        <p>Not registered yet? <a href="#">Sign Up Now</a></p> -->

        <span @click="showLoginModal = false" class="close-button">&times;</span>
      </div>
    </div>
  </div>



  <div class="modal-button">
    <div v-if="showSignUpModal" class="signup-modal-overlay">
      <div class="signup-modal">
        <h2>Sign Up</h2>
        <p>Sign into your account.</p>

        <label>Name</label>
        <input type="name" v-model="name" placeholder="John Doe" />

        <label>Email</label>
        <input type="email" v-model="email" placeholder="johndoe@work.com" />

        <label>Password</label>
        <input type="password" v-model="password" placeholder="********" />

        <!-- <a href="#">Forgot Password?</a> -->
        <button @click="submitLogin" class="submit-button">Sign Up</button>

        <!-- <p>Or Sign in with:</p>
        <div class="social-buttons">
          <button>Google</button>
          <button>LinkedIn</button>
          <button>GitHub</button>
        </div>

        <p>Not registered yet? <a href="#">Sign Up Now</a></p> -->

        <span @click="showSignUpModal = false" class="close-button">&times;</span>
      </div>
    </div>
  </div>



</template>

<script>
export default {
  name: "firstPage",
  data() {
    return {
      showLoginModal: false,
      showSignUpModal: false,
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submitLogin() {
      // alert(`Logging in as ${this.email}`);
      // this.showModal = false;
      this.$router.push("/main");
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
  margin: 20px;
  padding: 10px 30px;
  background: #70b364;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

.login-button:hover {
  background: #497e40;
  transition: background 0.5s;
}

.signup-button {
  padding: 10px 20px;
  background: #a2933b ;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
  animation-delay: 1s;
}

.signup-button:hover {
  background: #7a6a2e;
  transition: background 0.5s;
}

.login-modal-overlay {
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

.login-modal {
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
}

.signup-modal-overlay {
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

.signup-modal {
  position: relative;
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
  background: white;
  color: black;
  padding: 10px;
  border: none;
  width: 20px;
  cursor: pointer;
  border-radius: 20px;
  top: 10px;
  right: 10px;
  position: absolute;
  float: right;
  font-size: 20px;
}

.close-button:hover {
  background: red;
  transition: background 0.5s;

}

/* .social-buttons button {
  margin: 5px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
} */
</style>
