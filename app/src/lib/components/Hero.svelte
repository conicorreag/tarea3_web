<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<section class="relative h-screen bg-cover bg-center" style="background-image: url('/src/lib/images/background.png');">
  <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="text-center text-white">
      <h1 class="text-4xl font-bold mb-4">El Ciclo Solar</h1>
      <Button on:click={() => window.location.href = '/location'}>
        Consultar ciclo solar
      </Button>
    </div>
  </div>
</section>
