<script lang="ts">
  import { Button } from "$lib/components/ui/button";

  const getCurrentLocation = () => {
    // Lógica para obtener ubicación actual y consultar amanecer/atardecer
  };
</script>

<div class="p-4">
  <Button on:click={getCurrentLocation}>Obtener mi ubicación actual</Button>
</div>
