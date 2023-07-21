const base = 'https://api.movies.tastejs.com';
export const media_base = 'https://image.tmdb.org/t/p';

const cache = new Map();

export async function get(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) {
	const q = new URLSearchParams(params);
	const url = `${base}/${endpoint}?${q}`;

	if (cache.has(url)) {
		console.log('cache HIT', url);
		return cache.get(url);
	}

	console.log('cache MISS', url);

	const response = await fetch(url);
	const data = await response.json();
	cache.set(url, data);
	return data;
}

export function media(file_path: string, width: number) {
	return `${media_base}/w${width}${file_path}`;
}
