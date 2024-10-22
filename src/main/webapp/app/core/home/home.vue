<template>
  <div class="background-wrapper">
    <div class="overlay">
      <h1>Mes Meilleurs Menus</h1>
      <p>m'aident à Mieux Manger pour ma santé et le climat.</p>
      <p>
        Je reçois chaque semaine mon programme de savoureux menus méditerranéens, équilibrés et durables, avec des recettes détaillées et la
        liste de courses qui va bien.
      </p>
      <b-button class="cta-button" @click="openLogin()">Log In</b-button>
    </div>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
<style scoped>
.overlay {
  background-color: rgba(0, 76, 64, 0.83); /* Adjust the opacity and color as needed */

  color: #fff;
  width: 520px;
  flex-wrap: wrap;
  padding: 20px;
  border-radius: 10px;
  display: inline-block; /* Aligns items to the start (left) */
  text-align: center;
}
.background-wrapper {
  background-image: url('/content/images/mmmSpecific/repas-dehors.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
}

@media screen and (max-width: 1024px) {
  .overlay {
    width: 100%;
    max-width: 530px;
  }
}
@media screen and (min-width: 1024px) {
  .background-wrapper {
    height: 30vh;
  }
}

.cta-button {
  background: var(--mmm-accent-color);
  color: white;
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  border: none;
}
.cta-button:hover {
  background: var(--mmm-primary-color);
  color: white;
  text-decoration: none;
}
</style>

<!-- code block supprimé:
  <div class="home row">
    <div class="col-md-3">
      <span class="hipster img-fluid rounded"></span>
    </div>
    <div class="col-md-9">
      <h1 class="display-4" v-text="t$('home.title')"></h1>
      <p class="lead" v-text="t$('home.subtitle')"></p>

      <div>
        <div class="alert alert-success" v-if="authenticated">
          <span v-if="username" v-text="t$('home.logged.message', { username: username })"></span>
        </div>

        <div class="alert alert-warning" v-if="!authenticated">
          <span v-text="t$('global.messages.info.authenticated.prefix')"></span>
          <a class="alert-link" @click="openLogin()" v-text="t$('global.messages.info.authenticated.link')"></a
          ><span v-html="t$('global.messages.info.authenticated.suffix')"></span>
        </div>
        <div class="alert alert-warning" v-if="!authenticated">
          <span v-text="t$('global.messages.info.register.noaccount')"></span>&nbsp;
          <router-link class="alert-link" to="/register" v-text="t$('global.messages.info.register.link')"></router-link>
        </div>
      </div>

      <p v-text="t$('home.question')"></p>

      <ul>
        <li><a href="https://www.jhipster.tech/" target="_blank" rel="noopener noreferrer" v-text="t$('home.link.homepage')"></a></li>
        <li>
          <a
            href="https://stackoverflow.com/tags/jhipster/info"
            target="_blank"
            rel="noopener noreferrer"
            v-text="t$('home.link.stackoverflow')"
          ></a>
        </li>
        <li>
          <a
            href="https://github.com/jhipster/generator-jhipster/issues?state=open"
            target="_blank"
            rel="noopener noreferrer"
            v-text="t$('home.link.bugtracker')"
          ></a>
        </li>
        <li>
          <a
            href="https://gitter.im/jhipster/generator-jhipster"
            target="_blank"
            rel="noopener noreferrer"
            v-text="t$('home.link.chat')"
          ></a>
        </li>
        <li>
          <a href="https://twitter.com/jhipster" target="_blank" rel="noopener noreferrer" v-text="t$('home.link.follow')"></a>
        </li>
      </ul>

      <p>
        <span v-text="t$('home.like')"></span>
        <a href="https://github.com/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer" v-text="t$('home.github')"></a>!
      </p>
    </div>
  </div>
   -->
