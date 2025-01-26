"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["6850"],{1523:function(e,n,i){i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var s=i(6399),t=i(1514),o=i(8456);let a={slug:"announcing-inversify-7-0-0-alpha-0-prerelease",title:"Announcing 7.0.0-alpha.0",authors:["notaphplover"],tags:["releases"]},r=void 0,c={authorsImageUrls:[void 0]},l=[{value:"Notable changes",id:"notable-changes",level:2},{value:"Injection inheritance",id:"injection-inheritance",level:3},{value:"Factory-like bindings",id:"factory-like-bindings",level:3},{value:"Motivation",id:"motivation",level:4},{value:"Binding constraints",id:"binding-constraints",level:3},{value:"Motivation",id:"motivation-1",level:4},{value:"Binding activations",id:"binding-activations",level:3},{value:"Motivation",id:"motivation-2",level:4},{value:"Incoming changes",id:"incoming-changes",level:2},{value:"Performance optimizations",id:"performance-optimizations",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["It's been a while since the last time ",(0,t.jsx)(n.code,{children:"inversify"})," released a major version. Some exciting changes are on their way, and we are announcing them in a prerelease so you can participate and ",(0,t.jsx)(n.a,{href:"https://github.com/inversify/InversifyJS/discussions/1712",children:"discuss"})," them before it's finally released."]}),"\n",(0,t.jsxs)(n.p,{children:["Feel free to check out the ",(0,t.jsx)(n.a,{href:"/docs/next/introduction/getting-started",children:"next version docs"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"notable-changes",children:"Notable changes"}),"\n",(0,t.jsx)(n.h3,{id:"injection-inheritance",children:"Injection inheritance"}),"\n",(0,t.jsxs)(n.p,{children:["Previous versions of inversify provided implicit injection inheritance. However, this approach was deprecated in favor of the ",(0,t.jsx)(n.code,{children:"@injectFromBase"})," decorator. This decorator allows you to inject dependencies from the base class."]}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"/docs/next/fundamentals/inheritance",children:"inheritance docs"})," for more information."]}),"\n",(0,t.jsx)(n.h3,{id:"factory-like-bindings",children:"Factory-like bindings"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Factory"}),", ",(0,t.jsx)(n.code,{children:"Provider"}),", and ",(0,t.jsx)(n.code,{children:"DynamicValue"})," bindings now receive a ",(0,t.jsx)(n.code,{children:"ResolutionContext"}),". Refer to the ",(0,t.jsx)(n.a,{href:"/docs/next/api/binding-syntax#tofactory",children:"API docs"})," for more information."]}),"\n",(0,t.jsx)(n.h4,{id:"motivation",children:"Motivation"}),"\n",(0,t.jsxs)(n.p,{children:["Previous ",(0,t.jsx)(n.code,{children:"Context"})," and ",(0,t.jsx)(n.code,{children:"Request"})," exposed objects provided internal data which should never be accessed by users. ",(0,t.jsx)(n.code,{children:"ResolutionContext"})," allows resolving services in the same way ",(0,t.jsx)(n.code,{children:"Context.container"})," previously allowed."]}),"\n",(0,t.jsx)(n.h3,{id:"binding-constraints",children:"Binding constraints"}),"\n",(0,t.jsxs)(n.p,{children:["Some methods have been renamed. No ",(0,t.jsx)(n.code,{children:"context"})," is passed to the constraint in favor of a ",(0,t.jsx)(n.code,{children:"BindingMetadata"})," parameter."]}),"\n",(0,t.jsx)(n.h4,{id:"motivation-1",children:"Motivation"}),"\n",(0,t.jsxs)(n.p,{children:["Previous ",(0,t.jsx)(n.code,{children:"Context"})," and ",(0,t.jsx)(n.code,{children:"Request"})," exposed objects provided internal data which should never be accessed by users. In this specific case, binding constraints are invoked in the planning phase. No resolution-related APIs should be exposed whatsoever, just the metadata used to compute binding constraints such as names, tags, and service IDs in the planning nodes."]}),"\n",(0,t.jsx)(n.h3,{id:"binding-activations",children:"Binding activations"}),"\n",(0,t.jsxs)(n.p,{children:["Binding activations now receive a ",(0,t.jsx)(n.code,{children:"ResolutionContext"}),". Refer to the ",(0,t.jsx)(n.a,{href:"/docs/next/api/binding-syntax#onactivation",children:"API docs"})," for more information."]}),"\n",(0,t.jsx)(n.h4,{id:"motivation-2",children:"Motivation"}),"\n",(0,t.jsxs)(n.p,{children:["Previous ",(0,t.jsx)(n.code,{children:"Context"})," and ",(0,t.jsx)(n.code,{children:"Request"})," exposed objects provided internal data which should never be accessed by users. ",(0,t.jsx)(n.code,{children:"ResolutionContext"})," allows resolving services in the same way ",(0,t.jsx)(n.code,{children:"Context.container"})," previously allowed."]}),"\n",(0,t.jsx)(n.h2,{id:"incoming-changes",children:"Incoming changes"}),"\n",(0,t.jsxs)(n.p,{children:["Some additional changes will be shipped in the ",(0,t.jsx)(n.code,{children:"inversify@7"})," release."]}),"\n",(0,t.jsx)(n.h3,{id:"performance-optimizations",children:"Performance optimizations"}),"\n",(0,t.jsx)(n.p,{children:"With these binding constraint models, it's now reasonable to assume a service plan is cacheable. Planning caches should dramatically improve container performance when providing services."})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6399:function(e){e.exports=JSON.parse('{"permalink":"/blog/announcing-inversify-7-0-0-alpha-0-prerelease","source":"@site/blog/2025-01-20-announcing-inversify-7-0-0-alpha-0-prerelease/index.md","title":"Announcing 7.0.0-alpha.0","description":"It\'s been a while since the last time inversify released a major version. Some exciting changes are on their way, and we are announcing them in a prerelease so you can participate and discuss them before it\'s finally released.","date":"2025-01-20T00:00:00.000Z","tags":[{"inline":false,"label":"Releases","permalink":"/blog/tags/releases","description":"InversifyJS releases related posts"}],"readingTime":1.54,"hasTruncateMarker":true,"authors":[{"name":"Roberto Pintos L\xf3pez","title":"InversifyJS maintainer","url":"https://github.com/notaphplover","page":{"permalink":"/blog/authors/notaphplover"},"socials":{"github":"https://github.com/notaphplover"},"imageURL":"https://github.com/notaphplover.png","key":"notaphplover"}],"frontMatter":{"slug":"announcing-inversify-7-0-0-alpha-0-prerelease","title":"Announcing 7.0.0-alpha.0","authors":["notaphplover"],"tags":["releases"]},"unlisted":false,"prevItem":{"title":"Announcing 7.0.0-alpha.2","permalink":"/blog/announcing-inversify-7-0-0-alpha-2-prerelease"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}}')}}]);