<template>
  <b-navbar data-cy="navbar" toggleable="md" type="light" class="jh-navbar">
    <div class="container">
      <b-navbar-brand class="logo" b-link to="/">
        <span class="logo-img"></span>
      </b-navbar-brand>

      <b-navbar-toggle
        right
        class="jh-navbar-toggler d-lg-none"
        href="javascript:void(0);"
        data-toggle="collapse"
        target="header-tabs"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon icon="bars" />
      </b-navbar-toggle>
    </div>

    <b-collapse is-nav id="header-tabs">
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right id="entity-menu" v-if="authenticated" active-class="active" class="pointer" data-cy="entity">
          <template #button-content>
            <span class="navbar-dropdown-menu">
              <font-awesome-icon icon="th-list" />
              <span class="no-bold" v-text="t$('global.menu.entities.main')"></span>
            </span>
          </template>
          <entities-menu></entities-menu>
          <!-- jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here -->
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          right
          id="admin-menu"
          v-if="hasAnyAuthority('ROLE_ADMIN') && authenticated"
          :class="{ 'router-link-active': subIsActive('/admin') }"
          active-class="active"
          class="pointer"
          data-cy="adminMenu"
        >
          <template #button-content>
            <span class="navbar-dropdown-menu">
              <font-awesome-icon icon="users-cog" />
              <span class="no-bold" v-text="t$('global.menu.admin.main')"></span>
            </span>
          </template>
          <b-dropdown-item to="/admin/user-management" active-class="active">
            <font-awesome-icon icon="users" />
            <span v-text="t$('global.menu.admin.userManagement')"></span>
          </b-dropdown-item>
          <b-dropdown-item to="/admin/metrics" active-class="active">
            <font-awesome-icon icon="tachometer-alt" />
            <span v-text="t$('global.menu.admin.metrics')"></span>
          </b-dropdown-item>
          <b-dropdown-item to="/admin/health" active-class="active">
            <font-awesome-icon icon="heart" />
            <span v-text="t$('global.menu.admin.health')"></span>
          </b-dropdown-item>
          <b-dropdown-item to="/admin/configuration" active-class="active">
            <font-awesome-icon icon="cogs" />
            <span v-text="t$('global.menu.admin.configuration')"></span>
          </b-dropdown-item>
          <b-dropdown-item to="/admin/logs" active-class="active">
            <font-awesome-icon icon="tasks" />
            <span v-text="t$('global.menu.admin.logs')"></span>
          </b-dropdown-item>
          <b-dropdown-item v-if="openAPIEnabled" to="/admin/docs" active-class="active">
            <font-awesome-icon icon="book" />
            <span v-text="t$('global.menu.admin.apidocs')"></span>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown id="languagesnavBarDropdown" right v-if="languages && Object.keys(languages).length > 1">
          <template #button-content>
            <font-awesome-icon icon="flag" />
            <span class="no-bold" v-text="t$('global.menu.language')"></span>
          </template>
          <b-dropdown-item
            v-for="(value, key) in languages"
            :key="`lang-${key}`"
            @click="changeLanguage(key)"
            :class="{ active: isActiveLanguage(key) }"
          >
            {{ value.name }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          right
          href="javascript:void(0);"
          id="account-menu"
          :class="{ 'router-link-active': subIsActive('/account') }"
          active-class="active"
          class="pointer"
          data-cy="accountMenu"
        >
          <template #button-content>
            <span class="navbar-dropdown-menu">
              <font-awesome-icon icon="user" />
              <span class="no-bold" v-text="t$('global.menu.account.main')"></span>
            </span>
          </template>
          <b-dropdown-item data-cy="settings" to="/account/settings" v-if="authenticated" active-class="active">
            <font-awesome-icon icon="wrench" />
            <span v-text="t$('global.menu.account.settings')"></span>
          </b-dropdown-item>
          <b-dropdown-item data-cy="passwordItem" to="/account/password" v-if="authenticated" active-class="active">
            <font-awesome-icon icon="lock" />
            <span v-text="t$('global.menu.account.password')"></span>
          </b-dropdown-item>
          <b-dropdown-item data-cy="logout" v-if="authenticated" @click="logout()" id="logout" active-class="active">
            <font-awesome-icon icon="sign-out-alt" />
            <span v-text="t$('global.menu.account.logout')"></span>
          </b-dropdown-item>
          <b-dropdown-item data-cy="login" v-if="!authenticated" @click="openLogin()" id="login" active-class="active">
            <font-awesome-icon icon="sign-in-alt" />
            <span v-text="t$('global.menu.account.login')"></span>
          </b-dropdown-item>
          <b-dropdown-item data-cy="register" to="/register" id="register" v-if="!authenticated" active-class="active">
            <font-awesome-icon icon="user-plus" />
            <span v-text="t$('global.menu.account.register')"></span>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts" src="./jhi-navbar.component.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ==========================================================================
    Navbar
    ========================================================================== */
.navbar-version {
  font-size: 0.65em;
  color: #ccc;
}

.jh-navbar {
  display: flex;
  justify-content: space-between; /* Space between logo and buttons */
  align-items: center;
  flex-direction: column;
}

.container {
  display: flex;
  position: relative;
  margin: 0 0;
  padding: 0 0;
  width: 100%;
  justify-content: center;
}
.ml-auto {
  margin-left: auto;
  width: 100%;
  display: flex;
}

.jh-navbar .profile-image {
  margin: -10px 0px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.jh-navbar .dropdown-item.active,
.jh-navbar .dropdown-item.active:focus,
.jh-navbar .dropdown-item.active:hover {
  background-color: #353d47;
}

.jh-navbar .dropdown-toggle::after {
  margin-left: 0.15em;
}

.jh-navbar ul.navbar-nav {
  padding: 0.5em;
}

.jh-navbar .navbar-nav .nav-item {
  margin-left: 1.5rem;
}

.jh-navbar a.nav-link,
.jh-navbar .no-bold {
  font-weight: 400;
}

.jh-navbar .jh-navbar-toggler {
  color: var(--mmm-primary-color);
  font-size: 1.5em;
  padding: 10px;
  border: none;
}

.jh-navbar .jh-navbar-toggler:hover {
  color: var(--mmm-accent-color);
}

@media screen and (min-width: 1024px) {
  .jh-navbar-toggler {
    display: none;
  }
}

@media screen and (min-width: 1120px) and (max-width: 1250px) {
  span span {
    display: none;
  }
}

/* ==========================================================================
    Logo styles
    ========================================================================== */
.navbar-brand.logo {
  padding: 0 0;
}

.logo .logo-img {
  padding: 0 0;
  height: 80px;
  display: flex;
  position: relative;
  left: 0;
  vertical-align: middle;
  width: 200px;
}

.logo-img {
  height: 100%;
  background: url('/content/images/mmmSpecific/logo.png') no-repeat center center;
  background-size: contain;
  width: 100%;
  filter: drop-shadow(0 0 0.05rem white);
  margin: 0 5px;
}
</style>
