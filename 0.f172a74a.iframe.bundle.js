(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./node_modules/@storybook/preview-web/dist/esm/renderDocs.js":function(C,f,a){"use strict";a.r(f),a.d(f,"renderDocs",function(){return P}),a.d(f,"unmountDocs",function(){return S});var I=a("./node_modules/regenerator-runtime/runtime.js"),R=a("./node_modules/core-js/modules/es.object.to-string.js"),T=a("./node_modules/core-js/modules/es.promise.js"),E=a("./node_modules/react/index.js"),r=a.n(E),D=a("./node_modules/react-dom/index.js"),v=a.n(D),b={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},j={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},w={textAlign:"center"},p=function(){return r.a.createElement("div",{style:b,className:"sb-nodocs sb-wrapper"},r.a.createElement("div",{style:j},r.a.createElement("h1",{style:w},"No Docs"),r.a.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's\xA0",r.a.createElement("code",null,"docs")," parameter. If you think this is an error:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Please check the story definition."),r.a.createElement("li",null,"Please check the Storybook config."),r.a.createElement("li",null,"Try reloading the page.")),r.a.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))};p.displayName="NoDocs";function y(t,o,l,i,d,u,n){try{var c=t[u](n),s=c.value}catch(m){l(m);return}c.done?o(s):Promise.resolve(s).then(i,d)}function N(t){return function(){var o=this,l=arguments;return new Promise(function(i,d){var u=t.apply(o,l);function n(s){y(u,i,d,n,c,"next",s)}function c(s){y(u,i,d,n,c,"throw",s)}n(void 0)})}}function P(t,o,l,i){return k(t,o,l).then(i)}function k(t,o,l){return g.apply(this,arguments)}function g(){return g=N(regeneratorRuntime.mark(function t(o,l,i){var d,u,n,c,s,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.parameters.docs,!((n!=null&&n.getPage||n!=null&&n.page)&&!(n!=null&&n.getContainer||n!=null&&n.container))){e.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(e.t1=n.container,e.t1){e.next=8;break}return e.next=7,(d=n.getContainer)===null||d===void 0?void 0:d.call(n);case 7:e.t1=e.sent;case 8:if(e.t0=e.t1,e.t0){e.next=11;break}e.t0=function(h){var A=h.children;return r.a.createElement(r.a.Fragment,null,A)};case 11:if(c=e.t0,e.t3=n.page,e.t3){e.next=17;break}return e.next=16,(u=n.getPage)===null||u===void 0?void 0:u.call(n);case 16:e.t3=e.sent;case 17:if(e.t2=e.t3,e.t2){e.next=20;break}e.t2=p;case 20:return s=e.t2,m=r.a.createElement(c,{key:o.componentId,context:l},r.a.createElement(s,null)),e.next=24,new Promise(function(h){v.a.render(m,i,h)});case 24:case"end":return e.stop()}},t)})),g.apply(this,arguments)}function S(t){v.a.unmountComponentAtNode(t)}}}]);
