<template>
  <BaseCard>
    <BaseButton @click="setSelectedTab('stored-resources')"
      >Stored Resources
    </BaseButton>
    <BaseButton @click="setSelectedTab('add-resources')"
      >Add Resources
    </BaseButton>
  </BaseCard>
  <!-- Add Dymamic Components -->
  <component :is="selectedTab"></component>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
    };
  },
  methods: {
    setSelectedTab(selectedTab) {
      this.selectedTab = selectedTab;
    },
  },
};
</script>

<style></style>
