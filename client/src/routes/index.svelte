<script>
	import { Router, Route } from 'svelte-routing';
	import Index from '../routes/pages/index.svelte';
	import About from '../routes/pages/about.svelte';
	import Blog from '../routes/pages/blog.svelte';

	export let url = '';
</script>

<Router {url}>
	<div>
		<Route path="blog" component={Blog} />
		<Route path="about" component={About} />
		<Route path="/" component={Index} />
	</div>
</Router>
