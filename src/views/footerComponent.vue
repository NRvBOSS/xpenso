<template>
  <div id="app">
    <main>
      <div>hello</div>
    </main>
    <footer>
      <p>
        Contact me:
        <a href="mailto:nrvcorporation@gmail.com">nrvcorporation@gmail.com</a>
      </p>
      <a
        href="https://www.linkedin.com/in/%C9%99lih%C3%BCseyn-ba%C4%9F%C4%B1rov-b46315267/"
        class="footer-logo-container"
      >
        <img
          src="../views/photos/174857.png"
          alt="LinkedIn Profile"
          class="footer-logo"
        />
      </a>
      <div class="footer-separator"></div>
      <p class="footer-text">
        &copy; {{ currentYear }} xPenso | Powered by Nirvana Corporation
      </p>
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
#app {
  display: flex;
  flex-direction: column;
  min-height: 60vh;
}

main {
  flex-grow: 1;
}

footer {
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #70b364;
  color: white;
  width: 100%;
  position: absolute;
  z-index: -1;
  left: 0;
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
  background-color: white;
  border-radius: 4px;
}

.footer-separator {
  flex-grow: 1;
  height: 2px;
  background-color: white;
  margin: 0 10px;
}

.footer-text {
  white-space: nowrap;
}
</style>
