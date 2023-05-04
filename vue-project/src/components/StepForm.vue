<template>
    <div class="flex content-center">
      <ul class="steps w-3/5 m-auto	">
            <!-- <li class="step step-primary">
                <router-link active-class="bg-primary" to="/component/button">button</router-link>
            </li>
            <li class="step">
                <router-link active-class="bg-primary" to="/component/card">card</router-link>
            </li> -->
        <slot name="content"></slot>
      </ul>
    </div>
</template>