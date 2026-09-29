import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './components'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8088,
    host: '127.0.0.1',
    strictPort: true,
  },
});
