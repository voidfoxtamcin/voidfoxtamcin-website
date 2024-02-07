<script lang="ts">
  export let calloutType: "info" | "warning" | "danger" = "info";
</script>

<div class="px-4 py-3 bg-slate-100 border border-slate-300 rounded">
  <div class="flex">
    <div class="flex-shrink-0">
      {#if calloutType === "info"}
        💡
      {/if}
    </div>
    <div class="ml-3">
      <slot />
    </div>
  </div>
</div>
