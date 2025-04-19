import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    proxy : {
      // '/api' : "http://localhost:8080/" // normal method
      '/api' : {
        target : "http://localhost:8080/" // in this method we can do modification also 
      }
    }
  }
})
