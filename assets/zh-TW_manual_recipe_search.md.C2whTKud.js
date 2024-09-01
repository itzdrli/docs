import{M as o}from"./chunks/theme.CKBYucAW.js";import{d as s,k as i,l as e,f as n,u as a,D as l,m as t,j as c}from"./chunks/framework.DmHN1gsO.js";const d=t('<h1 id="搜索插件市场" tabindex="-1">搜索插件市场 <a class="header-anchor" href="#搜索插件市场" aria-label="Permalink to &quot;搜索插件市场&quot;">​</a></h1><p>Koishi 有着丰富的插件生态。为了让用户更方便地搜索插件，我们提供了一套搜索语法。你可以在搜索框中输入形如 <code>is:preview</code> 的语法来快速过滤某个类别的插件。</p><h2 id="搜索词" tabindex="-1">搜索词 <a class="header-anchor" href="#搜索词" aria-label="Permalink to &quot;搜索词&quot;">​</a></h2><p>除去含有冒号的特殊语法外，你输入的搜索词会被用于查询：</p><ul><li>插件名称</li><li>插件描述</li><li>插件的关键词</li></ul><h2 id="插件标识" tabindex="-1">插件标识 <a class="header-anchor" href="#插件标识" aria-label="Permalink to &quot;插件标识&quot;">​</a></h2><p>我们提供了四种插件标识，它们本身也是过滤条件。包括：</p>',7),r={class:"plugin-flags-list"},u=e("code",null,"is:verified",-1),_=e("code",null,"is:insecure",-1),h=e("code",null,"is:preview",-1),m=e("code",null,"created:>date",-1),p=e("p",null,"此外，还有一些不带标识的过滤条件：",-1),g={class:"plugin-flags-list"},f=e("code",null,"is:installed",-1),k=e("code",null,"is:portable",-1),b=e("code",null,"updated:>date",-1),y=e("p",null,[l("上述的过滤条件也可以反向选择，例如 "),e("code",null,"not:insecure"),l(" 或 `created:")],-1),v=e("p",null,"<date`。在侧边栏中，你可以点击标识名称进行选择，点击第二次反向选择，点击第三次则会取消选择。",-1),x=e("h2",{id:"插件分类",tabindex:"-1"},[l("插件分类 "),e("a",{class:"header-anchor",href:"#插件分类","aria-label":'Permalink to "插件分类"'},"​")],-1),w=e("p",null,"我们目前提供了 14 个基础分类。它们分别是：",-1),q={class:"plugin-flags-list"},P=e("code",null,"category:core",-1),N=e("code",null,"category:adapter",-1),K=e("code",null,"category:storage",-1),T=e("code",null,"category:extension",-1),V=e("code",null,"category:console",-1),W=e("code",null,"category:manage",-1),z=e("code",null,"category:preset",-1),B=e("code",null,"category:image",-1),D=e("code",null,"category:media",-1),I=e("code",null,"category:tool",-1),M=e("code",null,"category:ai",-1),O=e("code",null,"category:meme",-1),S=e("code",null,"category:game",-1),j=e("code",null,"category:gametool",-1),A=e("p",null,"插件的分类由 Koishi 团队成员负责维护，通常在插件发布后的一周内完成。极少数插件不会属于任何类别。如果你认为你的插件没有被正确分类，可以提交议题进行反馈。",-1),C=e("h2",{id:"插件排序",tabindex:"-1"},[l("插件排序 "),e("a",{class:"header-anchor",href:"#插件排序","aria-label":'Permalink to "插件排序"'},"​")],-1),E=e("p",null,"插件市场中的插件会默认根据其评分进行排序。评分是一个 0~5 之间的数值，并在四舍五入后会显示为星星的个数。评分由多个指标加权计算得到，下面列举出了一些常见的指标：",-1),G=e("ul",null,[e("li",null,"插件是否开源"),e("li",null,"插件是否被标记为不安全 / 开发中"),e("li",null,"插件的下载量"),e("li",null,"插件的安装体积")],-1),J=e("p",null,"除了按照评分排序，你还可以选择其他的排序方式：",-1),R={class:"plugin-flags-list"},F=e("code",null,"sort:download",-1),H=e("code",null,"sort:created",-1),L=e("code",null,"sort:updated",-1),Q=t('<p>如果要反向排序，可以在后面加上 <code>-asc</code>，例如 <code>sort:created-asc</code>。在侧边栏中，你可以点击排序方式进行排序，点击第二次反向排序，点击第三次则会取消排序。</p><h2 id="快速体验" tabindex="-1">快速体验 <a class="header-anchor" href="#快速体验" aria-label="Permalink to &quot;快速体验&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>快速体验目前仍然是实验性功能，仅在官方文档中的插件市场里可用。</p></div><p><a href="https://koishi.online" target="_blank" rel="noreferrer">Koishi Online (k-on!)</a> 是一个在线的 Koishi 运行时。你可以在其中快速体验插件的功能，而无需在本地安装 Koishi。适配了 k-on! 的插件会显示一个闪电按钮，点击即可快速创建一个 k-on! 实例。如果你是插件开发者，可以参考 <a href="./../../cookbook/practice/online.html">这篇文章</a> 来将你的插件部署到 k-on!。</p>',4),le=JSON.parse('{"title":"搜索插件市场","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/manual/recipe/search.md","filePath":"zh-TW/manual/recipe/search.md"}'),U={name:"zh-TW/manual/recipe/search.md"},oe=s({...U,setup(X){return(Y,Z)=>(c(),i("div",null,[d,e("div",r,[e("ul",null,[e("li",null,[n(a(o),{name:"verified",style:{color:"var(--k-color-success)"}}),u,l("：官方认证")]),e("li",null,[n(a(o),{name:"insecure",style:{color:"var(--k-color-danger)"}}),_,l("：不安全")]),e("li",null,[n(a(o),{name:"preview",style:{color:"var(--k-color-warning)"}}),h,l("：开发中")]),e("li",null,[n(a(o),{name:"newborn",style:{color:"var(--k-color-success)"}}),m,l("：近期新增")])])]),p,e("div",g,[e("ul",null,[e("li",null,[n(a(o),{name:"download"}),f,l("：已安装")]),e("li",null,[n(a(o),{name:"portable"}),k,l("：快速体验")]),e("li",null,[n(a(o),{name:"tag"}),b,l("：近期更新")])])]),y,v,x,w,e("div",q,[e("ul",null,[e("li",null,[n(a(o),{name:"solid:core"}),P,l("：核心功能")]),e("li",null,[n(a(o),{name:"solid:adapter"}),N,l("：适配器")]),e("li",null,[n(a(o),{name:"solid:storage"}),K,l("：存储服务")]),e("li",null,[n(a(o),{name:"solid:extension"}),T,l("：扩展功能")]),e("li",null,[n(a(o),{name:"solid:console"}),V,l("：控制台")]),e("li",null,[n(a(o),{name:"solid:manage"}),W,l("：管理工具")]),e("li",null,[n(a(o),{name:"solid:preset"}),z,l("：行为预设")]),e("li",null,[n(a(o),{name:"solid:image"}),B,l("：图片服务")]),e("li",null,[n(a(o),{name:"solid:media"}),D,l("：资讯服务")]),e("li",null,[n(a(o),{name:"solid:tool"}),I,l("：实用工具")]),e("li",null,[n(a(o),{name:"solid:ai"}),M,l("：人工智能")]),e("li",null,[n(a(o),{name:"solid:meme"}),O,l("：趣味交互")]),e("li",null,[n(a(o),{name:"solid:game"}),S,l("：娱乐玩法")]),e("li",null,[n(a(o),{name:"solid:gametool"}),j,l("：游戏辅助")])])]),A,C,E,G,J,e("div",R,[e("ul",null,[e("li",null,[n(a(o),{name:"download"}),F,l("：按下载量排序")]),e("li",null,[n(a(o),{name:"heart-pulse"}),H,l("：按创建时间排序")]),e("li",null,[n(a(o),{name:"tag"}),L,l("：按更新时间排序")])])]),Q]))}});export{le as __pageData,oe as default};
