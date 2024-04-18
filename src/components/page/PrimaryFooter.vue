<script setup lang="ts"></script>
<template>
  <footer class="h-60 bg-white-100">
    <div class="container mx-auto h-full flex items-center justify-between">
      <div class="logo flex">
        <h2 class="valley">Valley</h2>
        <h2 class="route">Route</h2>
      </div>
      <div class="contact">
        <div class="flex justify-center items-center gap-5">
          <a href="https://www.linkedin.com/in/santiago-castro-tabares/" target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/sacastrot" target="_blank">
            <i class="bi bi-github"></i>
          </a>
        </div>
        <div class="author">
          <p>Santiago Castro Tabares</p>
          <p class="credits">Imáges de Freepik</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  h2 {
    font-family: 'Anton', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  .valley {
    color: theme('colors.ochre');
  }
}
.contact {
  i {
    font-size: 2.5rem;
  }
  a {
    color: theme('colors.black.DEFAULT');
  }
  .author {
    .credits {
      font-size: 1rem;
    }
  }
}
</style>
