<template>
  <section class="home">
    <!-- Full-bleed hero -->
    <div class="hero-wrap reveal" ref="heroEl" aria-label="Featured artwork">
      <img class="hero" src="/images/homepage.jpg" alt="Featured artwork" />
    </div>

    <!-- Content -->
    <div class="content">
      <div class="statement reveal" ref="statementEl">
        <h1 class="title">Artist Statement</h1>

        <p>
          Like many abstract artists, the absence of concrete subject matter forces me to spend more
          time contemplating how I will work. I allow the work to reveal itself to me, to see how all aspects
          of the painting interact. I do not have preliminary sketches because the work changes as I
          progress. I want to be open to what I see happening. Although I do not put objects in my work, I
          do draw quite a bit to develop the language of form and line, which eventually finds itself into the
          paintings. How the drawings translate to the paintings is organic and spontaneous.
        </p>

        <p>
          I use the traditional abstract tools such as mark making and color to communicate with the
          viewer. I use various mark making techniques and tools, whether with a pencil, brush, or my
          hand. At this time I am exploring the possibilities of light through the contrast of dark and light
          values with color. I apply multiple layers of color while creating my works, allowing a rich, deeper
          color to be on the surface of the painting. Layers of color to come through to the surface, much
          like a veil to be revealed.
        </p>

        <p>
          While making my works, I utilize the visual vocabulary of Rothko, Turner, Martin, among others,
          to inform my use of color, while the lyricism that runs through the work is my own.
        </p>
      </div>

      <!-- Side column -->
      <aside class="side" aria-label="Selected paintings">
        <figure
          v-for="(p, idx) in paintings"
          :key="p.src"
          class="painting reveal"
          :ref="(el) => setPaintingRef(el, idx)"
        >
          <img class="painting-img" :src="p.src" :alt="p.alt" loading="lazy" />
          <figcaption v-if="p.caption" class="caption">{{ p.caption }}</figcaption>
        </figure>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";


const paintings = [
  {
    src: "/images/mompic.JPG",
    alt: "Picture of the artist Jan Hatleberg",
    caption: "Teacher Exhibition at the Frist Art Museum 2022",
  },
  {
    src: "/Users/brooktiefrogge/Documents/mom-artist-site/public/images/HatlebergJan_Breaking_16_X 12__Acrylic on Panel_2025.jpg",
    alt: "Painting Breaking, 16 x 12, Acrylic on Panel, 2025",
    caption: "Breaking, 16 x 12, Acrylic on Panel, 2025",
  },
];

const heroEl = ref(null);
const statementEl = ref(null);

// Store refs for the v-for figures
const paintingEls = ref([]);
function setPaintingRef(el, idx) {
  if (!el) return;
  paintingEls.value[idx] = el;
}

let observer;

function observeReveal(el) {
  if (!el || !observer) return;
  observer.observe(el);
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  // reveal targets
  observeReveal(heroEl.value);
  observeReveal(statementEl.value);
  paintingEls.value.forEach(observeReveal);
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
/* Keep your site header/buttons untouched: scoped styles affect ONLY this page */
.home {
  padding-bottom: 2.5rem;

  /* Ensure statement + captions use the same font as the rest of your site */
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.hero-wrap {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 0;
}

.hero {
  width: 100%;
  height: 68vh;     /* tweak 60–75vh to taste */
  object-fit: cover;
  display: block;
  border-radius: 0;
}

/* Layout like the reference: generous whitespace, clean column rhythm */
.content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.25rem 1rem 0;
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.statement {
  flex: 1;
  min-width: 0;
  font-family: inherit; /* enforce consistency */
}

/* Typography closer to the reference screenshot */
.title {
  font-family: inherit; /* do NOT introduce a new font */
  font-size: 2.15rem;
  font-weight: 500;
  margin: 0 0 1.25rem;
  letter-spacing: 0.2px;
  line-height: 1.2;
}

.statement p {
  font-family: inherit;
  line-height: 1.75;
  margin: 0 0 1.05rem;
  font-size: 1.05rem;
  opacity: 0.92;
}

/* Sticky right rail like reference */
.side {
  width: min(420px, 40%);
  position: sticky;
  top: 1.5rem;
}

.painting {
  margin: 0 0 1.5rem;
}

.painting-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.caption {
  margin-top: 0.55rem;
  font-family: inherit;
  font-size: 0.92rem;
  opacity: 0.78;
  text-align: center;
}


.reveal {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 520ms ease, transform 520ms ease;
  will-change: opacity, transform;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .reveal {
    transition: none;
    transform: none;
    opacity: 1;
  }
}

/* Mobile: stack */
@media (max-width: 860px) {
  .hero {
    height: 46vh;
  }

  .content {
    flex-direction: column;
    gap: 1.75rem;
    padding-top: 1.75rem;
  }

  .side {
    width: 100%;
    position: static;
  }
}
</style>
