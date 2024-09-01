import{_ as i,k as d,l as t,D as e,f as n,A as s,m as l,C as r,j as c}from"./chunks/framework.DmHN1gsO.js";const V=JSON.parse('{"title":"資料模型 (Model)","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/api/database/model.md","filePath":"zh-TW/api/database/model.md"}'),o={name:"zh-TW/api/database/model.md"},h=l("",16),g=t("li",null,[t("strong",null,"name:"),e(),t("code",null,"string"),e(" 資料表名")],-1),y=t("li",null,[t("strong",null,"fields:"),e(),t("code",null,"Field.Config"),e(" 欄位資訊")],-1),p=t("strong",null,"config:",-1),x=t("code",null,"Table.Meta",-1),k=t("li",null,[t("strong",null,"config.primary:"),e(),t("code",null,"string | string[]"),e(" 主鍵名，預設為 "),t("code",null,"'id'")],-1),_=t("li",null,[t("strong",null,"config.unique:"),e(),t("code",null,"(string | string[])[]"),e(" 值唯一的鍵名串列")],-1),u=t("strong",null,"config.foreign:",-1),m=t("code",null,"Dict<[string, string]>",-1),b=t("li",null,[t("strong",null,"config.autoInc:"),e(),t("code",null,"boolean"),e(" 是否使用自增主鍵")],-1),C=l("",4),f={id:"ctx-model-migrate",tabindex:"-1"},B=t("a",{class:"header-anchor",href:"#ctx-model-migrate","aria-label":'Permalink to "ctx.model.migrate(name, fields, callback) <badge type="warning">实验性</badge>"'},"​",-1),D=l("",2);function A(T,E,P,q,F,S){const a=r("badge");return c(),d("div",null,[h,t("ul",null,[g,y,t("li",null,[p,e(),x,e(" 表的基本配置 "),t("ul",null,[k,_,t("li",null,[u,e(),m,e(" 外键列表 "),n(a,{type:"warning"},{default:s(()=>[e("实验性")]),_:1})]),b])])]),C,t("h3",f,[e("ctx.model.migrate(name, fields, callback) "),n(a,{type:"warning"},{default:s(()=>[e("实验性")]),_:1}),e(),B]),D])}const I=i(o,[["render",A]]);export{V as __pageData,I as default};
