import { defineConfig } from 'umi';
// import pageRoutes from './router.config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    '@utils': 'src/utils',
  },
  ssr: {
    mode: 'stream',
  },
  dva: {},
  favicon:'favicon.jpg',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/error', component: '@/pages/error' },
  ],
});
