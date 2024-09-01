import{_ as i,k as s,j as a,m as n}from"./chunks/framework.DmHN1gsO.js";const y=JSON.parse('{"title":"随机数操作","description":"","frontmatter":{},"headers":[],"relativePath":"zh-TW/api/utils/random.md","filePath":"zh-TW/api/utils/random.md"}'),t={name:"zh-TW/api/utils/random.md"},l=n(`<h1 id="随机数操作" tabindex="-1">随机数操作 <a class="header-anchor" href="#随机数操作" aria-label="Permalink to &quot;随机数操作&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本节中的 API 来自 <a href="https://github.com/shigma/inaba" target="_blank" rel="noreferrer">inaba</a>，并由 Koishi 重新导出。</p></div><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Random</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;koishi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 静态方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Random</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0.8</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)                </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 80% 的概率返回 true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Random</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">shuffle</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])       </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 随机打乱数组</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 使用自定义的随机数生成器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> random</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Random</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Math</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)               </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 生成一个 [0, 10) 的随机整数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pick</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])          </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 随机选取一个元素</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="new-random" tabindex="-1">new Random(callback) <a class="header-anchor" href="#new-random" aria-label="Permalink to &quot;new Random(callback)&quot;">​</a></h3><ul><li><strong>callback:</strong> <code>() =&gt; number</code> 一个返回 <code>[0, 1)</code> 的随机数的函数</li><li><strong>returns:</strong> <code>Random</code> 实例</li></ul><p>使用自定义的随机数生成器构造一个 <code>Random</code> 实例。</p><h3 id="random-bool" tabindex="-1">Random.bool(probability) <a class="header-anchor" href="#random-bool" aria-label="Permalink to &quot;Random.bool(probability)&quot;">​</a></h3><ul><li><strong>probability:</strong> <code>number</code></li><li><strong>returns:</strong> <code>boolean</code></li></ul><p>生成一个随机布尔值，有 <code>probability</code> 的概率为 1。</p><h3 id="random-real" tabindex="-1">Random.real(start?, end) <a class="header-anchor" href="#random-real" aria-label="Permalink to &quot;Random.real(start?, end)&quot;">​</a></h3><ul><li><strong>start:</strong> <code>number</code> 下界，默认为 0</li><li><strong>end:</strong> <code>number</code> 上界</li><li>返回值: <code>number</code> 一个 <code>[start, end)</code> 之间的随机实数</li></ul><p>生成一个随机实数。</p><h3 id="random-int" tabindex="-1">Random.int(start?, end) <a class="header-anchor" href="#random-int" aria-label="Permalink to &quot;Random.int(start?, end)&quot;">​</a></h3><ul><li><strong>start:</strong> <code>number</code> 下界，默认为 0</li><li><strong>end:</strong> <code>number</code> 上界</li><li>返回值: <code>number</code> 一个 <code>[start, end)</code> 之间的随机整数</li></ul><p>生成一个随机实数。</p><h3 id="random-pick" tabindex="-1">Random.pick(array, count?) <a class="header-anchor" href="#random-pick" aria-label="Permalink to &quot;Random.pick(array, count?)&quot;">​</a></h3><ul><li><strong>array:</strong> <code>readonly T[]</code> 数组</li><li><strong>count:</strong> <code>number</code> 元素个数</li><li>返回值: <code>T</code> 挑出的元素</li></ul><p>从数组中随机挑出一个或多个元素，不改变原数组。如果未传入 <code>count</code>，则返回一个元素；否则返回一个包含 <code>count</code> 个元素的数组。</p><h3 id="random-shuffle" tabindex="-1">Random.shuffle(array) <a class="header-anchor" href="#random-shuffle" aria-label="Permalink to &quot;Random.shuffle(array)&quot;">​</a></h3><ul><li><strong>array:</strong> <code>T[]</code> 数组</li><li>返回值: <code>T[]</code> 新的数组</li></ul><p>随机打乱数组中的元素，返回新的数组。此操作不修改原数组，相当于 <code>Random.pick(array, array.length)</code>。</p><h3 id="random-weightedpick" tabindex="-1">Random.weightedPick(weights) <a class="header-anchor" href="#random-weightedpick" aria-label="Permalink to &quot;Random.weightedPick(weights)&quot;">​</a></h3><ul><li><strong>weights:</strong> <code>Record&lt;T, number&gt;</code> 权重表</li><li><strong>returns:</strong> <code>T</code> 挑出的元素</li></ul><p>按照权重随机挑出一个元素。</p>`,26),e=[l];function h(r,o,d,k,p,c){return a(),s("div",null,e)}const m=i(t,[["render",h]]);export{y as __pageData,m as default};
