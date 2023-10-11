"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[1022],{345:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return d}});var n=a(5987),o=(a(7294),a(4983)),r=a(4295);const l=["components"],s={},i=(m="PageDescription",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const p={_frontmatter:s},c=r.Z;function d(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,o.kt)(c,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i,{mdxType:"PageDescription"},(0,o.kt)("p",null,"In the world of Gatsby themes,\n",(0,o.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/"},"component shadowing"),"\nis an extremely powerful way for developers to provide their ",(0,o.kt)("em",{parentName:"p"},"own")," components\nfor the theme to use over the defaults. You can shadow any file that is\nprocessed by webpack. This includes sass files, mdx files, and the react\ncomponents themselves.")),(0,o.kt)("h2",null,"Caveats"),(0,o.kt)("p",null,"If you completely shadow a file you won’t get future updates to that individual\nfile. These are some golden rules to make sure you stay as close to the theme as\npossible and not forgo future updates."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/issues/new"},"quick issue"),"\nin the gatsby-theme-carbon repo to make sure we’re not working on your\nchange.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Shadow as few files as you can to achieve your goal. If you can shadow just a\nsingle file, that’s ideal.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you do end up shadowing a component, please tell us! We might use it to\ninform future development."))),(0,o.kt)("h2",null,"Shadowing basics"),(0,o.kt)("p",null,"In order to shadow a component in the theme, all you need to do is place a directory\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/gatsby-theme-carbon")," in your project. The directory should have the same\nname as the file you’re shadowing."),(0,o.kt)("p",null,"In order to place your own title in the Header component:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a directory the same name as the component you wish to shadow.\nEverything after ",(0,o.kt)("inlineCode",{parentName:"p"},"src/gatsby-theme-carbon/")," refers to the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src"},"src directory of gatsby-theme-carbon"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a file inside of the directory that matches the component you want to shadow. For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"src/gatsby-theme-carbon/components/Header/index.js"),". ",(0,o.kt)("em",{parentName:"p"},"If shadowing Footer or Header the file must be named ",(0,o.kt)("strong",{parentName:"em"},(0,o.kt)("inlineCode",{parentName:"strong"},"index.js"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Import the component you wish to shadow by providing the full url pointing at\nthe component within the theme")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Your component will ",(0,o.kt)("strong",{parentName:"p"},"receive the same props")," as the one you’re shadowing.\nYou’ll can log those props to see if you’ll need any of them")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Regardless, you should ",(0,o.kt)("em",{parentName:"p"},"ALWAYS")," spread the extra props into the original\ncomponent, this allows the core component to function as needed. Even if it\ndoesn’t receive any props now, it might in the future.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Provide your new, custom component as the default export"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Header from 'gatsby-theme-carbon/src/components/Header';\n\nconst CustomHeader = (props) => (\n  <Header {...props}>\n    <span>Gatsby theme</span>&nbsp;Carbon\n  </Header>\n);\n\nexport default CustomHeader;\n")),(0,o.kt)("h2",null,"Components you’ll need to shadow"),(0,o.kt)("p",null,"We’ve already provided pre-shadowed, dummy components however these are the ones\nyou’ll definitely need to shadow."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Path"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ResourceLinks"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/components/LeftNav/ResourceLinks.js"},(0,o.kt)("inlineCode",{parentName:"a"},"src/gatsby-theme-carbon/components/LeftNav/ResourceLinks.js"))),(0,o.kt)("td",{parentName:"tr",align:null},"The bottom links on the SideNav, pass ",(0,o.kt)("inlineCode",{parentName:"td"},"shouldOpenNewTabs")," to open links externally")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Footer"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/components/Footer/index.js"},(0,o.kt)("inlineCode",{parentName:"a"},"src/gatsby-theme-carbon/components/Footer/index.js"))),(0,o.kt)("td",{parentName:"tr",align:null},"The links and content at the bottom of each page")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Header"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/components/Header/index.js"},(0,o.kt)("inlineCode",{parentName:"a"},"src/gatsby-theme-carbon/components/Header/index.js"))),(0,o.kt)("td",{parentName:"tr",align:null},"The text in the top left corner of the UI Shell")))))}d.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),o=a(8650),r=a.n(o),l=a(5444),s=a(9403),i=a(3321),m=a(5900),p=a.n(m);var c=e=>{let{title:t,theme:a,tabs:o=[]}=e;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:o}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:s,branch:i}=a||o,m=r+"/edit/"+i+s+"/src/pages"+t;return r?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},h=a(4275),u=a(1721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,o=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),s=t===o,i=new RegExp(o+"/?(#.*)?$"),m=a.replace(i,t);return n.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var b=g,k=a(2881),y=a(6958),N=a(36);var f=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:o,Title:m}=e;const{frontmatter:p={},relativePagePath:u,titleType:g}=t,{tabs:N,title:w,theme:v,description:x,keywords:E,date:C}=p,{interiorTheme:P}=(0,y.Z)(),{site:{pathPrefix:T}}=(0,l.useStaticQuery)("2456312558"),H=T?o.pathname.replace(T,""):o.pathname,j=N?H.split("/").filter(Boolean).slice(-1)[0]||r()(N[0],{lower:!0}):"",L=v||P;return n.createElement(i.Z,{tabs:N,homepage:!1,theme:L,pageTitle:w,pageDescription:x,pageKeywords:E,titleType:g},n.createElement(c,{title:m?n.createElement(m,null):w,label:"label",tabs:N,theme:L}),N&&n.createElement(b,{title:w,slug:H,tabs:N,currentTab:j}),n.createElement(k.Z,{padded:!0},a,n.createElement(d,{relativePagePath:u}),n.createElement(f,{date:C})),n.createElement(h.Z,{pageContext:t,location:o,slug:H,tabs:N,currentTab:j}),n.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-shadowing-mdx-ef93a6336534044f47bc.js.map