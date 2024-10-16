/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        '1/8': '12.5%',  // Custom width for 1/8 of the container
        '1/10': '10%',    // Custom width for 1/10 of the container
      },
    }
  },
  plugins: [],
}


