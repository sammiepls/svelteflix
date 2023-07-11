<script lang="ts">
	import { media } from '../api';
	import type { MovieListResult } from '../types';

	export let movies: MovieListResult[];
</script>

<div class="carousel">
	{#each movies as movie}
		<a href="/movie/{movie.id}">
			<img alt={movie.title} src={media(movie.poster_path, 500)} />
		</a>
	{/each}
</div>

<style>
	.carousel {
		--padding: max(var(--side), calc(var(--side) + 100vw - var(--column) / 2));
		display: flex;
		height: 10rem;
		gap: 1rem;
		overflow-x: scroll;
		scroll-snap-type: mandatory;
		padding: 0 var(--padding);
		scroll-padding-left: var(--padding);
	}

	.carousel::-webkit-scrollbar {
		display: none;
	}

	a {
		height: 100%;
	}

	img {
		height: 100%;
	}
</style>
