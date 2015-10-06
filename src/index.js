import hook   from 'css-modules-require-hook';
import remote from 'remote';
import path   from 'path';

var root = remote.require('app').getAppPath();

/**
 * Calls css-modules-require-hook with some extra options.
 * @param {Array?} pre  PostCss plugins to run before the default set of plugins.
 * @param {Array?} post PostCss plugins to run after the default set of plugins.
 */
export default function(args = {}) {
  hook({
    ...args,
    root: root,
    append: [
      ...(args.append || []),
      // Rewrite css urls
      require('postcss-url')({
        url: function (url, decl, from, dirname, to, options, result) {
          return path.join(root, dirname, url);
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
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = css;
      document.head.appendChild(style);
    }
  });
}
