<template>
    <BaseCard>
      <BaseButton @click="setSelectedTab('stored-resources')"
      :mode="selectedTab === 'stored-resources' ? null : 'flat'"
        >Stored Resources
      </BaseButton>
      <BaseButton @click="setSelectedTab('add-resources')"
      :mode="selectedTab === 'add-resources' ? null : 'flat'"
        >Add Resources
      </BaseButton>
    </BaseCard>
    <!-- Add Dymamic Components -->
    <component :is="selectedTab"></component>
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
  provide() {
    return {
        resources: this.storedResources,
    }
  },
  methods: {
    setSelectedTab(selectedTab) {
      this.selectedTab = selectedTab;
    },
  },
};
</script>

<style></style>
