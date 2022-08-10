"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[568],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},l="Setting retention policy on storage resources",s={unversionedId:"catalog/set-retention-policy-on-storage-resources",id:"catalog/set-retention-policy-on-storage-resources",title:"Setting retention policy on storage resources",description:"Version",source:"@site/docs/catalog/set-retention-policy-on-storage-resources.md",sourceDirName:"catalog",slug:"/catalog/set-retention-policy-on-storage-resources",permalink:"/catalog/set-retention-policy-on-storage-resources",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/set-retention-policy-on-storage-resources.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Move storage resources from underutilised storage resources",permalink:"/catalog/optimise-storage-resource-utilisation"}},i={},u=[{value:"Version",id:"version",level:2},{value:"Submitted By",id:"submitted-by",level:2},{value:"Published Date",id:"published-date",level:2},{value:"Intent",id:"intent",level:2},{value:"Tags",id:"tags",level:2},{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Pros &amp; Cons",id:"pros--cons",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-retention-policy-on-storage-resources"},"Setting retention policy on storage resources"),(0,o.kt)("h2",{id:"version"},"Version"),(0,o.kt)("p",null,"1.0"),(0,o.kt)("h2",{id:"submitted-by"},"Submitted By"),(0,o.kt)("p",null,"Sarah Hsu (@greenhsu123)"),(0,o.kt)("h2",{id:"published-date"},"Published Date"),(0,o.kt)("p",null,"TBD"),(0,o.kt)("h2",{id:"intent"},"Intent"),(0,o.kt)("p",null,"Set retention policy on storage resources. "),(0,o.kt)("h2",{id:"tags"},"Tags"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"tags:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cloud"),(0,o.kt)("li",{parentName:"ul"},"storage"),(0,o.kt)("li",{parentName:"ul"},"role-cloud-engineer"),(0,o.kt)("li",{parentName:"ul"},"size-small")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,"From an embodied carbon perspective, it's better to have an automated mechanism to delete unused storage resources so we are efficient with hardware and that the storage layer is optimised for the task. "),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Set a retention policy on storage resources to automate the deletion of unused storage resources. "),(0,o.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R")),(0,o.kt)("p",null,"Concerning the SCI equation. Setting retention policy will impact one part:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"M"),": By reducing the total number of storage volumes required, we reduce the total embodied carbon.")),(0,o.kt)("h2",{id:"assumptions"},"Assumptions"),(0,o.kt)("p",null,"If we choose not to delete ",(0,o.kt)("em",{parentName:"p"},"ALL")," storage resources because they might be needed in the future, then storing them permanently will take up a lot of unnecessary storage resources. A better solution would be to set a retention policy that automatically deletes and keeps storage resources based on business needs. "),(0,o.kt)("h2",{id:"pros--cons"},"Pros & Cons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PRO"),": It may reduce cloud bills, as reducing idle storage resources will cost less. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CON"),": If a retention policy on the storage resources is undefined, there is more overhead for manually deleting idle resources.")))}p.isMDXComponent=!0}}]);