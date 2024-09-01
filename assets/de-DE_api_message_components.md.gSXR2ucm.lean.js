import{_ as k,k as d,l as t,D as s,f as i,A as a,m as n,C as p,j as o}from"./chunks/framework.DmHN1gsO.js";const J=JSON.parse('{"title":"内置组件","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/api/message/components.md","filePath":"de-DE/api/message/components.md"}'),r={name:"de-DE/api/message/components.md"},c=t("h1",{id:"内置组件",tabindex:"-1"},[s("内置组件 "),t("a",{class:"header-anchor",href:"#内置组件","aria-label":'Permalink to "内置组件"'},"​")],-1),_=t("code",null,"ctx.broadcast()",-1),g=t("h2",{id:"核心组件",tabindex:"-1"},[s("核心组件 "),t("a",{class:"header-anchor",href:"#核心组件","aria-label":'Permalink to "核心组件"'},"​")],-1),B={id:"调用指令",tabindex:"-1"},y=t("a",{class:"header-anchor",href:"#调用指令","aria-label":'Permalink to "调用指令 (execute) <badge>会话</badge>"'},"​",-1),u=n("",2),m={id:"等待输入",tabindex:"-1"},A=t("a",{class:"header-anchor",href:"#等待输入","aria-label":'Permalink to "等待输入 (prompt) <badge>会话</badge>"'},"​",-1),E=n("",2),b={id:"国际化",tabindex:"-1"},f=t("a",{class:"header-anchor",href:"#国际化","aria-label":'Permalink to "国际化 (i18n) <badge>会话+广播</badge>"'},"​",-1),C=n("",5),F={id:"时间",tabindex:"-1"},v=t("a",{class:"header-anchor",href:"#时间","aria-label":'Permalink to "时间 (i18n:time) <badge>会话+广播</badge>"'},"​",-1),T=n("",4),x={id:"随机选取",tabindex:"-1"},P=t("a",{class:"header-anchor",href:"#随机选取","aria-label":'Permalink to "随机选取 (random) <badge type="warning">实验性</badge>"'},"​",-1),D=n("",2),S={id:"复数",tabindex:"-1"},V=t("a",{class:"header-anchor",href:"#复数","aria-label":'Permalink to "复数 (plural) <badge type="warning">实验性</badge>"'},"​",-1),I=n("",4),N=n("",3);function q(w,K,R,$,H,Y){const e=p("badge"),l=p("chat-message"),h=p("chat-panel");return o(),d("div",null,[c,t("ul",null,[t("li",null,[s("标有 "),i(e,null,{default:a(()=>[s("会话")]),_:1}),s(" 的组件只能在会话环境下使用 (常见的会话环境包括中间件和指令的内部)")]),t("li",null,[s("标有 "),i(e,null,{default:a(()=>[s("会话+广播")]),_:1}),s(" 的组件只能在会话环境或 "),_,s(" 中使用")])]),g,t("h3",B,[s("调用指令 (execute) "),i(e,null,{default:a(()=>[s("会话")]),_:1}),s(),y]),u,i(h,null,{default:a(()=>[i(l,{nickname:"Koishi"},{default:a(()=>[s("foo123bar")]),_:1})]),_:1}),t("h3",m,[s("等待输入 (prompt) "),i(e,null,{default:a(()=>[s("会话")]),_:1}),s(),A]),E,i(h,null,{default:a(()=>[i(l,{nickname:"Koishi"},{default:a(()=>[s("请输入一段文本。")]),_:1}),i(l,{nickname:"Alice"},{default:a(()=>[s("你好！")]),_:1}),i(l,{nickname:"Koishi"},{default:a(()=>[s("你输入的内容为：你好！")]),_:1})]),_:1}),t("h3",b,[s("国际化 (i18n) "),i(e,null,{default:a(()=>[s("会话+广播")]),_:1}),s(),f]),C,i(h,null,{default:a(()=>[i(l,{nickname:"Koishi"},{default:a(()=>[s("Hello, world!")]),_:1})]),_:1}),t("h3",F,[s("时间 (i18n:time) "),i(e,null,{default:a(()=>[s("会话+广播")]),_:1}),s(),v]),T,i(h,null,{default:a(()=>[i(l,{nickname:"Koishi"},{default:a(()=>[s("剩余时间：1 分钟 55 秒")]),_:1})]),_:1}),t("h3",x,[s("随机选取 (random) "),i(e,{type:"warning"},{default:a(()=>[s("实验性")]),_:1}),s(),P]),D,i(h,null,{default:a(()=>[i(l,{nickname:"Koishi"},{default:a(()=>[s("此次抛硬币的结果是反面")]),_:1})]),_:1}),t("h3",S,[s("复数 (plural) "),i(e,{type:"warning"},{default:a(()=>[s("实验性")]),_:1}),s(),V]),I,i(h,null,{default:a(()=>[i(l,{nickname:"Koishi"},{default:a(()=>[s("You have 2 apples.")]),_:1})]),_:1}),N])}const O=k(r,[["render",q]]);export{J as __pageData,O as default};
