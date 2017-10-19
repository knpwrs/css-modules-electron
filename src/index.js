import hook from 'css-modules-require-hook';
import { remote } from 'electron';
import path from 'path';

const { app } = remote;
const rootDir = app.getAppPath();

/**
 * Calls css-modules-require-hook with some extra options.
 * @param {Array?} pre  PostCss plugins to run before the default set of plugins.
 * @param {Array?} post PostCss plugins to run after the default set of plugins.
 */
export default function(args = {}) {
  hook({
    ...args,
    rootDir,
    append: [
      ...(args.append || []),
      // Rewrite css urls
      require('postcss-url')({
        url: function (asset, dir, options, decl, warn, result) {
          return asset.absolutePath;
        }
      })
    ],
    processCss: function (css) {
      if (args.processCss) {
        css = args.processCss(css);
      }
      if (!document || !document.head) {
        return css;
      }
      const style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = css;
      document.head.appendChild(style);
    }
  });
}
