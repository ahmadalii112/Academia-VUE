<template>
  <BaseCard>
    <BaseButton
      @click="setSelectedTab('stored-resources')"
      :mode="selectedTab === 'stored-resources' ? null : 'flat'"
      >Stored Resources
    </BaseButton>
    <BaseButton
      @click="setSelectedTab('add-resources')"
      :mode="selectedTab === 'add-resources' ? null : 'flat'"
      >Add Resources
    </BaseButton>
  </BaseCard>
  <!-- our form value will not disapear -->
  <keep-alive> 
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import AddResources from './AddResources.vue';
import StoredResources from './StoredResources.vue';
export default {
  components: {
    StoredResources,
    AddResources,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'offical-guide',
          title: 'Official Guide',
          description: 'The Vue Description',
          link: 'https://vuejs.org',
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
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource, // point out the method 👇🏻
    };
  },
  methods: {
    setSelectedTab(selectedTab) {
      this.selectedTab = selectedTab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
  },
};
</script>

<style></style>
