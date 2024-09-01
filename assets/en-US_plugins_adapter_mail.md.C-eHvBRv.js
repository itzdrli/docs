import{_ as e,k as o,j as a,m as i}from"./chunks/framework.DmHN1gsO.js";const f=JSON.parse('{"title":"@koishijs/plugin-adapter-mail","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/plugins/adapter/mail.md","filePath":"en-US/plugins/adapter/mail.md"}'),t={name:"en-US/plugins/adapter/mail.md"},l=i('<h1 id="koishijs-plugin-adapter-mail" tabindex="-1">@koishijs/plugin-adapter-mail <a class="header-anchor" href="#koishijs-plugin-adapter-mail" aria-label="Permalink to &quot;@koishijs/plugin-adapter-mail&quot;">​</a></h1><h2 id="接入方式" tabindex="-1">接入方式 <a class="header-anchor" href="#接入方式" aria-label="Permalink to &quot;接入方式&quot;">​</a></h2><ol><li>The &#39;username&#39; corresponds to your email account, &#39;password&#39; to your authorization code</li><li>「imap」对应接收服务器，「smtp」对应发送服务器，需要分别填写对应的「host」和「port」</li><li>Different email services also get authorization code in different ways and can be configured by reference to the mainstream mail service below</li></ol><h3 id="qq-mail" tabindex="-1">QQ Mail <a class="header-anchor" href="#qq-mail" aria-label="Permalink to &quot;QQ Mail&quot;">​</a></h3><ul><li>接收服务器：<code>imap.qq.com</code>，端口号 <code>993</code></li><li>发送服务器：<code>smtp.qq.com</code>，端口号 <code>465</code> 或 <code>587</code></li><li>Reference <a href="https://service.mail.qq.com/detail/0/75" target="_blank" rel="noreferrer">what is the authorization code, and how is it set?</a></li></ul><h3 id="netease-163" tabindex="-1">Netease 163 <a class="header-anchor" href="#netease-163" aria-label="Permalink to &quot;Netease 163&quot;">​</a></h3><ul><li>接收服务器：<code>imap.163.com</code>，端口号 <code>993</code></li><li>发送服务器：<code>smtp.163.com</code>，端口号 <code>465</code> 或 <code>994</code></li><li>Reference：<a href="https://mail.163.com/html/110127_imap/index.htm" target="_blank" rel="noreferrer">Netease 163 service</a></li></ul><h3 id="outlook" tabindex="-1">Outlook <a class="header-anchor" href="#outlook" aria-label="Permalink to &quot;Outlook&quot;">​</a></h3><ul><li>接收服务器：<code>outlook.office365.com</code>，端口号 <code>993</code></li><li>发送服务器：<code>smtp-mail.outlook.com</code>，端口号 <code>587</code></li><li>Reference <a href="https://support.microsoft.com/zh-cn/office/outlook-com-%E7%9A%84-pop-imap-%E5%92%8C-smtp-%E8%AE%BE%E7%BD%AE-d088b986-291d-42b8-9564-9c414e2aa040" target="_blank" rel="noreferrer">POP, IMAP, and SMTP settings for Outlook.com</a></li></ul><h3 id="gmail" tabindex="-1">Gmail <a class="header-anchor" href="#gmail" aria-label="Permalink to &quot;Gmail&quot;">​</a></h3><ul><li>接收服务器：<code>imap.gmail.com</code>，端口号 <code>993</code></li><li>发送服务器：<code>smtp.gmail.com</code>，端口号 <code>465</code></li><li>Reference: <a href="https://support.google.com/mail/answer/7126229?hl=zh-Hans#zippy=%2C%E7%AC%AC-%E6%AD%A5%E6%A3%80%E6%9F%A5-imap-%E6%98%AF%E5%90%A6%E5%B7%B2%E5%90%AF%E7%94%A8%2C%E7%AC%AC-%E6%AD%A5%E5%9C%A8%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%B8%AD%E6%9B%B4%E6%94%B9-smtp-%E5%92%8C%E5%85%B6%E4%BB%96%E8%AE%BE%E7%BD%AE" target="_blank" rel="noreferrer">Check Gmail through other email platforms</a></li></ul><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="options-username" tabindex="-1">options.username <a class="header-anchor" href="#options-username" aria-label="Permalink to &quot;options.username&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>必需参数</li></ul><p>用户名。</p><h3 id="options-password" tabindex="-1">options.password <a class="header-anchor" href="#options-password" aria-label="Permalink to &quot;options.password&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>必需参数</li></ul><p>密码或授权码。</p><h3 id="options-selfid" tabindex="-1">options.selfId <a class="header-anchor" href="#options-selfid" aria-label="Permalink to &quot;options.selfId&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>默认值: <a href="#options-username"><code>options.username</code></a></li></ul><p>邮件地址 (默认与用户名相同)。</p><h3 id="options-subject" tabindex="-1">options.subject <a class="header-anchor" href="#options-subject" aria-label="Permalink to &quot;options.subject&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>机器人发送的邮件主题。</p><h3 id="options-imap" tabindex="-1">options.imap <a class="header-anchor" href="#options-imap" aria-label="Permalink to &quot;options.imap&quot;">​</a></h3><ul><li><strong>imap.host:</strong> <code>string</code> 服务器地址</li><li><strong>imap.port:</strong> <code>number</code> 服务器端口</li><li><strong>imap.tls:</strong> <code>boolean</code> 是否开启 TLS 加密</li></ul><p>接收服务器配置。</p><h3 id="options-smtp" tabindex="-1">options.smtp <a class="header-anchor" href="#options-smtp" aria-label="Permalink to &quot;options.smtp&quot;">​</a></h3><ul><li><strong>smtp.host:</strong> <code>string</code> 服务器地址</li><li><strong>smtp.port:</strong> <code>number</code> 服务器端口</li><li><strong>smtp.tls:</strong> <code>boolean</code> 是否开启 TLS 加密</li></ul><p>发送服务器配置。</p>',30),r=[l];function s(n,c,d,p,m,h){return a(),o("div",null,r)}const b=e(t,[["render",s]]);export{f as __pageData,b as default};
