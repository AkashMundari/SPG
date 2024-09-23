var ee=Object.defineProperty;var te=(n,e,t)=>e in n?ee(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var f=(n,e,t)=>(te(n,typeof e!="symbol"?e+"":e,t),t),W=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var k=(n,e,t)=>(W(n,e,"read from private field"),t?t.call(n):e.get(n)),I=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)};var _=(n,e,t)=>(W(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var O;const P=window,x=P.trustedTypes,R=x?x.createPolicy("lit-html",{createHTML:n=>n}):void 0,j="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,K="?"+v,ie=`<${K}>`,A=document,C=()=>A.createComment(""),N=n=>n===null||typeof n!="object"&&typeof n!="function",Y=Array.isArray,se=n=>Y(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",U=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,z=/>/g,$=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,Z=/"/g,J=/^(?:script|style|textarea|title)$/i,ne=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),oe=ne(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),F=new WeakMap,y=A.createTreeWalker(A,129,null,!1);function Q(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return R!==void 0?R.createHTML(e):e}const re=(n,e)=>{const t=n.length-1,s=[];let i,r=e===2?"<svg>":"",o=H;for(let c=0;c<t;c++){const l=n[c];let a,h,d=-1,p=0;for(;p<l.length&&(o.lastIndex=p,h=o.exec(l),h!==null);)p=o.lastIndex,o===H?h[1]==="!--"?o=V:h[1]!==void 0?o=z:h[2]!==void 0?(J.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=$):h[3]!==void 0&&(o=$):o===$?h[0]===">"?(o=i??H,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,a=h[1],o=h[3]===void 0?$:h[3]==='"'?Z:q):o===Z||o===q?o=$:o===V||o===z?o=H:(o=$,i=void 0);const m=o===$&&n[c+1].startsWith("/>")?" ":"";r+=o===H?l+ie:d>=0?(s.push(a),l.slice(0,d)+j+l.slice(d)+v+m):l+v+(d===-2?(s.push(void 0),c):m)}return[Q(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),s]};class T{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,o=0;const c=e.length-1,l=this.parts,[a,h]=re(e,t);if(this.el=T.createElement(a,s),y.currentNode=this.el.content,t===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(i=y.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const p of i.getAttributeNames())if(p.endsWith(j)||p.startsWith(v)){const m=h[o++];if(d.push(p),m!==void 0){const X=i.getAttribute(m.toLowerCase()+j).split(v),L=/([.?@])?(.*)/.exec(m);l.push({type:1,index:r,name:L[2],strings:X,ctor:L[1]==="."?ae:L[1]==="?"?he:L[1]==="@"?de:D})}else l.push({type:6,index:r})}for(const p of d)i.removeAttribute(p)}if(J.test(i.tagName)){const d=i.textContent.split(v),p=d.length-1;if(p>0){i.textContent=x?x.emptyScript:"";for(let m=0;m<p;m++)i.append(d[m],C()),y.nextNode(),l.push({type:2,index:++r});i.append(d[p],C())}}}else if(i.nodeType===8)if(i.data===K)l.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(v,d+1))!==-1;)l.push({type:7,index:r}),d+=v.length-1}r++}}static createElement(e,t){const s=A.createElement("template");return s.innerHTML=e,s}}function b(n,e,t=n,s){var i,r,o,c;if(e===S)return e;let l=s!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[s]:t._$Cl;const a=N(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,s)),s!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[s]=l:t._$Cl=l),l!==void 0&&(e=b(n,l._$AS(n,e.values),l,s)),e}class le{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:s},parts:i}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:A).importNode(s,!0);y.currentNode=r;let o=y.nextNode(),c=0,l=0,a=i[0];for(;a!==void 0;){if(c===a.index){let h;a.type===2?h=new M(o,o.nextSibling,this,e):a.type===1?h=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(h=new ue(o,this,e)),this._$AV.push(h),a=i[++l]}c!==(a==null?void 0:a.index)&&(o=y.nextNode(),c++)}return y.currentNode=A,r}v(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class M{constructor(e,t,s,i){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=b(this,e,t),N(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):se(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==u&&N(this._$AH)?this._$AA.nextSibling.data=e:this.$(A.createTextNode(e)),this._$AH=e}g(e){var t;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=T.createElement(Q(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(s);else{const o=new le(r,this),c=o.u(this.options);o.v(s),this.$(c),this._$AH=o}}_$AC(e){let t=F.get(e.strings);return t===void 0&&F.set(e.strings,t=new T(e)),t}T(e){Y(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new M(this.k(C()),this.k(C()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class D{constructor(e,t,s,i,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,i){const r=this.strings;let o=!1;if(r===void 0)e=b(this,e,t,0),o=!N(e)||e!==this._$AH&&e!==S,o&&(this._$AH=e);else{const c=e;let l,a;for(e=r[0],l=0;l<r.length-1;l++)a=b(this,c[s+l],t,l),a===S&&(a=this._$AH[l]),o||(o=!N(a)||a!==this._$AH[l]),a===u?e=u:e!==u&&(e+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ae extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}const ce=x?x.emptyScript:"";class he extends D{constructor(){super(...arguments),this.type=4}j(e){e&&e!==u?this.element.setAttribute(this.name,ce):this.element.removeAttribute(this.name)}}class de extends D{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){var s;if((e=(s=b(this,e,t,0))!==null&&s!==void 0?s:u)===S)return;const i=this._$AH,r=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==u&&(i===u||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class ue{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){b(this,e)}}const G=P.litHtmlPolyfillSupport;G==null||G(T,M),((O=P.litHtmlVersions)!==null&&O!==void 0?O:P.litHtmlVersions=[]).push("2.8.0");const pe=(n,e,t)=>{var s,i;const r=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let o=r._$litPart$;if(o===void 0){const c=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new M(e.insertBefore(C(),c),c,void 0,t??{})}return o._$AI(n),o};var E,B,g,w;class me{constructor(){I(this,g);f(this,"init",()=>{this.showWord(),setInterval(this.countdown,1e3),setInterval(this.checkStatus,100)});I(this,E,e=>{this.startMatch(e.target.value)});I(this,B,e=>{this.changeLevel(e.target.value)});f(this,"showWord",()=>{let e=Math.floor(Math.random()*this.words.length);this.wordDisplayed=this.words[e],_(this,g,w).call(this)});f(this,"countdown",()=>{this.timeCount>0?this.timeCount--:this.timeCount===0&&(this.isPlaying=!1),_(this,g,w).call(this)});f(this,"checkStatus",()=>{!this.isPlaying&&this.timeCount===0&&(document.querySelector("#message").textContent="Time Up!!",this.scoreCount=0,_(this,g,w).call(this))});f(this,"startMatch",e=>{e===this.wordDisplayed&&(this.isPlaying=!0,document.querySelector("#message").textContent="Correct!!",document.querySelector("#input-word").value="",this.scoreCount++,this.timeCount=this.currentLevel+1,this.showWord())});f(this,"changeLevel",e=>{e==="Medium"?this.currentLevel=this.levels.medium:e==="Hard"?this.currentLevel=this.levels.hard:this.currentLevel=this.levels.easy,this.scoreCount=0,this.timeCount=this.currentLevel+1,_(this,g,w).call(this)});this.words=["magic","journey","travel","explore","life","experience","happiness","gratitude","discipline","exercise","workout","friendship","practice","routine","morning","reading","books","education","amour","delibrate","protein","partner","empathy","concert","patience","humor","resilience","confidence","consistency","appreciation","literature","meaning","humble","province","flight","alchemy","intense","adorable","swoon","stunning","sensational","provocative","apocalypse","compliance","meticulous","replicate","relentless","pursuit","proactive","astounding","delightful","legitimate","mesmerizing","polarizing","validate","explore","happiness","gratitude","discipline","exercise","workout","friendship","practice","routine","morning","reading","books","education","love","care","journey","travel","life","magic","experience","music","story","future","hope","dream","sunset","adventure","peace","courage","wisdom","growth","light","nature","strength","freedom","art","technology","discovery","faith","imagination","perspective","potential","dedication","community","unity","balance","patience","empathy","compassion","connection","confidence","leadership","integrity","resilience","understanding","clarity","transformation","creativity","mindfulness","serenity","exploration","commitment","innovation","curiosity","sustainability","determination","strategy","ambition","solution","vision","mission","goals","achievement","focus","collaboration","trust","security","opportunity","success","progress","motivation","clarity","reflection","philosophy","learning","knowledge","efficiency","excellence","planning","results","development","creativity","design","engineering","logic","harmony","emotions","awareness","consciousness","purpose","balance","mindset","relaxation","breathing","gratitude","perspective","ambition","success","appreciation","discipline","vision","focus","serenity","healing","transformation","trust","partnership","integrity","value","respect","dignity","communication","contribution","harmony","spirit","reflection","awareness","perseverance","effort","consistency","achievement","direction","persistence","visionary","growth","mission","advancement","sincerity","leadership","aspiration","satisfaction","fulfillment"],this.levels={easy:5,medium:3,hard:2},this.currentLevel=this.levels.easy,this.timeCount=this.currentLevel+1,this.scoreCount=0,this.isPlaying=!1,this.wordDisplayed="",_(this,g,w).call(this),this.init()}}E=new WeakMap,B=new WeakMap,g=new WeakSet,w=function(){let e=oe`
      <header class="bg-info p-3 mb-5 text-center">
        <h1>Speed Typing Game</h1>
      </header>
      <section class="container text-center">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <p>
              Type the following word in
              <span id="seconds" class="text-warning"
                >${this.currentLevel}</span
              >
              seconds:
            </p>
            <h2 id="current-word" class="display-2 mb-4">
              ${this.wordDisplayed}
            </h2>
            <div class="form-group col-md-4 mx-auto">
              <label for="difficulty">Difficulty:</label>
              <select
                class="form-control"
                id="difficulty"
                @change="${k(this,B)}"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
            <input
              id="input-word"
              type="text"
              class="form-control form-control-lg mb-4 mt-4"
              placeholder="Start typing ..."
              autofocus
              @input="${k(this,E)}"
            />
            <h4 id="message" class="mt-3 text-warning"></h4>
            <div class="row mt-3">
              <div class="col-md-6">
                <h3>
                  Time Left: <span id="time-left">${this.timeCount}</span>
                </h3>
              </div>
              <div class="col-md-6">
                <h3>Score: <span id="score">${this.scoreCount}</span></h3>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-10 mx-auto">
                <div class="card card-body bg-secondary">
                  <h5>Instructions</h5>
                  <p>
                    Type each word in the given amount of time to score. To play
                    again, just type the current word. Your score will reset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;pe(e,document.getElementById("root"))};new me;
