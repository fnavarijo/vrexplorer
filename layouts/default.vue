<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary nav-color"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~assets/buefy.png" alt="Buefy" height="28" />
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        {{ axles }}
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';

import { counterStore } from '@/store';

@Component
export default class Default extends Vue {
  items = [
    {
      title: 'Home',
      icon: 'home',
      to: { name: 'index' },
    },
    {
      title: 'Inspire',
      icon: 'lightbulb',
      to: { name: 'inspire' },
    },
  ];

  get axles(): number {
    return counterStore.axles;
  }
}
</script>

<style lang="scss" scoped>
.nav-color {
  background-color: aqua;
}
</style>
