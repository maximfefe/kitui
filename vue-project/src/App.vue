<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="container mx-auto">
    <div class="navbar shadow rounded-box bg-base-200 mx-2 my-3">
      <div class="navbar-start">
        <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/">Générateur</RouterLink></li>
        <li><RouterLink to="/preview">Aperçu</RouterLink></li>
      </ul>
        <!-- <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/preview">Preview</RouterLink></li>
          </ul>
        </div> -->
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost normal-case text-xl">KitUI
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
        </a>
      </div>
    </div>  
  </header>

  <RouterView />
  
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
