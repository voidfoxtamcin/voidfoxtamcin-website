<script lang="ts">
  import { onMount } from "svelte";
  let theme = localStorage.getItem("theme") ?? "light";

  function toggleDark() {
    if (theme == "light") {
      theme = "dark";
    } else {
      theme = "light";
    }
  }

  onMount(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  });
</script>

<button
  class="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full border-2"
  on:click={toggleDark}
>
  <span class="text-2xl">{theme == "light" ? "🌙" : "☀️"}</span>
</button>
