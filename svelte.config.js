import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/jungbaejusite' : ''
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Log the error and continue
        console.warn('Prerender error', { path, referrer, message });
        // You can choose to suppress the error by returning an empty object
        return { error: null };
      }
    }
  }
};

export default config;