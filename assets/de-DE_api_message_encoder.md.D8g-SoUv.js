import{_ as i,k as d,l as s,D as e,f as t,A as n,m as o,C as l,j as r}from"./chunks/framework.DmHN1gsO.js";const I=JSON.parse('{"title":"消息编码器 (MessageEncoder) 实验性","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/api/message/encoder.md","filePath":"de-DE/api/message/encoder.md"}'),c={name:"de-DE/api/message/encoder.md"},h={id:"消息编码器",tabindex:"-1"},p=s("a",{class:"header-anchor",href:"#消息编码器","aria-label":'Permalink to "消息编码器 (MessageEncoder) <badge type="warning">实验性</badge>"'},"​",-1),_=o('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这是一个实验性功能，未来可能发生改动。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/adapter/message.html">开发 &gt; 跨平台 &gt; 消息编码</a></p></div>',2),g=o(`<h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><p>消息编码器通常不直接进行构造，而是以关联类型的形式绑定在 <a href="./../core/bot.html"><code>Bot</code></a> 类的静态成员上，用于实现 <a href="./../resources/message.html#bot-sendmessage"><code>bot.sendMessage()</code></a> 等方法。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bot.ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> MyBot</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Bot</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  static</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;"> MessageEncoder</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> MyMessageEncoder</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="new-messageencoder" tabindex="-1">new MessageEncoder(bot, channelId) <a class="header-anchor" href="#new-messageencoder" aria-label="Permalink to &quot;new MessageEncoder(bot, channelId)&quot;">​</a></h3><ul><li><strong>bot:</strong> <a href="./../core/bot.html"><code>Bot</code></a> 机器人实例</li><li><strong>channelId:</strong> <code>string</code> 频道 ID</li></ul><p>构造一个 <code>MessageEncoder</code> 实例。</p>`,7),m={id:"encoder-flush",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#encoder-flush","aria-label":'Permalink to "encoder.flush() <badge>抽象</badge>"'},"​",-1),u=s("ul",null,[s("li",null,[e("返回值: "),s("code",null,"Promise<void>")])],-1),b=s("p",null,"向平台发送消息，清空缓冲区。",-1),f={id:"encoder-visit",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#encoder-visit","aria-label":'Permalink to "encoder.visit(element) <badge>抽象</badge>"'},"​",-1),C=o('<ul><li><strong>element:</strong> <a href="./api.html"><code>Element</code></a> 消息元素</li></ul><p>渲染某一个消息元素。如果其有子元素，可以使用 <a href="#encoder-render"><code>encoder.render(element)</code></a> 进行递归遍历。</p><h3 id="encoder-render" tabindex="-1">encoder.render(elements) <a class="header-anchor" href="#encoder-render" aria-label="Permalink to &quot;encoder.render(elements)&quot;">​</a></h3><ul><li><strong>element:</strong> <a href="./api.html"><code>Element[]</code></a> 消息元素</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>渲染一组元素。</p><h3 id="encoder-send" tabindex="-1">encoder.send(content) <a class="header-anchor" href="#encoder-send" aria-label="Permalink to &quot;encoder.send(content)&quot;">​</a></h3><ul><li><strong>content:</strong> <code>Fragment</code> 消息元素</li><li>返回值: <code>Promise&lt;Message[]&gt;</code></li></ul><p>解析并发送一段内容。返回发送的消息列表。</p>',8);function D(P,T,v,A,y,x){const a=l("badge");return r(),d("div",null,[s("h1",h,[e("消息编码器 (MessageEncoder) "),t(a,{type:"warning"},{default:n(()=>[e("实验性")]),_:1}),e(),p]),_,s("p",null,[e("标有 "),t(a,null,{default:n(()=>[e("抽象")]),_:1}),e(" 的方法需要由适配器插件自行实现。")]),g,s("h3",m,[e("encoder.flush() "),t(a,null,{default:n(()=>[e("抽象")]),_:1}),e(),k]),u,b,s("h3",f,[e("encoder.visit(element) "),t(a,null,{default:n(()=>[e("抽象")]),_:1}),e(),E]),C])}const M=i(c,[["render",D]]);export{I as __pageData,M as default};
