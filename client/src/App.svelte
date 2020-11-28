<script>
  import axios from "axios";
  import { onMount } from "svelte";
  let nama = "";
  let niu = "";
  let presensis = [];

  onMount(async () => {
    const { data } = await axios.get("/api/presensis");
    presensis = data;
  });

  async function addPresensi() {
    const presensi = {
        nama,
        niu,
      time: new Date().getTime(),
    };
    const response = await axios.post("/api/presensis", presensi);
  }

  async function removePresensi(id) {
    const response = await axios.delete("/api/presensis" + id);
    if (response.data.id === id) {
      presensis = presensis.filter((t) => t._id !== id);
    }
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello!</h1>
<input type="text" bind:value={nama} />
<input type="text" bind:value={niu} />
<button
  type="submit"
  on:click={() => {
    addPresensi();
    alert('sudah');
  }} />

<!-- <button type="submit" on:click={() => removePresensi(presensi._id)} /> -->

{#each presensis as presensi}
  <p>{presensi.time}</p>
  <p>{presensi.nama}</p>
  <p>{presensi.niu}</p>
{/each}
<!-- <p>{JSON.stringify(presensis)}</p> -->
