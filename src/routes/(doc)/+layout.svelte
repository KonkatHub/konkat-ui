<script lang="ts">
  import Footer from '$components/Footer.svelte';
  import Navbar from '$components/Navbar.svelte';
  import Naviguation from '$components/Naviguation.svelte';
</script>

<div class="flex min-h-screen w-screen flex-col">
  <Navbar />
  <div class="flex flex-1 border-b">
    <Naviguation />
    <main
      class="z-0 flex h-max w-full flex-col-reverse gap-12 px-4 py-8 sm:flex-row sm:justify-between md:px-8 lg:px-12"
    >
      <slot />
    </main>
  </div>
  <Footer />
</div>
