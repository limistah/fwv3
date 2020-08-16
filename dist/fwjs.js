!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("crypto")):"function"==typeof define&&define.amd?define(["crypto"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).crypto)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(t),n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,e){return t(e={exports:{}},e.exports),e.exports}var i=function(t){return t&&t.Math==Math&&t},c=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n&&n)||Function("return this")(),u=function(t){try{return!!t()}catch(t){return!0}},f=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,l={f:s&&!a.call({1:2},1)?function(t){var e=s(this,t);return!!e&&e.enumerable}:a},p=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},y={}.toString,h=function(t){return y.call(t).slice(8,-1)},b="".split,d=u((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==h(t)?b.call(t,""):Object(t)}:Object,g=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return d(g(t))},m=function(t){return"object"==typeof t?null!==t:"function"==typeof t},S=function(t,e){if(!m(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!m(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!m(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!m(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},O={}.hasOwnProperty,E=function(t,e){return O.call(t,e)},w=c.document,j=m(w)&&m(w.createElement),L=function(t){return j?w.createElement(t):{}},P=!f&&!u((function(){return 7!=Object.defineProperty(L("div"),"a",{get:function(){return 7}}).a})),T=Object.getOwnPropertyDescriptor,_={f:f?T:function(t,e){if(t=v(t),e=S(e,!0),P)try{return T(t,e)}catch(t){}if(E(t,e))return p(!l.f.call(t,e),t[e])}},C=function(t){if(!m(t))throw TypeError(String(t)+" is not an object");return t},D=Object.defineProperty,K={f:f?D:function(t,e,r){if(C(t),e=S(e,!0),C(r),P)try{return D(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},M=f?function(t,e,r){return K.f(t,e,p(1,r))}:function(t,e,r){return t[e]=r,t},R=function(t,e){try{M(c,t,e)}catch(r){c[t]=e}return e},N=c["__core-js_shared__"]||R("__core-js_shared__",{}),B=Function.toString;"function"!=typeof N.inspectSource&&(N.inspectSource=function(t){return B.call(t)});var x,A,F,I=N.inspectSource,k=c.WeakMap,U="function"==typeof k&&/native code/.test(I(k)),Y=o((function(t){(t.exports=function(t,e){return N[t]||(N[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),V=0,W=Math.random(),X=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++V+W).toString(36)},G=Y("keys"),q=function(t){return G[t]||(G[t]=X(t))},H={},z=c.WeakMap;if(U){var J=new z,Q=J.get,Z=J.has,$=J.set;x=function(t,e){return $.call(J,t,e),e},A=function(t){return Q.call(J,t)||{}},F=function(t){return Z.call(J,t)}}else{var tt=q("state");H[tt]=!0,x=function(t,e){return M(t,tt,e),e},A=function(t){return E(t,tt)?t[tt]:{}},F=function(t){return E(t,tt)}}var et,rt={set:x,get:A,has:F,enforce:function(t){return F(t)?A(t):x(t,{})},getterFor:function(t){return function(e){var r;if(!m(e)||(r=A(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},nt=o((function(t){var e=rt.get,r=rt.enforce,n=String(String).split("String");(t.exports=function(t,e,o,i){var u=!!i&&!!i.unsafe,f=!!i&&!!i.enumerable,a=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof e||E(o,"name")||M(o,"name",e),r(o).source=n.join("string"==typeof e?e:"")),t!==c?(u?!a&&t[e]&&(f=!0):delete t[e],f?t[e]=o:M(t,e,o)):f?t[e]=o:R(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||I(this)}))})),ot=c,it=function(t){return"function"==typeof t?t:void 0},ct=function(t,e){return arguments.length<2?it(ot[t])||it(c[t]):ot[t]&&ot[t][e]||c[t]&&c[t][e]},ut=Math.ceil,ft=Math.floor,at=function(t){return isNaN(t=+t)?0:(t>0?ft:ut)(t)},st=Math.min,lt=function(t){return t>0?st(at(t),9007199254740991):0},pt=Math.max,yt=Math.min,ht=function(t){return function(e,r,n){var o,i=v(e),c=lt(i.length),u=function(t,e){var r=at(t);return r<0?pt(r+e,0):yt(r,e)}(n,c);if(t&&r!=r){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((t||u in i)&&i[u]===r)return t||u||0;return!t&&-1}},bt={includes:ht(!0),indexOf:ht(!1)},dt=bt.indexOf,gt=function(t,e){var r,n=v(t),o=0,i=[];for(r in n)!E(H,r)&&E(n,r)&&i.push(r);for(;e.length>o;)E(n,r=e[o++])&&(~dt(i,r)||i.push(r));return i},vt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],mt=vt.concat("length","prototype"),St={f:Object.getOwnPropertyNames||function(t){return gt(t,mt)}},Ot={f:Object.getOwnPropertySymbols},Et=ct("Reflect","ownKeys")||function(t){var e=St.f(C(t)),r=Ot.f;return r?e.concat(r(t)):e},wt=function(t,e){for(var r=Et(e),n=K.f,o=_.f,i=0;i<r.length;i++){var c=r[i];E(t,c)||n(t,c,o(e,c))}},jt=/#|\.prototype\./,Lt=function(t,e){var r=Tt[Pt(t)];return r==Ct||r!=_t&&("function"==typeof e?u(e):!!e)},Pt=Lt.normalize=function(t){return String(t).replace(jt,".").toLowerCase()},Tt=Lt.data={},_t=Lt.NATIVE="N",Ct=Lt.POLYFILL="P",Dt=Lt,Kt=_.f,Mt=function(t,e){var r,n,o,i,u,f=t.target,a=t.global,s=t.stat;if(r=a?c:s?c[f]||R(f,{}):(c[f]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(u=Kt(r,n))&&u.value:r[n],!Dt(a?n:f+(s?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;wt(i,o)}(t.sham||o&&o.sham)&&M(i,"sham",!0),nt(r,n,i,t)}},Rt=!!Object.getOwnPropertySymbols&&!u((function(){return!String(Symbol())})),Nt=Rt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Bt=Array.isArray||function(t){return"Array"==h(t)},xt=function(t){return Object(g(t))},At=Object.keys||function(t){return gt(t,vt)},Ft=f?Object.defineProperties:function(t,e){C(t);for(var r,n=At(e),o=n.length,i=0;o>i;)K.f(t,r=n[i++],e[r]);return t},It=ct("document","documentElement"),kt=q("IE_PROTO"),Ut=function(){},Yt=function(t){return"<script>"+t+"<\/script>"},Vt=function(){try{et=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Vt=et?function(t){t.write(Yt("")),t.close();var e=t.parentWindow.Object;return t=null,e}(et):((e=L("iframe")).style.display="none",It.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Yt("document.F=Object")),t.close(),t.F);for(var r=vt.length;r--;)delete Vt.prototype[vt[r]];return Vt()};H[kt]=!0;var Wt,Xt,Gt,qt=Object.create||function(t,e){var r;return null!==t?(Ut.prototype=C(t),r=new Ut,Ut.prototype=null,r[kt]=t):r=Vt(),void 0===e?r:Ft(r,e)},Ht=St.f,zt={}.toString,Jt="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Qt={f:function(t){return Jt&&"[object Window]"==zt.call(t)?function(t){try{return Ht(t)}catch(t){return Jt.slice()}}(t):Ht(v(t))}},Zt=Y("wks"),$t=c.Symbol,te=Nt?$t:$t&&$t.withoutSetter||X,ee=function(t){return E(Zt,t)||(Rt&&E($t,t)?Zt[t]=$t[t]:Zt[t]=te("Symbol."+t)),Zt[t]},re={f:ee},ne=K.f,oe=K.f,ie=ee("toStringTag"),ce=function(t,e,r){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}},ue=ee("species"),fe=function(t,e){var r;return Bt(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!Bt(r.prototype)?m(r)&&null===(r=r[ue])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},ae=[].push,se=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,c=5==t||i;return function(u,f,a,s){for(var l,p,y=xt(u),h=d(y),b=ce(f,a,3),g=lt(h.length),v=0,m=s||fe,S=e?m(u,g):r?m(u,0):void 0;g>v;v++)if((c||v in h)&&(p=b(l=h[v],v,y),t))if(e)S[v]=p;else if(p)switch(t){case 3:return!0;case 5:return l;case 6:return v;case 2:ae.call(S,l)}else if(o)return!1;return i?-1:n||o?o:S}},le={forEach:se(0),map:se(1),filter:se(2),some:se(3),every:se(4),find:se(5),findIndex:se(6)},pe=le.forEach,ye=q("hidden"),he=ee("toPrimitive"),be=rt.set,de=rt.getterFor("Symbol"),ge=Object.prototype,ve=c.Symbol,me=ct("JSON","stringify"),Se=_.f,Oe=K.f,Ee=Qt.f,we=l.f,je=Y("symbols"),Le=Y("op-symbols"),Pe=Y("string-to-symbol-registry"),Te=Y("symbol-to-string-registry"),_e=Y("wks"),Ce=c.QObject,De=!Ce||!Ce.prototype||!Ce.prototype.findChild,Ke=f&&u((function(){return 7!=qt(Oe({},"a",{get:function(){return Oe(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Se(ge,e);n&&delete ge[e],Oe(t,e,r),n&&t!==ge&&Oe(ge,e,n)}:Oe,Me=function(t,e){var r=je[t]=qt(ve.prototype);return be(r,{type:"Symbol",tag:t,description:e}),f||(r.description=e),r},Re=Nt?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof ve},Ne=function(t,e,r){t===ge&&Ne(Le,e,r),C(t);var n=S(e,!0);return C(r),E(je,n)?(r.enumerable?(E(t,ye)&&t[ye][n]&&(t[ye][n]=!1),r=qt(r,{enumerable:p(0,!1)})):(E(t,ye)||Oe(t,ye,p(1,{})),t[ye][n]=!0),Ke(t,n,r)):Oe(t,n,r)},Be=function(t,e){C(t);var r=v(e),n=At(r).concat(Ie(r));return pe(n,(function(e){f&&!xe.call(r,e)||Ne(t,e,r[e])})),t},xe=function(t){var e=S(t,!0),r=we.call(this,e);return!(this===ge&&E(je,e)&&!E(Le,e))&&(!(r||!E(this,e)||!E(je,e)||E(this,ye)&&this[ye][e])||r)},Ae=function(t,e){var r=v(t),n=S(e,!0);if(r!==ge||!E(je,n)||E(Le,n)){var o=Se(r,n);return!o||!E(je,n)||E(r,ye)&&r[ye][n]||(o.enumerable=!0),o}},Fe=function(t){var e=Ee(v(t)),r=[];return pe(e,(function(t){E(je,t)||E(H,t)||r.push(t)})),r},Ie=function(t){var e=t===ge,r=Ee(e?Le:v(t)),n=[];return pe(r,(function(t){!E(je,t)||e&&!E(ge,t)||n.push(je[t])})),n};(Rt||(nt((ve=function(){if(this instanceof ve)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=X(t),r=function(t){this===ge&&r.call(Le,t),E(this,ye)&&E(this[ye],e)&&(this[ye][e]=!1),Ke(this,e,p(1,t))};return f&&De&&Ke(ge,e,{configurable:!0,set:r}),Me(e,t)}).prototype,"toString",(function(){return de(this).tag})),nt(ve,"withoutSetter",(function(t){return Me(X(t),t)})),l.f=xe,K.f=Ne,_.f=Ae,St.f=Qt.f=Fe,Ot.f=Ie,re.f=function(t){return Me(ee(t),t)},f&&(Oe(ve.prototype,"description",{configurable:!0,get:function(){return de(this).description}}),nt(ge,"propertyIsEnumerable",xe,{unsafe:!0}))),Mt({global:!0,wrap:!0,forced:!Rt,sham:!Rt},{Symbol:ve}),pe(At(_e),(function(t){!function(t){var e=ot.Symbol||(ot.Symbol={});E(e,t)||ne(e,t,{value:re.f(t)})}(t)})),Mt({target:"Symbol",stat:!0,forced:!Rt},{for:function(t){var e=String(t);if(E(Pe,e))return Pe[e];var r=ve(e);return Pe[e]=r,Te[r]=e,r},keyFor:function(t){if(!Re(t))throw TypeError(t+" is not a symbol");if(E(Te,t))return Te[t]},useSetter:function(){De=!0},useSimple:function(){De=!1}}),Mt({target:"Object",stat:!0,forced:!Rt,sham:!f},{create:function(t,e){return void 0===e?qt(t):Be(qt(t),e)},defineProperty:Ne,defineProperties:Be,getOwnPropertyDescriptor:Ae}),Mt({target:"Object",stat:!0,forced:!Rt},{getOwnPropertyNames:Fe,getOwnPropertySymbols:Ie}),Mt({target:"Object",stat:!0,forced:u((function(){Ot.f(1)}))},{getOwnPropertySymbols:function(t){return Ot.f(xt(t))}}),me)&&Mt({target:"JSON",stat:!0,forced:!Rt||u((function(){var t=ve();return"[null]"!=me([t])||"{}"!=me({a:t})||"{}"!=me(Object(t))}))},{stringify:function(t,e,r){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e,(m(e)||void 0!==t)&&!Re(t))return Bt(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Re(e))return e}),o[1]=e,me.apply(null,o)}});ve.prototype[he]||M(ve.prototype,he,ve.prototype.valueOf),Xt="Symbol",(Wt=ve)&&!E(Wt=Gt?Wt:Wt.prototype,ie)&&oe(Wt,ie,{configurable:!0,value:Xt}),H[ye]=!0;var ke,Ue,Ye=ct("navigator","userAgent")||"",Ve=c.process,We=Ve&&Ve.versions,Xe=We&&We.v8;Xe?Ue=(ke=Xe.split("."))[0]+ke[1]:Ye&&(!(ke=Ye.match(/Edge\/(\d+)/))||ke[1]>=74)&&(ke=Ye.match(/Chrome\/(\d+)/))&&(Ue=ke[1]);var Ge,qe=Ue&&+Ue,He=ee("species"),ze=Object.defineProperty,Je={},Qe=function(t){throw t},Ze=function(t,e){if(E(Je,t))return Je[t];e||(e={});var r=[][t],n=!!E(e,"ACCESSORS")&&e.ACCESSORS,o=E(e,0)?e[0]:Qe,i=E(e,1)?e[1]:void 0;return Je[t]=!!r&&!u((function(){if(n&&!f)return!0;var t={length:-1};n?ze(t,1,{enumerable:!0,get:Qe}):t[1]=1,r.call(t,o,i)}))},$e=le.filter,tr=(Ge="filter",qe>=51||!u((function(){var t=[];return(t.constructor={})[He]=function(){return{foo:1}},1!==t[Ge](Boolean).foo}))),er=Ze("filter");Mt({target:"Array",proto:!0,forced:!tr||!er},{filter:function(t){return $e(this,t,arguments.length>1?arguments[1]:void 0)}});var rr=le.forEach,nr=function(t,e){var r=[][t];return!!r&&u((function(){r.call(null,e||function(){throw 1},1)}))}("forEach"),or=Ze("forEach"),ir=nr&&or?[].forEach:function(t){return rr(this,t,arguments.length>1?arguments[1]:void 0)};Mt({target:"Array",proto:!0,forced:[].forEach!=ir},{forEach:ir});var cr=ee("unscopables"),ur=Array.prototype;null==ur[cr]&&K.f(ur,cr,{configurable:!0,value:qt(null)});var fr,ar=bt.includes;Mt({target:"Array",proto:!0,forced:!Ze("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return ar(this,t,arguments.length>1?arguments[1]:void 0)}}),fr="includes",ur[cr][fr]=!0;var sr=Object.assign,lr=Object.defineProperty,pr=!sr||u((function(){if(f&&1!==sr({b:1},sr(lr({},"a",{enumerable:!0,get:function(){lr(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol();return t[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=sr({},t)[r]||"abcdefghijklmnopqrst"!=At(sr({},e)).join("")}))?function(t,e){for(var r=xt(t),n=arguments.length,o=1,i=Ot.f,c=l.f;n>o;)for(var u,a=d(arguments[o++]),s=i?At(a).concat(i(a)):At(a),p=s.length,y=0;p>y;)u=s[y++],f&&!c.call(a,u)||(r[u]=a[u]);return r}:sr;Mt({target:"Object",stat:!0,forced:Object.assign!==pr},{assign:pr});var yr=_.f,hr=u((function(){yr(1)}));Mt({target:"Object",stat:!0,forced:!f||hr,sham:!f},{getOwnPropertyDescriptor:function(t,e){return yr(v(t),e)}});var br=function(t,e,r){var n=S(e);n in t?K.f(t,n,p(0,r)):t[n]=r};Mt({target:"Object",stat:!0,sham:!f},{getOwnPropertyDescriptors:function(t){for(var e,r,n=v(t),o=_.f,i=Et(n),c={},u=0;i.length>u;)void 0!==(r=o(n,e=i[u++]))&&br(c,e,r);return c}}),Mt({target:"Object",stat:!0,forced:u((function(){At(1)}))},{keys:function(t){return At(xt(t))}});var dr=ee("match"),gr=function(t){if(function(t){var e;return m(t)&&(void 0!==(e=t[dr])?!!e:"RegExp"==h(t))}(t))throw TypeError("The method doesn't accept regular expressions");return t},vr=ee("match");Mt({target:"String",proto:!0,forced:!function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[vr]=!1,"/./"[t](e)}catch(t){}}return!1}("includes")},{includes:function(t){return!!~String(g(this)).indexOf(gr(t),arguments.length>1?arguments[1]:void 0)}});for(var mr in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Sr=c[mr],Or=Sr&&Sr.prototype;if(Or&&Or.forEach!==ir)try{M(Or,"forEach",ir)}catch(t){Or.forEach=ir}}var Er=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},wr={liveURL:"https://live.com",sandboxURL:"https://sandbox.com",LIVE_MODE:"live",SANDBOX_MODE:"sandbox",versions:["v2","v3"],defaultVersion:"v2",testKeys:{v2:{secret:"FLWSECK_TEST-66a47ad8baf9222edbffc2a5868a8e79-X",encrypt:"FLWSECK_TESTd528b245a1a9",public:"FLWPUBK_TEST-728bae053ffa279627a7f427691bc2cb-X"},v3:{secret:"FLWSECK_TEST-SANDBOXDEMOKEY-X",encrypt:"FLWSECK_TEST74e0b6c7db0e",public:"FLWPUBK_TEST-SANDBOXDEMOKEY-X"}}};Buffer.alloc(16,0);var jr={encrypt:function(t,e=r.default.randomBytes(32),n="aes-256-cbc",o=16){const i=e||Buffer.from(e),c=Buffer.alloc(o,0);let u=r.default.createCipheriv(n,i,c),f=u.update(t);return f=Buffer.concat([f,u.final()]),{hash:f.toString("hex"),key:i.toString("base64")}},decrypt:function(t,e,n="aes-256-cbc",o=16){if(!e)return!1;const i=Buffer.alloc(o,0);let c=Buffer.from(t,"hex"),u=r.default.createDecipheriv(n,e,i),f=u.update(c);return f=Buffer.concat([f,u.final()]),f.toString()}};function Lr(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Pr(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Lr(Object(r),!0).forEach((function(e){Er(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Lr(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Tr(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=wr.versions.includes(t&&t.version),r=e?t.version:wr.defaultVersion,n=wr.testKeys[r],o=Object.assign({},t,{publicKey:n.public,secretKey:n.secret,encryptKey:n.encrypt,version:r,mode:wr.SANDBOX_MODE}),i=o.publicKey,c=o.secretKey,u=o.encryptKey,f=o.version,a=o.mode;return this.PUBLIC_KEY=process.env.FW_PUBLIC_KEY||i,this.SECRET_KEY=process.env.FW_SECRET_KEY||c,this.ENCRYPTION_KEY=process.env.FW_ENCRYPTION_KEY||u,this.MODE=a,this.VERSION=f,this}var _r={baseURL:wr.sandboxURL,setBaseURL:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wr.SANDBOX_MODE;return t===wr.LIVE_MODE?this.baseURL=wr.liveURL:this.baseURL=wr.sandboxURL,this},encrypt:function(t){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:envKey;return jr.encrypt(t,e,"des-ede3-cbc",8)}(t,this.ENCRYPTION_KEY)},makePayload:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=JSON.stringify(t),n=e?this.encrypt(r):r;return e?{alg:"3DES-24",PBFPubKey:this.PUBLIC_KEY,client:n}:Pr(Pr({},t),{},{PBFPubKey:this.PUBLIC_KEY})}};Tr.prototype=_r;var Cr=function(t){return new Tr},Dr=Cr(),Kr=Cr();console.log(Dr.baseURL),Dr.setBaseURL(wr.LIVE_MODE),console.log(Dr.baseURL),console.log(Kr.baseURL),console.log(Dr.encrypt("what are we trying?")),console.log(Dr.makePayload({cardNumber:"String"},!1)),module.exports=Cr}));
