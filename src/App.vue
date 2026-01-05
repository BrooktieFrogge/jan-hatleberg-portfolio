<template>
  <div class="page">
    <header class="header">
      <h1 class="site-title">JAN HATLEBERG</h1>

      <nav class="nav">
        <RouterLink to="/" class="nav-link" active-class="is-active">home</RouterLink>
        <RouterLink to="/portfolio" class="nav-link" active-class="is-active">portfolio</RouterLink>
        <RouterLink to="/student-work" class="nav-link" active-class="is-active">contact</RouterLink>
      </nav>
    </header>

    <main class="content">
      <RouterView />
    </main>

    <footer class="footer">
      <span>© {{ new Date().getFullYear() }} Jan Hatleberg</span>
    </footer>
  </div>
</template>
