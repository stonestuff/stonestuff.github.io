(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{837:function(Fa,er,c){"use strict";c.r(er),c.d(er,"ColorControl",function(){return Nr}),c.d(er,"default",function(){return Nr});var Fr=c(38),za=c.n(Fr),zr=c(53),$a=c.n(zr),$r=c(77),Xa=c.n($r),Xr=c(63),Va=c.n(Xr),Vr=c(12),Ga=c.n(Vr),Gr=c(122),Ja=c.n(Gr),Jr=c(24),Ya=c.n(Jr),Yr=c(85),Za=c.n(Yr),Zr=c(98),Qa=c.n(Zr),Qr=c(15),qa=c.n(Qr),qr=c(141),rt=c.n(qr),re=c(19),et=c.n(re),ee=c(18),at=c.n(ee),ae=c(51),tt=c.n(ae),te=c(52),nt=c.n(te),ne=c(86),ot=c.n(ne),oe=c(36),st=c.n(oe),se=c(35),lt=c.n(se),le=c(30),it=c.n(le),ie=c(109),ut=c.n(ie),ue=c(212),ct=c.n(ue),ce=c(39),vt=c.n(ce),ve=c(23),ft=c.n(ve),fe=c(27),dt=c.n(fe),de=c(28),_t=c.n(de),_e=c(40),ht=c.n(_e),I=c(2),m=c(0),_=c.n(m),K=c(1),he=c(47),mt=c.n(he),me=c(142),gt=c.n(me),H,N;function P(a,r,e){return r in a?Object.defineProperty(a,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[r]=e,a}function ar(a){return ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ar(a)}function L(a,r){return pe(a)||be(a,r)||Ee(a,r)||ge()}function ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ee(a,r){if(!!a){if(typeof a=="string")return gr(a,r);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return gr(a,r)}}function gr(a,r){(r==null||r>a.length)&&(r=a.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=a[e];return t}function be(a,r){var e=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t=[],n=!0,o=!1,s,l;try{for(e=e.call(a);!(n=(s=e.next()).done)&&(t.push(s.value),!(r&&t.length===r));n=!0);}catch(i){o=!0,l=i}finally{try{!n&&e.return!=null&&e.return()}finally{if(o)throw l}}return t}}function pe(a){if(Array.isArray(a))return a}function W(){return(W=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a}).apply(this,arguments)}function tr(a,r){if(a==null)return{};var e,t,n={},o=Object.keys(a);for(t=0;t<o.length;t++)r.indexOf(e=o[t])>=0||(n[e]=a[e]);return n}function nr(a){var r=Object(m.useRef)(a),e=Object(m.useRef)(function(t){r.current&&r.current(t)});return r.current=a,e.current}var U=function(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),r>t?t:r<e?e:r},F=function(r){return"touches"in r},or=function(r){return r&&r.ownerDocument.defaultView||self},Er=function(r,e,t){var n=r.getBoundingClientRect(),o=F(e)?function(s,l){for(var i=0;i<s.length;i++)if(s[i].identifier===l)return s[i];return s[0]}(e.touches,t):e;return{left:U((o.pageX-(n.left+or(r).pageXOffset))/n.width),top:U((o.pageY-(n.top+or(r).pageYOffset))/n.height)}},br=function(r){!F(r)&&r.preventDefault()},sr=_.a.memo(function(a){var r=a.onMove,e=a.onKey,t=tr(a,["onMove","onKey"]),n=Object(m.useRef)(null),o=nr(r),s=nr(e),l=Object(m.useRef)(null),i=Object(m.useRef)(!1),u=Object(m.useMemo)(function(){var O=function(h){br(h),(F(h)?h.touches.length>0:h.buttons>0)&&n.current?o(Er(n.current,h,l.current)):w(!1)},x=function(){return w(!1)};function w(p){var h=i.current,g=or(n.current),b=p?g.addEventListener:g.removeEventListener;b(h?"touchmove":"mousemove",O),b(h?"touchend":"mouseup",x)}return[function(p){var h=p.nativeEvent,g=n.current;if(g&&(br(h),!function(j,D){return D&&!F(j)}(h,i.current)&&g)){if(F(h)){i.current=!0;var b=h.changedTouches||[];b.length&&(l.current=b[0].identifier)}g.focus(),o(Er(g,h,l.current)),w(!0)}},function(p){var h=p.which||p.keyCode;h<37||h>40||(p.preventDefault(),s({left:h===39?.05:h===37?-.05:0,top:h===40?.05:h===38?-.05:0}))},w]},[s,o]),f=u[0],d=u[1],M=u[2];return Object(m.useEffect)(function(){return M},[M]),_.a.createElement("div",W({},t,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:n,onKeyDown:d,tabIndex:0,role:"slider"}))}),z=function(r){return r.filter(Boolean).join(" ")},lr=function(r){var e=r.color,t=r.left,n=r.top,o=n===void 0?.5:n,s=z(["react-colorful__pointer",r.className]);return _.a.createElement("div",{className:s,style:{top:100*o+"%",left:100*t+"%"}},_.a.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:e}}))},C=function(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=Math.pow(10,e)),Math.round(t*r)/t},Me={grad:.9,turn:360,rad:360/(2*Math.PI)},ir=function(r){return r[0]==="#"&&(r=r.substr(1)),r.length<6?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:1}:{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:1}},ye=function(r,e){return e===void 0&&(e="deg"),Number(r)*(Me[e]||1)},Oe=function(r){var e=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);return e?je({h:ye(e[1],e[2]),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)}):{h:0,s:0,v:0,a:1}},je=function(r){var e=r.s,t=r.l;return{h:r.h,s:(e*=(t<50?t:100-t)/100)>0?2*e/(t+e)*100:0,v:t+e,a:r.a}},pr=function(r){var e=r.s,t=r.v,n=r.a,o=(200-e)*t/100;return{h:C(r.h),s:C(o>0&&o<200?e*t/100/(o<=100?o:200-o)*100:0),l:C(o/2),a:C(n,2)}},ur=function(r){var e=pr(r);return"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"},G=function(r){var e=pr(r);return"hsla("+e.h+", "+e.s+"%, "+e.l+"%, "+e.a+")"},Mr=function(r){var e=r.h,t=r.s,n=r.v,o=r.a;e=e/360*6,t/=100,n/=100;var s=Math.floor(e),l=n*(1-t),i=n*(1-(e-s)*t),u=n*(1-(1-e+s)*t),f=s%6;return{r:C(255*[n,i,l,l,u,n][f]),g:C(255*[u,n,n,i,l,l][f]),b:C(255*[l,l,u,n,n,i][f]),a:C(o,2)}},Pe=function(r){var e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);return e?yr({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},cr=function(r){var e=r.toString(16);return e.length<2?"0"+e:e},yr=function(r){var e=r.r,t=r.g,n=r.b,o=r.a,s=Math.max(e,t,n),l=s-Math.min(e,t,n),i=l?s===e?(t-n)/l:s===t?2+(n-e)/l:4+(e-t)/l:0;return{h:C(60*(i<0?i+6:i)),s:C(s?l/s*100:0),v:C(s/255*100),a:o}},Or=_.a.memo(function(a){var r=a.hue,e=a.onChange,t=z(["react-colorful__hue",a.className]);return _.a.createElement("div",{className:t},_.a.createElement(sr,{onMove:function(o){e({h:360*o.left})},onKey:function(o){e({h:U(r+360*o.left,0,360)})},"aria-label":"Hue","aria-valuetext":C(r)},_.a.createElement(lr,{className:"react-colorful__hue-pointer",left:r/360,color:ur({h:r,s:100,v:100,a:1})})))}),jr=_.a.memo(function(a){var r=a.hsva,e=a.onChange,t={backgroundColor:ur({h:r.h,s:100,v:100,a:1})};return _.a.createElement("div",{className:"react-colorful__saturation",style:t},_.a.createElement(sr,{onMove:function(o){e({s:100*o.left,v:100-100*o.top})},onKey:function(o){e({s:U(r.s+100*o.left,0,100),v:U(r.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+C(r.s)+"%, Brightness "+C(r.v)+"%"},_.a.createElement(lr,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:ur(r)})))}),Pr=function(r,e){if(r===e)return!0;for(var t in r)if(r[t]!==e[t])return!1;return!0},Cr=function(r,e){return r.replace(/\s/g,"")===e.replace(/\s/g,"")};function xr(a,r,e){var t=nr(e),n=Object(m.useState)(function(){return a.toHsva(r)}),o=n[0],s=n[1],l=Object(m.useRef)({color:r,hsva:o});Object(m.useEffect)(function(){if(!a.equal(r,l.current.color)){var u=a.toHsva(r);l.current={hsva:u,color:r},s(u)}},[r,a]),Object(m.useEffect)(function(){var u;Pr(o,l.current.hsva)||a.equal(u=a.fromHsva(o),l.current.color)||(l.current={hsva:o,color:u},t(u))},[o,a,t]);var i=Object(m.useCallback)(function(u){s(function(f){return Object.assign({},f,u)})},[]);return[o,i]}for(var Ce=typeof window!="undefined"?m.useLayoutEffect:m.useEffect,xe=function(){return c.nc},Dr=new Map,Ir=function(r){Ce(function(){var e=r.current?r.current.ownerDocument:document;if(e!==void 0&&!Dr.has(e)){var t=e.createElement("style");t.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Dr.set(e,t);var n=xe();n&&t.setAttribute("nonce",n),e.head.appendChild(t)}},[])},De=function(r){var e=r.className,t=r.colorModel,n=r.color,o=n===void 0?t.defaultColor:n,s=r.onChange,l=tr(r,["className","colorModel","color","onChange"]),i=Object(m.useRef)(null);Ir(i);var u=xr(t,o,s),f=u[0],d=u[1],M=z(["react-colorful",e]);return _.a.createElement("div",W({},l,{ref:i,className:M}),_.a.createElement(jr,{hsva:f,onChange:d}),_.a.createElement(Or,{hue:f.h,onChange:d,className:"react-colorful__last-control"}))},Ie={defaultColor:"000",toHsva:function(r){return yr(ir(r))},fromHsva:function(r){return t=(e=Mr(r)).g,n=e.b,"#"+cr(e.r)+cr(t)+cr(n);var e,t,n},equal:function(r,e){return r.toLowerCase()===e.toLowerCase()||Pr(ir(r),ir(e))}},Re=function(r){return _.a.createElement(De,W({},r,{colorModel:Ie}))},Te=function(r){var e=r.className,t=r.hsva,n=r.onChange,o={backgroundImage:"linear-gradient(90deg, "+G(Object.assign({},t,{a:0}))+", "+G(Object.assign({},t,{a:1}))+")"},s=z(["react-colorful__alpha",e]);return _.a.createElement("div",{className:s},_.a.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),_.a.createElement(sr,{onMove:function(i){n({a:i.left})},onKey:function(i){n({a:U(t.a+i.left)})},"aria-label":"Alpha","aria-valuetext":C(100*t.a)+"%"},_.a.createElement(lr,{className:"react-colorful__alpha-pointer",left:t.a,color:G(t)})))},Rr=function(r){var e=r.className,t=r.colorModel,n=r.color,o=n===void 0?t.defaultColor:n,s=r.onChange,l=tr(r,["className","colorModel","color","onChange"]),i=Object(m.useRef)(null);Ir(i);var u=xr(t,o,s),f=u[0],d=u[1],M=z(["react-colorful",e]);return _.a.createElement("div",W({},l,{ref:i,className:M}),_.a.createElement(jr,{hsva:f,onChange:d}),_.a.createElement(Or,{hue:f.h,onChange:d}),_.a.createElement(Te,{hsva:f,onChange:d,className:"react-colorful__last-control"}))},we={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Oe,fromHsva:G,equal:Cr},Le=function(r){return _.a.createElement(Rr,W({},r,{colorModel:we}))},Be={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Pe,fromHsva:function(r){var e=Mr(r);return"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"},equal:Cr},Ae=function(r){return _.a.createElement(Rr,W({},r,{colorModel:Be}))},Ke={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},$=Ke,Tr={},vr=0,wr=Object.keys($);vr<wr.length;vr++){var Lr=wr[vr];Tr[$[Lr]]=Lr}for(var v={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},Br=v,fr=0,Ar=Object.keys(v);fr<Ar.length;fr++){var R=Ar[fr];if(!("channels"in v[R]))throw new Error("missing channels property: "+R);if(!("labels"in v[R]))throw new Error("missing channel labels property: "+R);if(v[R].labels.length!==v[R].channels)throw new Error("channel and label counts mismatch: "+R);var Kr=v[R],We=Kr.channels,Se=Kr.labels;delete v[R].channels,delete v[R].labels,Object.defineProperty(v[R],"channels",{value:We}),Object.defineProperty(v[R],"labels",{value:Se})}v.rgb.hsl=function(a){var r=a[0]/255,e=a[1]/255,t=a[2]/255,n=Math.min(r,e,t),o=Math.max(r,e,t),s=o-n,l,i;o===n?l=0:r===o?l=(e-t)/s:e===o?l=2+(t-r)/s:t===o&&(l=4+(r-e)/s),l=Math.min(l*60,360),l<0&&(l+=360);var u=(n+o)/2;return o===n?i=0:u<=.5?i=s/(o+n):i=s/(2-o-n),[l,i*100,u*100]},v.rgb.hsv=function(a){var r,e,t,n,o,s=a[0]/255,l=a[1]/255,i=a[2]/255,u=Math.max(s,l,i),f=u-Math.min(s,l,i),d=function(O){return(u-O)/6/f+1/2};return f===0?(n=0,o=0):(o=f/u,r=d(s),e=d(l),t=d(i),s===u?n=t-e:l===u?n=1/3+r-t:i===u&&(n=2/3+e-r),n<0?n+=1:n>1&&(n-=1)),[n*360,o*100,u*100]},v.rgb.hwb=function(a){var r=a[0],e=a[1],t=a[2],n=v.rgb.hsl(a)[0],o=1/255*Math.min(r,Math.min(e,t));return t=1-1/255*Math.max(r,Math.max(e,t)),[n,o*100,t*100]},v.rgb.cmyk=function(a){var r=a[0]/255,e=a[1]/255,t=a[2]/255,n=Math.min(1-r,1-e,1-t),o=(1-r-n)/(1-n)||0,s=(1-e-n)/(1-n)||0,l=(1-t-n)/(1-n)||0;return[o*100,s*100,l*100,n*100]};function Ue(a,r){return Math.pow(a[0]-r[0],2)+Math.pow(a[1]-r[1],2)+Math.pow(a[2]-r[2],2)}v.rgb.keyword=function(a){var r=Tr[a];if(r)return r;for(var e=1/0,t,n=0,o=Object.keys($);n<o.length;n++){var s=o[n],l=$[s],i=Ue(a,l);i<e&&(e=i,t=s)}return t},v.keyword.rgb=function(a){return $[a]},v.rgb.xyz=function(a){var r=a[0]/255,e=a[1]/255,t=a[2]/255;r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92;var n=r*.4124+e*.3576+t*.1805,o=r*.2126+e*.7152+t*.0722,s=r*.0193+e*.1192+t*.9505;return[n*100,o*100,s*100]},v.rgb.lab=function(a){var r=v.rgb.xyz(a),e=r[0],t=r[1],n=r[2];e/=95.047,t/=100,n/=108.883,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;var o=116*t-16,s=500*(e-t),l=200*(t-n);return[o,s,l]},v.hsl.rgb=function(a){var r=a[0]/360,e=a[1]/100,t=a[2]/100,n,o,s;if(e===0)return s=t*255,[s,s,s];t<.5?n=t*(1+e):n=t+e-t*e;for(var l=2*t-n,i=[0,0,0],u=0;u<3;u++)o=r+1/3*-(u-1),o<0&&o++,o>1&&o--,6*o<1?s=l+(n-l)*6*o:2*o<1?s=n:3*o<2?s=l+(n-l)*(2/3-o)*6:s=l,i[u]=s*255;return i},v.hsl.hsv=function(a){var r=a[0],e=a[1]/100,t=a[2]/100,n=e,o=Math.max(t,.01);t*=2,e*=t<=1?t:2-t,n*=o<=1?o:2-o;var s=(t+e)/2,l=t===0?2*n/(o+n):2*e/(t+e);return[r,l*100,s*100]},v.hsv.rgb=function(a){var r=a[0]/60,e=a[1]/100,t=a[2]/100,n=Math.floor(r)%6,o=r-Math.floor(r),s=255*t*(1-e),l=255*t*(1-e*o),i=255*t*(1-e*(1-o));switch(t*=255,n){case 0:return[t,i,s];case 1:return[l,t,s];case 2:return[s,t,i];case 3:return[s,l,t];case 4:return[i,s,t];case 5:return[t,s,l]}},v.hsv.hsl=function(a){var r=a[0],e=a[1]/100,t=a[2]/100,n=Math.max(t,.01),o,s;s=(2-e)*t;var l=(2-e)*n;return o=e*n,o/=l<=1?l:2-l,o=o||0,s/=2,[r,o*100,s*100]},v.hwb.rgb=function(a){var r=a[0]/360,e=a[1]/100,t=a[2]/100,n=e+t,o;n>1&&(e/=n,t/=n);var s=Math.floor(6*r),l=1-t;o=6*r-s,(s&1)!==0&&(o=1-o);var i=e+o*(l-e),u,f,d;switch(s){default:case 6:case 0:u=l,f=i,d=e;break;case 1:u=i,f=l,d=e;break;case 2:u=e,f=l,d=i;break;case 3:u=e,f=i,d=l;break;case 4:u=i,f=e,d=l;break;case 5:u=l,f=e,d=i;break}return[u*255,f*255,d*255]},v.cmyk.rgb=function(a){var r=a[0]/100,e=a[1]/100,t=a[2]/100,n=a[3]/100,o=1-Math.min(1,r*(1-n)+n),s=1-Math.min(1,e*(1-n)+n),l=1-Math.min(1,t*(1-n)+n);return[o*255,s*255,l*255]},v.xyz.rgb=function(a){var r=a[0]/100,e=a[1]/100,t=a[2]/100,n,o,s;return n=r*3.2406+e*-1.5372+t*-.4986,o=r*-.9689+e*1.8758+t*.0415,s=r*.0557+e*-.204+t*1.057,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o*12.92,s=s>.0031308?1.055*Math.pow(s,1/2.4)-.055:s*12.92,n=Math.min(Math.max(0,n),1),o=Math.min(Math.max(0,o),1),s=Math.min(Math.max(0,s),1),[n*255,o*255,s*255]},v.xyz.lab=function(a){var r=a[0],e=a[1],t=a[2];r/=95.047,e/=100,t/=108.883,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116;var n=116*e-16,o=500*(r-e),s=200*(e-t);return[n,o,s]},v.lab.xyz=function(a){var r=a[0],e=a[1],t=a[2],n,o,s;o=(r+16)/116,n=e/500+o,s=o-t/200;var l=Math.pow(o,3),i=Math.pow(n,3),u=Math.pow(s,3);return o=l>.008856?l:(o-16/116)/7.787,n=i>.008856?i:(n-16/116)/7.787,s=u>.008856?u:(s-16/116)/7.787,n*=95.047,o*=100,s*=108.883,[n,o,s]},v.lab.lch=function(a){var r=a[0],e=a[1],t=a[2],n,o=Math.atan2(t,e);n=o*360/2/Math.PI,n<0&&(n+=360);var s=Math.sqrt(e*e+t*t);return[r,s,n]},v.lch.lab=function(a){var r=a[0],e=a[1],t=a[2],n=t/360*2*Math.PI,o=e*Math.cos(n),s=e*Math.sin(n);return[r,o,s]},v.rgb.ansi16=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,e=L(a,3),t=e[0],n=e[1],o=e[2],s=r===null?v.rgb.hsv(a)[2]:r;if(s=Math.round(s/50),s===0)return 30;var l=30+(Math.round(o/255)<<2|Math.round(n/255)<<1|Math.round(t/255));return s===2&&(l+=60),l},v.hsv.ansi16=function(a){return v.rgb.ansi16(v.hsv.rgb(a),a[2])},v.rgb.ansi256=function(a){var r=a[0],e=a[1],t=a[2];if(r===e&&e===t)return r<8?16:r>248?231:Math.round((r-8)/247*24)+232;var n=16+36*Math.round(r/255*5)+6*Math.round(e/255*5)+Math.round(t/255*5);return n},v.ansi16.rgb=function(a){var r=a%10;if(r===0||r===7)return a>50&&(r+=3.5),r=r/10.5*255,[r,r,r];var e=(~~(a>50)+1)*.5,t=(r&1)*e*255,n=(r>>1&1)*e*255,o=(r>>2&1)*e*255;return[t,n,o]},v.ansi256.rgb=function(a){if(a>=232){var r=(a-232)*10+8;return[r,r,r]}a-=16;var e,t=Math.floor(a/36)/5*255,n=Math.floor((e=a%36)/6)/5*255,o=e%6/5*255;return[t,n,o]},v.rgb.hex=function(a){var r=((Math.round(a[0])&255)<<16)+((Math.round(a[1])&255)<<8)+(Math.round(a[2])&255),e=r.toString(16).toUpperCase();return"000000".substring(e.length)+e},v.hex.rgb=function(a){var r=a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var e=r[0];r[0].length===3&&(e=e.split("").map(function(l){return l+l}).join(""));var t=parseInt(e,16),n=t>>16&255,o=t>>8&255,s=t&255;return[n,o,s]},v.rgb.hcg=function(a){var r=a[0]/255,e=a[1]/255,t=a[2]/255,n=Math.max(Math.max(r,e),t),o=Math.min(Math.min(r,e),t),s=n-o,l,i;return s<1?l=o/(1-s):l=0,s<=0?i=0:n===r?i=(e-t)/s%6:n===e?i=2+(t-r)/s:i=4+(r-e)/s,i/=6,i%=1,[i*360,s*100,l*100]},v.hsl.hcg=function(a){var r=a[1]/100,e=a[2]/100,t=e<.5?2*r*e:2*r*(1-e),n=0;return t<1&&(n=(e-.5*t)/(1-t)),[a[0],t*100,n*100]},v.hsv.hcg=function(a){var r=a[1]/100,e=a[2]/100,t=r*e,n=0;return t<1&&(n=(e-t)/(1-t)),[a[0],t*100,n*100]},v.hcg.rgb=function(a){var r=a[0]/360,e=a[1]/100,t=a[2]/100;if(e===0)return[t*255,t*255,t*255];var n=[0,0,0],o=r%1*6,s=o%1,l=1-s,i=0;switch(Math.floor(o)){case 0:n[0]=1,n[1]=s,n[2]=0;break;case 1:n[0]=l,n[1]=1,n[2]=0;break;case 2:n[0]=0,n[1]=1,n[2]=s;break;case 3:n[0]=0,n[1]=l,n[2]=1;break;case 4:n[0]=s,n[1]=0,n[2]=1;break;default:n[0]=1,n[1]=0,n[2]=l}return i=(1-e)*t,[(e*n[0]+i)*255,(e*n[1]+i)*255,(e*n[2]+i)*255]},v.hcg.hsv=function(a){var r=a[1]/100,e=a[2]/100,t=r+e*(1-r),n=0;return t>0&&(n=r/t),[a[0],n*100,t*100]},v.hcg.hsl=function(a){var r=a[1]/100,e=a[2]/100,t=e*(1-r)+.5*r,n=0;return t>0&&t<.5?n=r/(2*t):t>=.5&&t<1&&(n=r/(2*(1-t))),[a[0],n*100,t*100]},v.hcg.hwb=function(a){var r=a[1]/100,e=a[2]/100,t=r+e*(1-r);return[a[0],(t-r)*100,(1-t)*100]},v.hwb.hcg=function(a){var r=a[1]/100,e=a[2]/100,t=1-e,n=t-r,o=0;return n<1&&(o=(t-n)/(1-n)),[a[0],n*100,o*100]},v.apple.rgb=function(a){return[a[0]/65535*255,a[1]/65535*255,a[2]/65535*255]},v.rgb.apple=function(a){return[a[0]/255*65535,a[1]/255*65535,a[2]/255*65535]},v.gray.rgb=function(a){return[a[0]/100*255,a[0]/100*255,a[0]/100*255]},v.gray.hsl=function(a){return[0,0,a[0]]},v.gray.hsv=v.gray.hsl,v.gray.hwb=function(a){return[0,100,a[0]]},v.gray.cmyk=function(a){return[0,0,0,a[0]]},v.gray.lab=function(a){return[a[0],0,0]},v.gray.hex=function(a){var r=Math.round(a[0]/100*255)&255,e=(r<<16)+(r<<8)+r,t=e.toString(16).toUpperCase();return"000000".substring(t.length)+t},v.rgb.gray=function(a){var r=(a[0]+a[1]+a[2])/3;return[r/255*100]};var J=Br;function ke(){for(var a={},r=Object.keys(J),e=r.length,t=0;t<e;t++)a[r[t]]={distance:-1,parent:null};return a}function He(a){var r=ke(),e=[a];for(r[a].distance=0;e.length;)for(var t=e.pop(),n=Object.keys(J[t]),o=n.length,s=0;s<o;s++){var l=n[s],i=r[l];i.distance===-1&&(i.distance=r[t].distance+1,i.parent=t,e.unshift(l))}return r}function Ne(a,r){return function(e){return r(a(e))}}function Fe(a,r){for(var e=[r[a].parent,a],t=J[r[a].parent][a],n=r[a].parent;r[n].parent;)e.unshift(r[n].parent),t=Ne(J[r[n].parent][n],t),n=r[n].parent;return t.conversion=e,t}var ze=function(r){for(var e=He(r),t={},n=Object.keys(e),o=n.length,s=0;s<o;s++){var l=n[s],i=e[l];i.parent!==null&&(t[l]=Fe(l,e))}return t},dr=Br,$e=ze,k={},Xe=Object.keys(dr);function Ve(a){var r=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var s=n[0];return s==null?s:(s.length>1&&(n=s),a(n))};return"conversion"in a&&(r.conversion=a.conversion),r}function Ge(a){var r=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var s=n[0];if(s==null)return s;s.length>1&&(n=s);var l=a(n);if(ar(l)==="object")for(var i=l.length,u=0;u<i;u++)l[u]=Math.round(l[u]);return l};return"conversion"in a&&(r.conversion=a.conversion),r}Xe.forEach(function(a){k[a]={},Object.defineProperty(k[a],"channels",{value:dr[a].channels}),Object.defineProperty(k[a],"labels",{value:dr[a].labels});var r=$e(a),e=Object.keys(r);e.forEach(function(t){var n=r[t];k[a][t]=Ge(n),k[a][t].raw=Ve(n)})});var T=k,Je=I.Y,Ye=function(){return Je.Date.now()},Ze=Ye,Qe=/\s/;function qe(a){for(var r=a.length;r--&&Qe.test(a.charAt(r)););return r}var ra=qe,ea=ra,aa=/^\s+/;function ta(a){return a&&a.slice(0,ea(a)+1).replace(aa,"")}var na=ta,oa=na,Wr=I.Z,sa=I.ab,Sr=0/0,la=/^[-+]0x[0-9a-f]+$/i,ia=/^0b[01]+$/i,ua=/^0o[0-7]+$/i,ca=parseInt;function va(a){if(typeof a=="number")return a;if(sa(a))return Sr;if(Wr(a)){var r=typeof a.valueOf=="function"?a.valueOf():a;a=Wr(r)?r+"":r}if(typeof a!="string")return a===0?a:+a;a=oa(a);var e=ia.test(a);return e||ua.test(a)?ca(a.slice(2),e?2:8):la.test(a)?Sr:+a}var fa=va,da=I.Z,_r=Ze,Ur=fa,_a="Expected a function",ha=Math.max,ma=Math.min;function ga(a,r,e){var t,n,o,s,l,i,u=0,f=!1,d=!1,M=!0;if(typeof a!="function")throw new TypeError(_a);r=Ur(r)||0,da(e)&&(f=!!e.leading,d="maxWait"in e,o=d?ha(Ur(e.maxWait)||0,r):o,M="trailing"in e?!!e.trailing:M);function O(y){var B=t,A=n;return t=n=void 0,u=y,s=a.apply(A,B),s}function x(y){return u=y,l=setTimeout(h,r),f?O(y):s}function w(y){var B=y-i,A=y-u,q=r-B;return d?ma(q,o-A):q}function p(y){var B=y-i,A=y-u;return i===void 0||B>=r||B<0||d&&A>=o}function h(){var y=_r();if(p(y))return g(y);l=setTimeout(h,w(y))}function g(y){return l=void 0,M&&t?O(y):(t=n=void 0,s)}function b(){l!==void 0&&clearTimeout(l),u=0,t=i=n=l=void 0}function j(){return l===void 0?s:g(_r())}function D(){var y=_r(),B=p(y);if(t=arguments,n=this,i=y,B){if(l===void 0)return x(i);if(d)return clearTimeout(l),l=setTimeout(h,r),O(i)}return l===void 0&&(l=setTimeout(h,r)),s}return D.cancel=b,D.flush=j,D}var Ea=ga,ba=Ea,pa=I.Z,Ma="Expected a function";function ya(a,r,e){var t=!0,n=!0;if(typeof a!="function")throw new TypeError(Ma);return pa(e)&&(t="leading"in e?!!e.leading:t,n="trailing"in e?!!e.trailing:n),ba(a,r,{leading:t,maxWait:r,trailing:n})}var Oa=ya,ja=K.k.div({position:"relative",maxWidth:250}),Pa=Object(K.k)(I.g)({position:"absolute",zIndex:1,top:4,left:4}),Ca=K.k.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),xa=Object(K.k)(I.f)(function(a){var r=a.theme;return{fontFamily:r.typography.fonts.base}}),Da=K.k.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Ia=K.k.div(function(a){var r=a.theme,e=a.active;return{width:16,height:16,boxShadow:e?"".concat(r.appBorderColor," 0 0 0 1px inset, ").concat(r.color.mediumdark,"50 0 0 0 4px"):"".concat(r.appBorderColor," 0 0 0 1px inset"),borderRadius:r.appBorderRadius}}),Ra=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,kr=function(r){var e=r.value,t=r.active,n=r.onClick,o=r.style,s=Object(I.i)(r,["value","active","onClick","style"]),l="linear-gradient(".concat(e,", ").concat(e,"), ").concat(Ra,", linear-gradient(#fff, #fff)");return _.a.createElement(Ia,Object.assign({},s,{active:t,onClick:n},{style:Object.assign(Object.assign({},o),{backgroundImage:l})}))},Ta=Object(K.k)(I.c.Input)(function(a){var r=a.theme;return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:r.typography.fonts.base}}),wa=Object(K.k)(I.d)(function(a){var r=a.theme;return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:r.input.color}}),E;(function(a){a.RGB="rgb",a.HSL="hsl",a.HEX="hex"})(E||(E={}));var Y=Object.values(E),La=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Ba=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Aa=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,hr=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Ka=/^\s*#?([0-9a-f]{3})\s*$/i,Wa=(H={},P(H,E.HEX,Re),P(H,E.RGB,Ae),P(H,E.HSL,Le),H),Z=(N={},P(N,E.HEX,"transparent"),P(N,E.RGB,"rgba(0, 0, 0, 0)"),P(N,E.HSL,"hsla(0, 0%, 0%, 0)"),N),Hr=function(r){var e=r==null?void 0:r.match(La);if(!e)return[0,0,0,1];var t=L(e,5),n=t[1],o=t[2],s=t[3],l=t[4],i=l===void 0?1:l;return[n,o,s,i].map(Number)},X=function(r){var e;if(!!r){var t=!0;if(Ba.test(r)){var n,o=Hr(r),s=L(o,4),l=s[0],i=s[1],u=s[2],f=s[3],d=T.rgb.hsl([l,i,u])||[0,0,0],M=L(d,3),O=M[0],x=M[1],w=M[2];return n={valid:t,value:r,keyword:T.rgb.keyword([l,i,u]),colorSpace:E.RGB},P(n,E.RGB,r),P(n,E.HSL,"hsla(".concat(O,", ").concat(x,"%, ").concat(w,"%, ").concat(f,")")),P(n,E.HEX,"#".concat(T.rgb.hex([l,i,u]).toLowerCase())),n}if(Aa.test(r)){var p,h=Hr(r),g=L(h,4),b=g[0],j=g[1],D=g[2],y=g[3],B=T.hsl.rgb([b,j,D])||[0,0,0],A=L(B,3),q=A[0],Ha=A[1],Na=A[2];return p={valid:t,value:r,keyword:T.hsl.keyword([b,j,D]),colorSpace:E.HSL},P(p,E.RGB,"rgba(".concat(q,", ").concat(Ha,", ").concat(Na,", ").concat(y,")")),P(p,E.HSL,r),P(p,E.HEX,"#".concat(T.hsl.hex([b,j,D]).toLowerCase())),p}var rr=r.replace("#",""),V=T.keyword.rgb(rr)||T.hex.rgb(rr),mr=T.rgb.hsl(V),S=r;if(/[^#a-f0-9]/i.test(r)?S=rr:hr.test(r)&&(S="#".concat(rr)),S.startsWith("#"))t=hr.test(S);else try{T.keyword.hex(S)}catch(Et){t=!1}return e={valid:t,value:S,keyword:T.rgb.keyword(V),colorSpace:E.HEX},P(e,E.RGB,"rgba(".concat(V[0],", ").concat(V[1],", ").concat(V[2],", 1)")),P(e,E.HSL,"hsla(".concat(mr[0],", ").concat(mr[1],"%, ").concat(mr[2],"%, 1)")),P(e,E.HEX,S),e}},Sa=function(r,e,t){if(!r||!(e!=null&&e.valid))return Z[t];if(t!==E.HEX)return(e==null?void 0:e[t])||Z[t];if(!e.hex.startsWith("#"))try{return"#".concat(T.keyword.hex(e.hex))}catch(f){return Z.hex}var n=e.hex.match(Ka);if(!n)return hr.test(e.hex)?e.hex:Z.hex;var o=n[1].split(""),s=L(o,3),l=s[0],i=s[1],u=s[2];return"#".concat(l).concat(l).concat(i).concat(i).concat(u).concat(u)},Ua=function(r,e){var t=Object(m.useState)(r||""),n=L(t,2),o=n[0],s=n[1],l=Object(m.useState)(function(){return X(o)}),i=L(l,2),u=i[0],f=i[1],d=Object(m.useState)((u==null?void 0:u.colorSpace)||E.HEX),M=L(d,2),O=M[0],x=M[1];Object(m.useEffect)(function(){r===void 0&&(s(""),f(void 0),x(E.HEX))},[r]);var w=Object(m.useMemo)(function(){return Sa(o,u,O).toLowerCase()},[o,u,O]),p=Object(m.useCallback)(function(g){var b=X(g);s((b==null?void 0:b.value)||g||""),b&&(f(b),x(b.colorSpace),e(b.value))},[e]),h=Object(m.useCallback)(function(){var g=Y.indexOf(O)+1;g>=Y.length&&(g=0),x(Y[g]);var b=(u==null?void 0:u[Y[g]])||"";s(b),e(b)},[u,O,e]);return{value:o,realValue:w,updateValue:p,color:u,colorSpace:O,cycleColorSpace:h}},Q=function(r){return r.replace(/\s*/,"").toLowerCase()},ka=function(r,e,t){var n=Object(m.useState)(e!=null&&e.valid?[e]:[]),o=L(n,2),s=o[0],l=o[1];Object(m.useEffect)(function(){e===void 0&&l([])},[e]);var i=Object(m.useMemo)(function(){var f=(r||[]).map(function(d){return typeof d=="string"?X(d):d.title?Object.assign(Object.assign({},X(d.color)),{keyword:d.title}):X(d.color)});return f.concat(s).filter(Boolean).slice(-27)},[r,s]),u=Object(m.useCallback)(function(f){!(f!=null&&f.valid)||i.some(function(d){return Q(d[t])===Q(f[t])})||l(function(d){return d.concat(f)})},[t,i]);return{presets:i,addPreset:u}},Nr=function(r){var e=r.name,t=r.value,n=r.onChange,o=r.onFocus,s=r.onBlur,l=r.presetColors,i=r.startOpen,u=Ua(t,Oa(n,200)),f=u.value,d=u.realValue,M=u.updateValue,O=u.color,x=u.colorSpace,w=u.cycleColorSpace,p=ka(l,O,x),h=p.presets,g=p.addPreset,b=Wa[x];return _.a.createElement(ja,null,_.a.createElement(Pa,{trigger:"click",startOpen:i,closeOnClick:!0,onVisibilityChange:function(){return g(O)},tooltip:_.a.createElement(Ca,null,_.a.createElement(b,Object.assign({color:d==="transparent"?"#000000":d},{onChange:M,onFocus:o,onBlur:s})),h.length>0&&_.a.createElement(Da,null,h.map(function(j,D){return _.a.createElement(I.g,{key:"".concat(j.value,"-").concat(D),hasChrome:!1,tooltip:_.a.createElement(xa,{note:j.keyword||j.value})},_.a.createElement(kr,{value:j[x],active:O&&Q(j[x])===Q(O[x]),onClick:function(){return M(j.value)}}))})))},_.a.createElement(kr,{value:d,style:{margin:4}})),_.a.createElement(Ta,{id:Object(I.b)(e),value:f,onChange:function(D){return M(D.target.value)},onFocus:function(D){return D.target.select()},placeholder:"Choose color..."}),f?_.a.createElement(wa,{icon:"markup",onClick:w}):null)}}}]);
