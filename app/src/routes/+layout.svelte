<script lang="ts">
  import NavBar from '$lib/components/NavBar.svelte'; // ← Esta línea es esencial
  export let data;
</script>

<NavBar user={data.user} />
<slot />
