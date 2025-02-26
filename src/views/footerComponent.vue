<template>
  <div id="app">
    <main>
      <!-- Burada saytın əsas məzmunu olacaq -->
    </main>
    <footer>
      <p>
        Contact me: <a href="mailto:nrvcorporation@gmail.com">nrvcorporation@gmail.com</a>
      </p>
      <a href="https://www.linkedin.com/in/%C9%99lih%C3%BCseyn-ba%C4%9F%C4%B1rov-b46315267/" class="footer-logo-container">
        <img src="../views/photos/174857.png" alt="LinkedIn Profile" class="footer-logo" />
      </a>
      <div class="footer-separator"></div>
      <p class="footer-text">&copy; {{ currentYear }} xPenso | Powered by Nirvana Corporation</p>
    </footer>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "AppFooter",
  setup() {
    const currentYear = computed(() => new Date().getFullYear());
    return { currentYear };
  },
};
</script>

<style>
/* Sayfanın ümumi hündürlüyünü 100vh edirik */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}

/* Məzmun yerini tam doldurur */
main {
  flex-grow: 1;
}

/* Footer səhifənin altına yaxın olur */
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: #70b364;
  padding: 0.5rem 1rem;
  width: 100%;
  position: relative;
  bottom: 0;
}

p {
  margin: 30px;
}

.footer-logo-container {
  display: flex;
  align-items: center;
}

.footer-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 20px;
}

.footer-separator {
  flex-grow: 1;
  height: 1px;
  background-color: white;
  margin: 0 10px;
}

.footer-text {
  white-space: nowrap;
}
</style>
