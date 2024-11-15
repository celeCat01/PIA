"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[89450],{107981:(t,e,n)=>{n.d(e,{Z:()=>a});let a=(0,n(667294).createContext)(null)},95732:(t,e,n)=>{n.d(e,{Z:()=>a});let a=(0,n(667294).createContext)(null)},689450:(t,e,n)=>{n.d(e,{Z:()=>k});var a=n(667294),i=n(705895),r=n(685679),o=n(608029),s=n(297329),l=n(107860),p=n(906623),d=n(737937),c=n(404373);let u=!1,m=(t,e)=>{if(t&&e){if(!u)return u=!0,e;(0,s.H)("duplicated_initial_app_load_surface_pwt")}return(0,c.Z)()};var _=n(363404),g=n(991323),y=n(438555),f=n(367180);let T=t=>{let e=performance.getEntriesByType("resource").filter(t=>t.name.includes("i.pinimg")).reduce((t,e)=>{let n=e.name.replace(".jpg","").split("/");return{[n[n.length-1]]:{downloadSize:e.name.split("/")[3].split("x")[0]},...t}},{});[...Array.from(document.getElementsByTagName("img")).map(t=>{let n=t.src.replace(".jpg","").split("/"),a=n[n.length-1];if(e[a]){let n=f.rZ(t)?.width||1,i=e[a].downloadSize;return{fileName:a,renderedSize:n,downloadedSize:i,ratio:i/n}}return{fileName:a,renderedSize:1,downloadedSize:1,ratio:1}}),...Array.from(document.querySelectorAll('div[role="img"]')).map(t=>{let n=t.style.backgroundImage.split('"')[1].replace(".jpg","").split("/"),a=n[n.length-1];if(e[a]&&t instanceof HTMLDivElement){let n=f.rZ(t)?.width||1,i=e[a].downloadSize;return{fileName:a,renderedSize:n,downloadedSize:i,ratio:i/n}}return{fileName:a,renderedSize:1,downloadedSize:1,ratio:1}})].forEach(e=>{let{ratio:n,fileName:a,downloadedSize:i}=e;e.ratio>1.05&&(0,s.A9)(`checkImageRatio.${t}`,{count:Math.round(10*n)/10,tags:{fileName:`${i}_${a}`}})})};var w=n(970126),A=n(5859);let S=(t,e)=>{let n=(0,a.useRef)(e);return{getState:()=>n.current,dispatch:e=>{n.current=t(n.current,e)}}};var I=n(184960),E=n(953565),M=n(785893);let N=["initial_app_load","client_route_push"],h=(0,o.XV)("PwtSurface"),C="NavigationComplete",v="VisuallyComplete",R=(t,e,n,a)=>{let{metricConfig:{metricId:i,pwtStaticContext:r,annotateExperiments:o},annotations:s,binaryAnnotations:l,constraintMap:p,startTime:c,imageTimings:u,isSampled:g,spans:y}=t,f=m("initial_app_load"===i.navigationType,r.serverData?.trace_id),T=(0,d.N)({reason:e,annotateExperiments:o,annotations:s,binaryAnnotations:l,constraintMap:p,endTime:n,imageTimings:u,metricId:i,pwtStaticContext:r,startTime:c,traceId:f,spans:y});g&&!a&&(0,_.Z)({metricId:i,pwtStaticContext:r,result:T})},Z=(t,e,n)=>{let{metricConfig:{metricId:a,pwtStaticContext:i,annotateExperiments:o},annotations:p,binaryAnnotations:c,constraintMap:u,startTime:g,imageTimings:y,isSampled:f,spans:w}=t;(0,l.L8)(`PWT_Complete_${(0,r.KJ)(a)}`);let A=m("initial_app_load"===a.navigationType,i.serverData?.trace_id),S=(0,d.W)({annotateExperiments:o,annotations:p,binaryAnnotations:c,constraintMap:u,endTime:e,imageTimings:y,metricId:a,pwtStaticContext:i,startTime:g,traceId:A,spans:w});f&&!n&&(0,_.Z)({metricId:a,pwtStaticContext:i,result:S});try{T(String(S.binaryAnnotationMap["metricId.surface"].value))}catch(t){(0,s.H)("image_ratio_check_error",{error:t})}return{...t,result:S,status:"DONE"}},O=(t,e)=>{if(t.metricConfig.constraints.every(e=>t.constraintMap[e])){let n=Math.max(...t.metricConfig.constraints.map(e=>t.constraintMap[e]));return Z(t,n,e)}return h(`Remaining constraints: ${t.metricConfig.constraints.filter(e=>!t.constraintMap[e]).join(", ")}`),t},b=(t,e)=>{let{constraint:n,time:a,disablePWTLogging:i}=e,o=(0,r.KJ)(t.metricConfig.metricId);return w.Z?t.metricConfig.constraints.find(t=>t===n)?t.constraintMap[n]?(h(`constraint "${n}" is already complete.`),(0,s.H)("duplicated_constraint_complete",{constraint:n,action:o}),t):(h(`marking constraint "${n}" as complete`),(0,l.ZP)(`constraint_${n}_is_complete`),O({...t,constraintMap:{...t.constraintMap,[n]:a||w.Z.now()}},i)):(h(`marked constraint "${n}" is not a required constraint.`),t):((0,s.H)("missing_window_performance",{action:o}),t)},L=(t,e)=>{if(!w.Z){let e=(0,r.KJ)(t.metricConfig.metricId);(0,s.H)("missing_window_performance",{action:e})}h(`removing constraint "${e}"`);let n=t.metricConfig.constraints.filter(t=>t!==e),{[e]:a,...i}=t.constraintMap;return O({...t,constraintMap:i,metricConfig:{...t.metricConfig,constraints:n}})},P=(t,e)=>{if(!w.Z){let e=(0,r.KJ)(t.metricConfig.metricId);(0,s.H)("missing_window_performance",{action:e})}h(`updating pwt segment to "${e}"`);let n={...t.metricConfig.metricId,segment:e};return{...t,metricConfig:{...t.metricConfig,metricId:n}}},B=(t,e)=>{let{metricConfig:n,startTime:a,isSampled:i,disablePWTLogging:o}=e;if(o||"TIMING"!==t.status||a===t.startTime||R(t,"routeUpdatedOnSameSurface",w.Z?.now()||0,o),!n)return{status:"DISABLED",metricConfig:null};let l=(0,r.KJ)(n.metricId);return"TIMING"===t.status&&t.startTime===a&&t.constraintMap[C]?((0,s.H)("duplicated_init_route_action",{action:l}),t):(o||("Other"===n.pwtStaticContext.browserName&&!1===n.metricId.isAuthenticated&&"initial_app_load"===n.metricId.navigationType?((0,s.A9)(`TIMING.${l}`,{tags:{userAgent:window?.navigator?.userAgent}}),(0,s.A9)(`TIMING.sampled.${l}`,{tags:{userAgent:window?.navigator?.userAgent},sampleRate:.03})):((0,s.A9)(`TIMING.${l}`),(0,s.A9)(`TIMING.sampled.${l}`,{sampleRate:.03}))),b({status:"TIMING",metricConfig:n,startTime:a,constraintMap:{},annotations:{},binaryAnnotations:{},imageTimings:[],isSampled:i,spans:[]},{constraint:C,disablePWTLogging:o}))},D=(t,e)=>{if(h("dispatch action",e),"INIT_ROUTE"===e.type)return B(t,e.payload);if("TIMING"!==t.status)return h(`ignoring action due to invalid state ${t.status}`,e),t;switch(e.type){case"ABORT":R(t,e.reason,w.Z?.now()||0);let n={type:"ABORT",reason:e.reason};return{...t,status:"DONE",result:n};case"ANNOTATE":let{name:a}=e.payload;if(!w.Z)return t;let i=w.Z.now();return h(`adding annotation {${a}: ${i}}`),{...t,annotations:{...t.annotations,[a]:i}};case"BINARY_ANNOTATE":let{name:o,value:l,annotationType:p}=e.payload;return h(`adding binary annotation {${o}: ${l}}`),{...t,binaryAnnotations:{...t.binaryAnnotations,[o]:{value:l,type:p}}};case"MARK_CONSTRAINT_COMPLETE":return b(t,e.payload);case"REMOVE_CONSTRAINT":return L(t,e.payload);case"SET_SEGMENT":return P(t,e.payload);case"SET_VISUALLY_COMPLETE_RESULT":{let{payload:{imageTimings:n}}=e;if(0===n.length)return R(t,"visuallyComplete_noImages",w.Z?.now()||0),{...t,status:"DONE",result:{type:"ABORT",reason:"visuallyComplete_noImages"}};let a=Math.max(...n.map(t=>t.responseEnd||0));return b({...t,imageTimings:n},{constraint:v,time:a})}case"ADD_SUBSPAN":let{startTime:d}=t,{payload:{name:u,startTime:m,endTime:_,annotations:g,binaryAnnotations:y,parentId:f}}=e;return{...t,spans:[...t.spans,{name:u,id:(0,c.Z)(),startTime:m||d,endTime:_,annotationMap:{...g},binaryAnnotationMap:{...y},parentId:f}]};case"START_SUBSPAN":return{...t,spans:[...t.spans,{name:e.payload.name,id:(0,c.Z)(),startTime:w.Z?w.Z.now():0,endTime:1/0,annotationMap:{...e.payload.annotations},binaryAnnotationMap:{...e.payload.binaryAnnotations},parentId:e.payload.parentId}]};case"STOP_SUBSPAN":let T=t.spans.findIndex(t=>t.name===e.payload.name);return T>-1?(t.spans[T].endTime=w.Z?w.Z.now():0,e.payload.annotations&&(t.spans[T].annotationMap={...t.spans[T].annotationMap,...e.payload.annotations}),e.payload.binaryAnnotations&&(t.spans[T].binaryAnnotationMap={...t.spans[T].binaryAnnotationMap,...e.payload.binaryAnnotations})):(0,s.H)("invalid_subspan_stop_name",{name:e.payload.name}),t;default:let A=(0,r.KJ)(t.metricConfig.metricId);return(0,s.H)("invalid_pwt_surface_action",{action:A}),t}},$=t=>{if(!t)return"initial_app_load";switch(t.action){case"PUSH":return"client_route_push";case"REPLACE":return"client_route_replace";default:return null}},H=new Set,U=({surface:t,constraints:e,segment:n,measureGridVisuallyComplete:r,annotateExperiments:o,customEnabledNavigationTypes:s,navigationInfo:{clientNavigation:l,navigationType:p},sampleRate:d})=>{let c=(0,a.useRef)("NOT_SET"),u=(0,y.Z)(),{getState:m,dispatch:_}=S(D,{status:"DISABLED",metricConfig:null}),g=(0,A.B)();if(c.current!==l&&(c.current=l,u)){let{isAuthenticated:a}=u,i=t&&p&&(s||N).includes(p)?{metricId:{type:"surface",surface:t,navigationType:p,isAuthenticated:a,segment:n},annotateExperiments:o,constraints:[C,...e||[],...r?[v]:[]],pwtStaticContext:u}:null;(0,E.nP)("webapp.pwt_surface.init_route",{tags:{surface:t,navigationType:p,isAuthenticated:a}});let c=!H.has(l);_({type:"INIT_ROUTE",payload:{metricConfig:i,startTime:l?l.time:0,isSampled:!d||Math.random()<d,disablePWTLogging:!c}}),c&&H.add(l)}let f=m();if((0,a.useEffect)(()=>()=>{H.delete(l)},[l]),(0,a.useEffect)(()=>{let t=t=>{_({type:"ABORT",reason:t})};i.Z.onSessionPause(t);let e=window.innerHeight,n=window.innerWidth,a=()=>{let t=Math.abs(window.innerHeight-e),i=Math.abs(window.innerWidth-n),r=window.innerHeight!==e,o=window.innerWidth!==n,s={handler:(0,I.H)(),deviceType:u?.deviceType??"unknown",isAuthenticated:u?.isAuthenticated??"unknown",platform:g.userAgent.platform??"unknown"};if((0,E.nP)("webapp.PwtLogger.handleResize",{sampleRate:1,tags:{...s,heightChanged:r,widthChanged:o}}),r&&(0,E.S0)("webapp.PwtLogger.resizeHeightDelta",t,{sampleRate:1,tags:s}),o&&(0,E.S0)("webapp.PwtLogger.resizeWidthDelta",i,{sampleRate:1,tags:s}),window.removeEventListener("resize",a),u?.deviceType==="phone"&&(!o&&r&&t<=150||!r&&!o)||u?.deviceType==="desktop"&&!r&&!o){(0,E.nP)("webapp.PwtLogger.skipResizeAbort",{sampleRate:1,tags:{...s,heightChanged:r,widthChanged:o}});return}_({type:"ABORT",reason:"windowResized"})};return window.addEventListener("resize",a),()=>{let e=m();h("handling unmount",e),"TIMING"===e.status&&R(e,"unmount",w.Z?.now()||0),i.Z.removePauseListener(t),window.removeEventListener("resize",a)}},[]),"TIMING"!==f.status||!f.constraintMap[C])return{state:f,context:null};let{startTime:T,metricConfig:M}=f;return{state:f,context:{abort:t=>_({type:"ABORT",reason:t}),addAnnotation:t=>_({type:"ANNOTATE",payload:{name:t}}),addBinaryAnnotation:(t,e,n)=>_({type:"BINARY_ANNOTATE",payload:{name:t,value:e,annotationType:n}}),addSubspan:(t,e,n,a={},i={},r=null)=>_({type:"ADD_SUBSPAN",payload:{name:t,startTime:e,endTime:n,annotations:a,binaryAnnotations:i,parentId:r}}),getId:()=>T,getMetricId:()=>M.metricId,markConstraintComplete:t=>_({type:"MARK_CONSTRAINT_COMPLETE",payload:{constraint:t,time:w.Z?w.Z.now():0}}),removeConstraint:t=>_({type:"REMOVE_CONSTRAINT",payload:t}),setSegment:t=>_({type:"SET_SEGMENT",payload:t}),setVisuallyCompleteResult:M.constraints.includes(v)?t=>_({type:"SET_VISUALLY_COMPLETE_RESULT",payload:t}):null,startSubspan:(t,e={},n={},a=null)=>_({type:"START_SUBSPAN",payload:{name:t,annotations:e,binaryAnnotations:n,parentId:a}}),stopSubspan:(t,e={},n={},a=null)=>_({type:"STOP_SUBSPAN",payload:{name:t,annotations:e,binaryAnnotations:n,parentId:a}})}}},z=()=>{let t=(0,p.E)(),e=!!t;(0,a.useEffect)(()=>{if(e){let e=t?.getMetricId(),n=e?(0,r.KJ)(e):null;(0,s.H)("nested_pwt_surface",{action:n})}},[e])};function k({children:t,...e}){let n=(0,g.Z)(),a=$(n),i=e.measureGridVisuallyComplete?["web_masonry_v2_auth","web_masonry_v2_unauth","web_fluid_grid_desktop_auth","web_fluid_grid_desktop_unauth"]:[],r=[...e.annotateExperiments??[],...i],{context:o}=U({...e,annotateExperiments:r,navigationInfo:{navigationType:a,clientNavigation:n}});return z(),(0,M.jsx)(p.S,{value:o,children:t})}},991323:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(667294),i=n(107981);function r(){return(0,a.useContext)(i.Z)}},438555:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(667294),i=n(95732);function r(){return(0,a.useContext)(i.Z)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/89450-a93805b7dcb3fa20.mjs.map