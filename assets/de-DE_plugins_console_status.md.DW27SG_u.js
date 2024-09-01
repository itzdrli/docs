import{_ as h,k as o,f as t,A as a,l as s,D as i,C as e,j as k}from"./chunks/framework.DmHN1gsO.js";const q=JSON.parse('{"title":"运行状态 (Status)","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/plugins/console/status.md","filePath":"de-DE/plugins/console/status.md"}'),d={name:"de-DE/plugins/console/status.md"},c=s("h1",{id:"运行状态",tabindex:"-1"},[i("运行状态 (Status) "),s("a",{class:"header-anchor",href:"#运行状态","aria-label":'Permalink to "运行状态 (Status)"'},"​")],-1),r=s("h2",{id:"指令-status",tabindex:"-1"},[i("指令：status "),s("a",{class:"header-anchor",href:"#指令-status","aria-label":'Permalink to "指令：status"'},"​")],-1),p=s("ul",null,[s("li",null,"快捷调用：你的状态，查看状态，运行情况，运行状态")],-1),_=s("p",null,"status 指令可以用于查看机器人的运行状态。",-1),u=s("p",null,"5 名四季酱正在为 20 个群和 2409 名用户提供服务。",-1),B=s("p",null,"四季酱 2 号：工作中（2/min）",-1),g=s("p",null,"四季酱 3 号：工作中（3/min）",-1),m=s("p",null,"四季酱 4 号：工作中（3/min）",-1),y=s("p",null,"四季酱 5 号：工作中（0/min）",-1),F=s("p",null,"四季酱 9 号：工作中（5/min）",-1),E=s("p",null,"==========",-1),C=s("p",null,"更新时间：2019-12-8 14:41:15",-1),A=s("p",null,"启动时间：2019-12-8 14:52:12",-1),f=s("p",null,"已运行 43 天 10 小时 22 分钟",-1),b=s("p",null,"已载入指令：105",-1),v=s("p",null,"已载入中间件：8",-1),x=s("p",null,"CPU 使用率：1% / 2%",-1),P=s("p",null,"内存使用率：34% / 91%",-1),D=s("h3",{id:"修改指令输出",tabindex:"-1"},[i("修改指令输出 "),s("a",{class:"header-anchor",href:"#修改指令输出","aria-label":'Permalink to "修改指令输出"'},"​")],-1),$=s("p",null,"可以使用模板语法修改 status 指令的输出。默认的代码实现如下：",-1),N=s("div",null,[s("div",{class:"language-ts vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",tabindex:"0","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"set"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'status'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},", {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"  bot"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'{{ username }}：{{ code ? `无法连接` : `工作中（${currentRate[0]}/min）` }}'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"  output"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"    '{{ bots }}'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"    '=========='"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"    '活跃用户数量：{{ activeUsers }}'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"    '活跃群数量：{{ activeGuilds }}'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"    'CPU 使用率：{{ (cpu[0] * 100).toFixed() }}% / {{ (cpu[1] * 100).toFixed() }}%'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"    '内存使用率：{{ (memory[0] * 100).toFixed() }}% / {{ (memory[1] * 100).toFixed() }}%'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"  ]."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"join"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"\\n"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"),")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"})")])])])])],-1),S=s("h2",{id:"配置项",tabindex:"-1"},[i("配置项 "),s("a",{class:"header-anchor",href:"#配置项","aria-label":'Permalink to "配置项"'},"​")],-1),U=s("h3",{id:"tickinterval",tabindex:"-1"},[i("tickInterval "),s("a",{class:"header-anchor",href:"#tickinterval","aria-label":'Permalink to "tickInterval"'},"​")],-1),V=s("ul",null,[s("li",null,[i("类型: "),s("code",null,"number")]),s("li",null,[i("默认值: "),s("code",null,"Time.second * 5")])],-1),j=s("p",null,"页面同步 profile 数据的时间。",-1);function I(T,w,G,J,K,O){const l=e("chat-message"),n=e("chat-panel");return k(),o("div",null,[c,r,p,_,t(n,null,{default:a(()=>[t(l,{nickname:"Alice"},{default:a(()=>[i("你的状态")]),_:1}),t(l,{nickname:"Koishi"},{default:a(()=>[u,B,g,m,y,F,E,C,A,f,b,v,x,P]),_:1})]),_:1}),D,$,N,S,U,V,j])}const z=h(d,[["render",I]]);export{q as __pageData,z as default};
