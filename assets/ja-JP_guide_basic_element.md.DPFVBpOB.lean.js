import{_ as d,k as r,f as t,A as a,l as i,D as s,m as h,C as e,j as o}from"./chunks/framework.DmHN1gsO.js";const M=JSON.parse('{"title":"消息元素","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/guide/basic/element.md","filePath":"ja-JP/guide/basic/element.md"}'),g={name:"ja-JP/guide/basic/element.md"},c=i("h1",{id:"消息元素",tabindex:"-1"},[s("消息元素 "),i("a",{class:"header-anchor",href:"#消息元素","aria-label":'Permalink to "消息元素"'},"​")],-1),y=i("p",null,[s("当然，一个聊天平台所能发送或接收的内容往往不只有纯文本。为此，我们引入了 "),i("strong",null,"消息元素 (Element)"),s(" 的概念。")],-1),B=i("p",null,"消息元素类似于 HTML 元素，它是组成消息的基本单位。一个元素可以表示具有特定语义的内容，如文本、表情、图片、引用、元信息等。Koishi 会将这些元素转换为平台所支持的格式，以便在不同平台之间发送和接收消息。",-1),E=i("h2",{id:"基本用法",tabindex:"-1"},[s("基本用法 "),i("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),F=i("p",null,"一个典型的元素包含名称、属性和内容。在 Koishi 中，我们通常使用 JSX 或 API 的方式创建元素。下面是一些例子：",-1),A=i("div",{class:"language-tsx vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"JSX"),i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"// 欢迎 @用户名 入群！")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"send"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"(<>欢迎 <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"at"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," id"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#C678DD"}},"{"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"userId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#C678DD"}},"}"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"/> 入群！</>)")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"// 发送一张 Koishi 图标")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"send"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"(<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"image"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," url"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"https://koishi.chat/logo.png"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"/>)")])])])],-1),C=i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"API"),i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"// 欢迎 @用户名 入群！")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"send"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'欢迎 '"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}}," +"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}}," h"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'at'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},", { "),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"id"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"userId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," }) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}},"+"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," ' 入群！'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"// 发送一张 Koishi 图标")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"send"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"h"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'image'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},", { "),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"url"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'https://koishi.chat/logo.png'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," }))")])])])],-1),_=h("",20),u=h("",2),m=i("blockquote",null,"原消息文本",-1),f=h("",3),b=i("img",{src:"https://koishi.chat/logo.png",alt:"Koishi Logo",style:{"max-width":"100px"}},null,-1),D=h("",4),v={id:"消息组件",tabindex:"-1"},x=i("a",{class:"header-anchor",href:"#消息组件","aria-label":'Permalink to "消息组件 <badge type="warning">实验性</badge>"'},"​",-1),T=h("",2),P=h("",10),S=i("div",{class:"language-tsx vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"JSX"),i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"// 请注意这里的大写字母")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"send"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"(<"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#E5C07B"}},"Custom"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"/>)")])])])],-1),I=i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"API"),i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"// 请注意这里的大写字母")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"send"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"h"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"Custom"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"))")])])])],-1),q=h("",3);function V(J,K,N,R,L,X){const k=e("tab-select"),l=e("chat-message"),n=e("chat-panel"),p=e("badge");return o(),r("div",null,[c,y,B,E,F,t(k,{class:"code"},{"title-tsx":a(()=>[s("JSX")]),"tab-tsx":a(()=>[A]),"title-ts":a(()=>[s("API")]),"tab-ts":a(()=>[C]),_:1}),_,t(n,null,{default:a(()=>[t(l,{nickname:"Koishi"},{default:a(()=>[s("欢迎 @用户名 入群！")]),_:1})]),_:1}),u,t(n,null,{default:a(()=>[t(l,{nickname:"Koishi"},{default:a(()=>[m,s(" 你说得对 ")]),_:1})]),_:1}),f,t(n,null,{default:a(()=>[t(l,{nickname:"Koishi"},{default:a(()=>[b]),_:1})]),_:1}),D,i("h2",v,[s("消息组件 "),t(p,{type:"warning"},{default:a(()=>[s("实验性")]),_:1}),s(),x]),T,t(n,null,{default:a(()=>[t(l,{nickname:"Koishi"},{default:a(()=>[s("这是执行结果：hello")]),_:1})]),_:1}),P,t(k,{class:"code"},{"title-tsx":a(()=>[s("JSX")]),"tab-tsx":a(()=>[S]),"title-ts":a(()=>[s("API")]),"tab-ts":a(()=>[I]),_:1}),q])}const U=d(g,[["render",V]]);export{M as __pageData,U as default};
