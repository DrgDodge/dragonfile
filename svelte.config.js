import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({out: 'build',	precompress: false, envPrefix: '', polyfill: true}),
		vite: () => ({ server: { port: 4000 }})
	}
};

export default config;
