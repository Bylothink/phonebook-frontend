<script setup lang="ts">
    import { ref } from "vue";
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
    import HelloWorld from "./components/HelloWorld.vue";
    import AwesomeForm from "./components/AwesomeForm.vue";

    import useStore from "./store";

    const store = useStore();
    const email = ref("");

    console.log(store);

    const onClick = (count: number) =>
    {
        console.log("Mi hai clickato tutto!", count);
    };
    const onPippo = () => console.log(email.value);
</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <AwesomeForm v-model="email"
                 @click="onClick"
                 @pippo="onPippo" />
    <HelloWorld msg="Vue.js 3 - Let's start!"
                title="Questo è l'hover visualizzato al passaggio del mouse!" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
