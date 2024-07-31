import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // you  can change the port here : 3000 check chat gbt if you have syntax errors
  
})
