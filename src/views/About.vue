<template>
  <div class="about">
    <h1>This Is About Page</h1>
    <WelcomeMessage />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeMessage from "@/components/WelcomeMessage.vue";

export default {
  name: "about",
  components: {
    WelcomeMessage,
  },
};
</script>
