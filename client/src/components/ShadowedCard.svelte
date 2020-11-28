<script>
	let className = '';
	export { className as class };
	export let style;
	export let aos = undefined;
</script>

<div class="shadowed-card {className}" {style} on:click data-aos={aos ? aos : undefined}>
	<slot />
</div>

<style>
	div {
		display: grid;
		gap: 1em;
		padding: 1.5em;
		border-radius: 20px;
		background-color: #fff;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
		box-sizing: border-box;
		height: 100%;
	}
</style>
