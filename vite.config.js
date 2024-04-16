import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/applied/',
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
            },
        },
    },
    server: {
        // host: "192.168.0.103",
        // host: "192.168.101.206",
        // host: "172.16.22.98",
        host: '172.16.22.6',
        port: '3003',
    },
});
