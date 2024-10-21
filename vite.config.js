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
        server: {
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: "@import '/src/global.scss';"
                }
            }
        }
    };
});