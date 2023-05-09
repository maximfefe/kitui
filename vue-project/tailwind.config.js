module.exports = {

  daisyui: {
      // themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  theme: {
    fontSize: {
      sm: ['14px', '1.25rem'],
      base: ['16px', '1.25rem'],
      lg: ['20px', '1.25rem'],
      xl: ['24px', '1.25rem'],
      header: ['36px', '1.25rem'],

    },
  },
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
};