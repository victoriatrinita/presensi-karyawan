<div class="footer-wrapper">
	<footer>
		<section class="links">
			<p>Kansha</p>
			<p>Rizki</p>
			<p>Tiara</p>
			<p>Virginia</p>
			<p>Victoria</p>
		</section>

		<p>Tugas Interoperabilitas 2020</p>
	</footer>
</div>

<style>
	.footer-wrapper {
		padding: 3em 2em;
	}
	footer {
		width: 100%;
		max-width: 84em;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		text-align: center;
	}
	footer p {
		color: #797979;
	}
	section {
		display: flex;
		align-items: center;
	}
	section p {
		color: #000;
	}
	section p:not(:first-child) {
		margin-left: 2em;
	}

	@media only screen and (max-width: 768px) {
		footer {
			display: grid;
			gap: 2em;
			place-content: center;
			padding: 2em 1em;
			text-align: center;
			font-size: 90%;
		}
		section {
			flex-direction: column;
		}
		section p:not(:first-child) {
			margin-top: 1em;
			margin-left: 0;
		}
	}
</style>
