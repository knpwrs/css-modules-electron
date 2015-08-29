import hook   from 'css-modules-require-hook';
import remote from 'remote';
import path   from 'path';

var root = remote.require('app').getAppPath();

hook({
  root: root,
  use: [
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
});
