import hook   from 'css-modules-require-hook';
import merge  from 'lodash.merge';
import remote from 'remote';
import path   from 'path';

var root = remote.require('app').getAppPath();

/**
 * Calls css-modules-require-hook with some extra options.
 * @param {Array?} pre  PostCss plugins to run before the default set of plugins.
 * @param {Array?} post PostCss plugins to run after the default set of plugins.
 */
export default function(pre = [], post = []) {
  hook(merge({
    root: root,
    use: [
      // Pre-plugins
      ...pre,
      // Core css-modules plugins
      require('postcss-modules-extract-imports'),
      require('postcss-modules-local-by-default'),
      require('postcss-modules-scope'),
      // Rewrite css urls
      require('postcss-url')({
        url: function (url, decl, from, dirname, to, options, result) {
          return path.join(root, dirname, url);
        }
      }),
      // Post-plugins
      ...post
    ],
    processCss: function (css) {
      if (!document || !document.head) {
        return;
      }
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = css;
      document.head.appendChild(style);
    }
  }, args));
}
