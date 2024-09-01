import{_ as e,k as a,j as r,m as o}from"./chunks/framework.DmHN1gsO.js";const p=JSON.parse('{"title":"事件 (Events)","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/api/core/events.md","filePath":"zh-CN/api/core/events.md"}'),l={name:"zh-CN/api/core/events.md"},t=o('<h1 id="事件" tabindex="-1">事件 (Events) <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件 (Events)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>参见：<a href="./../../guide/basic/events.html">开发 &gt; 交互基础 &gt; 事件系统</a><br>参见：<a href="./../../guide/plugin/lifecycle.html">开发 &gt; 模块化 &gt; 生命周期</a></p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本节介绍 Koishi 的内置事件。如果想了解事件 API，请前往 <a href="./../service/events.html">API &gt; 内置服务 &gt; 事件</a>。</p></div><h2 id="通用会话事件" tabindex="-1">通用会话事件 <a class="header-anchor" href="#通用会话事件" aria-label="Permalink to &quot;通用会话事件&quot;">​</a></h2><p>通用会话事件由适配器实现，它们均包含一个 <a href="./session.html"><code>session</code></a> 参数，触发方式均为 <code>emit</code>。各事件会在相应的资源页面中介绍。</p><ul><li><a href="./../resources/user.html#friend-request">friend-request</a></li><li><a href="./../resources/guild.html#guild-added">guild-added</a></li><li><a href="./../resources/member.html#guild-member-added">guild-member-added</a></li><li><a href="./../resources/member.html#guild-member-removed">guild-member-removed</a></li><li><a href="./../resources/member.html#guild-member-request">guild-member-request</a></li><li><a href="./../resources/member.html#guild-member-updated">guild-member-updated</a></li><li><a href="./../resources/guild.html#guild-removed">guild-removed</a></li><li><a href="./../resources/guild.html#guild-request">guild-request</a></li><li><a href="./../resources/role.html#guild-role-created">guild-role-created</a></li><li><a href="./../resources/role.html#guild-role-deleted">guild-role-deleted</a></li><li><a href="./../resources/role.html#guild-role-updated">guild-role-updated</a></li><li><a href="./../resources/guild.html#guild-updated">guild-updated</a></li><li><a href="./../resources/login.html#login-added">login-added</a></li><li><a href="./../resources/login.html#login-removed">login-removed</a></li><li><a href="./../resources/login.html#login-updated">login-updated</a></li><li><a href="./../resources/message.html#message-created">message-created (message)</a></li><li><a href="./../resources/message.html#message-deleted">message-deleted</a></li><li><a href="./../resources/message.html#message-updated">message-updated</a></li><li><a href="./../resources/reaction.html#reaction-added">reaction-added</a></li><li><a href="./../resources/reaction.html#reaction-removed">reaction-removed</a></li></ul><h2 id="内置会话事件" tabindex="-1">内置会话事件 <a class="header-anchor" href="#内置会话事件" aria-label="Permalink to &quot;内置会话事件&quot;">​</a></h2><p>与上面介绍的通用会话事件不同，这里的事件都是 Koishi 自身实现的，它们有不同的触发方式，但是都会支持上下文选择器。</p><h3 id="事件-middleware" tabindex="-1">事件：middleware <a class="header-anchor" href="#事件-middleware" aria-label="Permalink to &quot;事件：middleware&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 当前会话</li><li><strong>触发方式:</strong> emit</li></ul><p>在执行完全部中间件后会在对应的上下文触发。</p><h3 id="事件-before-parse" tabindex="-1">事件：before-parse <a class="header-anchor" href="#事件-before-parse" aria-label="Permalink to &quot;事件：before-parse&quot;">​</a></h3><ul><li><strong>content:</strong> <code>string</code> 要解析的文本</li><li><strong>session:</strong> <code>Session</code> 当前会话</li><li><strong>触发方式:</strong> bail</li></ul><p>尝试将文本解析成 Argv 对象时调用。你可以在回调函数中返回一个 Argv 对象以覆盖默认的解析行为。</p><h3 id="事件-parse" tabindex="-1">事件：parse <a class="header-anchor" href="#事件-parse" aria-label="Permalink to &quot;事件：parse&quot;">​</a></h3><ul><li><strong>argv:</strong> <code>Argv</code> 运行时参数</li><li><strong>触发方式:</strong> bail</li></ul><p>尝试将一个未识别出指令的 Argv 对象识别成指令调用时使用。你可以在回调函数中修改传入的 Argv 对象，或者返回一个字符串表示识别出的指令。</p><h3 id="事件-before-attach-channel" tabindex="-1">事件：before-attach-channel <a class="header-anchor" href="#事件-before-attach-channel" aria-label="Permalink to &quot;事件：before-attach-channel&quot;">​</a></h3><h3 id="事件-before-attach-user" tabindex="-1">事件：before-attach-user <a class="header-anchor" href="#事件-before-attach-user" aria-label="Permalink to &quot;事件：before-attach-user&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 当前会话</li><li><strong>fields:</strong> <code>Set&lt;string&gt;</code> 要获取的字段列表</li><li><strong>触发方式:</strong> emit</li></ul><p>当 Koishi 试图从数据库获取频道 / 用户信息前触发。你可以在回调函数中通过 <code>fields.add()</code> 修改传入的字段集合，增加的字段将可以被指令以及之后的中间件获取到。</p><p>这两个事件的触发于内置中间件中。如果没有配置数据库，则两个事件都不会触发；如果不是群聊消息，则 before-attach-channel 事件不会触发。</p><h3 id="事件-attach-channel" tabindex="-1">事件：attach-channel <a class="header-anchor" href="#事件-attach-channel" aria-label="Permalink to &quot;事件：attach-channel&quot;">​</a></h3><h3 id="事件-attach-user" tabindex="-1">事件：attach-user <a class="header-anchor" href="#事件-attach-user" aria-label="Permalink to &quot;事件：attach-user&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 当前会话</li><li><strong>触发方式:</strong> serial</li></ul><p>当 Koishi 完成频道 / 用户数据获取后触发。调用时会传入一个 Session 对象，将会拥有 <code>channel</code>/<code>user</code> 属性。你可以在回调函数中修改这两个属性，这些修改会在后续过程中自动更新到数据库。如果你在回调函数中返回一个 truthy 值，则该会话不会触发指令以及之后的中间件。</p><p>如果没有配置数据库，则两个事件都不会触发；如果不是群聊消息，则 attach-channel 事件不会触发。</p><h3 id="事件-command-before-attach-channel" tabindex="-1">事件：command/before-attach-channel <a class="header-anchor" href="#事件-command-before-attach-channel" aria-label="Permalink to &quot;事件：command/before-attach-channel&quot;">​</a></h3><h3 id="事件-command-before-attach-user" tabindex="-1">事件：command/before-attach-user <a class="header-anchor" href="#事件-command-before-attach-user" aria-label="Permalink to &quot;事件：command/before-attach-user&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Argv</code> 运行时参数</li><li><strong>fields:</strong> <code>Set&lt;string&gt;</code> 要获取的字段列表</li><li><strong>触发方式:</strong> emit</li></ul><p>当 Koishi 试图从数据库获取频道 / 用户信息前触发。你可以在回调函数中通过 <code>fields.add()</code> 修改传入的字段集合，增加的字段将可以被指令以及之后的中间件获取到。</p><p>这两个事件触发于任意指令调用前。如果没有配置数据库，则两个事件都不会触发；如果不是群聊消息，则 before-attach-channel 事件不会触发。</p><h3 id="事件-before-send" tabindex="-1">事件：before-send <a class="header-anchor" href="#事件-before-send" aria-label="Permalink to &quot;事件：before-send&quot;">​</a></h3><ul><li><strong>session:</strong> <code>Session</code> 消息会话</li><li><strong>触发方式:</strong> bail</li></ul><p>即将发送信息时会在对应的上下文触发。调用时会传入一个事件类型为 <a href="#消息类事件">send</a> 的会话实例。由于该消息还未发送，这个会话并没有 <code>messageId</code> 属性。你可以通过修改 <code>session.content</code> 改变发送的内容，或者返回一个 truthy 值以取消该消息的发送。</p><h3 id="事件-command-before-execute" tabindex="-1">事件：command/before-execute <a class="header-anchor" href="#事件-command-before-execute" aria-label="Permalink to &quot;事件：command/before-execute&quot;">​</a></h3><ul><li><strong>argv:</strong> <code>Argv</code> 运行时参数</li><li><strong>触发方式:</strong> serial</li></ul><p>调用指令前会在对应的上下文触发。此时指令的可用性还未经检测，因此可能出现参数错误、权限不足、超过使用次数等情况。你可以通过在回调函数中返回一个字符串以取消该指令的执行。进一步，如果该字符串非空，则会作为此指令执行的结果。</p><h3 id="事件-command" tabindex="-1">事件：command <a class="header-anchor" href="#事件-command" aria-label="Permalink to &quot;事件：command&quot;">​</a></h3><ul><li><strong>argv:</strong> <code>Argv</code> 运行时参数</li><li><strong>触发方式:</strong> parallel</li></ul><p>指令调用完毕后会在对应的上下文触发。</p><h2 id="生命周期事件" tabindex="-1">生命周期事件 <a class="header-anchor" href="#生命周期事件" aria-label="Permalink to &quot;生命周期事件&quot;">​</a></h2><p>这里的所有事件在全体上下文触发的 (即上下文选择器对这些事件无效)。</p><h3 id="事件-ready" tabindex="-1">事件：ready <a class="header-anchor" href="#事件-ready" aria-label="Permalink to &quot;事件：ready&quot;">​</a></h3><ul><li><strong>触发方式:</strong> parallel</li></ul><p>应用启动时触发。如果应用已经处于启动状态，则会立即触发。参见 <a href="./../../guide/plugin/lifecycle.html#异步加载与-ready-事件">异步加载</a>。</p><h3 id="事件-dispose" tabindex="-1">事件：dispose <a class="header-anchor" href="#事件-dispose" aria-label="Permalink to &quot;事件：dispose&quot;">​</a></h3><ul><li><strong>触发方式:</strong> parallel</li></ul><p>插件被卸载时触发。参见 <a href="./../../guide/plugin/lifecycle.html#清除副作用">清除副作用</a>。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请注意，<code>dispose</code> 事件的目的是清理副作用而不是确保数据保存。当 Koishi 进程崩溃或是被强行中止时，<code>dispose</code> 事件都可能不会触发。为了保护你的数据，你应当在每一次修改后立即上传数据，而不是在 <code>dispose</code> 中处理收尾工作。</p></div><h3 id="事件-service" tabindex="-1">事件：service <a class="header-anchor" href="#事件-service" aria-label="Permalink to &quot;事件：service&quot;">​</a></h3><ul><li><strong>name:</strong> <code>string</code> 服务名称</li><li><strong>触发方式:</strong> emit</li></ul><p>有服务被修改时触发。</p><h3 id="事件-model" tabindex="-1">事件：model <a class="header-anchor" href="#事件-model" aria-label="Permalink to &quot;事件：model&quot;">​</a></h3><ul><li><strong>name:</strong> <code>string</code> 被扩展的表名</li><li><strong>触发方式:</strong> emit</li></ul><p>调用 <code>model.extend()</code> 时触发。</p><h3 id="事件-login-added" tabindex="-1">事件：login-added <a class="header-anchor" href="#事件-login-added" aria-label="Permalink to &quot;事件：login-added&quot;">​</a></h3><ul><li><strong>bot:</strong> <a href="./bot.html"><code>Bot</code></a> 机器人实例</li><li><strong>触发方式:</strong> emit</li></ul><p>添加机器人时触发。</p><h3 id="事件-login-removed" tabindex="-1">事件：login-removed <a class="header-anchor" href="#事件-login-removed" aria-label="Permalink to &quot;事件：login-removed&quot;">​</a></h3><ul><li><strong>bot:</strong> <a href="./bot.html"><code>Bot</code></a> 机器人实例</li><li><strong>触发方式:</strong> emit</li></ul><p>移除机器人时触发。</p><h3 id="事件-login-updated" tabindex="-1">事件：login-updated <a class="header-anchor" href="#事件-login-updated" aria-label="Permalink to &quot;事件：login-updated&quot;">​</a></h3><ul><li><strong>bot:</strong> <a href="./bot.html"><code>Bot</code></a> 机器人实例</li><li><strong>触发方式:</strong> emit</li></ul><p>机器人状态发生改变时触发。</p>',65),i=[t];function s(d,n,c,h,u,m){return r(),a("div",null,i)}const b=e(l,[["render",s]]);export{p as __pageData,b as default};
