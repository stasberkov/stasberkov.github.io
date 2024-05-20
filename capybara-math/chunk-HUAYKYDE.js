var oe=Object.defineProperty,ie=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var I=(r,e,t)=>e in r?oe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,we=(r,e)=>{for(var t in e||={})q.call(e,t)&&I(r,t,e[t]);if(j)for(var t of j(e))B.call(e,t)&&I(r,t,e[t]);return r},Pe=(r,e)=>ie(r,ae(e));var be=(r,e)=>{var t={};for(var n in r)q.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&j)for(var n of j(r))e.indexOf(n)<0&&B.call(r,n)&&(t[n]=r[n]);return t};var u=(r,e,t)=>new Promise((n,i)=>{var s=c=>{try{o(t.next(c))}catch(l){i(l)}},a=c=>{try{o(t.throw(c))}catch(l){i(l)}},o=c=>c.done?n(c.value):Promise.resolve(c.value).then(s,a);o((t=t.apply(r,e)).next())});var le=r=>{let e=new Map;e.set("web",{name:"web"});let t=r.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},n=(s,a)=>{t.platforms.set(s,a)},i=s=>{t.platforms.has(s)&&(t.currentPlatform=t.platforms.get(s))};return t.addPlatform=n,t.setPlatform=i,t},ce=r=>r.CapacitorPlatforms=le(r),V=ce(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ye=V.addPlatform,Le=V.setPlatform;var k=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}(k||{}),E=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},de=r=>{var e,t;return r?.androidBridge?"android":!((t=(e=r?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},ue=r=>{var e,t,n,i,s;let a=r.CapacitorCustomPlatform||null,o=r.Capacitor||{},c=o.Plugins=o.Plugins||{},l=r.CapacitorPlatforms,$=()=>a!==null?a.name:de(r),y=((e=l?.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||$,_=()=>y()!=="web",J=((t=l?.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||_,Q=d=>{let f=S.get(d);return!!(f?.platforms.has(y())||M(d))},X=((n=l?.currentPlatform)===null||n===void 0?void 0:n.isPluginAvailable)||Q,Y=d=>{var f;return(f=o.PluginHeaders)===null||f===void 0?void 0:f.find(L=>L.name===d)},M=((i=l?.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||Y,Z=d=>r.console.error(d),N=(d,f,L)=>Promise.reject(`${L} does not have an implementation of "${f}".`),S=new Map,ee=(d,f={})=>{let L=S.get(d);if(L)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),L.proxy;let p=y(),C=M(d),w,re=()=>u(void 0,null,function*(){return!w&&p in f?w=typeof f[p]=="function"?w=yield f[p]():w=f[p]:a!==null&&!w&&"web"in f&&(w=typeof f.web=="function"?w=yield f.web():w=f.web),w}),ne=(g,m)=>{var v,P;if(C){let b=C?.methods.find(h=>m===h.name);if(b)return b.rtype==="promise"?h=>o.nativePromise(d,m.toString(),h):(h,O)=>o.nativeCallback(d,m.toString(),h,O);if(g)return(v=g[m])===null||v===void 0?void 0:v.bind(g)}else{if(g)return(P=g[m])===null||P===void 0?void 0:P.bind(g);throw new E(`"${d}" plugin is not implemented on ${p}`,k.Unimplemented)}},T=g=>{let m,v=(...P)=>{let b=re().then(h=>{let O=ne(h,g);if(O){let A=O(...P);return m=A?.remove,A}else throw new E(`"${d}.${g}()" is not implemented on ${p}`,k.Unimplemented)});return g==="addListener"&&(b.remove=()=>u(void 0,null,function*(){return m()})),b};return v.toString=()=>`${g.toString()}() { [capacitor code] }`,Object.defineProperty(v,"name",{value:g,writable:!1,configurable:!1}),v},D=T("addListener"),F=T("removeListener"),se=(g,m)=>{let v=D({eventName:g},m),P=()=>u(void 0,null,function*(){let h=yield v;F({eventName:g,callbackId:h},m)}),b=new Promise(h=>v.then(()=>h({remove:P})));return b.remove=()=>u(void 0,null,function*(){console.warn("Using addListener() without 'await' is deprecated."),yield P()}),b},R=new Proxy({},{get(g,m){switch(m){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return C?se:D;case"removeListener":return F;default:return T(m)}}});return c[d]=R,S.set(d,{name:d,proxy:R,platforms:new Set([...Object.keys(f),...C?[p]:[]])}),R},te=((s=l?.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||ee;return o.convertFileSrc||(o.convertFileSrc=d=>d),o.getPlatform=y,o.handleError=Z,o.isNativePlatform=J,o.isPluginAvailable=X,o.pluginMethodNoop=N,o.registerPlugin=te,o.Exception=E,o.DEBUG=!!o.DEBUG,o.isLoggingEnabled=!!o.isLoggingEnabled,o.platform=o.getPlatform(),o.isNative=o.isNativePlatform(),o},fe=r=>r.Capacitor=ue(r),x=fe(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),z=x.registerPlugin,Ce=x.Plugins;var U=class{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),n&&this.sendRetainedArgumentsForEvent(e);let a=()=>u(this,null,function*(){return this.removeListener(e,t)});return Promise.resolve({remove:a})}removeAllListeners(){return u(this,null,function*(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}})}notifyListeners(e,t,n){let i=this.listeners[e];if(!i){if(n){let s=this.retainedEventArguments[e];s||(s=[]),s.push(t),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:n=>{this.notifyListeners(t,n)}}}unimplemented(e="not implemented"){return new x.Exception(e,k.Unimplemented)}unavailable(e="not available"){return new x.Exception(e,k.Unavailable)}removeListener(e,t){return u(this,null,function*(){let n=this.listeners[e];if(!n)return;let i=n.indexOf(t);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])})}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(n=>{this.notifyListeners(e,n)}))}};var G=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),K=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),H=class extends U{getCookies(){return u(this,null,function*(){let e=document.cookie,t={};return e.split(";").forEach(n=>{if(n.length<=0)return;let[i,s]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=K(i).trim(),s=K(s).trim(),t[i]=s}),t})}setCookie(e){return u(this,null,function*(){try{let t=G(e.key),n=G(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${i}; path=${s}; ${a};`}catch(t){return Promise.reject(t)}})}deleteCookie(e){return u(this,null,function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})}clearCookies(){return u(this,null,function*(){try{let e=document.cookie.split(";")||[];for(let t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})}clearAllCookies(){return u(this,null,function*(){try{yield this.clearCookies()}catch(e){return Promise.reject(e)}})}},Ee=z("CapacitorCookies",{web:()=>new H}),ge=r=>u(void 0,null,function*(){return new Promise((e,t)=>{let n=new FileReader;n.onload=()=>{let i=n.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},n.onerror=i=>t(i),n.readAsDataURL(r)})}),me=(r={})=>{let e=Object.keys(r);return Object.keys(r).map(i=>i.toLocaleLowerCase()).reduce((i,s,a)=>(i[s]=r[e[a]],i),{})},he=(r,e=!0)=>r?Object.entries(r).reduce((n,i)=>{let[s,a]=i,o,c;return Array.isArray(a)?(c="",a.forEach(l=>{o=e?encodeURIComponent(l):l,c+=`${s}=${o}&`}),c.slice(0,-1)):(o=e?encodeURIComponent(a):a,c=`${s}=${o}`),`${n}&${c}`},"").substr(1):null,ve=(r,e={})=>{let t=Object.assign({method:r.method||"GET",headers:r.headers},e),i=me(r.headers)["content-type"]||"";if(typeof r.data=="string")t.body=r.data;else if(i.includes("application/x-www-form-urlencoded")){let s=new URLSearchParams;for(let[a,o]of Object.entries(r.data||{}))s.set(a,o);t.body=s.toString()}else if(i.includes("multipart/form-data")||r.data instanceof FormData){let s=new FormData;if(r.data instanceof FormData)r.data.forEach((o,c)=>{s.append(c,o)});else for(let o of Object.keys(r.data))s.append(o,r.data[o]);t.body=s;let a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(i.includes("application/json")||typeof r.data=="object")&&(t.body=JSON.stringify(r.data));return t},W=class extends U{request(e){return u(this,null,function*(){let t=ve(e,e.webFetchExtra),n=he(e.params,e.shouldEncodeUrlParams),i=n?`${e.url}?${n}`:e.url,s=yield fetch(i,t),a=s.headers.get("content-type")||"",{responseType:o="text"}=s.ok?e:{};a.includes("application/json")&&(o="json");let c,l;switch(o){case"arraybuffer":case"blob":l=yield s.blob(),c=yield ge(l);break;case"json":c=yield s.json();break;case"document":case"text":default:c=yield s.text()}let $={};return s.headers.forEach((y,_)=>{$[_]=y}),{data:c,headers:$,status:s.status,url:s.url}})}get(e){return u(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))})}post(e){return u(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))})}put(e){return u(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))})}patch(e){return u(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})}delete(e){return u(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})}},ke=z("CapacitorHttp",{web:()=>new W});export{we as a,Pe as b,be as c,u as d,z as e,U as f};
