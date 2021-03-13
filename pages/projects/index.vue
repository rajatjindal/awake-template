<template>
  <div id="categories-page" class="page-wrapper categories-page">
    <site-hero title="Projects" image="https://picsum.photos/1800/1801" />
    <main-section theme="one-column">
      <projects-grid />
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Projects | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
