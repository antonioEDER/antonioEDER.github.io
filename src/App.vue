<template>
  <router-view />
</template>
<script>
import { useMeta } from 'quasar'
import { defineComponent } from "vue";
const metaData = {
  title: 'Meu Portfólio',
  titleTemplate: title => `${title} - Eder Antonio`,
}
export default defineComponent({
  name: "App",
  setup () {
    useMeta(metaData)
  },
});
</script>
