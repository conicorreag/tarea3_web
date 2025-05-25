<!-- <script lang="ts">
  import * as Menubar from "$lib/components/ui/menubar";
  import { Sun } from "lucide-svelte";
</script> -->

<!-- <nav class="flex items-center justify-between px-6 py-4 bg-[#0D1B2A] text-white shadow-md">
  Ícono que lleva a la home
  <a href="/" class="flex items-center gap-2 hover:opacity-80 transition">
    <Sun class="w-6 h-6" />
    <span class="font-bold text-lg hidden sm:inline">El Ciclo Solar</span>
  </a>

  Menubar de navegación
  <Menubar.Root>
    <Menubar.Menu>
      <Menubar.Trigger class="text- hover:opacity-80 transition">Menú</Menubar.Trigger>
        <Menubar.Content class="bg-white text-black border border-gray-300 shadow-lg">
            <Menubar.Item>
                <a href="/location" class="hover:underline">Ingresar ubicación</a>
            </Menubar.Item>
            <Menubar.Item>
                <a href="/current" class="hover:underline">Ubicación actual</a>
            </Menubar.Item>
            <Menubar.Item>
                <a href="/favorites" class="hover:underline">Lista de favoritos</a>
            </Menubar.Item>
        </Menubar.Content>

    </Menubar.Menu>
  </Menubar.Root>
</nav> -->


<script lang="ts">
  export let user: { name: string; picture: string } | null;
</script>

<nav class="flex justify-between items-center px-4 py-3 bg-[#0b1c2b] text-white">
  <div class="text-xl font-bold">🌞 Ciclo Solar</div>
  <div class="flex gap-4 items-center">
    <a href="/" class="hover:underline">Inicio</a>
    {#if user}
      <a href="/location" class="hover:underline">Ingresar ubicación</a>
      <a href="/current" class="hover:underline">Ubicación actual</a>
      <a href="/favorites" class="hover:underline">Lista de favoritos</a>
      <img src={user.picture} alt="avatar" class="w-8 h-8 rounded-full" />
      <span>{user.name}</span>
      <a href="/api/auth/logout" class="hover:underline">Cerrar sesión</a>
    {:else}
      <a href="/api/auth/login" class="hover:underline">Iniciar sesión</a>
    {/if}
  </div>
</nav>

