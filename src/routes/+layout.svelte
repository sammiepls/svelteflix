<script>
	import '../styles.css';
	import logo from '$lib/images/logo.svg';
	import tmdblogo from '$lib/images/tmdblogo.svg';
</script>

<nav class="column">
	<a href="/"><img alt="SvelteFlix" src={logo} /></a>

	<div class="links">
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Login</a>
	</div>
</nav>

<main>
	<slot />
</main>

<footer>
	<p>
		Data provided by <a href="https://www.themoviedb.org/"
			><img alt="The Movie DB" src={tmdblogo} /></a
		>
	</p>
</footer>

<style>
	nav {
		display: flex;
		width: 100%;
		height: 3rem;
		align-items: center;
		justify-content: space-between;
		max-width: var(--column);
		padding: 0 var(--side);
		color: var(--accent);
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	img {
		height: 1rem;
	}

	footer {
		display: flex;
		justify-content: center;
		height: 5rem;
	}
</style>
