"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["7500"],{9203:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"fundamentals/binding","title":"Binding","description":"A binding represents the relationship between a service identifier and its resolution. Bindings are added to a container to configure it to provide services.","source":"@site/versioned_docs/version-6.x/fundamentals/binding.mdx","sourceDirName":"fundamentals","slug":"/fundamentals/binding","permalink":"/docs/fundamentals/binding","draft":false,"unlisted":false,"tags":[],"version":"6.x","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Binding"},"sidebar":"tutorialSidebar","previous":{"title":"Dependency inversion","permalink":"/docs/introduction/dependency-inversion"},"next":{"title":"DI Hierarchy","permalink":"/docs/fundamentals/di-hierarchy"}}'),t=a("1514"),r=a("8456"),o=a("9471");let s={sidebar_position:1,title:"Binding"},d="Binding",c={},l=[{value:"Relying on emitted class metadata",id:"relying-on-emitted-class-metadata",level:2},{value:"Autobinding",id:"autobinding",level:2},{value:"Binding properties",id:"binding-properties",level:2},{value:"Service identifier",id:"service-identifier",level:3},{value:"Scope",id:"scope",level:3},{value:"Request",id:"request",level:4},{value:"Singleton",id:"singleton",level:4},{value:"Transient",id:"transient",level:4},{value:"Constraint",id:"constraint",level:3},{value:"Lifecycle handlers",id:"lifecycle-handlers",level:3}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"binding",children:"Binding"})}),"\n",(0,t.jsx)(n.p,{children:"A binding represents the relationship between a service identifier and its resolution. Bindings are added to a container to configure it to provide services."}),"\n",(0,t.jsx)(o.Z,{language:"ts",children:"const container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').to(Katana).inSingletonScope();"}),"\n",(0,t.jsxs)(n.p,{children:["When the binding is added to the container, the container is configured to provide a resolved value for the service identifier ",(0,t.jsx)(n.code,{children:"Weapon"})," by resolving the ",(0,t.jsx)(n.code,{children:"Katana"})," class. ",(0,t.jsx)(n.code,{children:"container.bind"})," creates a new binding with certain properties, which are explained below."]}),"\n",(0,t.jsx)(n.h2,{id:"relying-on-emitted-class-metadata",children:"Relying on emitted class metadata"}),"\n",(0,t.jsxs)(n.p,{children:["When using TypeScript, you can rely on the emitted class metadata to avoid having to manually specify the service identifier. This is done by using the ",(0,t.jsx)(n.code,{children:"@injectable"})," decorator from ",(0,t.jsx)(n.code,{children:"inversify"})," on the class you want to bind. You need to enable the ",(0,t.jsx)(n.code,{children:"emitDecoratorMetadata"})," TypeScript compiler option."]}),"\n",(0,t.jsx)(o.Z,{language:"ts",children:"export class Katana {\n  public readonly damage: number = 10;\n}\n\n@injectable()\nexport class Samurai {\n  public readonly katana: Katana;\n\n  constructor(katana: Katana) {\n    this.katana = katana;\n  }\n}\n\nconst container: Container = new Container();\n\ncontainer.bind(Katana).toSelf().inSingletonScope();\ncontainer.bind(Samurai).toSelf().inSingletonScope();\n\nconst samurai: Samurai = container.get(Samurai);"}),"\n",(0,t.jsx)(n.h2,{id:"autobinding",children:"Autobinding"}),"\n",(0,t.jsxs)(n.p,{children:["InversifyJS provides a feature called autobinding that allows you to automatically bind classes. Whenever a class service is being resolved and no bindings are found in the planning phase, the container adds a type binding to the requested class before proceeding with the planning phase. This feature is disabled by default. To enable it, you need to pass the ",(0,t.jsx)(n.code,{children:"autoBindInjectable"})," option to the container."]}),"\n",(0,t.jsx)(o.Z,{language:"ts",children:"export class Katana {\n  public readonly damage: number = 10;\n}\n\n@injectable()\nexport class Samurai {\n  public readonly katana: Katana;\n\n  constructor(katana: Katana) {\n    this.katana = katana;\n  }\n}\n\nconst container: Container = new Container({ autoBindInjectable: true });\n\nconst samurai: Samurai = container.resolve(Samurai);"}),"\n",(0,t.jsx)(n.h2,{id:"binding-properties",children:"Binding properties"}),"\n",(0,t.jsx)(n.p,{children:"A binding has the following properties:"}),"\n",(0,t.jsx)(n.h3,{id:"service-identifier",children:"Service identifier"}),"\n",(0,t.jsx)(n.p,{children:"The identifier of the service for which a resolution is provided."}),"\n",(0,t.jsx)(n.h3,{id:"scope",children:"Scope"}),"\n",(0,t.jsx)(n.p,{children:"The scope determines the caching strategy used to decide whether the service should be resolved or a cached value should be provided."}),"\n",(0,t.jsx)(n.h4,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(n.p,{children:["When the service is resolved within the same ",(0,t.jsx)(n.code,{children:"container.get"})," request, the same resolved value will be used."]}),"\n",(0,t.jsx)(o.Z,{language:"ts",children:"export class LegendaryWarrior {\n  constructor(\n    @inject('Weapon') public readonly firstWeapon: Weapon,\n    @inject('Weapon') public readonly secondWeapon: Weapon,\n    @inject('Weapon') public readonly thirdWeapon: Weapon,\n  ) {}\n}\n\nconst container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').to(Katana).inRequestScope();\ncontainer.bind(LegendaryWarrior).toSelf();\n\nconst firstKatana: Weapon = container.get<Weapon>('Weapon');\nconst secondKatana: Weapon = container.get<Weapon>('Weapon');\n\nconst legendaryWarrior: LegendaryWarrior = container.get(LegendaryWarrior);\n\n// Returns false\nconst isSameKatana: boolean = firstKatana === secondKatana;\n\n// Returns true\nconst warriorHasSameKatana: boolean =\n  legendaryWarrior.firstWeapon === legendaryWarrior.secondWeapon &&\n  legendaryWarrior.secondWeapon === legendaryWarrior.thirdWeapon;"}),"\n",(0,t.jsx)(n.h4,{id:"singleton",children:"Singleton"}),"\n",(0,t.jsx)(n.p,{children:"When the service is resolved, the same cached resolved value will be used."}),"\n",(0,t.jsx)(o.Z,{language:"ts",children:"const container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').to(Katana).inSingletonScope();\n\nconst firstKatana: Weapon = container.get<Weapon>('Weapon');\nconst secondKatana: Weapon = container.get<Weapon>('Weapon');\n\n// Returns true\nconst isSameKatana: boolean = firstKatana === secondKatana;"}),"\n",(0,t.jsx)(n.h4,{id:"transient",children:"Transient"}),"\n",(0,t.jsx)(n.p,{children:"When the service is resolved, a new resolved value will be used each time."}),"\n",(0,t.jsx)(o.Z,{language:"ts",children:"const container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').to(Katana).inTransientScope();\n\nconst firstKatana: Weapon = container.get<Weapon>('Weapon');\nconst secondKatana: Weapon = container.get<Weapon>('Weapon');\n\n// Returns false\nconst isSameKatana: boolean = firstKatana === secondKatana;"}),"\n",(0,t.jsx)(n.h3,{id:"constraint",children:"Constraint"}),"\n",(0,t.jsxs)(n.p,{children:["Specifies whether the binding is used to provide a resolved value for the given service identifier. Refer to the ",(0,t.jsx)(n.a,{href:"/docs/api/binding-syntax#bindingwhensyntax",children:"API docs"})," for more information."]}),"\n",(0,t.jsx)(n.h3,{id:"lifecycle-handlers",children:"Lifecycle handlers"}),"\n",(0,t.jsxs)(n.p,{children:["Handlers that are called after a resolved value is provided or a singleton-scoped binding is deactivated. Refer to the ",(0,t.jsx)(n.a,{href:"/docs/api/binding-syntax#bindingonsyntax",children:"API docs"})," for more information."]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);