import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // Specify the output directory
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed
}});