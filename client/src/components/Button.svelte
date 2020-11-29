<script>
	export let type = 'button';
	export let color = null;
	export let disabled = false;
	export let style;
</script>

<button
	{type}
	{disabled}
	{style}
	on:click
	class:disabled
	class:border-orange={color === 'border-orange'}
	class:orange={color !== null}
	class:deep-sea={color === 'deep-sea'}
	class:tangerine={color === 'tangerine'}
	class:tangerine-hover={color === 'tangerine-hover'}
	class:tangerine-outline={color === 'tangerine-outline'}
	class:grey={color === 'grey'}
	class:none={color === null}>
	<slot />
</button>

<style>
	button {
		flex: 0 1 7.5em;
		padding: 0.5em 1.25em;
		border-width: 0.1em;
		border-style: solid;
		border-radius: 0.5em;
		color: #fff;
		text-align: center;
		font-weight: 500;
		cursor: pointer; 
	}
	button.disabled {
		cursor: not-allowed;
		opacity: 0.4;
	}
	button.orange {
		border-color: #fc7d2d;
		background-color: #fc7d2d;
	}
	button.deep-sea {
		border-color: #172e7c;
		background-color: #172e7c;
	}
	button.tangerine {
		border-color: #f9663a;
		background-color: #f9663a;
	}
	button.tangerine-hover {
		border-color: #f9663a;
		background-color: #f9663a;
	}
	button.tangerine-hover:hover {
		border-color: #ff7900;
		background-color: #ff7900;
	}
	button.tangerine-outline {
		border-color: #f9663a;
		color: #f9663a;
		background-color: #fff;
	}
	button.grey {
		border-color: #b6b7bb;
		background-color: #b6b7bb;
	}
	button.none {
		border-color: #000;
		background-color: transparent;
		color: #000;
	}
	button.border-orange {
		border-color: #f9663a;
		background-color: transparent;
		color: #f9663a;
	}
</style>
