<template>
  <section class="container">
    <header class="page-head">
      <h1 class="h1">Portfolio</h1>
      <p class="muted">Click a work to view details.</p>
    </header>

    <div class="gallery-grid" role="list">
      <button
        v-for="p in paintings"
        :key="p.id"
        class="tile"
        type="button"
        role="listitem"
        @click="openItem(p)"
      >
        <div class="thumb">
          <img class="tile-img" :src="p.image" :alt="p.title" loading="lazy" />
        </div>

        <div class="tile-meta">
          <div class="tile-title">{{ p.title }}</div>
          <div class="tile-sub muted">
            <span v-if="p.year">{{ p.year }}</span>
            <span v-if="p.medium"> • {{ p.medium }}</span>
            <span v-if="p.size"> • {{ p.size }}</span>
          </div>
        </div>
      </button>
    </div>

    <Lightbox :open="lightboxOpen" :item="active" @close="close" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import Lightbox from "../components/Lightbox.vue";
import { paintings } from "../data/paintings"; // <- make sure this exists

const lightboxOpen = ref(false);
const active = ref(null);

function openItem(p) {
  active.value = p;
  lightboxOpen.value = true;
}

function close() {
  lightboxOpen.value = false;
  active.value = null;
}
</script>

<style scoped>
/* Keep fonts consistent with the rest of your site */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.25rem 1rem 3rem;
  font-family: inherit;
}

.page-head {
  margin-bottom: 1.5rem;
}

.h1 {
  margin: 0 0 0.35rem;
  font-size: 2.15rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.2px;
  font-family: inherit;
}

.muted {
  opacity: 0.75;
}

/* ✅ 3-per-row gallery grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

/* Card/tile */
.tile {
  text-align: left;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  padding: 0;
  background: rgba(255, 255, 255, 0.92);
  overflow: hidden;
  cursor: pointer;

  /* Smooth interactions */
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);
}

/* Image area */
.thumb {
  width: 100%;
  aspect-ratio: 4 / 3; /* consistent “gallery” look */
  overflow: hidden;
  background: rgba(0, 0, 0, 0.03);
}

.tile-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* crops nicely without distortion */
  display: block;
  transform: scale(1);
  transition: transform 220ms ease;
}

/* Text */
.tile-meta {
  padding: 0.9rem 0.95rem 1.05rem;
  font-family: inherit;
}

.tile-title {
  font-family: inherit;
  font-size: 1.02rem;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 0.25rem;
}

.tile-sub {
  font-family: inherit;
  font-size: 0.92rem;
  line-height: 1.35;
}

/* Hover/focus (clickable cue) */
.tile:hover {
  transform: translateY(-3px);
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.10);
}

.tile:hover .tile-img {
  transform: scale(1.03);
}

.tile:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.12), 0 14px 32px rgba(0, 0, 0, 0.10);
}

/* Responsive */
@media (max-width: 980px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
