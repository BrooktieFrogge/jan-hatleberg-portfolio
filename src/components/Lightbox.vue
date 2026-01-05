<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="item?.title ? `Artwork: ${item.title}` : 'Artwork viewer'"
      @click.self="$emit('close')"
    >
      <div class="lightbox-inner">
        <button class="btn" type="button" @click="$emit('close')">Close</button>

        <figure class="lightbox-figure">
          <img
            class="lightbox-img"
            :src="item?.image"
            :alt="item?.title || 'Artwork'"
          />

          <figcaption class="lightbox-caption">
            <div class="title">{{ item?.title }}</div>

            <div class="meta">
              <span v-if="item?.year">{{ item.year }}</span>
              <span v-if="item?.medium"> • {{ item.medium }}</span>
              <span v-if="item?.size"> • {{ item.size }}</span>
            </div>

            <!-- Optional: description if you have it in your paintings data -->
            <p v-if="item?.description" class="desc">
              {{ item.description }}
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from "vue";

defineProps({
  open: Boolean,
  item: Object,
});
const emit = defineEmits(["close"]);

function onKeydown(e) {
  if (e.key === "Escape") emit("close");
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));
</script>

<style scoped>
/* Overlay */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  display: grid;
  place-items: center;
  padding: 1.25rem;
  z-index: 9999;
  font-family: inherit; /* keep fonts consistent */
}

/* Inner panel */
.lightbox-inner {
  width: min(980px, 100%);
  background: rgba(255, 255, 255, 0.96);
  border-radius: 14px;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  position: relative;
}

/* Close button */
.btn {
  position: absolute;
  top: 12px;
  right: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: rgba(255, 255, 255, 0.92);
  border-radius: 999px;
  padding: 0.5rem 0.85rem;
  cursor: pointer;
  font-family: inherit;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
}

.btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.12), 0 10px 18px rgba(0, 0, 0, 0.12);
}

/* Figure layout */
.lightbox-figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
}

/* Image sizing */
.lightbox-img {
  width: 100%;
  height: auto;
  max-height: 78vh;          /* keeps it on screen */
  object-fit: contain;       /* no cropping in modal */
  display: block;
  background: rgba(0, 0, 0, 0.04);
}

/* Caption */
.lightbox-caption {
  padding: 1rem 1.15rem 1.25rem;
  text-align: center;
  font-family: inherit;
}

.title {
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 0.35rem;
  letter-spacing: 0.2px;
  font-family: inherit;
}

.meta {
  font-size: 0.95rem;
  opacity: 0.78;
  font-family: inherit;
}

.desc {
  margin: 0.85rem auto 0;
  max-width: 62ch;
  line-height: 1.65;
  font-size: 1rem;
  opacity: 0.9;
  font-family: inherit;
}

/* Mobile tweaks */
@media (max-width: 620px) {
  .lightbox {
    padding: 0.75rem;
  }
  .lightbox-img {
    max-height: 72vh;
  }
}
</style>
