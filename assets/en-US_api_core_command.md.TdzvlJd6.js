import{_ as i,k as s,j as a,m as e}from"./chunks/framework.DmHN1gsO.js";const m=JSON.parse('{"title":"Command","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/core/command.md","filePath":"en-US/api/core/command.md"}'),t={name:"en-US/api/core/command.md"},n=e(`<h1 id="command" tabindex="-1">Command <a class="header-anchor" href="#command" aria-label="Permalink to &quot;Command&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/basic/command.html">开发 &gt; 交互基础 &gt; 指令开发</a></p></div><p>指令系统是 Koishi 的核心功能之一。通过 <code>ctx.command()</code> 方法获得的是指令的实例，它含有下面的方法：</p><h2 id="argv-对象" tabindex="-1">Argv 对象 <a class="header-anchor" href="#argv-对象" aria-label="Permalink to &quot;Argv 对象&quot;">​</a></h2><p>Argv 对象会作为 <code>cmd.action()</code>, <code>cmd.userFields()</code> 等方法的回调函数中的第一个参数。它具有以下的属性：</p><ul><li><strong>args:</strong> <code>any[]</code> 参数列表</li><li><strong>options:</strong> <code>{}</code> 选项列表</li><li><strong>next:</strong> <code>Next</code> 中间件的 next 回调函数</li><li><strong>session:</strong> <a href="./session.html"><code>Session</code></a> 所在的会话对象</li></ul><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="cmd-option" tabindex="-1">cmd.option(name, desc?, config?) <a class="header-anchor" href="#cmd-option" aria-label="Permalink to &quot;cmd.option(name, desc?, config?)&quot;">​</a></h3><ul><li><strong>name:</strong> <code>string</code> 选项的名字</li><li><strong>desc:</strong> <code>string</code> 选项的描述</li><li><strong>config:</strong> <code>OptionConfig</code><ul><li><strong>config.fallback:</strong> <code>any</code> 选项的<a href="./../../guide/basic/command.html#选项的默认值">默认值</a></li><li><strong>config.value:</strong> <code>any</code> 选项的<a href="./../../guide/basic/command.html#选项的重载">重载值</a></li><li><strong>config.type:</strong> <code>DomainType</code> 选项的<a href="./../../guide/basic/command.html#选项的临时类型">类型定义</a></li><li><strong>config.hidden:</strong> <code>boolean</code> 是否<a href="./../../guide/basic/command.html#隐藏指令和选项">隐藏选项</a></li><li><strong>config.notUsage:</strong> <code>boolean</code> 是否<a href="./../../manual/usage/command.html#速率限制">计入调用</a></li><li><strong>config.authority:</strong> <code>number</code> 选项的<a href="./../../manual/usage/command.html#权限管理">权限等级</a></li></ul></li><li>返回值: <code>this</code></li></ul><p>为指令添加一个选项。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> DomainType</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> RegExp</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">source</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><h3 id="cmd-removeoption" tabindex="-1">cmd.removeOption(name) <a class="header-anchor" href="#cmd-removeoption" aria-label="Permalink to &quot;cmd.removeOption(name)&quot;">​</a></h3><ul><li><strong>name:</strong> <code>string</code> 指令的名称</li><li>返回值: <code>this</code></li></ul><p>删除一个选项。注意：如果你为一个选项注册了多个别名，则删除任何一个别名都相当于删除整个选项。</p><h3 id="cmd-usage" tabindex="-1">cmd.usage(text) <a class="header-anchor" href="#cmd-usage" aria-label="Permalink to &quot;cmd.usage(text)&quot;">​</a></h3><ul><li><strong>text:</strong> <code>string</code> 使用方法说明</li><li>返回值: <code>this</code></li></ul><p>为指令添加使用方法。多次调用此方法只会保留最后一次的定义。</p><h3 id="cmd-example" tabindex="-1">cmd.example(example) <a class="header-anchor" href="#cmd-example" aria-label="Permalink to &quot;cmd.example(example)&quot;">​</a></h3><ul><li><strong>example:</strong> <code>text</code> 使用示例</li><li>返回值: <code>this</code></li></ul><p>为指令添加使用示例。多次调用此方法会一并保留并显示在帮助的最后面。</p><h3 id="cmd-action" tabindex="-1">cmd.action(action, prepend?) <a class="header-anchor" href="#cmd-action" aria-label="Permalink to &quot;cmd.action(action, prepend?)&quot;">​</a></h3><ul><li><strong>action:</strong> <code>CommandAction</code> 执行函数</li><li><strong>prepend:</strong> <code>boolean</code> 是否前置</li><li>返回值: <code>this</code></li></ul><p>为指令添加执行函数。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Awaitable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">extends</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;] </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> CommandAction</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">argv</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Argv</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Awaitable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="cmd-before" tabindex="-1">cmd.before(action, append?) <a class="header-anchor" href="#cmd-before" aria-label="Permalink to &quot;cmd.before(action, append?)&quot;">​</a></h3><ul><li><strong>action:</strong> <code>CommandAction</code> 执行函数</li><li><strong>append:</strong> <code>boolean</code> 是否后置</li><li>返回值: <code>this</code></li></ul><p>为指令添加检测函数。</p><h3 id="cmd-userfields" tabindex="-1">cmd.userFields(fields) <a class="header-anchor" href="#cmd-userfields" aria-label="Permalink to &quot;cmd.userFields(fields)&quot;">​</a></h3><ul><li><strong>fields:</strong> <code>FieldCollector&lt;UserField&gt;</code> 要请求的用户字段</li><li>返回值: <code>this</code></li></ul><p>如果指令需要用到用户数据，你可以提前声明，这样有助于合并多次请求，从而提高性能。 参见<a href="./../../guide/database/builtin.html#声明所需字段">按需加载</a>章节。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> FieldCollector</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Iterable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">  |</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">argv</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Argv</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">fields</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Set</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">K</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><h3 id="cmd-channelfields" tabindex="-1">cmd.channelFields(fields) <a class="header-anchor" href="#cmd-channelfields" aria-label="Permalink to &quot;cmd.channelFields(fields)&quot;">​</a></h3><ul><li><strong>fields:</strong> <code>FieldCollector&lt;ChannelField&gt;</code> 要请求的频道字段</li><li>返回值: <code>this</code></li></ul><p>如果指令需要用到频道数据，你可以提前声明，这样有助于合并多次请求，从而提高性能。 参见<a href="./../../guide/database/builtin.html#声明所需字段">按需加载</a>章节。</p><h3 id="cmd-alias" tabindex="-1">cmd.alias(...names) <a class="header-anchor" href="#cmd-alias" aria-label="Permalink to &quot;cmd.alias(...names)&quot;">​</a></h3><ul><li><strong>names:</strong> <code>string[]</code> 要设置的别名</li><li>返回值: <code>this</code></li></ul><p>设置指令别名。</p><h3 id="cmd-shortcut" tabindex="-1">cmd.shortcut(name, config?) <a class="header-anchor" href="#cmd-shortcut" aria-label="Permalink to &quot;cmd.shortcut(name, config?)&quot;">​</a></h3><ul><li><strong>name:</strong> <code>string | RegExp</code> 快捷匹配</li><li><strong>config:</strong> <code>ShortcutConfig</code><ul><li><strong>config.prefix:</strong> <code>boolean</code> 调用时要求保留前缀</li><li><strong>config.fuzzy:</strong> <code>boolean</code> 允许在快捷方式后带参数</li><li><strong>config.greedy:</strong> <code>boolean</code> 将所有后面的内容解析成一个参数</li><li><strong>config.args:</strong> <code>any[]</code> 要带的参数列表，将与传入的参数合并</li><li><strong>config.options:</strong> <code>Record&lt;string, any&gt;</code> 要带的选项列表，将与传入的选项合并</li></ul></li><li>返回值: <code>this</code></li></ul><p>设置快捷方式。</p><h3 id="cmd-subcommand" tabindex="-1">cmd.subcommand(name, desc?, config?) <a class="header-anchor" href="#cmd-subcommand" aria-label="Permalink to &quot;cmd.subcommand(name, desc?, config?)&quot;">​</a></h3><ul><li><strong>name:</strong> <code>string</code> 指令名以及可能的参数</li><li><strong>desc:</strong> <code>string</code> 指令的描述</li><li><strong>config:</strong> <a href="./context.html#ctx-command"><code>CommandConfig</code></a> 指令的配置</li><li>返回值：<code>Command</code> 注册或修改的指令</li></ul><p>注册或修改子指令。子指令会继承当期指令的上下文。参见<a href="./../../guide/basic/command.html#指令的多级结构">指令的多级结构</a>章节。</p><h3 id="cmd-parse" tabindex="-1">cmd.parse(input) <a class="header-anchor" href="#cmd-parse" aria-label="Permalink to &quot;cmd.parse(input)&quot;">​</a></h3><ul><li><strong>input:</strong> <code>Argv</code> 令牌化的输入，通常是 <code>Argv.parse()</code> 的返回值</li><li>返回值: <code>Argv</code> 解析结果，包含了 <code>args</code> 和 <code>options</code> 等属性</li></ul><p>解析一段指令调用文本。</p><h3 id="cmd-execute" tabindex="-1">cmd.execute(argv, next?) <a class="header-anchor" href="#cmd-execute" aria-label="Permalink to &quot;cmd.execute(argv, next?)&quot;">​</a></h3><ul><li><strong>argv:</strong> <code>Argv</code> 执行配置 <ul><li><strong>argv.args:</strong> <code>any[]</code> 指令的参数列表</li><li><strong>argv.options:</strong> <code>Record&lt;string, any&gt;</code> 指令的选项</li><li><strong>argv.session:</strong> <a href="./session.html"><code>Session</code></a> 当前的会话对象</li></ul></li><li><strong>next:</strong> <a href="./../../guide/basic/middleware.html"><code>Next</code></a> 所处的中间件的 <code>next</code> 回调函数</li><li>返回值: <code>Promise&lt;string&gt;</code> 执行函数的返回结果，可用于指令插值</li></ul><p>执行当前指令。</p><h3 id="cmd-dispose" tabindex="-1">cmd.dispose() <a class="header-anchor" href="#cmd-dispose" aria-label="Permalink to &quot;cmd.dispose()&quot;">​</a></h3><ul><li>返回值: <code>void</code></li></ul><p>移除当前指令及其所有子指令。</p><h2 id="静态属性和方法" tabindex="-1">静态属性和方法 <a class="header-anchor" href="#静态属性和方法" aria-label="Permalink to &quot;静态属性和方法&quot;">​</a></h2><p>这里包含了与 Command 类相关的静态属性和方法。</p><h3 id="command-defaultconfig" tabindex="-1">Command.defaultConfig <a class="header-anchor" href="#command-defaultconfig" aria-label="Permalink to &quot;Command.defaultConfig&quot;">​</a></h3><p>默认的指令配置。</p><h3 id="command-defaultoptionconfig" tabindex="-1">Command.defaultOptionConfig <a class="header-anchor" href="#command-defaultoptionconfig" aria-label="Permalink to &quot;Command.defaultOptionConfig&quot;">​</a></h3><p>默认的选项配置。</p>`,58),l=[n];function o(d,h,r,c,p,k){return a(),s("div",null,l)}const u=i(t,[["render",o]]);export{m as __pageData,u as default};
