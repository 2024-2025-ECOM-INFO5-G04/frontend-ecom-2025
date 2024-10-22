<template>
  <div class="d-flex align-items-center" style="height: 100%">
    <div class="container text-center">
      <img :src="'/content/images/salades.webp'" alt="Error Icon" style="height: 25vh" />
      <div v-if="errorMessage">
        <div class="alert alert-danger">{{ errorMessage }}</div>
      </div>
      <div v-if="error403" class="alert alert-danger font-weight-bold" v-text="t$('error.http.403')"></div>
      <div v-if="error404" class="text-align font-weight-bold" v-text="t$('error.http.404')"></div>

      <div class="mt-3">
        <button @click="$router.push('/')" class="btn btn-primary" v-text="t$('error.back')"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./error.component.ts"></script>
