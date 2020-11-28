<input type="checkbox" id="slide" name="" value="" />
<div class="container">
	<label for="slide" class="toggle">☰</label>
	<nav class="sidebar">
		<ul>
			<li><a href="#"> Nav1 </a></li>
			<li><a href="#"> Nav2 </a></li>
			<li><a href="#"> Nav3 </a></li>
			<li><a href="#"> Nav4 </a></li>
			<li><a href="#"> Nav5 </a></li>
		</ul>
	</nav>
</div>

<style>
	.toggle {
		text-decoration: none;
		font-size: 2em;
		color: rgba(0, 0, 0, 0.61);
		-webkit-transition: all 1.15s ease-out 0;
		-moz-transition: all 1.15s ease-out 0;
		transition: all 1.45s ease-out 0;
		position: fixed;
		top: 20px;
		left: 20px;
		z-index: 1;
		cursor: pointer;
	}

	.sidebar {
		position: fixed;
		top: 0px;
		bottom: 0px;
		left: -190px;
		-webkit-transition: all 1.15s ease-out 0;
		-moz-transition: all 1.15s ease-out 0;
		transition: all 1.15s ease-out 0;
		width: 13rem;
		padding: 1.5em;
		background-color: #fff;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
		border-bottom-right-radius: 1em;
	}

	.sidebar ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.sidebar li a {
		font-size: 1.2em;
		margin: 0;
		margin-bottom: 16px;
		cursor: pointer;
		text-decoration: none;
		line-height: 200%;
	}

	.sidebar a:hover {
		color: rgba(0, 0, 0, 0.61);
	}

	#slide:checked + .container .sidebar {
		left: 0px;
	}

	#slide:checked + .container .toggle {
		left: 200px;
	}

	#slide {
		display: none;
	}
</style>
