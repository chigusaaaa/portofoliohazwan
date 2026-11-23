tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        abyss: {
          950: '#060d24',
          900: '#0b1636',
          800: '#11224d',
          700: '#1a3166',
        },
        hydro: {
          DEFAULT: '#64e8ff',
          bright: '#a6f4ff',
        },
        coral: {
          DEFAULT: '#ffb7d5',
          deep: '#ff8ec4',
        },
        lavender: '#c4b5fd',
        pearl: '#f0f8ff',
      }
    }
  }
};
