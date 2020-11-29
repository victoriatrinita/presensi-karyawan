<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import Footer from '../../components/Footer.svelte';
	import Sidebar from '../../components/Sidebar.svelte';
	import Button from '../../components/Button.svelte';
	import ShadowedCard from '../../components/ShadowedCard.svelte';
	import { csvGenerator } from "../../csvGenerator";

	let nama = '';
	let niu = '';
	let presensis = [];
	let jumlahMahasiswa = '';
	let dateTime = new Date();
	let tableHeader = ["Timestamp", "ID","Nama", "NIU"];
	$: time = dateTime.toLocaleTimeString();
	const date = dateTime.toLocaleDateString();

	onMount(async () => {
		const { data } = await axios.get('/api/presensis');
		presensis = data;
		setInterval(() => {
			dateTime = new Date();
		}, 1000);
	});

	function downloadHandler() {
		let tableKeys = Object.keys(presensis[0]); 
		csvGenerator(presensis, tableKeys, tableHeader, "presensi_dteti.csv");
	}

	async function addPresensi() {
		const presensi = {
			nama,
			niu,
			time: new Date().toUTCString(),
		};
		const response = await axios.post('/api/presensis', presensi);
		window.location.href = '/';
	}

	async function removePresensi(id) {
		const response = await axios.delete('/api/presensis' + id);
		if (response.data.id === id) {
			presensis = presensis.filter((t) => t._id !== id);
		}
	}
</script>

<Sidebar {location} />
<div class="wrapper">
	<h1>Dashboard Admin</h1>
	<div class="info">
		<ShadowedCard aos="fade-up">
			<h2>Jumlah Mahasiswa</h2>
			<p>{presensis.length}</p>
		</ShadowedCard>
		<ShadowedCard aos="fade-up">
			<h2>Tanggal</h2>
			<p>{date}</p>
		</ShadowedCard>
		<ShadowedCard aos="fade-up">
			<h2>Waktu</h2>
			<p>{time}</p>
		</ShadowedCard>
	</div>

	<div class="table">
		<ShadowedCard aos="fade-up">
			<div class="header">
				<h2>Daftar Presensi</h2>
				<button on:click={downloadHandler}>Download CSV</button>
  			</div>
			<table>
				<tr>
					<th>Timestamp</th>
					<th>Nama</th>
					<th>NIU</th>
				</tr>
				{#each presensis as presensi}
					<tr>
						<td>{presensi.time}</td>
						<td>{presensi.nama}</td>
						<td>{presensi.niu}</td>
					</tr>
				{/each}
			</table>
		</ShadowedCard>
	</div>

	<ShadowedCard aos="fade-up">
		<form on:submit|preventDefault={addPresensi}>
			<h2>Input Presensi</h2>
			<div>
				<h3>Nama</h3>
				<input type="text" required bind:value={nama} />
				<h3>NIU</h3>
				<input type="text" required bind:value={niu} />
				<Button type="submit" color="deep-sea" disabled={!nama || !niu}>Submit</Button>
			</div>
		</form>
	</ShadowedCard>

	<!-- <button type="submit" on:click={() => removePresensi(presensi._id)} /> -->
</div>
<Footer />

<style>
	h1 {
		color: #171b6b;
		font-weight: bold;
		font-size: 2.125rem;
	}
	h3 {
		font-size: 1.125rem;
	}
	h1,
	h2,
	p {
		margin-block-end: 0;
		margin-block-start: 0;
	}
	h1,
	h2,
	p {
		color: #333333;
	}
	div.wrapper {
		background-color: #f5f7fc;
		padding: 2em 0;
	}
	div.info {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16em, auto));
		row-gap: 1em;
		column-gap: 1em;
		margin: 2em 0;
	}
	.table {
		margin-bottom: 2em;
	}
	.header {
    	display: flex;
    	justify-content: space-between;
  	}
	input {
		border: 0.5px solid #adadad;
		background-color: #ffffff;
		box-sizing: border-box;
		border-radius: 0.5em;
	}
	input:required {
		border: 0.5px solid #adadad;
		box-shadow: none;
	}
	button {
		border: none; 
		color: white;
		padding: 0.5em 1em;
		cursor: pointer; 
		background-color: #4caf50;
		height: fit-content;
		border-radius: 0.5em;
  }
</style>
