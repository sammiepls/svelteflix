import * as api from '$lib/api';
import type { MovieList } from '$lib/types.js';

export async function load({ url, fetch }) {
	const query = url.searchParams.get('query');

	if (!query) {
		return {
			movies: [],
			query
		};
	}

	const data = (await api.get(fetch, 'search/movie', { query })) as MovieList;

	return {
		query,
		movies: data.results
	};
}
