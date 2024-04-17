import{r as o}from"./react-U3tOp64R.js";import{i as v,p as N,m as O,j as I,A as j,s as k,a as _}from"./@remix-run-qxILlC0M.js";/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function x(){return x=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},x.apply(this,arguments)}const w=o.createContext(null),T=o.createContext(null),D=o.createContext(null),y=o.createContext(null),R=o.createContext({outlet:null,matches:[],isDataRoute:!1}),M=o.createContext(null);function B(){return o.useContext(y)!=null}function z(){return B()||v(!1),o.useContext(y).location}function W(r,e){return A(r,e)}function A(r,e,t,n){B()||v(!1);let{navigator:i}=o.useContext(D),{matches:d}=o.useContext(R),l=d[d.length-1],m=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let C=z(),s;if(e){var a;let u=typeof e=="string"?N(e):e;c==="/"||(a=u.pathname)!=null&&a.startsWith(c)||v(!1),s=u}else s=C;let p=s.pathname||"/",f=c==="/"?p:p.slice(c.length)||"/",h=O(r,{pathname:f}),E=K(h&&h.map(u=>Object.assign({},u,{params:Object.assign({},m,u.params),pathname:I([c,i.encodeLocation?i.encodeLocation(u.pathname).pathname:u.pathname]),pathnameBase:u.pathnameBase==="/"?c:I([c,i.encodeLocation?i.encodeLocation(u.pathnameBase).pathname:u.pathnameBase])})),d,t,n);return e&&E?o.createElement(y.Provider,{value:{location:x({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:j.Pop}},E):E}function J(){let r=Z(),e=_(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},e),t?o.createElement("pre",{style:i},t):null,null)}const V=o.createElement(J,null);class q extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?o.createElement(R.Provider,{value:this.props.routeContext},o.createElement(M.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function G(r){let{routeContext:e,match:t,children:n}=r,i=o.useContext(w);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),o.createElement(R.Provider,{value:e},n)}function K(r,e,t,n){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),n===void 0&&(n=null),r==null){var d;if((d=t)!=null&&d.errors)r=t.matches;else return null}let l=r,m=(i=t)==null?void 0:i.errors;if(m!=null){let s=l.findIndex(a=>a.route.id&&(m==null?void 0:m[a.route.id]));s>=0||v(!1),l=l.slice(0,Math.min(l.length,s+1))}let c=!1,C=-1;if(t&&n&&n.v7_partialHydration)for(let s=0;s<l.length;s++){let a=l[s];if((a.route.HydrateFallback||a.route.hydrateFallbackElement)&&(C=s),a.route.id){let{loaderData:p,errors:f}=t,h=a.route.loader&&p[a.route.id]===void 0&&(!f||f[a.route.id]===void 0);if(a.route.lazy||h){c=!0,C>=0?l=l.slice(0,C+1):l=[l[0]];break}}}return l.reduceRight((s,a,p)=>{let f,h=!1,E=null,u=null;t&&(f=m&&a.route.id?m[a.route.id]:void 0,E=a.route.errorElement||V,c&&(C<0&&p===0?($("route-fallback",!1),h=!0,u=null):C===p&&(h=!0,u=a.route.hydrateFallbackElement||null)));let U=e.concat(l.slice(0,p+1)),F=()=>{let g;return f?g=E:h?g=u:a.route.Component?g=o.createElement(a.route.Component,null):a.route.element?g=a.route.element:g=s,o.createElement(G,{match:a,routeContext:{outlet:s,matches:U,isDataRoute:t!=null},children:g})};return t&&(a.route.ErrorBoundary||a.route.errorElement||p===0)?o.createElement(q,{location:t.location,revalidation:t.revalidation,component:E,error:f,children:F(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):F()},null)}var b=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(b||{});function Q(r){let e=o.useContext(T);return e||v(!1),e}function X(r){let e=o.useContext(R);return e||v(!1),e}function Y(r){let e=X(),t=e.matches[e.matches.length-1];return t.route.id||v(!1),t.route.id}function Z(){var r;let e=o.useContext(M),t=Q(b.UseRouteError),n=Y(b.UseRouteError);return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}const L={};function $(r,e,t){!e&&!L[r]&&(L[r]=!0)}function H(r){v(!1)}function re(r){let{basename:e="/",children:t=null,location:n,navigationType:i=j.Pop,navigator:d,static:l=!1,future:m}=r;B()&&v(!1);let c=e.replace(/^\/*/,"/"),C=o.useMemo(()=>({basename:c,navigator:d,static:l,future:x({v7_relativeSplatPath:!1},m)}),[c,m,d,l]);typeof n=="string"&&(n=N(n));let{pathname:s="/",search:a="",hash:p="",state:f=null,key:h="default"}=n,E=o.useMemo(()=>{let u=k(s,c);return u==null?null:{location:{pathname:u,search:a,hash:p,state:f,key:h},navigationType:i}},[c,s,a,p,f,h,i]);return E==null?null:o.createElement(D.Provider,{value:C},o.createElement(y.Provider,{children:t,value:E}))}function te(r){let{children:e,location:t}=r;return W(P(e),t)}new Promise(()=>{});function P(r,e){e===void 0&&(e=[]);let t=[];return o.Children.forEach(r,(n,i)=>{if(!o.isValidElement(n))return;let d=[...e,i];if(n.type===o.Fragment){t.push.apply(t,P(n.props.children,d));return}n.type!==H&&v(!1),!n.props.index||!n.props.children||v(!1);let l={id:n.props.id||d.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=P(n.props.children,d)),t.push(l)}),t}export{re as R,te as a,H as b};
