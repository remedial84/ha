function t(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}function e(t,e,i,o){return new(i||(i=Promise))((function(n,r){function a(t){try{l(o.next(t))}catch(t){r(t)}}function s(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,s)}l((o=o.apply(t,e||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=window,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new a(i,t,n)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c;const d=window,h=d.trustedTypes,u=h?h.emptyScript:"",p=d.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:g},m="finalized";class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{o?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),n=i.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var o;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:v).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:v;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;_[m]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:_}),(null!==(c=d.reactiveElementVersions)&&void 0!==c?c:d.reactiveElementVersions=[]).push("1.6.3");const b=window,w=b.trustedTypes,$=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,S="?"+C,A=`<${S}>`,x=document,k=()=>x.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,O="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,N=/>/g,M=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,j=/"/g,U=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Y=new WeakMap,B=x.createTreeWalker(x,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,o=[];let n,r=2===e?"<svg>":"",a=P;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===P?"!--"===l[1]?a=I:void 0!==l[1]?a=N:void 0!==l[2]?(U.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=M):void 0!==l[3]&&(a=M):a===M?">"===l[0]?(a=null!=n?n:P,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?M:'"'===l[3]?j:R):a===j||a===R?a=M:a===I||a===N?a=P:(a=M,n=void 0);const h=a===M&&t[e+1].startsWith("/>")?" ":"";r+=a===P?i+A:c>=0?(o.push(s),i.slice(0,c)+E+i.slice(c)+C+h):i+C+(-2===c?(o.push(void 0),e):h)}return[V(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class W{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const a=t.length-1,s=this.parts,[l,c]=X(t,e);if(this.el=W.createElement(l,i),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=B.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(E)||e.startsWith(C)){const i=c[r++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+E).split(C),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?Q:"@"===e[1]?tt:K})}else s.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(U.test(o.tagName)){const t=o.textContent.split(C),e=t.length-1;if(e>0){o.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],k()),B.nextNode(),s.push({type:2,index:++n});o.append(t[e],k())}}}else if(8===o.nodeType)if(o.data===S)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(C,t+1));)s.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,o){var n,r,a,s;if(e===L)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const c=T(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(a=(s=i)._$Co)&&void 0!==a?a:s._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=F(t,l._$AS(t,e.values),l,o)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);B.currentNode=n;let r=B.nextNode(),a=0,s=0,l=o[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new G(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new et(r,this,t)),this._$AV.push(e),l=o[++s]}a!==(null==l?void 0:l.index)&&(r=B.nextNode(),a++)}return B.currentNode=x,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,o){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),T(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>D(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(x.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=W.createElement(V(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new q(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new W(t)),e}T(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new G(this.k(k()),this.k(k()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,o,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(void 0===n)t=F(this,t,e,0),r=!T(t)||t!==this._$AH&&t!==L,r&&(this._$AH=t);else{const o=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=F(this,o[i+a],e,a),s===L&&(s=this._$AH[a]),r||(r=!T(s)||s!==this._$AH[a]),s===z?t=z:t!==z&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!o&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const J=w?w.emptyScript:"";class Q extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class tt extends K{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:z)===L)return;const o=this._$AH,n=t===z&&o!==z||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==z&&(o===z||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const it=b.litHtmlPolyfillSupport;null==it||it(W,G),(null!==(y=b.litHtmlVersions)&&void 0!==y?y:b.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ot,nt;class rt extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let a=r._$litPart$;if(void 0===a){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new G(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return L}}rt.finalized=!0,rt._$litElement$=!0,null===(ot=globalThis.litElementHydrateSupport)||void 0===ot||ot.call(globalThis,{LitElement:rt});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:rt}),(null!==(nt=globalThis.litElementVersions)&&void 0!==nt?nt:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},ct=(t,e,i)=>{e.constructor.createProperty(i,t)};function dt(t){return(e,i)=>void 0!==i?ct(t,e,i):lt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ht(t){return dt({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ut,pt,vt;null===(ut=window.HTMLSlotElement)||void 0===ut||ut.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(pt||(pt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(vt||(vt={}));var gt={version:"Version",invalid_configuration:"Invalid configuration"},ft={common:gt},mt={version:"Version",invalid_configuration:"Configuration incorrecte"},_t={common:mt},yt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration"},bt={common:yt};const wt={en:Object.freeze({__proto__:null,common:gt,default:ft}),fr:Object.freeze({__proto__:null,common:mt,default:_t}),nb:Object.freeze({__proto__:null,common:yt,default:bt})};function $t(t,e="",i=""){const o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce(((t,e)=>t[e]),wt[o])}catch(e){n=t.split(".").reduce(((t,e)=>t[e]),wt.en)}return void 0===n&&(n=t.split(".").reduce(((t,e)=>t[e]),wt.en)),""!==e&&""!==i&&(n=n.replace(e,i)),n}
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Et(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function Ct(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Et(Object(i),!0).forEach((function(e){At(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Et(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function St(t){return St="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},St(t)}function At(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function xt(){return xt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},xt.apply(this,arguments)}function kt(t,e){if(null==t)return{};var i,o,n=function(t,e){if(null==t)return{};var i,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Tt(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var Dt=Tt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Ot=Tt(/Edge/i),Pt=Tt(/firefox/i),It=Tt(/safari/i)&&!Tt(/chrome/i)&&!Tt(/android/i),Nt=Tt(/iP(ad|od|hone)/i),Mt=Tt(/chrome/i)&&Tt(/android/i),Rt={capture:!1,passive:!1};function jt(t,e,i){t.addEventListener(e,i,!Dt&&Rt)}function Ut(t,e,i){t.removeEventListener(e,i,!Dt&&Rt)}function Ht(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function Lt(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function zt(t,e,i,o){if(t){i=i||document;do{if(null!=e&&(">"===e[0]?t.parentNode===i&&Ht(t,e):Ht(t,e))||o&&t===i)return t;if(t===i)break}while(t=Lt(t))}return null}var Yt,Bt=/\s+/g;function Vt(t,e,i){if(t&&e)if(t.classList)t.classList[i?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(Bt," ").replace(" "+e+" "," ");t.className=(o+(i?" "+e:"")).replace(Bt," ")}}function Xt(t,e,i){var o=t&&t.style;if(o){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(i=t.currentStyle),void 0===e?i:i[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=i+("string"==typeof i?"":"px")}}function Wt(t,e){var i="";if("string"==typeof t)i=t;else do{var o=Xt(t,"transform");o&&"none"!==o&&(i=o+" "+i)}while(!e&&(t=t.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(i)}function Ft(t,e,i){if(t){var o=t.getElementsByTagName(e),n=0,r=o.length;if(i)for(;n<r;n++)i(o[n],n);return o}return[]}function qt(){var t=document.scrollingElement;return t||document.documentElement}function Gt(t,e,i,o,n){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,h;if(t!==window&&t.parentNode&&t!==qt()?(a=(r=t.getBoundingClientRect()).top,s=r.left,l=r.bottom,c=r.right,d=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||i)&&t!==window&&(n=n||t.parentNode,!Dt))do{if(n&&n.getBoundingClientRect&&("none"!==Xt(n,"transform")||i&&"static"!==Xt(n,"position"))){var u=n.getBoundingClientRect();a-=u.top+parseInt(Xt(n,"border-top-width")),s-=u.left+parseInt(Xt(n,"border-left-width")),l=a+r.height,c=s+r.width;break}}while(n=n.parentNode);if(o&&t!==window){var p=Wt(n||t),v=p&&p.a,g=p&&p.d;p&&(l=(a/=g)+(d/=g),c=(s/=v)+(h/=v))}return{top:a,left:s,bottom:l,right:c,width:h,height:d}}}function Kt(t,e,i){for(var o=ee(t,!0),n=Gt(t)[e];o;){var r=Gt(o)[i];if(!("top"===i||"left"===i?n>=r:n<=r))return o;if(o===qt())break;o=ee(o,!1)}return!1}function Zt(t,e,i,o){for(var n=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==ri.ghost&&(o||a[r]!==ri.dragged)&&zt(a[r],i.draggable,t,!1)){if(n===e)return a[r];n++}r++}return null}function Jt(t,e){for(var i=t.lastElementChild;i&&(i===ri.ghost||"none"===Xt(i,"display")||e&&!Ht(i,e));)i=i.previousElementSibling;return i||null}function Qt(t,e){var i=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===ri.clone||e&&!Ht(t,e)||i++;return i}function te(t){var e=0,i=0,o=qt();if(t)do{var n=Wt(t),r=n.a,a=n.d;e+=t.scrollLeft*r,i+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,i]}function ee(t,e){if(!t||!t.getBoundingClientRect)return qt();var i=t,o=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var n=Xt(i);if(i.clientWidth<i.scrollWidth&&("auto"==n.overflowX||"scroll"==n.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==n.overflowY||"scroll"==n.overflowY)){if(!i.getBoundingClientRect||i===document.body)return qt();if(o||e)return i;o=!0}}}while(i=i.parentNode);return qt()}function ie(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function oe(t,e){return function(){if(!Yt){var i=arguments;1===i.length?t.call(this,i[0]):t.apply(this,i),Yt=setTimeout((function(){Yt=void 0}),e)}}}function ne(t,e,i){t.scrollLeft+=e,t.scrollTop+=i}function re(t){var e=window.Polymer,i=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):i?i(t).clone(!0)[0]:t.cloneNode(!0)}function ae(t,e,i){var o={};return Array.from(t.children).forEach((function(n){var r,a,s,l;if(zt(n,e.draggable,t,!1)&&!n.animated&&n!==i){var c=Gt(n);o.left=Math.min(null!==(r=o.left)&&void 0!==r?r:1/0,c.left),o.top=Math.min(null!==(a=o.top)&&void 0!==a?a:1/0,c.top),o.right=Math.max(null!==(s=o.right)&&void 0!==s?s:-1/0,c.right),o.bottom=Math.max(null!==(l=o.bottom)&&void 0!==l?l:-1/0,c.bottom)}})),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}var se="Sortable"+(new Date).getTime();function le(){var t,e=[];return{captureAnimationState:function(){(e=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(t){if("none"!==Xt(t,"display")&&t!==ri.ghost){e.push({target:t,rect:Gt(t)});var i=Ct({},e[e.length-1].rect);if(t.thisAnimationDuration){var o=Wt(t,!0);o&&(i.top-=o.f,i.left-=o.e)}t.fromRect=i}}))},addAnimationState:function(t){e.push(t)},removeAnimationState:function(t){e.splice(function(t,e){for(var i in t)if(t.hasOwnProperty(i))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[i][o])return Number(i);return-1}(e,{target:t}),1)},animateAll:function(i){var o=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof i&&i());var n=!1,r=0;e.forEach((function(t){var e=0,i=t.target,a=i.fromRect,s=Gt(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,h=Wt(i,!0);h&&(s.top-=h.f,s.left-=h.e),i.toRect=s,i.thisAnimationDuration&&ie(l,s)&&!ie(a,s)&&(d.top-s.top)/(d.left-s.left)==(a.top-s.top)/(a.left-s.left)&&(e=function(t,e,i,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-i.top,2)+Math.pow(e.left-i.left,2))*o.animation}(d,l,c,o.options)),ie(s,a)||(i.prevFromRect=a,i.prevToRect=s,e||(e=o.options.animation),o.animate(i,d,s,e)),e&&(n=!0,r=Math.max(r,e),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout((function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null}),e),i.thisAnimationDuration=e)})),clearTimeout(t),n?t=setTimeout((function(){"function"==typeof i&&i()}),r):"function"==typeof i&&i(),e=[]},animate:function(t,e,i,o){if(o){Xt(t,"transition",""),Xt(t,"transform","");var n=Wt(this.el),r=n&&n.a,a=n&&n.d,s=(e.left-i.left)/(r||1),l=(e.top-i.top)/(a||1);t.animatingX=!!s,t.animatingY=!!l,Xt(t,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),Xt(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),Xt(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){Xt(t,"transition",""),Xt(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),o)}}}}var ce=[],de={initializeByDefault:!0},he={mount:function(t){for(var e in de)de.hasOwnProperty(e)&&!(e in t)&&(t[e]=de[e]);ce.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),ce.push(t)},pluginEvent:function(t,e,i){var o=this;this.eventCanceled=!1,i.cancel=function(){o.eventCanceled=!0};var n=t+"Global";ce.forEach((function(o){e[o.pluginName]&&(e[o.pluginName][n]&&e[o.pluginName][n](Ct({sortable:e},i)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](Ct({sortable:e},i)))}))},initializePlugins:function(t,e,i,o){for(var n in ce.forEach((function(o){var n=o.pluginName;if(t.options[n]||o.initializeByDefault){var r=new o(t,e,t.options);r.sortable=t,r.options=t.options,t[n]=r,xt(i,r.defaults)}})),t.options)if(t.options.hasOwnProperty(n)){var r=this.modifyOption(t,n,t.options[n]);void 0!==r&&(t.options[n]=r)}},getEventProperties:function(t,e){var i={};return ce.forEach((function(o){"function"==typeof o.eventProperties&&xt(i,o.eventProperties.call(e[o.pluginName],t))})),i},modifyOption:function(t,e,i){var o;return ce.forEach((function(n){t[n.pluginName]&&n.optionListeners&&"function"==typeof n.optionListeners[e]&&(o=n.optionListeners[e].call(t[n.pluginName],i))})),o}};var ue=["evt"],pe=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.evt,n=kt(i,ue);he.pluginEvent.bind(ri)(t,e,Ct({dragEl:ge,parentEl:fe,ghostEl:me,rootEl:_e,nextEl:ye,lastDownEl:be,cloneEl:we,cloneHidden:$e,dragStarted:Me,putSortable:ke,activeSortable:ri.active,originalEvent:o,oldIndex:Ee,oldDraggableIndex:Se,newIndex:Ce,newDraggableIndex:Ae,hideGhostForTarget:ei,unhideGhostForTarget:ii,cloneNowHidden:function(){$e=!0},cloneNowShown:function(){$e=!1},dispatchSortableEvent:function(t){ve({sortable:e,name:t,originalEvent:o})}},n))};function ve(t){!function(t){var e=t.sortable,i=t.rootEl,o=t.name,n=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,h=t.newDraggableIndex,u=t.originalEvent,p=t.putSortable,v=t.extraEventProperties;if(e=e||i&&i[se]){var g,f=e.options,m="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||Dt||Ot?(g=document.createEvent("Event")).initEvent(o,!0,!0):g=new CustomEvent(o,{bubbles:!0,cancelable:!0}),g.to=a||i,g.from=s||i,g.item=n||i,g.clone=r,g.oldIndex=l,g.newIndex=c,g.oldDraggableIndex=d,g.newDraggableIndex=h,g.originalEvent=u,g.pullMode=p?p.lastPutMode:void 0;var _=Ct(Ct({},v),he.getEventProperties(o,e));for(var y in _)g[y]=_[y];i&&i.dispatchEvent(g),f[m]&&f[m].call(e,g)}}(Ct({putSortable:ke,cloneEl:we,targetEl:ge,rootEl:_e,oldIndex:Ee,oldDraggableIndex:Se,newIndex:Ce,newDraggableIndex:Ae},t))}var ge,fe,me,_e,ye,be,we,$e,Ee,Ce,Se,Ae,xe,ke,Te,De,Oe,Pe,Ie,Ne,Me,Re,je,Ue,He,Le=!1,ze=!1,Ye=[],Be=!1,Ve=!1,Xe=[],We=!1,Fe=[],qe="undefined"!=typeof document,Ge=Nt,Ke=Ot||Dt?"cssFloat":"float",Ze=qe&&!Mt&&!Nt&&"draggable"in document.createElement("div"),Je=function(){if(qe){if(Dt)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Qe=function(t,e){var i=Xt(t),o=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),n=Zt(t,0,e),r=Zt(t,1,e),a=n&&Xt(n),s=r&&Xt(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Gt(n).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Gt(r).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right";return!r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return n&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=o&&"none"===i[Ke]||r&&"none"===i[Ke]&&l+c>o)?"vertical":"horizontal"},ti=function(t){function e(t,i){return function(o,n,r,a){var s=o.options.group.name&&n.options.group.name&&o.options.group.name===n.options.group.name;if(null==t&&(i||s))return!0;if(null==t||!1===t)return!1;if(i&&"clone"===t)return t;if("function"==typeof t)return e(t(o,n,r,a),i)(o,n,r,a);var l=(i?o:n).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var i={},o=t.group;o&&"object"==St(o)||(o={name:o}),i.name=o.name,i.checkPull=e(o.pull,!0),i.checkPut=e(o.put),i.revertClone=o.revertClone,t.group=i},ei=function(){!Je&&me&&Xt(me,"display","none")},ii=function(){!Je&&me&&Xt(me,"display","")};qe&&!Mt&&document.addEventListener("click",(function(t){if(ze)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),ze=!1,!1}),!0);var oi=function(t){if(ge){var e=function(t,e){var i;return Ye.some((function(o){var n=o[se].options.emptyInsertThreshold;if(n&&!Jt(o)){var r=Gt(o),a=t>=r.left-n&&t<=r.right+n,s=e>=r.top-n&&e<=r.bottom+n;return a&&s?i=o:void 0}})),i}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var i={};for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);i.target=i.rootEl=e,i.preventDefault=void 0,i.stopPropagation=void 0,e[se]._onDragOver(i)}}},ni=function(t){ge&&ge.parentNode[se]._isOutsideThisEl(t.target)};function ri(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=xt({},e),t[se]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Qe(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==ri.supportPointer&&"PointerEvent"in window&&!It,emptyInsertThreshold:5};for(var o in he.initializePlugins(this,t,i),i)!(o in e)&&(e[o]=i[o]);for(var n in ti(e),this)"_"===n.charAt(0)&&"function"==typeof this[n]&&(this[n]=this[n].bind(this));this.nativeDraggable=!e.forceFallback&&Ze,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?jt(t,"pointerdown",this._onTapStart):(jt(t,"mousedown",this._onTapStart),jt(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(jt(t,"dragover",this),jt(t,"dragenter",this)),Ye.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),xt(this,le())}function ai(t,e,i,o,n,r,a,s){var l,c,d=t[se],h=d.options.onMove;return!window.CustomEvent||Dt||Ot?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=t,l.dragged=i,l.draggedRect=o,l.related=n||e,l.relatedRect=r||Gt(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),h&&(c=h.call(d,l,a)),c}function si(t){t.draggable=!1}function li(){We=!1}function ci(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,i=e.length,o=0;i--;)o+=e.charCodeAt(i);return o.toString(36)}function di(t){return setTimeout(t,0)}function hi(t){return clearTimeout(t)}ri.prototype={constructor:ri,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Re=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,ge):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,i=this.el,o=this.options,n=o.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=o.filter;if(function(t){Fe.length=0;var e=t.getElementsByTagName("input"),i=e.length;for(;i--;){var o=e[i];o.checked&&Fe.push(o)}}(i),!ge&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||o.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!It||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=zt(s,o.draggable,i,!1))&&s.animated||be===s)){if(Ee=Qt(s),Se=Qt(s,o.draggable),"function"==typeof c){if(c.call(this,t,s,this))return ve({sortable:e,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),pe("filter",e,{evt:t}),void(n&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(o){if(o=zt(l,o.trim(),i,!1))return ve({sortable:e,rootEl:o,name:"filter",targetEl:s,fromEl:i,toEl:i}),pe("filter",e,{evt:t}),!0}))))return void(n&&t.cancelable&&t.preventDefault());o.handle&&!zt(l,o.handle,i,!1)||this._prepareDragStart(t,a,s)}}},_prepareDragStart:function(t,e,i){var o,n=this,r=n.el,a=n.options,s=r.ownerDocument;if(i&&!ge&&i.parentNode===r){var l=Gt(i);if(_e=r,fe=(ge=i).parentNode,ye=ge.nextSibling,be=i,xe=a.group,ri.dragged=ge,Te={target:ge,clientX:(e||t).clientX,clientY:(e||t).clientY},Ie=Te.clientX-l.left,Ne=Te.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,ge.style["will-change"]="all",o=function(){pe("delayEnded",n,{evt:t}),ri.eventCanceled?n._onDrop():(n._disableDelayedDragEvents(),!Pt&&n.nativeDraggable&&(ge.draggable=!0),n._triggerDragStart(t,e),ve({sortable:n,name:"choose",originalEvent:t}),Vt(ge,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){Ft(ge,t.trim(),si)})),jt(s,"dragover",oi),jt(s,"mousemove",oi),jt(s,"touchmove",oi),jt(s,"mouseup",n._onDrop),jt(s,"touchend",n._onDrop),jt(s,"touchcancel",n._onDrop),Pt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,ge.draggable=!0),pe("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(Ot||Dt))o();else{if(ri.eventCanceled)return void this._onDrop();jt(s,"mouseup",n._disableDelayedDrag),jt(s,"touchend",n._disableDelayedDrag),jt(s,"touchcancel",n._disableDelayedDrag),jt(s,"mousemove",n._delayedDragTouchMoveHandler),jt(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&jt(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(o,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){ge&&si(ge),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;Ut(t,"mouseup",this._disableDelayedDrag),Ut(t,"touchend",this._disableDelayedDrag),Ut(t,"touchcancel",this._disableDelayedDrag),Ut(t,"mousemove",this._delayedDragTouchMoveHandler),Ut(t,"touchmove",this._delayedDragTouchMoveHandler),Ut(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?jt(document,"pointermove",this._onTouchMove):jt(document,e?"touchmove":"mousemove",this._onTouchMove):(jt(ge,"dragend",this),jt(_e,"dragstart",this._onDragStart));try{document.selection?di((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(Le=!1,_e&&ge){pe("dragStarted",this,{evt:e}),this.nativeDraggable&&jt(document,"dragover",ni);var i=this.options;!t&&Vt(ge,i.dragClass,!1),Vt(ge,i.ghostClass,!0),ri.active=this,t&&this._appendGhost(),ve({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(De){this._lastX=De.clientX,this._lastY=De.clientY,ei();for(var t=document.elementFromPoint(De.clientX,De.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(De.clientX,De.clientY))!==e;)e=t;if(ge.parentNode[se]._isOutsideThisEl(t),e)do{if(e[se]){if(e[se]._onDragOver({clientX:De.clientX,clientY:De.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);ii()}},_onTouchMove:function(t){if(Te){var e=this.options,i=e.fallbackTolerance,o=e.fallbackOffset,n=t.touches?t.touches[0]:t,r=me&&Wt(me,!0),a=me&&r&&r.a,s=me&&r&&r.d,l=Ge&&He&&te(He),c=(n.clientX-Te.clientX+o.x)/(a||1)+(l?l[0]-Xe[0]:0)/(a||1),d=(n.clientY-Te.clientY+o.y)/(s||1)+(l?l[1]-Xe[1]:0)/(s||1);if(!ri.active&&!Le){if(i&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(me){r?(r.e+=c-(Oe||0),r.f+=d-(Pe||0)):r={a:1,b:0,c:0,d:1,e:c,f:d};var h="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");Xt(me,"webkitTransform",h),Xt(me,"mozTransform",h),Xt(me,"msTransform",h),Xt(me,"transform",h),Oe=c,Pe=d,De=n}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!me){var t=this.options.fallbackOnBody?document.body:_e,e=Gt(ge,!0,Ge,!0,t),i=this.options;if(Ge){for(He=t;"static"===Xt(He,"position")&&"none"===Xt(He,"transform")&&He!==document;)He=He.parentNode;He!==document.body&&He!==document.documentElement?(He===document&&(He=qt()),e.top+=He.scrollTop,e.left+=He.scrollLeft):He=qt(),Xe=te(He)}Vt(me=ge.cloneNode(!0),i.ghostClass,!1),Vt(me,i.fallbackClass,!0),Vt(me,i.dragClass,!0),Xt(me,"transition",""),Xt(me,"transform",""),Xt(me,"box-sizing","border-box"),Xt(me,"margin",0),Xt(me,"top",e.top),Xt(me,"left",e.left),Xt(me,"width",e.width),Xt(me,"height",e.height),Xt(me,"opacity","0.8"),Xt(me,"position",Ge?"absolute":"fixed"),Xt(me,"zIndex","100000"),Xt(me,"pointerEvents","none"),ri.ghost=me,t.appendChild(me),Xt(me,"transform-origin",Ie/parseInt(me.style.width)*100+"% "+Ne/parseInt(me.style.height)*100+"%")}},_onDragStart:function(t,e){var i=this,o=t.dataTransfer,n=i.options;pe("dragStart",this,{evt:t}),ri.eventCanceled?this._onDrop():(pe("setupClone",this),ri.eventCanceled||((we=re(ge)).removeAttribute("id"),we.draggable=!1,we.style["will-change"]="",this._hideClone(),Vt(we,this.options.chosenClass,!1),ri.clone=we),i.cloneId=di((function(){pe("clone",i),ri.eventCanceled||(i.options.removeCloneOnHide||_e.insertBefore(we,ge),i._hideClone(),ve({sortable:i,name:"clone"}))})),!e&&Vt(ge,n.dragClass,!0),e?(ze=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Ut(document,"mouseup",i._onDrop),Ut(document,"touchend",i._onDrop),Ut(document,"touchcancel",i._onDrop),o&&(o.effectAllowed="move",n.setData&&n.setData.call(i,o,ge)),jt(document,"drop",i),Xt(ge,"transform","translateZ(0)")),Le=!0,i._dragStartId=di(i._dragStarted.bind(i,e,t)),jt(document,"selectstart",i),Me=!0,It&&Xt(document.body,"user-select","none"))},_onDragOver:function(t){var e,i,o,n,r=this.el,a=t.target,s=this.options,l=s.group,c=ri.active,d=xe===l,h=s.sort,u=ke||c,p=this,v=!1;if(!We){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=zt(a,s.draggable,r,!0),T("dragOver"),ri.eventCanceled)return v;if(ge.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return O(!1);if(ze=!1,c&&!s.disabled&&(d?h||(o=fe!==_e):ke===this||(this.lastPutMode=xe.checkPull(this,c,ge,t))&&l.checkPut(this,c,ge,t))){if(n="vertical"===this._getDirection(t,a),e=Gt(ge),T("dragOverValid"),ri.eventCanceled)return v;if(o)return fe=_e,D(),this._hideClone(),T("revert"),ri.eventCanceled||(ye?_e.insertBefore(ge,ye):_e.appendChild(ge)),O(!0);var g=Jt(r,s.draggable);if(!g||function(t,e,i){var o=Gt(Jt(i.el,i.options.draggable)),n=ae(i.el,i.options,me),r=10;return e?t.clientX>n.right+r||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>n.bottom+r||t.clientX>o.right&&t.clientY>o.top}(t,n,this)&&!g.animated){if(g===ge)return O(!1);if(g&&r===t.target&&(a=g),a&&(i=Gt(a)),!1!==ai(_e,r,ge,e,a,i,t,!!a))return D(),g&&g.nextSibling?r.insertBefore(ge,g.nextSibling):r.appendChild(ge),fe=r,P(),O(!0)}else if(g&&function(t,e,i){var o=Gt(Zt(i.el,0,i.options,!0)),n=ae(i.el,i.options,me),r=10;return e?t.clientX<n.left-r||t.clientY<o.top&&t.clientX<o.right:t.clientY<n.top-r||t.clientY<o.bottom&&t.clientX<o.left}(t,n,this)){var f=Zt(r,0,s,!0);if(f===ge)return O(!1);if(i=Gt(a=f),!1!==ai(_e,r,ge,e,a,i,t,!1))return D(),r.insertBefore(ge,f),fe=r,P(),O(!0)}else if(a.parentNode===r){i=Gt(a);var m,_,y,b=ge.parentNode!==r,w=!function(t,e,i){var o=i?t.left:t.top,n=i?t.right:t.bottom,r=i?t.width:t.height,a=i?e.left:e.top,s=i?e.right:e.bottom,l=i?e.width:e.height;return o===a||n===s||o+r/2===a+l/2}(ge.animated&&ge.toRect||e,a.animated&&a.toRect||i,n),$=n?"top":"left",E=Kt(a,"top","top")||Kt(ge,"top","top"),C=E?E.scrollTop:void 0;if(Re!==a&&(_=i[$],Be=!1,Ve=!w&&s.invertSwap||b),m=function(t,e,i,o,n,r,a,s){var l=o?t.clientY:t.clientX,c=o?i.height:i.width,d=o?i.top:i.left,h=o?i.bottom:i.right,u=!1;if(!a)if(s&&Ue<c*n){if(!Be&&(1===je?l>d+c*r/2:l<h-c*r/2)&&(Be=!0),Be)u=!0;else if(1===je?l<d+Ue:l>h-Ue)return-je}else if(l>d+c*(1-n)/2&&l<h-c*(1-n)/2)return function(t){return Qt(ge)<Qt(t)?1:-1}(e);if((u=u||a)&&(l<d+c*r/2||l>h-c*r/2))return l>d+c/2?1:-1;return 0}(t,a,i,n,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Ve,Re===a),0!==m){var S=Qt(ge);do{S-=m,y=fe.children[S]}while(y&&("none"===Xt(y,"display")||y===me))}if(0===m||y===a)return O(!1);Re=a,je=m;var A=a.nextElementSibling,x=!1,k=ai(_e,r,ge,e,a,i,t,x=1===m);if(!1!==k)return 1!==k&&-1!==k||(x=1===k),We=!0,setTimeout(li,30),D(),x&&!A?r.appendChild(ge):a.parentNode.insertBefore(ge,x?A:a),E&&ne(E,0,C-E.scrollTop),fe=ge.parentNode,void 0===_||Ve||(Ue=Math.abs(_-Gt(a)[$])),P(),O(!0)}if(r.contains(ge))return O(!1)}return!1}function T(s,l){pe(s,p,Ct({evt:t,isOwner:d,axis:n?"vertical":"horizontal",revert:o,dragRect:e,targetRect:i,canSort:h,fromSortable:u,target:a,completed:O,onMove:function(i,o){return ai(_e,r,ge,e,i,Gt(i),t,o)},changed:P},l))}function D(){T("dragOverAnimationCapture"),p.captureAnimationState(),p!==u&&u.captureAnimationState()}function O(e){return T("dragOverCompleted",{insertion:e}),e&&(d?c._hideClone():c._showClone(p),p!==u&&(Vt(ge,ke?ke.options.ghostClass:c.options.ghostClass,!1),Vt(ge,s.ghostClass,!0)),ke!==p&&p!==ri.active?ke=p:p===ri.active&&ke&&(ke=null),u===p&&(p._ignoreWhileAnimating=a),p.animateAll((function(){T("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==u&&(u.animateAll(),u._ignoreWhileAnimating=null)),(a===ge&&!ge.animated||a===r&&!a.animated)&&(Re=null),s.dragoverBubble||t.rootEl||a===document||(ge.parentNode[se]._isOutsideThisEl(t.target),!e&&oi(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),v=!0}function P(){Ce=Qt(ge),Ae=Qt(ge,s.draggable),ve({sortable:p,name:"change",toEl:r,newIndex:Ce,newDraggableIndex:Ae,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Ut(document,"mousemove",this._onTouchMove),Ut(document,"touchmove",this._onTouchMove),Ut(document,"pointermove",this._onTouchMove),Ut(document,"dragover",oi),Ut(document,"mousemove",oi),Ut(document,"touchmove",oi)},_offUpEvents:function(){var t=this.el.ownerDocument;Ut(t,"mouseup",this._onDrop),Ut(t,"touchend",this._onDrop),Ut(t,"pointerup",this._onDrop),Ut(t,"touchcancel",this._onDrop),Ut(document,"selectstart",this)},_onDrop:function(t){var e=this.el,i=this.options;Ce=Qt(ge),Ae=Qt(ge,i.draggable),pe("drop",this,{evt:t}),fe=ge&&ge.parentNode,Ce=Qt(ge),Ae=Qt(ge,i.draggable),ri.eventCanceled||(Le=!1,Ve=!1,Be=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),hi(this.cloneId),hi(this._dragStartId),this.nativeDraggable&&(Ut(document,"drop",this),Ut(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),It&&Xt(document.body,"user-select",""),Xt(ge,"transform",""),t&&(Me&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),me&&me.parentNode&&me.parentNode.removeChild(me),(_e===fe||ke&&"clone"!==ke.lastPutMode)&&we&&we.parentNode&&we.parentNode.removeChild(we),ge&&(this.nativeDraggable&&Ut(ge,"dragend",this),si(ge),ge.style["will-change"]="",Me&&!Le&&Vt(ge,ke?ke.options.ghostClass:this.options.ghostClass,!1),Vt(ge,this.options.chosenClass,!1),ve({sortable:this,name:"unchoose",toEl:fe,newIndex:null,newDraggableIndex:null,originalEvent:t}),_e!==fe?(Ce>=0&&(ve({rootEl:fe,name:"add",toEl:fe,fromEl:_e,originalEvent:t}),ve({sortable:this,name:"remove",toEl:fe,originalEvent:t}),ve({rootEl:fe,name:"sort",toEl:fe,fromEl:_e,originalEvent:t}),ve({sortable:this,name:"sort",toEl:fe,originalEvent:t})),ke&&ke.save()):Ce!==Ee&&Ce>=0&&(ve({sortable:this,name:"update",toEl:fe,originalEvent:t}),ve({sortable:this,name:"sort",toEl:fe,originalEvent:t})),ri.active&&(null!=Ce&&-1!==Ce||(Ce=Ee,Ae=Se),ve({sortable:this,name:"end",toEl:fe,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){pe("nulling",this),_e=ge=fe=me=ye=we=be=$e=Te=De=Me=Ce=Ae=Ee=Se=Re=je=ke=xe=ri.dragged=ri.ghost=ri.clone=ri.active=null,Fe.forEach((function(t){t.checked=!0})),Fe.length=Oe=Pe=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":ge&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,o=0,n=i.length,r=this.options;o<n;o++)zt(t=i[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||ci(t));return e},sort:function(t,e){var i={},o=this.el;this.toArray().forEach((function(t,e){var n=o.children[e];zt(n,this.options.draggable,o,!1)&&(i[t]=n)}),this),e&&this.captureAnimationState(),t.forEach((function(t){i[t]&&(o.removeChild(i[t]),o.appendChild(i[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return zt(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var i=this.options;if(void 0===e)return i[t];var o=he.modifyOption(this,t,e);i[t]=void 0!==o?o:e,"group"===t&&ti(i)},destroy:function(){pe("destroy",this);var t=this.el;t[se]=null,Ut(t,"mousedown",this._onTapStart),Ut(t,"touchstart",this._onTapStart),Ut(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Ut(t,"dragover",this),Ut(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),Ye.splice(Ye.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!$e){if(pe("hideClone",this),ri.eventCanceled)return;Xt(we,"display","none"),this.options.removeCloneOnHide&&we.parentNode&&we.parentNode.removeChild(we),$e=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if($e){if(pe("showClone",this),ri.eventCanceled)return;ge.parentNode!=_e||this.options.group.revertClone?ye?_e.insertBefore(we,ye):_e.appendChild(we):_e.insertBefore(we,ge),this.options.group.revertClone&&this.animate(ge,we),Xt(we,"display",""),$e=!1}}else this._hideClone()}},qe&&jt(document,"touchmove",(function(t){(ri.active||Le)&&t.cancelable&&t.preventDefault()})),ri.utils={on:jt,off:Ut,css:Xt,find:Ft,is:function(t,e){return!!zt(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},throttle:oe,closest:zt,toggleClass:Vt,clone:re,index:Qt,nextTick:di,cancelNextTick:hi,detectDirection:Qe,getChild:Zt},ri.get=function(t){return t[se]},ri.mount=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(ri.utils=Ct(Ct({},ri.utils),t.utils)),he.mount(t)}))},ri.create=function(t,e){return new ri(t,e)},ri.version="1.15.2";var ui,pi,vi,gi,fi,mi,_i=[],yi=!1;function bi(){_i.forEach((function(t){clearInterval(t.pid)})),_i=[]}function wi(){clearInterval(mi)}var $i=oe((function(t,e,i,o){if(e.scroll){var n,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=qt(),d=!1;pi!==i&&(pi=i,bi(),ui=e.scroll,n=e.scrollFn,!0===ui&&(ui=ee(i,!0)));var h=0,u=ui;do{var p=u,v=Gt(p),g=v.top,f=v.bottom,m=v.left,_=v.right,y=v.width,b=v.height,w=void 0,$=void 0,E=p.scrollWidth,C=p.scrollHeight,S=Xt(p),A=p.scrollLeft,x=p.scrollTop;p===c?(w=y<E&&("auto"===S.overflowX||"scroll"===S.overflowX||"visible"===S.overflowX),$=b<C&&("auto"===S.overflowY||"scroll"===S.overflowY||"visible"===S.overflowY)):(w=y<E&&("auto"===S.overflowX||"scroll"===S.overflowX),$=b<C&&("auto"===S.overflowY||"scroll"===S.overflowY));var k=w&&(Math.abs(_-r)<=s&&A+y<E)-(Math.abs(m-r)<=s&&!!A),T=$&&(Math.abs(f-a)<=s&&x+b<C)-(Math.abs(g-a)<=s&&!!x);if(!_i[h])for(var D=0;D<=h;D++)_i[D]||(_i[D]={});_i[h].vx==k&&_i[h].vy==T&&_i[h].el===p||(_i[h].el=p,_i[h].vx=k,_i[h].vy=T,clearInterval(_i[h].pid),0==k&&0==T||(d=!0,_i[h].pid=setInterval(function(){o&&0===this.layer&&ri.active._onTouchMove(fi);var e=_i[this.layer].vy?_i[this.layer].vy*l:0,i=_i[this.layer].vx?_i[this.layer].vx*l:0;"function"==typeof n&&"continue"!==n.call(ri.dragged.parentNode[se],i,e,t,fi,_i[this.layer].el)||ne(_i[this.layer].el,i,e)}.bind({layer:h}),24))),h++}while(e.bubbleScroll&&u!==c&&(u=ee(u,!1)));yi=d}}),30),Ei=function(t){var e=t.originalEvent,i=t.putSortable,o=t.dragEl,n=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget;if(e){var l=i||n;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:o,putSortable:i}))}};function Ci(){}function Si(){}Ci.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var o=Zt(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),i&&i.animateAll()},drop:Ei},xt(Ci,{pluginName:"revertOnSpill"}),Si.prototype={onSpill:function(t){var e=t.dragEl,i=t.putSortable||this.sortable;i.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),i.animateAll()},drop:Ei},xt(Si,{pluginName:"removeOnSpill"}),ri.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?jt(document,"dragover",this._handleAutoScroll):this.options.supportPointer?jt(document,"pointermove",this._handleFallbackAutoScroll):e.touches?jt(document,"touchmove",this._handleFallbackAutoScroll):jt(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?Ut(document,"dragover",this._handleAutoScroll):(Ut(document,"pointermove",this._handleFallbackAutoScroll),Ut(document,"touchmove",this._handleFallbackAutoScroll),Ut(document,"mousemove",this._handleFallbackAutoScroll)),wi(),bi(),clearTimeout(Yt),Yt=void 0},nulling:function(){fi=pi=ui=yi=mi=vi=gi=null,_i.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,o=(t.touches?t.touches[0]:t).clientX,n=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(o,n);if(fi=t,e||this.options.forceAutoScrollFallback||Ot||Dt||It){$i(t,this.options,r,e);var a=ee(r,!0);!yi||mi&&o===vi&&n===gi||(mi&&wi(),mi=setInterval((function(){var r=ee(document.elementFromPoint(o,n),!0);r!==a&&(a=r,bi()),$i(t,i.options,r,e)}),10),vi=o,gi=n)}else{if(!this.options.bubbleScroll||ee(r,!0)===qt())return void bi();$i(t,this.options,ee(r,!1),!1)}}},xt(t,{pluginName:"scroll",initializeByDefault:!0})}),ri.mount(Si,Ci);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ai=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xi{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki=(t,e)=>{var i,o;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(o=(i=t)._$AO)||void 0===o||o.call(i,e,!1),ki(t,e);return!0},Ti=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},Di=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Ii(e)}};function Oi(t){void 0!==this._$AN?(Ti(this),this._$AM=t,Di(this)):this._$AM=t}function Pi(t,e=!1,i=0){const o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(o))for(let t=i;t<o.length;t++)ki(o[t],!1),Ti(o[t]);else null!=o&&(ki(o,!1),Ti(o));else ki(this,t)}const Ii=t=>{var e,i,o,n;t.type==Ai&&(null!==(e=(o=t)._$AP)&&void 0!==e||(o._$AP=Pi),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=Oi))};class Ni extends xi{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Di(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(o=this.disconnected)||void 0===o||o.call(this)),e&&(ki(this,t),Ti(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Mi{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Ri{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,Ui=1073741823;const Hi=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Ni{constructor(){super(...arguments),this._$C_t=Ui,this._$Cwt=[],this._$Cq=new Mi(this),this._$CK=new Ri}render(...t){var e;return null!==(e=t.find((t=>!ji(t))))&&void 0!==e?e:L}update(t,e){const i=this._$Cwt;let o=i.length;this._$Cwt=e;const n=this._$Cq,r=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$C_t);t++){const a=e[t];if(!ji(a))return this._$C_t=t,a;t<o&&a===i[t]||(this._$C_t=Ui,o=0,Promise.resolve(a).then((async t=>{for(;r.get();)await r.get();const e=n.deref();if(void 0!==e){const i=e._$Cwt.indexOf(a);i>-1&&i<e._$C_t&&(e._$C_t=i,e.setValue(t))}})))}return L}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}});let Li=class extends rt{constructor(){super(...arguments),this._initialized=!1}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _title(){var t;return(null===(t=this._config)||void 0===t?void 0:t.title)||""}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _show_thumbnail(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_thumbnail)||!1}get _show_thumbnail_border(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_thumbnail_border)||!1}get _show_thumbnail_overlay(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_thumbnail_overlay)||!1}get _show_line_separator(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_line_separator)||!1}get _hide_last_line_separator(){var t;return(null===(t=this._config)||void 0===t?void 0:t.hide_last_line_separator)||!1}get _outline_color(){var t;return(null===(t=this._config)||void 0===t?void 0:t.outline_color)||""}get _items_container_scrollable(){var t;return(null===(t=this._config)||void 0===t?void 0:t.items_container_scrollable)||!1}get _items_container_height(){var t;return(null===(t=this._config)||void 0===t?void 0:t.items_container_height)||""}get _show_version(){var t;return(null===(t=this._config)||void 0===t?void 0:t.show_version)||!1}render(){if(!this.hass||!this._helpers)return H``;this._helpers.importMoreInfoControl("climate");const t=Object.keys(this.hass.states);return H`
            <div class="card-config">
                <div class="config">
                    <ha-textfield
                        label="title"
                        .value=${this._title}
                        .configValue=${"title"}
                        @input=${this._valueChanged}></ha-textfield>
                </div>
                <div class="config">
                    <ha-select
                        naturalMenuWidth
                        fixedMenuPosition
                        label="Entity"
                        }
                        @selected=${this._valueChanged}
                        @closed=${t=>t.stopPropagation()}
                        .configValue=${"entity"}
                        .value=${this._entity}>
                        ${t.map((t=>H`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
                    </ha-select>
                </div>

                <div class="config">
                    <ha-formfield class="switch-wrapper" label="Show Thumbnail">
                        <ha-switch
                            .checked=${!1!==this._show_thumbnail}
                            .configValue=${"show_thumbnail"}
                            @change=${this._valueChanged}>
                        </ha-switch>
                    </ha-formfield>
                </div>
                <div class="config">
                    <ha-formfield class="switch-wrapper" label="Show thumbnail overlay">
                        <ha-switch
                            .checked=${!1!==this._show_thumbnail_overlay}
                            .configValue=${"show_thumbnail_overlay"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>
                <div class="config">
                    <ha-formfield class="switch-wrapper" label="Show Line separator">
                        <ha-switch
                            .checked=${!1!==this._show_line_separator}
                            .configValue=${"show_line_separator"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>

                <div class="config">
                    <ha-formfield class="switch-wrapper" label="Hide Last Line separator">
                        <ha-switch
                            .checked=${!1!==this._hide_last_line_separator}
                            .configValue=${"hide_last_line_separator"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>
                <div class="config">
                    <ha-formfield class="switch-wrapper" label="Show thumbnail border">
                        <ha-switch
                            .checked=${!1!==this._show_thumbnail_border}
                            .configValue=${"show_thumbnail_border"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>

                <div class="config">
                    <ha-textfield
                        label="Outline Color (Optional)"
                        .value=${this._outline_color}
                        .configValue=${"outline_color"}
                        @input=${this._valueChanged}></ha-textfield>
                </div>

                <div class="config">
                    <ha-formfield class="switch-wrapper" label="Make Playlist scrollable">
                        <ha-switch
                            .checked=${!1!==this._items_container_scrollable}
                            .configValue=${"items_container_scrollable"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>

                <div class="config">
                    <ha-textfield
                        label="Height of the card (used when playlist is made scrollable)"
                        .value=${this._items_container_height}
                        .configValue=${"items_container_height"}
                        @input=${this._valueChanged}></ha-textfield>
                </div>

                <div class="config">
                    <ha-formfield class="switch-wrapper" label="Show version on the card">
                        <ha-switch
                            .checked=${!1!==this._show_version}
                            .configValue=${"show_version"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>
            </div>
        `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}loadCardHelpers(){return e(this,void 0,void 0,(function*(){this._helpers=yield window.loadCardHelpers()}))}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;if(this[`_${e.configValue}`]!==e.value){if(e.configValue)if(""===e.value){const t=Object.assign({},this._config);delete t[e.configValue],this._config=t}else{let t=e.value;void 0!==e.checked&&(t=e.checked),"number"==e.type&&(t=Number(t)),this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:t})}!function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});n.detail=i,t.dispatchEvent(n)}(this,"config-changed",{config:this._config})}}static get styles(){return s`
            ha-textfield,
            ha-formfield,
            ha-select {
                display: block;
            }
            .card-config {
                display: grid;
                grid-row: auto;
                grid-column: 1fr;
                grid-gap: 5px;
            }
            .config {
                width: 100%;
            }
        `}};t([dt({attribute:!1})],Li.prototype,"hass",void 0),t([ht()],Li.prototype,"_config",void 0),t([ht()],Li.prototype,"_helpers",void 0),Li=t([st("kodi-playlist-card-editor")],Li);const zi="4.5.1",Yi={audio:{kodi_player_id:0,label:"Audio",icon:"mdi:music"},video:{kodi_player_id:1,label:"Movie",icon:"mdi:movie"}},Bi={song:{id:"song",label:"Songs",icon:"mdi:music",order:0},album:{id:"album",label:"Albums",icon:"mdi:disc",order:1},artist:{id:"artist",label:"Artists",icon:"mdi:account-circle",order:2},movie:{id:"movie",label:"Movies",icon:"mdi:movie",order:3},musicvideo:{id:"musicvideo",label:"Music Videos",icon:"mdi:movie",order:4},tvshow:{id:"tvshow",label:"TV Shows",icon:"mdi:movie",order:5},episode:{id:"episode",label:"Episodes",icon:"mdi:movie",order:6},channel:{id:"channel",label:"Channels",icon:"mdi:movie",order:7},seasondetail:{id:"seasondetail",label:"Season Detail",icon:"mdi:movie",order:-1},albumdetail:{id:"albumdetail",label:"Album Detail",icon:"mdi:music",order:-1}};Object.keys(Bi).filter((t=>-1==Bi[t].order));const Vi="var(--primary-text-color)",Xi="300px";console.info(`%c  KODI-PLAYLIST-CARD\n%c  ${$t("common.version")} ${zi}    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"kodi-playlist-card",name:"Kodi Playlist Card",description:"This custom card allows you interact with the playlist of your kodi instance"});let Wi=class extends rt{constructor(){super(...arguments),this.ICON_CURRENT_PLAYING="mdi:arrow-left-bold"}static getConfigElement(){return e(this,void 0,void 0,(function*(){return document.createElement("kodi-playlist-card-editor")}))}static getStubConfig(){return{entity:"sensor.kodi_media_sensor_playlist",show_thumbnail:true,show_thumbnail_border:false,show_thumbnail_overlay:true,show_line_separator:false,hide_last_line_separator:false,outline_color:Vi,items_container_scrollable:false,items_container_height:Xi,show_version:false}}setConfig(t){if(!t)throw new Error($t("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=t,document.documentElement.style.setProperty("--outline-color",this.config.outline_color?this.config.outline_color:Vi),document.documentElement.style.setProperty("--items-container-height",this.config.items_container_height?this.config.items_container_height:Xi)}getCardSize(){return 1}shouldUpdate(t){return!!this.config&&function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var o=e.get("hass");return!o||o.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){let t;const e=this.config.entity;if(e)if(this._entityState=this.hass.states[e],this._entityState)if("off"==this._entityState.state)t="Kodi is off",console.error(t);else{const t=this._entityState.attributes.meta;if(!t)return void console.error("no metadata for the sensor");if(this._json_meta="object"==typeof t?t:JSON.parse(t),0==this._json_meta.length)return void console.error("empty metadata attribute");this._service_domain=this._json_meta[0].service_domain,this._kodi_entity_id=this._json_meta[0].kodi_entity_id,this._currently_playing=this._json_meta[0].currently_playing,this._currently_playing_file=this._json_meta[0].currently_playing_file;const e=this._entityState.attributes.data;this._json_data="object"==typeof e?e:JSON.parse(e)}else t="No State for the sensor",console.error(t);else t="No Entity defined",console.error(t);return H`
            <ha-card
                .header=${this.config.title?this.config.title:""}
                tabindex="0"
                .label=${`Kodi Playlist ${this.config.entity||"No Entity Defined"}`}>
                <div class="card-container">${t||this._buildCardContainer()}</div>
            </ha-card>
        `}_buildCardContainer(){const t=this._json_meta[0].playlist_type;return t?H`
                ${this.config.show_version?H`<div>${zi}</div>`:""}
                <div>${this._buildPlaylistType(t)}</div>
                <div>${this._buildResultContainer()}</div>
            `:H`<div>No Playlist found</div>`}_buildPlaylistType(t){return H`<div class="playlist-playlisttype-title">
            Playlist ${Yi[t].label} <ha-icon icon=${Yi[t].icon}></ha-icon>
        </div>`}_buildResultContainer(){let t=0;const e=this._json_data.length;let i="playlist-items-container";return this.config.items_container_scrollable&&(i+=" playlist-items-container-scrollable"),H`
            <div class=${i} id="playlist">
                ${this._json_data.map((i=>this._formatItem(i,t++,e-t==0)))}
            </div>
        `}_destroySortable(){var t;null===(t=this.sortable)||void 0===t||t.destroy(),this.sortable=void 0}updated(){var t;if(this._destroySortable(),this._createSortable(),this.sortable){const t=this.sortable.toArray();this.sortable.sort(t.sort((function(t,e){return parseInt(t)-parseInt(e)})),!1)}const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#playlist");let i=0;if(null!=e)for(const t of e.children){const o=this._json_data[i],n=t.getAttribute("kodi-id");if(o){if(o.id!=n){window.location.reload();break}i++}else e.removeChild(t)}}_createSortable(){var t;return e(this,void 0,void 0,(function*(){(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#playlist"))&&(this.sortable=new ri(this.shadowRoot.querySelector("#playlist"),{filter:".playing",animation:150,dataIdAttr:"data-id",delayOnTouchOnly:!0,delay:300,forceFallback:!1,fallbackClass:"sortable-fallback",ghostClass:"sortable-ghost",onEnd:t=>this.onDragEnd(t)}))}))}onDragEnd(t){const e=this._json_meta[0].playlist_type;this._moveTo(t.oldIndex,t.newIndex,Yi[e].kodi_player_id)}_formatItem(t,e,i){switch(t.type){case Bi.song.id:return this._formatSong(t,e,i);case Bi.movie.id:return this._formatMovie(t,e,i);case Bi.musicvideo.id:return this._formatMusicVideo(t,e,i);case Bi.episode.id:return this._formatEpisode(t,e,i);default:return this._formatUnknown(t,e,i)}}getItemCss(t,e){return t+(this.config.show_line_separator&&(!e||e&&!this.config.hide_last_line_separator)?" playlist-line-separator":"")}checkIsPlaying(t){return this._currently_playing?t.id==this._currently_playing:t.file==this._currently_playing_file}_formatUnknown(t,e,i){const o=this.checkIsPlaying(t);let n=this.getItemCss("playlist-unknown-grid playlist-grid",i);return o&&(n+=" playing"),H`<div class=${n} data-id=${e}>
             ${this._createAlbumCover(t,e)}
            <div class="playlist-unknown-message">type of media is... : ${t.type}</div>
            <div class="playlist-unknown-title playlist-title">${t.title}</div>
            ${this._createControl(o,e,Yi.audio,"playlist-unknown-playing","playlist-unknown-remove")}
        </div>`}_getThumbnailURLorBase64(t){return t.startsWith("/")?new Promise(((e,i)=>{this.hass.fetchWithAuth(t).then((t=>t.blob())).then((t=>{const o=new FileReader;o.onload=()=>{const t=o.result;e("string"==typeof t?t:"")},o.onerror=t=>i(t),o.readAsDataURL(t)}))})):t}_formatSong(t,e,i){const o=this.checkIsPlaying(t),n=this._getItemClass(o,i,"playlist-song-grid");return H`<div class=${n} data-id=${e} kodi-id=${t.id}>
            ${this._createAlbumCover(t,e)}
            <div class="playlist-song-title playlist-title">${t.artist} - ${t.title}</div>
            <div class="playlist-song-genre playlist-genre">${t.genre?t.genre:"undefined"}</div>
            <div class="playlist-song-album playlist-album">
                ${t.album} ${t.year?"("+t.year+")":""}
            </div>
            <div class="playlist-song-duration playlist-duration">${this._formatDuration(t.duration)}</div>
            ${this._createControl(o,e,Yi.audio,"playlist-song-playing","playlist-song-remove")}
        </div>`}_formatMovie(t,e,i){const o=this.checkIsPlaying(t),n=this._getItemClass(o,i,"playlist-movie-grid");return H`<div class=${n} data-id=${e} kodi-id=${t.id}>
            ${this._createMovieCover(t,e)}
            <div class="playlist-movie-title playlist-title">${t.title}</div>
            <div class="playlist-movie-genre playlist-genre">${t.genre?t.genre:"undefined"}</div>
            <div class="playlist-movie-year playlist-year">${t.year}</div>
            ${this._createControl(o,e,Yi.video,"playlist-movie-playing","playlist-movie-remove")}
        </div>`}_formatMusicVideo(t,e,i){const o=this.checkIsPlaying(t),n=this._getItemClass(o,i,"playlist-movie-grid");return H`<div class=${n} data-id=${e} kodi-id=${t.id}>
            ${this._createMusicVideoCover(t,e)}
            <div class="playlist-musicvideo-title playlist-title">${t.artist}: ${t.title}</div>
            <div class="playlist-musicvideo-genre playlist-genre">${t.genre?t.genre:"undefined"}</div>
            <div class="playlist-musicvideo-year playlist-year">${t.year}</div>
            ${this._createControl(o,e,Yi.video,"playlist-musicvideo-playing","playlist-musicvideo-remove")}
        </div>`}_formatEpisode(t,e,i){const o=this.checkIsPlaying(t),n=this._getItemClass(o,i,"playlist-episode-grid");return H`<div class=${n} data-id=${e} kodi-id=${t.id}>
            ${this._createEpisodeCover(t,e)}
            <div class="playlist-episode-title playlist-title">${t.title}</div>
            <div class="playlist-episode-genre playlist-genre">${t.genre?t.genre:"undefined"}</div>
            <div class="playlist-episode-season">
                Season ${t.season?t.season:"undefined"} - Episode
                ${t.episode?t.episode:"undefined"}
            </div>
            ${this._createControl(o,e,Yi.video,"playlist-episode-playing","playlist-episode-remove")}
        </div>`}_getItemClass(t,e,i){let o=this.getItemCss(i+" playlist-grid",e);return t&&(o+=" playing"),o}_createControl(t,e,i,o,n){const r=document.createElement("ha-icon");return t?(r.setAttribute("class",o+" playlist-control playlist-playing"),r.setAttribute("icon",this.ICON_CURRENT_PLAYING)):(r.setAttribute("class",n+" playlist-control"),r.setAttribute("icon","mdi:delete"),r.addEventListener("click",(()=>this._remove(e,i.kodi_player_id)))),H`${r}`}_formatDuration(t){return new Date(1e3*t).toISOString().substring(11,19)}_createAlbumCover(t,e){const i="/api/media_player_proxy/"+this._kodi_entity_id+"/browse_media/album/"+t.albumid,o=this.checkIsPlaying(t);return this._createCoverElement(i,"playlist-song-cover","playlist-song-cover-image-default","mdi:play","mdi:music",o,(()=>this._goTo(e,Yi.audio.kodi_player_id)))}_createMovieCover(t,e){const i=t.poster&&""!=t.poster?t.poster:t.thumbnail,o=this.checkIsPlaying(t);return this._createCoverElement(i,"playlist-movie-cover","playlist-movie-cover-image-default","mdi:play","mdi:movie",o,(()=>this._goTo(e,Yi.video.kodi_player_id)))}_createEpisodeCover(t,e){const i="image://";let o=t.poster&&""!=t.poster?t.poster:t.thumbnail;if(o=decodeURIComponent(decodeURI(o)),o.indexOf(i)>0){const t=o.indexOf(i)+8,e=o.endsWith("/");o=e?o.substring(t,o.length-1):o.substring(t)}const n=this.checkIsPlaying(t);return this._createCoverElement(o,"playlist-episode-cover","playlist-episode-cover-image-default","mdi:play","mdi:movie",n,(()=>this._goTo(e,Yi.video.kodi_player_id)))}_createMusicVideoCover(t,e){const i="image://";let o=t.poster&&""!=t.poster?t.poster:t.thumbnail;if(o=decodeURIComponent(decodeURI(o)),o.indexOf(i)>0){const t=o.indexOf(i)+8,e=o.endsWith("/");o=e?o.substring(t,o.length-1):o.substring(t)}const n=this.checkIsPlaying(t);return this._createCoverElement(o,"playlist-musicvideo-cover","playlist-musicvideo-cover-image-default","mdi:play","mdi:movie",n,(()=>this._goTo(e,Yi.video.kodi_player_id)))}_createUnknownCover(t,e){const i=t.thumbnail,o=this.checkIsPlaying(t);return this._createCoverElement(i,"playlist-unknown-cover","playlist-unknown-cover-image-default","mdi:play","mdi:sparkles",o,(()=>this._goTo(e,Yi.audio.kodi_player_id)))}_createCoverElement(t,e,i,o,n,r,a){const s=e+" playlist-item-cover"+(this.config.show_thumbnail_border?" cover-image-outline-border":"");let l=!1,c=t;null!=t&&""!=t&&t.startsWith("/api")&&(c=t?this._getThumbnailURLorBase64(t).then((t=>`url(${t})`)):"none",l=!0);const d="playlist-item-cover-image";return H`
        <div class=${s}>
            <div class=${"playlist-item-cover-container"}>
                <ha-icon icon=${n} class=${i+" playlist-item-cover-image-default"}></ha-icon>

               ${null!=c&&""!=c?l?H`<div class="${d}" @click="${this.config.show_thumbnail_overlay?"":a}" style="background-size: contain; background-image: ${Hi(c,"")}"></div>`:H`<img class="${d}" @click="${this.config.show_thumbnail_overlay?"":a}" src="${c}"></img>`:H`<div class="${d}" @click="${this.config.show_thumbnail_overlay?"":a}"></div>`}

                ${this.config.show_thumbnail_overlay&&!r?H`<ha-icon class="overlay-play" icon=${o} @click="${a}"></ha-icon>`:H``}
            </div>
        </div>
        `}static get styles(){return s`
            :root {
                --outline-color: "-----";
                --items-container-height: 300px;
            }

            :host {
                --album-thumbnail-width: 130px;
                --song-thumbnail-width: 65px;
                --movie-thumbnail-width: 100px;
                --movie-thumbnail-ratio: 0.8;
                --channel-thumbnail-width: 180px;
                --channel-thumbnail-ratio: 1.5;
                --artist-thumbnail-width: 130px;
                --episode-thumbnail-width: 180px;
                --episode-thumbnail-ratio: 1.5;
                --musicvideo-thumbnail-width: 120px;
                --musicvideo-thumbnail-ratio: 1;
                --background-basic-color: #9b9595;
                --container-rows-gap: 10px;
                --mdc-select-fill-color: rgba(0, 0, 0, 0);
            }

            /* SORTABLE PLAYLIST */
            .sortable-fallback {
                visibility: hidden;
            }

            .sortable-ghost {
                opacity: 0.8;
                border-radius: 5px;
                background: var(--primary-color, #03a9f4);
            }
            /*
            PLAYLIST
            */

            .playlist-line-separator {
                border-bottom: 1px solid var(--outline-color);
            }

            .cover-image-outline-border {
                border: 1px solid var(--outline-color);
            }

            .playlist-playlisttype-title {
                text-align: right;
                font-weight: bold;
                font-size: 18px;
                margin-top: 20px;
                margin-bottom: 20px;
                margin-left: 10px;
                margin-right: 10px;
                border-bottom: solid;
            }

            .playlist-items-container {
                margin-top: 20px;
                margin-bottom: 20px;
                margin-left: 10px;
                margin-right: 10px;
            }

            .playlist-items-container-scrollable {
                overflow-y: scroll;
                height: var(--items-container-height);
            }

            .overlay-play {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                opacity: 0;
                color: white;
                transition: 0.5s ease opacity;
                text-align: center;
                --mdc-icon-size: 50px;
            }

            .playlist-cover-image-default {
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                color: white;
                background-color: var(--background-basic-color);
            }

            .playlist-cover-image {
                height: auto !important;
                display: block;
                justify-content: center;
            }

            .playlist-cover-container {
                width: var(--song-thumbnail-width);
                height: var(--song-thumbnail-width);
                position: absolute;
            }

            .playlist-item-cover-image {
                position: absolute;
            }

            .playlist-grid {
                display: grid;
                column-gap: 10px;
                padding-bottom: 5px;
            }

            .playlist-title {
                font-weight: bold;
                font-size: 14px;
            }

            .playlist-genre,
            .playlist-year {
                font-style: italic;
            }

            .playlist-control {
                text-align: right;
                width: 30px;
            }

            .playlist-playing {
                color: var(--primary-color, #03a9f4);
            }

            .playlist-item-cover {
                position: relative;
            }

            .playlist-item-cover:hover .overlay-play {
                opacity: 1;
            }

            .playlist-item-cover-container{
                position: relative;
                background-color: var(--background-basic-color);
            }

            .playlist-item-cover-image-default {
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                color: white;
                height: 100%;
            }

            .playlist-item-cover-image, .playlist-item-cover-container{
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }

            /*
          //// SONGS
          */

            .playlist-song-grid {
                grid-template-columns: auto auto 1fr auto auto;
                grid-auto-rows: auto;
                margin-top: 15px;
            }


            .playlist-song-title {
                grid-column: 2 / 4;
                grid-row: 1;
            }

            .playlist-song-genre {
                grid-column: 2 / 4;
                grid-row: 2;
            }

            .playlist-song-album {
                grid-column: 2 / 3;
                grid-row: 3;
            }
            .playlist-song-duration {
                grid-column: 3 / 5;
                grid-row: 3;
                text-align: right;
            }

            .playlist-song-remove,
            .playlist-song-playing {
                grid-column: 4;
                grid-row: 1 / 3;
            }

            .playlist-song-cover {
                grid-column: 1;
                grid-row: 1 / 5;
                width: var(--song-thumbnail-width);
                height: var(--song-thumbnail-width);
            }

            .playlist-song-cover-image-default {
                --mdc-icon-size: calc(var(--song-thumbnail-width) - 30px);
            }

            /*
             //// MOVIES
                   */

            .playlist-movie-grid {
                grid-template-columns: auto 1fr auto;
                grid-auto-rows: auto;
                margin-top: 15px
            }

            .playlist-movie-title {
                grid-column: 2;
                grid-row: 1;
            }

            .playlist-movie-genre {
                grid-column: 2;
                grid-row: 2;
            }

            .playlist-movie-year {
                grid-column: 2;
                grid-row: 3;
            }

            .playlist-movie-remove,
            .playlist-movie-playing {
                grid-column: 3;
                grid-row: 1 / 3;
            }

            .playlist-movie-cover {
                grid-column: 1;
                grid-row: 1 / 5;
                width: var(--movie-thumbnail-width);
                height: calc(var(--movie-thumbnail-width) / var(--movie-thumbnail-ratio));
            }

            .playlist-movie-cover-image-default {
                --mdc-icon-size: calc(var(--movie-thumbnail-width) - 30px);
            }

            /*
                    //// EPISODE
                   */
            .playlist-episode-grid {
                grid-template-columns: auto 1fr auto;
                grid-auto-rows: auto;
                margin-top: 15px
            }

            .playlist-episode-title {
                grid-column: 2;
                grid-row: 1;
            }

            .playlist-episode-genre {
                grid-column: 2;
                grid-row: 2;
            }

            .playlist-episode-season {
                grid-column: 2;
                grid-row: 3;
            }

            .playlist-episode-remove,
            .playlist-episode-playing {
                grid-column: 3;
                grid-row: 1 / 3;
            }

            .playlist-episode-cover {
                grid-column: 1;
                grid-row: 1 / 5;
                width: var(--episode-thumbnail-width);
                height: calc(var(--episode-thumbnail-width) / var(--episode-thumbnail-ratio));
            }

            .playlist-episode-cover-image-default {
                --mdc-icon-size: calc((var(--episode-thumbnail-width) / var(--episode-thumbnail-ratio)) - 30px);
            }


            /*
                    //// MUSIC VIDEO
                   */
            .playlist-musicvideo-grid {
                grid-template-columns: auto 1fr auto;
                grid-auto-rows: auto;
                margin-top: 15px
            }

            .playlist-musicvideo-title {
                grid-column: 2;
                grid-row: 1;
            }

            .playlist-musicvideo-genre {
                grid-column: 2;
                grid-row: 2;
            }

            .playlist-musicvideo-year {
                grid-column: 2;
                grid-row: 3;
            }

            .playlist-musicvideo-remove,
            .playlist-musicvideo-playing {
                grid-column: 3;
                grid-row: 1 / 3;
            }

            .playlist-musicvideo-cover {
                grid-column: 1;
                grid-row: 1 / 5;
                width: var(--musicvideo-thumbnail-width);
                height: calc(var(--musicvideo-thumbnail-width) / var(--musicvideo-thumbnail-ratio));
            }

            .playlist-musicvideo-cover-image-default {
                --mdc-icon-size: calc(var(--musicvideo-thumbnail-width) - 30px);
            }



            /*
            //// UNKNOWN
            */
            .playlist-unknown-grid {
                grid-template-columns: auto 1fr auto;
                grid-auto-rows: auto;
                margin-top: 15px
            }

            .playlist-unknown-message {
                grid-column: 2;
                grid-row: 1;
            }

            .playlist-unknown-title {
                grid-column: 2;
                grid-row: 2;
            }

            .playlist-unknown-remove,
            .playlist-unknown-playing {
                grid-column: 3;
                grid-row: 1;
            }

            .playlist-unknown-cover {
                grid-column: 1;
                grid-row: 1 / 3;
                width: var(--song-thumbnail-width);
                height: var(--song-thumbnail-width);
            }

            .playlist-unknown-cover-image-default {
                --mdc-icon-size: calc(var(--song-thumbnail-width) - 30px);
            }

            /* COMMON */
            .playlist-song-cover-container, .playlist-movie-cover-container, .playlist-episode-cover-container
            .playlist-unknown-cover-container {
                position: relative;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }
        `}_goTo(t,e){console.info(t+" "+e+" / "+this._service_domain+" * "+this.config.entity),this.hass.callService(this._service_domain,"call_method",{entity_id:this.config.entity,method:"goto",item:{playerid:e,position:t,to:t}})}_moveTo(t,e,i){this.hass.callService(this._service_domain,"call_method",{entity_id:this.config.entity,method:"moveto",item:{playlistid:i,position_from:t,position_to:e}})}_remove(t,e){this.hass.callService(this._service_domain,"call_method",{entity_id:this.config.entity,method:"remove",item:{playlistid:e,position:t}})}};t([dt({attribute:!1})],Wi.prototype,"hass",void 0),t([ht()],Wi.prototype,"config",void 0),Wi=t([st("kodi-playlist-card")],Wi);export{Wi as KodiPlaylistCard};
