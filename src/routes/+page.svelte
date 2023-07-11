<script lang="ts">
	import Carousel from '../lib/components/Carousel.svelte';
	import Hero from './Hero.svelte';

	export let data;
</script>

<h1 class="column">Top trending movies</h1>

<Hero movie={data.featured} />

<Carousel movies={data.trending.results} />
