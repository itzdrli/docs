import{_ as n,k as h,l as s,D as i,f as t,A as e,m as l,C as k,j as p}from"./chunks/framework.DmHN1gsO.js";const q=JSON.parse('{"title":"Database","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/database/database.md","filePath":"en-US/api/database/database.md"}'),r={name:"en-US/api/database/database.md"},d=l(`<h1 id="database" tabindex="-1">Database <a class="header-anchor" href="#database" aria-label="Permalink to &quot;Database&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/database/">开发 &gt; 数据库 &gt; 基本用法</a></p></div><p>Koishi 的数据库 API 实际上分为两部分：</p><ul><li>Minato 定义的通用数据库接口，由数据库插件实现</li><li>Koishi 内置数据结构相关的方法，由 Koishi 提供实现</li></ul><p>这一页中将仅展示第一部分的内容。另一部分的内容请参见 <a href="./built-in.html">内置数据结构</a>。</p><h2 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h2><h3 id="tablelike" tabindex="-1">TableLike <a class="header-anchor" href="#tablelike" aria-label="Permalink to &quot;TableLike&quot;">​</a></h3><p>一个可用表。该类型可以是数据库中现有的表名或者一个 <a href="./selection.html"><code>Selection</code></a> 对象。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> TableLike</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> keyof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> S</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Selection</span></span></code></pre></div><h3 id="tablejoin" tabindex="-1">TableJoin <a class="header-anchor" href="#tablejoin" aria-label="Permalink to &quot;TableJoin&quot;">​</a></h3><p>将多个表连接成新的虚拟表。该类型可以是表名数组或者一个由 <code>TableLike</code> 构成的字典。如果是表名数组，则新的表将会使用这些表名作为字段名；否则将会使用字典的键作为字段名。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> TableJoin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">keyof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">TableLike</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&gt;</span></span></code></pre></div><h3 id="modifier" tabindex="-1">Modifier <a class="header-anchor" href="#modifier" aria-label="Permalink to &quot;Modifier&quot;">​</a></h3><p>对查询的结果进行修饰，包括限制数量、选取字段和排序。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Modifier</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> K</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ModifierOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ModifierOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  limit</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  offset</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  fields</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> K</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  sort</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;asc&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;desc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="update" tabindex="-1">Update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;Update&quot;">​</a></h3><p>要更新的数据。包含任意多个字段，每个字段的值可以是一个固定值或者求值表达式。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Uneval</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Eval</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Number</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Eval</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">String</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Eval</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Boolean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Date</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Eval</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Date</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> RegExp</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Eval</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">RegExp</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Update</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> keyof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Uneval</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="stats" tabindex="-1">Stats <a class="header-anchor" href="#stats" aria-label="Permalink to &quot;Stats&quot;">​</a></h3><p>数据库统计信息。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Stats</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  size</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  tables</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">TableStats</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> TableStats</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  count</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  size</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h3 id="writeresult" tabindex="-1">WriteResult <a class="header-anchor" href="#writeresult" aria-label="Permalink to &quot;WriteResult&quot;">​</a></h3><p>数据库写入操作的结果。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> WriteResult</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // upsert 操作中插入数据的行数</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  inserted</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // set, upsert, remove 操作中匹配数据的行数</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  matched</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="ctx-database-select" tabindex="-1">ctx.database.select(table, query?) <a class="header-anchor" href="#ctx-database-select" aria-label="Permalink to &quot;ctx.database.select(table, query?)&quot;">​</a></h3><ul><li><strong>table:</strong> <code>string</code> 表名</li><li><strong>query:</strong> <a href="./query.html"><code>Query</code></a> 约束条件</li><li>返回值: <a href="./selection.html"><code>Selection</code></a></li></ul><p>创建一个新的 <code>Selection</code> 对象。</p>`,28),o={id:"ctx-database-join",tabindex:"-1"},g=s("a",{class:"header-anchor",href:"#ctx-database-join","aria-label":'Permalink to "ctx.database.join(tables, query?) <badge type="warning">实验性</badge>"'},"​",-1),c=l('<ul><li><strong>tables:</strong> <a href="#tablejoin"><code>TableJoin</code></a> 用于连接的表</li><li><strong>query:</strong> <a href="./selection.html#callback"><code>Callback</code></a> 约束条件</li><li>返回值: <a href="./selection.html"><code>Selection</code></a></li></ul><p>将多个表连接成新的虚拟表。</p><h3 id="ctx-database-get" tabindex="-1">ctx.database.get(table, query, modifier?) <a class="header-anchor" href="#ctx-database-get" aria-label="Permalink to &quot;ctx.database.get(table, query, modifier?)&quot;">​</a></h3><ul><li><strong>table:</strong> <code>string</code> 表名</li><li><strong>query:</strong> <a href="./query.html"><code>Query</code></a> 约束条件</li><li><strong>modifier:</strong> <a href="#modifier"><code>Modifier</code></a> 请求修饰符</li><li>返回值: <code>Promise&lt;any[]&gt;</code></li></ul><p>查询数据。</p><h3 id="ctx-database-set" tabindex="-1">ctx.database.set(table, query, update) <a class="header-anchor" href="#ctx-database-set" aria-label="Permalink to &quot;ctx.database.set(table, query, update)&quot;">​</a></h3><ul><li><strong>table:</strong> <code>string</code> 表名</li><li><strong>query:</strong> <a href="./query.html"><code>Query</code></a> 约束条件</li><li><strong>update:</strong> <a href="#update"><code>Update</code></a> 数据</li><li>返回值: <a href="#writeresult"><code>Promise&lt;WriteResult&gt;</code></a></li></ul><p>更新数据。返回对象包含本次操作的匹配行数。</p><h3 id="ctx-database-remove" tabindex="-1">ctx.database.remove(table, query) <a class="header-anchor" href="#ctx-database-remove" aria-label="Permalink to &quot;ctx.database.remove(table, query)&quot;">​</a></h3><ul><li><strong>table:</strong> <code>string</code> 表名</li><li><strong>query:</strong> <a href="./query.html"><code>Query</code></a> 约束条件</li><li>返回值: <a href="#writeresult"><code>Promise&lt;WriteResult&gt;</code></a></li></ul><p>删除数据。返回对象包含本次操作的匹配行数。</p><h3 id="ctx-database-create" tabindex="-1">ctx.database.create(table, data) <a class="header-anchor" href="#ctx-database-create" aria-label="Permalink to &quot;ctx.database.create(table, data)&quot;">​</a></h3><ul><li><strong>table:</strong> <code>string</code> 表名</li><li><strong>data:</strong> <code>any</code> 数据</li><li>返回值: <code>Promise&lt;any&gt;</code></li></ul><p>插入数据。返回值为插入的数据行。</p><h3 id="ctx-database-upsert" tabindex="-1">ctx.database.upsert(table, data, keys?) <a class="header-anchor" href="#ctx-database-upsert" aria-label="Permalink to &quot;ctx.database.upsert(table, data, keys?)&quot;">​</a></h3><ul><li><strong>table:</strong> <code>string</code> 表名</li><li><strong>data:</strong> <a href="#update"><code>Update[]</code></a> 数据</li><li><strong>keys:</strong> <code>string | string[]</code> 用于索引的字段</li><li>返回值: <a href="#writeresult"><code>Promise&lt;WriteResult&gt;</code></a></li></ul><p>插入或更新数据。返回对象包含本次操作的插入行数和匹配行数。</p><h3 id="ctx-database-eval" tabindex="-1">ctx.database.eval(table, expr, query?) <a class="header-anchor" href="#ctx-database-eval" aria-label="Permalink to &quot;ctx.database.eval(table, expr, query?)&quot;">​</a></h3><ul><li><strong>table:</strong> <code>string</code> 表名</li><li><strong>expr:</strong> <a href="./selection.html#callback"><code>Callback</code></a> 用于计算的表达式</li><li><strong>query:</strong> <a href="./query.html"><code>Query</code></a> 约束条件</li><li>返回值: <code>Promise&lt;any&gt;</code></li></ul><p>计算聚合表达式。</p><h3 id="ctx-database-drop" tabindex="-1">ctx.database.drop(table) <a class="header-anchor" href="#ctx-database-drop" aria-label="Permalink to &quot;ctx.database.drop(table)&quot;">​</a></h3><ul><li><strong>table:</strong> <code>string</code> 表名</li><li>返回值: <code>Promise&lt;void&gt;</code></li></ul><p>删除表。</p>',23),B={id:"ctx-database-stats",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#ctx-database-stats","aria-label":'Permalink to "ctx.database.stats() <badge type="warning">实验性</badge>"'},"​",-1),C=s("ul",null,[s("li",null,[i("返回值: "),s("a",{href:"#stats"},[s("code",null,"Promise<Stats>")])])],-1),b=s("p",null,"获取统计信息。",-1);function u(D,E,A,F,m,x){const a=k("badge");return p(),h("div",null,[d,s("h3",o,[i("ctx.database.join(tables, query?) "),t(a,{type:"warning"},{default:e(()=>[i("实验性")]),_:1}),i(),g]),c,s("h3",B,[i("ctx.database.stats() "),t(a,{type:"warning"},{default:e(()=>[i("实验性")]),_:1}),i(),y]),C,b])}const _=n(r,[["render",u]]);export{q as __pageData,_ as default};
