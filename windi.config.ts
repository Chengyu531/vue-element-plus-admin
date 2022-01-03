import { defineConfig } from 'windicss/helpers'

// function range(size, startAt = 1) {
//   return Array.from(Array(size).keys()).map((i) => i + startAt)
// }

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  },
  darkMode: 'class',
  attributify: false,
  theme: {
    extend: {
      screens: {
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1920px'
      }
    }
    // height: {
    //   ...range(50).map((i) => `h-${i}px`)
    // },
    // margin: {
    //   // ...range(50).map((i) => `mt-${i}px`),
    //   // ...range(50).map((i) => `mr-${i}px`),
    //   // ...range(50).map((i) => `mb-${i}px`),
    //   // ...range(50).map((i) => `ml-${i}px`)
    // }
  }
})