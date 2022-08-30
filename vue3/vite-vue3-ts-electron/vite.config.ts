import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import electron from "vite-plugin-electron";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(command);
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
        vue(),
        electron({
          main: {
            entry: 'electron/main/index.ts'
          }
        })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: 9000,
      proxy: {
        '/api': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  };
});
