<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Download from "@/components/Download.vue";
</script>

<template>
  <header class="container mx-auto">
    <div class="navbar shadow rounded-box bg-base-200 mx-2 my-3">
      <div class="navbar-start">
        <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/">Générateur</RouterLink></li>
        <li><RouterLink to="/preview">Aperçu</RouterLink></li>
        <li><Download /></li>
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
