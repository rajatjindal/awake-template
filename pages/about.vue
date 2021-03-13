<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero title="About Us" image="/uploads/about-hero.jpg"></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content has-text-grey">
          <h3>who are we</h3>
          <p>
            Compumizer Technosols is run by Rajat Jindal. He has over 16 years
            of software industry experience and has worked on all aspects of
            software engineering where his major focus has always been to write
            tools/automation to improver efficiency of users.
          </p>
          <p>
            Read more about Rajat and his projects here.
          </p>

          <h3>we want you to succeed</h3>
          <p>
            Compumizer Technosols was build on core principle of improving
            efficiency for our clients. Today everyone wants to move to cloud
            computing to improve their infrastructure, time to market but there
            are legacy systems which cannot be abondoned. Moving legacy systems
            to latest cloud infrastructure is our speciality.
          </p>

          <h3>Nice to meet you</h3>
          <p>
            While you are here, you may also want to read more about the
            projects we have done for our clients, or read some of the
            testimonials. You can also read our tech blog where we share our
            learnings with the world.
          </p>
        </div>
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
