<template>
  <div class="container">
    <div class="row justify-content-center">
      <h2 class="">{{ t$('global.user.head') }} {{ userIdentity.firstName }}</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 col-md-4 col-lg-3 mb-1">
        <div class="text-center border bg-light">
          <span>{{ t$('global.user.breakfast') }}</span>
        </div>
        <div class="text-center bg-light">
          <span>Salé</span>
        </div>
        <div class="text-center bg-light">
          <span>Sucré</span>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-3 mb-1 card-day" v-for="day in daysOfWeek" :key="day">
        <div class="text-center border bg-light card-day">
          <span>{{ day }}</span>
        </div>
        <div>
          <div class="text-center bg-light">
            <span>{{ t$('global.user.lunch') }}</span>
          </div>
          <div class="text-center bg-light">
            <span>{{ t$('global.user.dinner') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./user.component.ts"></script>

<style scoped>
.card-day {
  padding-bottom: 0px;
}
</style>
