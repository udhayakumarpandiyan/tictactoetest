(window.webpackJsonptictactoe=window.webpackJsonptictactoe||[]).push([[0],{17:function(e,t,n){"use strict";var o=n(6);t.a=Object(o.a)()},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var o="ADD_PLAYERS",r="UPDATE_PLAYERS"},28:function(e,t,n){e.exports=n(42)},33:function(e,t,n){},34:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(9),c=n.n(a),i=(n(33),n(34),n(16)),l=n(23),s=n(2),u=n(14),d=n(24),f=n.n(d),p=n(25),v=n(20);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={players:[{index:0,name:"",wins:0,symbol:"x",result:null},{index:1,name:"",wins:0,symbol:"o",result:null}]};var h=Object(s.c)({gameReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.a:return w({},e,{players:t.payload});default:return w({},e)}}}),m=n(26),y=n(27),O=[m.a],j=Object(s.d)(s.a.apply(void 0,O)),E={key:"root",storage:f.a,stateReconciler:y.a,blacklist:[]},k=Object(u.a)(E,h),P=Object(s.e)(k,j),A=Object(u.b)(P);var S=function(){var e=Object(o.lazy)((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,182))}));return r.a.createElement(o.Suspense,{fallback:r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"}))},r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{store:P},r.a.createElement(l.a,{loading:null,persistor:A},r.a.createElement(e,null)))))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var W=n(44),x=n(17);c.a.render(r.a.createElement(W.c,{history:x.a},r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tictactoe",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/tictactoe","/service-worker.js");D?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}},[[28,1,3]]]);
//# sourceMappingURL=main.de40708c.chunk.js.map