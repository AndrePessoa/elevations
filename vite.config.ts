import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Site is served from a subpath; every asset URL must be prefixed with it
  // so the bundle resolves both on the subdomain root and on the deployed
  // subpath alike.
  base: '/projetos/elevations/',
  build: {
    outDir: 'build',
    sourcemap: false,
  },
});
