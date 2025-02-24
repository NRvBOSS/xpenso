<template>
  <footer>
    <p>
        Contact me: <a href="mailto"></a>
    </p>
    <a href="https://www.linkedin.com/in/%C9%99lih%C3%BCseyn-ba%C4%9F%C4%B1rov-b46315267/" class="footer-logo-container">
      <img src="../views/photos/174857.png" alt="logo" class="footer-logo" />
    </a>
    <div class="footer-separator"></div>
    <p class="footer-text">&copy; {{ currentYear }} xPenso | Powered by Nirvana Corporation</p>
  </footer>
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
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: #70b364;
  padding: 0.5rem 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
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
