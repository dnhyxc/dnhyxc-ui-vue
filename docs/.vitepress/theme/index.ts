import DefaultTheme from 'vitepress/theme';
import NIcon from '@dnhyxc-ui/components/icon';
import '@dnhyxc-ui/theme-chalk/src/index.scss';
import DemoPreview, { useComponents } from '@vitepress-code-preview/container';
// import { demoBlockPlugin } from 'vitepress-theme-demoblock';
// import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import '@vitepress-code-preview/container/dist/style.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    useComponents(ctx.app, DemoPreview);
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('NIcon', NIcon);
  }
};
