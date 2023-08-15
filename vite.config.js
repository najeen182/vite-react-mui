import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: process.env.VITE_EXTERNAL_LIB,
    },
  },
  esbuild: {
    jsxInject: 'import React from \'react\';',
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/styled'],
  },
});
