import Layout from './layout.svelte';

const app = new Layout({
	target: document.body,
});

window.app = app;

export default app;
