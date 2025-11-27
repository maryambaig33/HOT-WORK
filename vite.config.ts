import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  build: {
    rollupOptions: {
      // Externalize dependencies that are loaded via CDN (importmap) in index.html
      external: ['react', 'react-dom', 'react-dom/client', 'lucide-react', '@google/genai'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'lucide',
          '@google/genai': 'GoogleGenAI'
        }
      }
    }
  }
});