import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { loadEnv, defineConfig } from "vite";
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig(({ command, mode }) => {
  console.log(command);
  const env = loadEnv(mode, process.cwd());
  console.log(env);
  return {
    plugins: [
        vue(),
        // 自动导入
        AutoImport({
          resolvers: [ElementPlusResolver()]
        }),
        Components({
          resolvers: [ElementPlusResolver()]
        })
    ],
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
