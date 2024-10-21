<template>
  <div id="app">
    <ribbon></ribbon>
    <div id="app-header">
      <jhi-navbar></jhi-navbar>
    </div>
    <router-view></router-view>
    <b-modal id="login-page" hide-footer lazy>
      <template #modal-title>
        <span data-cy="loginTitle" id="login-title" v-text="t$('login.title')"></span>
      </template>
      <login-form></login-form>
    </b-modal>

    <jhi-footer></jhi-footer>
  </div>
</template>

<script lang="ts" src="./app.component.ts"></script>
