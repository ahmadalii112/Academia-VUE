<template>
  <div>
    <TheHeader title="Ahmad"></TheHeader>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'offical-guide',
          title: 'Official Guide',
          description: 'The Vue Description',
          link: 'https://vue.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'The Google Description',
          link: 'https://www.google.com',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
