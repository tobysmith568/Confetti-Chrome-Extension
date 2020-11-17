/*
 * The following code snippet is under the following licence
 *
 * https://www.npmjs.com/package/canvas-confetti
 *
 * ISC License
 *
 * Copyright (c) 2020, Kiril Vatev
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/canvas-confetti@1.2.0/dist/confetti.browser.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
// prettier-ignore
!function(t,e){!function t(e,n,o,a){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL);function r(){}function l(t){var o=n.exports.Promise,a=void 0!==o?o:e.Promise;return"function"==typeof a?new a(t):(t(r,r),null)}var c,s,u,h,d,f=(u=Math.floor(1e3/60),h={},d=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(t){var e=Math.random();return h[e]=requestAnimationFrame(function n(o){d===o||d+u-1<o?(d=o,delete h[e],t()):h[e]=requestAnimationFrame(n)}),e},s=function(t){h[t]&&cancelAnimationFrame(h[t])}):(c=function(t){return setTimeout(t,u)},s=function(t){return clearTimeout(t)}),{frame:c,cancel:s}),g=function(){var e,n,a={};return function(){if(e)return e;if(!o&&i){var r=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{e=new Worker(URL.createObjectURL(new Blob([r])))}catch(t){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Count not load worker",t),null}!function(t){function e(e,n){t.postMessage({options:e||{},callback:n})}t.init=function(e){var n=e.transferControlToOffscreen();t.postMessage({canvas:n},[n])},t.fire=function(o,i,r){if(n)return e(o,null),n;var c=Math.random().toString(36).slice(2);return n=l(function(i){function l(e){e.data.callback===c&&(delete a[c],t.removeEventListener("message",l),n=null,r(),i())}t.addEventListener("message",l),e(o,c),a[c]=l.bind(null,{data:{callback:c}})})},t.reset=function(){for(var e in t.postMessage({reset:!0}),a)a[e](),delete a[e]}}(e)}return e}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1};function b(t,e,n){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:m[e],n)}function v(t){return parseInt(t,16)}function y(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function p(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function M(t,e,n,i,r){var c,s,u=e.slice(),h=t.getContext("2d"),d=l(function(e){function l(){c=s=null,h.clearRect(0,0,i.width,i.height),r(),e()}c=f.frame(function e(){!o||i.width===a.width&&i.height===a.height||(i.width=t.width=a.width,i.height=t.height=a.height),i.width||i.height||(n(t),i.width=t.width,i.height=t.height),h.clearRect(0,0,i.width,i.height),(u=u.filter(function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=.1,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+5,e.wobbleX=e.x+10*Math.cos(e.wobble),e.wobbleY=e.y+10*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,o=e.x+e.random*e.tiltCos,a=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,r=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,Math.abs(i-o)*e.ovalScalar,Math.abs(r-a)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,n,o,a,i,r,l,c){t.save(),t.translate(e,n),t.rotate(i),t.scale(o,a),t.arc(0,0,1,r,l,c),t.restore()}(t,e.x,e.y,Math.abs(i-o)*e.ovalScalar,Math.abs(r-a)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(a)),t.lineTo(Math.floor(i),Math.floor(r)),t.lineTo(Math.floor(o),Math.floor(e.wobbleY))),t.closePath(),t.fill(),e.tick<e.totalTicks}(h,t)})).length?c=f.frame(e):l()}),s=l});return{addFettis:function(t){return u=u.concat(t),d},canvas:t,promise:d,reset:function(){c&&f.cancel(c),s&&s()}}}function w(t,n){var o,a=!t,r=!!b(n||{},"resize"),c=b(n,"disableForReducedMotion",Boolean),s=i&&!!b(n||{},"useWorker")?g():null,u=a?y:p,h=!(!t||!s)&&!!t.__confetti_initialized,d="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function f(e,n,a){for(var i,r,l,c,s,h,d,f=b(e,"particleCount",Math.floor),g=b(e,"angle",Number),m=b(e,"spread",Number),y=b(e,"startVelocity",Number),p=b(e,"decay",Number),w=b(e,"gravity",Number),x=b(e,"colors"),C=b(e,"ticks",Number),k=b(e,"shapes"),I=function(t){var e=b(t,"origin",Object);return e.x=b(e,"x",Number),e.y=b(e,"y",Number),e}(e),T=f,E=[],S=t.width*I.x,F=t.height*I.y;T--;)E.push((i={x:S,y:F,angle:g,spread:m,startVelocity:y,color:x[T%x.length],shape:k[(h=0,d=k.length,Math.floor(Math.random()*(d-h))+h)],ticks:C,decay:p,gravity:w},r=void 0,l=void 0,c=void 0,s=void 0,c=i.angle*(Math.PI/180),s=i.spread*(Math.PI/180),{x:i.x,y:i.y,wobble:10*Math.random(),velocity:.5*i.startVelocity+Math.random()*i.startVelocity,angle2D:-c+(.5*s-Math.random()*s),tiltAngle:Math.random()*Math.PI,color:(r=i.color,l=String(r).replace(/[^0-9a-f]/gi,""),l.length<6&&(l=l[0]+l[0]+l[1]+l[1]+l[2]+l[2]),{r:v(l.substring(0,2)),g:v(l.substring(2,4)),b:v(l.substring(4,6))}),shape:i.shape,tick:0,totalTicks:i.ticks,decay:i.decay,random:Math.random()+5,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*i.gravity,ovalScalar:.6}));return o?o.addFettis(E):(o=M(t,E,u,n,a)).promise}function m(n){var i=c||b(n,"disableForReducedMotion",Boolean),g=b(n,"zIndex",Number);if(i&&d)return l(function(t){t()});a&&o?t=o.canvas:a&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(g),document.body.appendChild(t)),r&&!h&&u(t);var m={width:t.width,height:t.height};function v(){if(s){var e={getBoundingClientRect:function(){if(!a)return t.getBoundingClientRect()}};return u(e),void s.postMessage({resize:{width:e.width,height:e.height}})}m.width=m.height=null}function y(){o=null,r&&e.removeEventListener("resize",v),a&&t&&(document.body.removeChild(t),t=null,h=!1)}return s&&!h&&s.init(t),h=!0,s&&(t.__confetti_initialized=!0),r&&e.addEventListener("resize",v,!1),s?s.fire(n,m,y):f(n,m,y)}return m.reset=function(){s&&s.reset(),o&&o.reset()},m}n.exports=w(null,{useWorker:!0,resize:!0}),n.exports.create=w}(function(){return void 0!==t?t:"undefined"!=typeof self?self:this}(),e,!1),t.confetti=e.exports}(window,{});

/*
 * The following code snippet is under the following licence
 *
 * ISC License
 *
 * Copyright (c) 2020, Toby Smith
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

(function () {
  function fireConfetti() {
    var count = 500;

    var defaultArgs = {
      angle: 90,
      zIndex: 2147483647,
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaultArgs,
        ...opts,
        origin: { y: 1, x: 0 },
        angle: 45,
        particleCount: Math.floor(count * particleRatio),
      });
      confetti({
        ...defaultArgs,
        ...opts,
        origin: { y: 1, x: 1 },
        angle: 135,
        particleCount: Math.floor(count * particleRatio),
      });
      confetti({
        ...defaultArgs,
        ...opts,
        origin: { y: 1, x: 0.5 },
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 100,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 50,
      decay: 0.92,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 90,
    });
  }
  fireConfetti();
})();
