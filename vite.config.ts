import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Allows external access
    allowedHosts: ['portfolio.tumsab.xyz'], // Add your domain here
  }
});

