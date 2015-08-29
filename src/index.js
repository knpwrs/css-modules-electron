import hook from 'css-modules-require-hook';
import get  from 'lodash.get';

hook({
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
