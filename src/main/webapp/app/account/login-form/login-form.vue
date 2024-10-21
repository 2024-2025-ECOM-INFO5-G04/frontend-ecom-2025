<template>
  <div class="modal-body">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <b-alert
          show
          data-cy="loginError"
          variant="danger"
          v-if="authenticationError"
          v-html="t$('login.messages.error.authentication')"
        ></b-alert>
      </div>
      <div class="col-md-8">
        <h2 class="text-center p-2" v-text="t$('login.title')"></h2>
        <b-form @submit.prevent="doLogin()">
          <b-form-group label-for="username">
            <b-form-input
              class="bg-light form-text-input"
              id="username"
              type="text"
              name="username"
              autofocus
              :placeholder="t$('global.form[\'email.label\']')"
              v-model="login"
              data-cy="username"
            >
            </b-form-input>
          </b-form-group>
          <b-form-group label-for="password">
            <b-form-input
              class="bg-light form-text-input"
              id="password"
              type="password"
              name="password"
              :placeholder="t$('login.form[\'password.placeholder\']')"
              v-model="password"
              data-cy="password"
            >
            </b-form-input>
          </b-form-group>
          <b-form-checkbox id="rememberMe" name="rememberMe" v-model="rememberMe" checked>
            <span v-text="t$('login.form.rememberme')"></span>
          </b-form-checkbox>
          <div class="row p-3 justify-content-center">
            <b-button class="w-100" data-cy="submit" type="submit" variant="success" v-text="t$('login.form.button')"> </b-button>
          </div>
        </b-form>
        <div class="row justify-content-center">
          <b-link
            :to="'/account/reset/request'"
            class="form-text-input"
            v-text="t$('login.password.forgot')"
            data-cy="forgetYourPasswordSelector"
          ></b-link>
        </div>
        <!-- <div>
          <b-alert show variant="warning">
            <span v-text="t$('global.messages.info.register.noaccount')"></span>
            <b-link :to="'/register'" class="alert-link" v-text="t$('global.messages.info.register.link')"></b-link>
          </b-alert>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./login-form.component.ts"></script>

<style scoped>
.form-text-input {
  padding: 20px;
  border: none;
  border-radius: 0;
  color: black;
}
</style>
