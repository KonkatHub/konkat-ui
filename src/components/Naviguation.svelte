<script lang="ts">
  import Sidebar from './Sidebar/Sidebar.svelte';
  import { docSections } from './sections';
</script>

<!-- TODO: Use drawer menu -->
<aside class="hidden border-r lg:block lg:w-3/12 xl:w-1/4">
  <nav class="sticky top-[73px] max-h-[calc(100vh-48px)] overflow-y-auto px-8 py-8">
    <Sidebar sections={docSections} />
  </nav>
</aside>
