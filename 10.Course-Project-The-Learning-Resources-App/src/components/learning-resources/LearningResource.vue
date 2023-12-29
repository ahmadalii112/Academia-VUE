<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>Delete Resource</button>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View Resources</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: ['title', 'description', 'link'],
  data() {
    return {};
  },
};
</script>

<style></style>
