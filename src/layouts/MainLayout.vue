<template>
  <q-layout view="lHh Lpr lFf" class="devfolio">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-bold"> DevFolio</q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="">
      <q-list class="list-menu">

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    caption: "home",
    icon: "home",
    link: "/",
  },
  {
    title: "Sobre mim",
    caption: "About Me",
    icon: "lightbulb",
    link: "/sobre-mim",
  },
  {
    title: "Com o que eu trabalho?",
    caption: "What I do work",
    icon: "co_present",
    link: "/o-que-eu-faco",
  },
  {
    title: "Experiência de trabalho",
    caption: "Working Experience",
    icon: "engineering",
    link: "/onde-trabalhei",
  },
  {
    title: "Meu portfolio",
    caption: "My Portfolio",
    icon: "import_contacts",
    link: "/portfolio",
  },
  {
    title: "Meus certificados",
    caption: "My courses",
    icon: "school",
    link: "/cursos",
  },
  {
    title: "Meus Vídeos",
    caption: "My videos",
    icon: "switch_video",
    link: "/videos",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style scoped>
.q-list.list-menu {
  display: grid !important;
  height: inherit;
}
</style>