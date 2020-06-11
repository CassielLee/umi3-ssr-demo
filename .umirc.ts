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
  favicon:
    'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=favicon&step_word=&hs=0&pn=1&spn=0&di=85800&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=485168269%2C3198698419&os=1344195819%2C2827822297&simid=3434523865%2C353749884&adpicid=0&lpn=0&ln=972&fr=&fmq=1591855019959_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F25%2F20150525110503_e2PnZ.thumb.700_0.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Fks52AzdH3F%3Ft1%3D9namnm9ba&gsm=2&rpstart=0&rpnum=0&islist=&querylist=&force=undefined',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/error', component: '@/pages/error' },
  ],
});
