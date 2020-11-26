<script>
  import axios from "axios";
  import { onMount } from "svelte";
  let input = "";
  let presensis = [];

  onMount(async () => {
    const { data } = await axios.get("/api/presensis");
    presensis = data;
  });
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello!</h1>
<input type="text" bind:value={input} />
<input type="text" />
<button type="submit" />
<p>{input}</p>
{#each presensis as presensi}
  <p>{presensi.time}</p>
{/each}
<!-- <p>{JSON.stringify(presensis)}</p> -->
