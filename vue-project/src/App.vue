<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DownloadButton from "@/components/DownloadButton.vue";
import ModalAlert from "@/components/ModalAlert.vue";
</script>

<template>
  <header class="container mx-auto">
    <div class="navbar shadow rounded-box bg-base-200  my-3">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
            <li><RouterLink to="/">Accueil</RouterLink></li>
            <li><RouterLink to="/preview">Aperçu</RouterLink></li>
            <li><DownloadButton /></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <RouterLink to="/" class="btn btn-ghost normal-case text-xl">
          <img alt="Vue logo" class="logo-content" src="@/assets/KitUILogo.svg" width="100" height="100" />
        </RouterLink>
      </div>
      <div class="navbar-end"> 
        <div class="tooltip tooltip-left me-2" data-tip="Un bug ? N'hésitez pas à nous écrire">
          <a href="https://debugme.krowon.fr/ticket-new" class="btn btn-xs btn-primary">?</a>
        </div>
      </div>
    </div>  
  </header>
  <RouterView />
  <ModalAlert/>
  
</template>
