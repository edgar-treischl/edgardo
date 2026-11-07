import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// @ts-expect-error - federation plugin has type issues
import federation from '@originjs/vite-plugin-federation'

function getRemotes() {
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    return {
      class: 'http://localhost:5175/assets/remoteEntry.js',
      oes: 'http://localhost:5176/assets/remoteEntry.js',
      rstories: 'https://edgar-treischl.github.io/edgars-storybook/assets/remoteEntry.js',
      bydash: 'http://localhost:5174/assets/remoteEntry.js',
    };
  }
  
  return {
    class: 'https://edgar-treischl.github.io/klassenwiederholung-mfe/assets/remoteEntry.js',
    oes: 'https://edgar-treischl.github.io/paul-mfe/assets/remoteEntry.js',
    rstories: 'https://edgar-treischl.github.io/edgars-storybook/assets/remoteEntry.js',
    bydash: 'https://edgar-treischl.github.io/dash-board-mfe/assets/remoteEntry.js',
  };
}

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'edgardo_shell',
      remotes: getRemotes(),
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
