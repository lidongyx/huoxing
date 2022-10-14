<template>
  <header class="sticky top-0 z-40 w-full flex bg-yellow-500 md:h-16 shadow-md">
    <div class="w-1/4 flex justify-end">
      <router-link to="/favorites">
        <button title="Favorites" class="p-2 hover:text-red has-tooltip">
          Favorites
        </button>
      </router-link>

      <button class="p-2 hover:text-red" title="History">
        <router-link to="/history"> History </router-link>
      </button>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Test",
});
</script>
