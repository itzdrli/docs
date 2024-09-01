import{_ as e,k as t,j as a,m as i}from"./chunks/framework.DmHN1gsO.js";const g=JSON.parse('{"title":"Rate Limiting (Rate Limit)","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/plugins/common/rate-limit.md","filePath":"en-US/plugins/common/rate-limit.md"}'),o={name:"en-US/plugins/common/rate-limit.md"},r=i('<h1 id="rate-limiting" tabindex="-1">Rate Limiting (Rate Limit) <a class="header-anchor" href="#rate-limiting" aria-label="Permalink to &quot;Rate Limiting (Rate Limit)&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>要使用本插件，你需要安装数据库支持。</p></div><h2 id="扩展用户字段" tabindex="-1">扩展用户字段 <a class="header-anchor" href="#扩展用户字段" aria-label="Permalink to &quot;扩展用户字段&quot;">​</a></h2><ul><li><strong>usage:</strong> <code>Record&lt;string, number&gt;</code> 指令调用次数</li><li><strong>timers:</strong> <code>Record&lt;string, number&gt;</code> 指令调用时间</li></ul><h2 id="指令-user-usage" tabindex="-1">指令：user.usage <a class="header-anchor" href="#指令-user-usage" aria-label="Permalink to &quot;指令：user.usage&quot;">​</a></h2><h2 id="指令-user-timer" tabindex="-1">指令：user.timer <a class="header-anchor" href="#指令-user-timer" aria-label="Permalink to &quot;指令：user.timer&quot;">​</a></h2><ul><li>基本语法：<code>user.xxx [key] [value]</code></li><li>选项： <ul><li><code>-s, --set</code> 设置访问记录（需要 4 级权限）</li><li><code>-c, --clear</code> 清除访问记录（需要 4 级权限）</li><li><code>-t, --target [@user]</code> 目标用户（需要 3 级权限）</li></ul></li></ul><p>如果不提供 <code>-s</code> 和 <code>-c</code> 选项，则会显示当前的访问记录。如果使用了 <code>-s</code>，就会设置名为 <code>key</code> 的访问记录为 <code>value</code>。如果使用了 <code>-c</code> 且提供了 <code>key</code>，就会清除名为 <code>key</code> 的访问记录；否则会清除所有的访问记录。</p><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><p>配置方式请参见 <a href="./../../manual/usage/command.html#速率限制">入门 &gt; 指令系统 &gt; 速率限制</a> 章节。</p>',10),c=[r];function l(s,d,n,u,m,h){return a(),t("div",null,c)}const p=e(o,[["render",l]]);export{g as __pageData,p as default};
