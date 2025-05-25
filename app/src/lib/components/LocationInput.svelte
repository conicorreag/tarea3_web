<script lang="ts">
//   import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";

  let location = '';
  const handleSubmit = () => {
    // Lógica para obtener amanecer/atardecer
  };
</script>

<div class="p-4">
  <!-- <Input bind:value={location} placeholder="Ingresa una ubicación" /> -->
  <Button on:click={handleSubmit} class="mt-2">Consultar</Button>
</div>
