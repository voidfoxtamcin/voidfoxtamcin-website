<script lang="ts">
  export const prerender = true;
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  // let icon = "moon-and-stars";

  if (typeof window !== "undefined") {
    console.log("Running on client side");
  } else {
    console.log("Running on server side");
  }

  onMount(() => {
    const toggle_btn: HTMLButtonElement = document.getElementById(
      "toggle"
    ) as HTMLButtonElement;
    const sun_svg: HTMLElement = document.getElementById(
      "sun-svg"
    ) as HTMLElement;
    const moon_svg: HTMLElement = document.getElementById(
      "moon-svg"
    ) as HTMLElement;

    const current_theme = localStorage.getItem("theme") || "light";

    console.log(current_theme);

    if (current_theme == "light") {
      document.documentElement.classList.remove("dark");
      sun_svg.classList.remove("hidden");
      moon_svg.classList.add("hidden");
    } else {
      document.documentElement.classList.add("dark");
      sun_svg.classList.add("hidden");
      moon_svg.classList.remove("hidden");
    }

    toggle_btn.addEventListener("click", function () {
      if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        sun_svg.classList.add("hidden");
        moon_svg.classList.remove("hidden");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
        sun_svg.classList.remove("hidden");
        moon_svg.classList.add("hidden");
      }
    });
  });
</script>

<button
  id="toggle"
  class="flex justify-center items-center h-12 w-12 dark:bg-slate-400 bg-slate-300 rounded-full fixed bottom-5 right-5"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    id="moon-svg"
    class=""
    viewBox="0 0 24 24"
    {...$$props}
  >
    <path
      fill="#fff"
      d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3zm3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95zm-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31"
    />
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    id="sun-svg"
    class="hidden text-slate-700"
    viewBox="0 0 24 24"
    {...$$props}
  >
    <path
      fill="currentColor"
      d="m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81zM1 13h3v-2H1m12 9h-2v3h2"
    />
  </svg>
</button>
