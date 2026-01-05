<template>
  <header class="nav">
    <div class="nav-inner">
      <router-link class="brand" to="/">
        <span class="brand-name">{{ artistName }}</span>
      </router-link>

      <button
        class="nav-toggle"
        type="button"
        aria-label="Toggle menu"
        :aria-expanded="open ? 'true' : 'false'"
        @click="open = !open"
      >
        Menu
      </button>

      <nav class="nav-links" :data-open="open">
        <router-link class="nav-link" to="/gallery" @click="open = false">Gallery</router-link>
        <router-link class="nav-link" to="/about" @click="open = false">About</router-link>
        <router-link class="nav-link" to="/contact" @click="open = false">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const artistName = "Home";
const open = ref(false);
</script>
