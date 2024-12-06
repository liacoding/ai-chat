import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Keep the React plugin
  envDir: '../',      // Point to the root folder for .env
});
