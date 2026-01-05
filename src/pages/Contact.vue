<template>
  <section class="container narrow">
    <header class="page-head">
      <h1 class="h1">Contact</h1>
      <p class="muted">For inquiries, commissions, or prints.</p>
    </header>

    <div class="card">
      <!-- Contact Info -->
      <div class="contact-row">
        <div class="label">Email</div>
        <a class="link" :href="`mailto:${email}`">{{ email }}</a>
      </div>

      <div class="contact-row">
        <div class="label">Instagram</div>
        <a
          class="link"
          :href="instagramUrl"
          target="_blank"
          rel="noreferrer"
        >
          Follow
        </a>
      </div>

      <div class="divider"></div>

      <!-- Resume -->
      <div class="resume">
        <h2 class="resume-title">Resume</h2>

        <div class="resume-section">
          <p class="resume-contact">
            Nashville, Tennessee<br />
          </p>
        </div>

        <div class="resume-section">
          <div class="resume-heading">
            Exhibitions <span class="note">(*One Person Exhibitions)</span>
          </div>

          <p>
            <strong>2025</strong> — *Dual Perspectives, Tennessee State University
            Gallery; MNPS Art Teacher Exhibit<br />
            Art Between The Avenues, A Collaborative Art Event; The Arcade;
            Nashville, TN<br />
            Garden of Earthly Delights Gala; The COOP Gallery; Nashville, TN
          </p>

          <p>
            <strong>2024</strong> — New Members Exhibit; The COOP Gallery;
            Nashville, TN<br />
            Nashville Art Teacher Exhibit; Nashville State Community College;
            Nashville, TN
          </p>

          <p>
            <strong>2023</strong> — Fast Fluid Field; Group Exhibition; Nelson’s
            Drum Shop; Nashville, TN
          </p>

          <p>
            <strong>2021</strong> — Nashville Art Teachers: Beyond the Classroom;
            The Frist Art Museum; Nashville, TN
          </p>

          <p>
            <strong>2010</strong> — Studio Visits Magazine; Open Studio Press;
            Boston, MA
          </p>

          <p>
            <strong>2009</strong> — Those Who Can; Memphis College of Art;
            Memphis, TN<br />
            Artrageous; Nashville Cares Auction; Nashville, TN
          </p>

          <p>
            <strong>2006</strong> — Metro Nashville Art Educators Awards Exhibit;
            TPAC Ground Gallery; Nashville, TN<br />
            Metro Nashville Art Educators Exhibit; Cheekwood Museum of Art;
            Nashville, TN
          </p>

          <p>
            <strong>2005</strong> — Artrageous; Nashville Cares; Online Art
            Auction; Nashville, TN
          </p>

          <p>
            <strong>2003</strong> — Madison Art Center, Group Show; Nashville, TN<br />
            *Gallery at the Belcourt; Nashville, TN
          </p>

          <p>
            <strong>2002</strong> — Rumors Gallery; Group Show; Nashville, TN
          </p>

          <p>
            <strong>2000</strong> — What Is Drawing Now?; National Juried
            Competition; Weber State University; Ogden, UT
          </p>

          <p>
            <strong>1999</strong> — National Juried Two-Person Exhibition; Middle
            Tennessee State University; Murfreesboro, TN<br />
            *Volunteer State Community College; Gallatin, TN
          </p>

          <p>
            <strong>1997</strong> — *Center for the Arts; Murfreesboro, TN
          </p>

          <p>
            <strong>1996</strong> — 3rd National Painting Competition; St. John’s
            University; Jamaica, NY<br />
            Portfolio Show of Gallery Artists; Zeitgeist Gallery; Nashville, TN
          </p>

          <p>
            <strong>1994</strong> — Three Person Exhibition; AKA Gallery;
            Nashville, TN
          </p>

          <p>
            <strong>1992</strong> — *Cunningham Center; Vanderbilt University;
            Nashville, TN
          </p>
        </div>

        <div class="resume-section">
          <div class="resume-heading">Awards & Nominations</div>
          <p>
            National Consortium for Teaching About Asia; Study Tour to China;
            Summer 2010<br />
            Best Painting of Show; Metro Nashville Art Educators Exhibit;
            Cheekwood Museum of Art; Nashville, TN<br />
            Nominated Outstanding Tennessee Woman Artist; YWCA and the Tennessee
            State Museum; Nashville, TN<br />
            Fellowship; Virginia Commonwealth University; Richmond, VA
          </p>
        </div>

        <div class="resume-section">
          <div class="resume-heading">Collections</div>
          <p>
            Transfinancial Bank; Nashville, TN<br />
            Rising Tide Entertainment; Nashville, TN<br />
            Jody Faison; Nashville, TN
          </p>
        </div>

        <div class="resume-section">
          <div class="resume-heading">Education</div>
          <p>
            1986–1988 — Master of Fine Arts, Virginia Commonwealth University;
            Richmond, VA<br />
            1982–1986 — Bachelor of Fine Arts, Middle Tennessee State University;
            Murfreesboro, TN
          </p>
        </div>

        <div class="resume-section">
          <div class="resume-heading">Teaching</div>
          <p>
            1998–Present — MNPS Visual Art Teacher
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const email = "1hatlebergj@gmail.com";
const instagramUrl = "https://www.instagram.com/jhatlleberg/?igsh=a2l6dHJnY2ltam93#/";
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.25rem 1rem 3rem;
  font-family: inherit;
}

.narrow {
  max-width: 820px;
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
}

.muted {
  opacity: 0.75;
}

.card {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.06);
  padding: 1.25rem 1.25rem 1.1rem;
}

.contact-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1rem;
  align-items: center;
  padding: 0.85rem 0;
}

.label {
  font-size: 0.95rem;
  opacity: 0.75;
}

.link {
  font-size: 1.02rem;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  padding-bottom: 2px;
  width: fit-content;
}

.divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
  margin: 0.75rem 0 1rem;
}

.resume {
  margin-top: 0.75rem;
}

.resume-title {
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.resume-section {
  margin-bottom: 0.9rem;
}

.resume-heading {
  font-size: 0.92rem;
  font-weight: 500;
  opacity: 0.75;
  margin-bottom: 0.25rem;
}

.resume p {
  font-size: 0.98rem;
  line-height: 1.6;
  margin: 0 0 0.6rem;
  opacity: 0.9;
}

.resume-contact {
  font-size: 0.95rem;
  opacity: 0.85;
}

.note {
  font-size: 0.85rem;
  opacity: 0.7;
  font-weight: normal;
}

.nowrap {
  white-space: nowrap;
}

@media (max-width: 620px) {
  .contact-row {
    grid-template-columns: 1fr;
    gap: 0.35rem;
    padding: 0.9rem 0;
  }
}
</style>
