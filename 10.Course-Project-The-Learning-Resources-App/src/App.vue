<template>
  <ul>
    <LearningResource
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></LearningResource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';
export default {
  components: {
    LearningResource,
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

<style></style>
