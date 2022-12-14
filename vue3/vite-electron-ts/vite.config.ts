import { rmSync } from 'fs'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron, { onstart } from 'vite-plugin-electron'
import pkg from './package.json'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

rmSync('dist', { recursive: true, force: true }) // v14.14.0

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      electron({
        main: {
          entry: 'electron/main/index.ts',
          vite: {
            build: {
              // For Debug
              sourcemap: true,
              outDir: 'dist/electron/main',
            },
            // Will start Electron via VSCode Debug
            plugins: [process.env.VSCODE_DEBUG ? onstart() : null],
          },
        },
        preload: {
          input: {
            // You can configure multiple preload here
            index: path.join(__dirname, 'electron/preload/index.ts'),
          },
          vite: {
            build: {
              // For Debug
              sourcemap: 'inline',
              outDir: 'dist/electron/preload',
            },
          },
        },
        // Enables use of Node.js API in the Renderer-process
        // https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#electron-renderervite-serve
        renderer: {},
      }),
    ],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
  }
})
