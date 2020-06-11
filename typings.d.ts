declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

// 增加Window的ts声明
interface Window {
  xlQuickLogin: any;
  __pageLoginCallback: any;
  mojs: any;
  statis:any;
}
