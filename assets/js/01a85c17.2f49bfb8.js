"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["565"],{971:function(e,t,a){a.d(t,{CS:()=>p,iZ:()=>j,ci:()=>k,Ne:()=>y,cH:()=>C,nO:()=>u,wj:()=>s,n4:()=>c});var n=a("1514"),i=a("9700"),l=a("5770"),r=a("9214");function s(){let e=(0,r.Z)(),t=e?.data?.blogMetadata;if(!t)throw Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}let o=i.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:l=!1}=e,r=function(e){let{content:t,isBlogPostPage:a}=e;return(0,i.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}),[t,a])}({content:a,isBlogPostPage:l});return(0,n.jsx)(o.Provider,{value:r,children:t})}function u(){let e=(0,i.useContext)(o);if(null===e)throw new l.i6("BlogPostProvider");return e}var m=a("787"),d=a("6579");let g=e=>new Date(e).toISOString();function h(e){let t=e.map(x);return{author:1===t.length?t[0]:t}}function f(e,t,a){return e?{image:function(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function p(e){let{siteConfig:t}=(0,d.Z)(),{withBaseUrl:a}=(0,m.Cg)(),{metadata:{blogDescription:n,blogTitle:i,permalink:l}}=e,r=`${t.url}${l}`;return{"@context":"https://schema.org","@type":"Blog","@id":r,mainEntityOfPage:r,headline:i,description:n,blogPost:e.items.map(e=>(function(e,t,a){let{assets:n,frontMatter:i,metadata:l}=e,{date:r,title:s,description:o,lastUpdatedAt:c}=l,u=n.image??i.image,m=i.keywords??[],d=`${t.url}${l.permalink}`,p=c?g(c):void 0;return{"@type":"BlogPosting","@id":d,mainEntityOfPage:d,url:d,headline:s,name:s,description:o,datePublished:r,...p?{dateModified:p}:{},...h(l.authors),...f(u,a,s),...m?{keywords:m}:{}}})(e.content,t,a))}}function j(){let e=s(),{assets:t,metadata:a}=u(),{siteConfig:n}=(0,d.Z)(),{withBaseUrl:i}=(0,m.Cg)(),{date:l,title:r,description:o,frontMatter:c,lastUpdatedAt:p}=a,j=t.image??c.image,x=c.keywords??[],b=p?g(p):void 0,v=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:r,name:r,description:o,datePublished:l,...b?{dateModified:b}:{},...h(a.authors),...f(j,i,r),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function x(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}var b=a("3228"),v=a("5590"),N=a("8087"),_=a("3827");function C(e){let{pathname:t}=(0,b.TH)();return(0,i.useMemo)(()=>e.filter(e=>!e.unlisted||!!(0,_.Mg)(e.permalink,t)),[e,t])}function k(e){let t=Object.entries((0,N.vM)(e,e=>`${new Date(e.date).getFullYear()}`));return t.reverse(),t}function y(e){let{items:t,ulClassName:a,liClassName:i,linkClassName:l,linkActiveClassName:r}=e;return(0,n.jsx)("ul",{className:a,children:t.map(e=>(0,n.jsx)("li",{className:i,children:(0,n.jsx)(v.Z,{isNavLink:!0,to:e.permalink,className:l,activeClassName:r,children:e.title})},e.permalink))})}},8883:function(e,t,a){a.d(t,{Z:()=>N});var n=a("1514"),i=a("9700"),l=a("2626"),r=a("5611"),s=a("9084"),o=a("2921"),c=a("971"),u=a("5222"),m=a("2887");function d(e){let{year:t,yearGroupHeadingClassName:a,children:i}=e;return(0,n.jsxs)("div",{role:"group",children:[(0,n.jsx)(m.Z,{as:"h3",className:a,children:t}),i]})}let g=(0,i.memo)(function(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:i}=e;if(!(0,u.L)().blog.sidebar.groupByYear)return(0,n.jsx)(i,{items:t});{let e=(0,c.ci)(t);return(0,n.jsx)(n.Fragment,{children:e.map(e=>{let[t,l]=e;return(0,n.jsx)(d,{year:t,yearGroupHeadingClassName:a,children:(0,n.jsx)(i,{items:l})},t)})})}}),h=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:(0,l.Z)("sidebarItemList_oiWB","clean-list"),liClassName:"sidebarItem_EJKV",linkClassName:"sidebarItemLink_iFlS",linkActiveClassName:"sidebarItemLinkActive_OLuw"})},f=(0,i.memo)(function(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)("aside",{className:"col col--3",children:(0,n.jsxs)("nav",{className:(0,l.Z)("sidebar_XsuF","thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,n.jsx)("div",{className:(0,l.Z)("sidebarItemTitle_AxzW","margin-bottom--md"),children:t.title}),(0,n.jsx)(g,{items:a,ListComponent:h,yearGroupHeadingClassName:"yearGroupHeading_xQsf"})]})})});var p=a("5535");let j=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function x(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)(g,{items:a,ListComponent:j,yearGroupHeadingClassName:"yearGroupHeading_YmUJ"})}let b=(0,i.memo)(function(e){return(0,n.jsx)(p.Zo,{component:x,props:e})});function v(e){let{sidebar:t}=e,a=(0,s.i)();return t?.items.length?"mobile"===a?(0,n.jsx)(b,{sidebar:t}):(0,n.jsx)(f,{sidebar:t}):null}function N(e){let{sidebar:t,toc:a,children:i,...s}=e,o=t&&t.items.length>0;return(0,n.jsx)(r.Z,{...s,children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(v,{sidebar:t}),(0,n.jsx)("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:i}),a&&(0,n.jsx)("div",{className:"col col--2",children:a})]})})})}},7826:function(e,t,a){a.r(t),a.d(t,{default:()=>f});var n=a("1514");a("9700");var i=a("2626"),l=a("2921");let r=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var s=a("123"),o=a("5178"),c=a("8883"),u=a("4977"),m=a("2887");function d(e){let{letterEntry:t}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(m.Z,{as:"h2",id:t.letter,children:t.letter}),(0,n.jsx)("ul",{className:"padding--none",children:t.tags.map(e=>(0,n.jsx)("li",{className:"tag_Ks_q",children:(0,n.jsx)(u.Z,{...e})},e.permalink))}),(0,n.jsx)("hr",{})]})}function g(e){let{tags:t}=e,a=function(e){let t={};return Object.values(e).forEach(e=>{let a=e.label[0].toUpperCase();t[a]??=[],t[a].push(e)}),Object.entries(t).sort((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)}).map(e=>{let[t,a]=e;return{letter:t,tags:a.sort((e,t)=>e.label.localeCompare(t.label))}})}(t);return(0,n.jsx)("section",{className:"margin-vert--lg",children:a.map(e=>(0,n.jsx)(d,{letterEntry:e},e.letter))})}var h=a("5058");function f(e){let{tags:t,sidebar:a}=e,l=r();return(0,n.jsxs)(s.FG,{className:(0,i.Z)(o.k.wrapper.blogPages,o.k.page.blogTagsListPage),children:[(0,n.jsx)(s.d,{title:l}),(0,n.jsx)(h.Z,{tag:"blog_tags_list"}),(0,n.jsxs)(c.Z,{sidebar:a,children:[(0,n.jsx)(m.Z,{as:"h1",children:l}),(0,n.jsx)(g,{tags:t})]})]})}},4977:function(e,t,a){a.d(t,{Z:()=>s});var n=a("1514");a("9700");var i=a("2626"),l=a("5590");let r={tag:"tag_JbHV",tagRegular:"tagRegular_dF6t",tagWithCount:"tagWithCount_kLzB"};function s(e){let{permalink:t,label:a,count:s,description:o}=e;return(0,n.jsxs)(l.Z,{href:t,title:o,className:(0,i.Z)(r.tag,s?r.tagWithCount:r.tagRegular),children:[a,s&&(0,n.jsx)("span",{children:s})]})}}}]);