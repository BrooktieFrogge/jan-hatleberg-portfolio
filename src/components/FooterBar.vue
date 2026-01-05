<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="muted">© {{ new Date().getFullYear() }} {{ artistName }}</div>
      <div class="muted">
        <a class="link" href="mailto:1hatlebergj@gmail.com">1hatlebergj@gmail.com</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const artistName = "Jan Hatleberg"; 
</script>
