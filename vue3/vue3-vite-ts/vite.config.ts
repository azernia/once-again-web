import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { loadEnv, defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  console.log(command);
  const env = loadEnv(mode, process.cwd());
  console.log(env);
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        // const __dirname = fileURLToPath(new URL('.', import.meta.url))
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
