var b=Object.defineProperty;var E=(t,e,n)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(E(t,typeof e!="symbol"?e+"":e,n),n);import{r as $,n as c,J as x,b as O,f as C,K as I,L as v,M as L,N as p,O as M,P as N,Q as w,R as P,S as R,T as U,U as V,V as j}from"./scheduler.CmqGGE48.js";const o=new Set;let f;function D(){f={r:0,c:[],p:f}}function F(){f.r||$(f.c),f=f.p}function B(t,e){t&&t.i&&(o.delete(t),t.i(e))}function G(t,e,n,s){if(t&&t.o){if(o.has(t))return;o.add(t),f.c.push(()=>{o.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function H(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function J(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),p(()=>{const d=t.$$.on_mount.map(P).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...d):$(d),t.$$.on_mount=[]}),i.forEach(p)}function K(t,e){const n=t.$$;n.fragment!==null&&(M(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){t.$$.dirty[0]===-1&&(R.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(t,e,n,s,i,d,h=null,S=[-1]){const u=N;w(t);const r=t.$$={fragment:null,ctx:[],props:d,update:c,not_equal:i,bound:x(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:x(),dirty:S,skip_bound:!1,root:e.target||u.$$.root};h&&h(r.root);let l=!1;if(r.ctx=n?n(t,e.props||{},(a,g,...m)=>{const y=m.length?m[0]:g;return r.ctx&&i(r.ctx[a],r.ctx[a]=y)&&(!r.skip_bound&&r.bound[a]&&r.bound[a](y),l&&Q(t,a)),g}):[],r.update(),l=!0,$(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){V();const a=O(e.target);r.fragment&&r.fragment.l(a),a.forEach(C)}else r.fragment&&r.fragment.c();e.intro&&B(t.$$.fragment),J(t,e.target,e.anchor),j(),I()}w(u)}class Z{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){K(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!L(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const T="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(T);export{Z as S,X as a,G as b,W as c,K as d,F as e,H as f,D as g,Y as i,J as m,B as t};