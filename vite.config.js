import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'dist',
        },
        base: './',
        plugins: [react(), nodePolyfills],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: "@import '/src/global.scss';"
                }
            }
        },
        server: {
            proxy: {
                '/webApi': {
                    //目标路径
                    // target: 'http://127.0.0.1:3000/',
                    target: 'http://112.74.15.57:3000/',
                    //换源
                    changeOrigin: true,
                }
            },
        }
    };
});