import{_ as e,k as o,j as t,m as r}from"./chunks/framework.DmHN1gsO.js";const h=JSON.parse('{"title":"@koishijs/plugin-adapter-onebot","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/plugins/adapter/onebot.md","filePath":"en-US/plugins/adapter/onebot.md"}'),a={name:"en-US/plugins/adapter/onebot.md"},E=r('<h1 id="koishijs-plugin-adapter-onebot" tabindex="-1">@koishijs/plugin-adapter-onebot <a class="header-anchor" href="#koishijs-plugin-adapter-onebot" aria-label="Permalink to &quot;@koishijs/plugin-adapter-onebot&quot;">​</a></h1><p><a href="https://github.com/howmanybots/onebot" target="_blank" rel="noreferrer">OneBot</a> 是一个聊天机器人应用接口标准，目前可用于 QQ 等平台。</p><h2 id="接入方式" tabindex="-1">接入方式 <a class="header-anchor" href="#接入方式" aria-label="Permalink to &quot;接入方式&quot;">​</a></h2><p>请自行参考 OneBot 实现侧的文档进行搭建，随后填写下面的配置项。</p><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><h3 id="config-protocol" tabindex="-1">config.protocol <a class="header-anchor" href="#config-protocol" aria-label="Permalink to &quot;config.protocol&quot;">​</a></h3><ul><li>可选值: http, ws, ws-reverse</li></ul><p>要使用的协议类型。</p><h3 id="config-token" tabindex="-1">config.token <a class="header-anchor" href="#config-token" aria-label="Permalink to &quot;config.token&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>发送信息时用于验证的字段。</p><h3 id="config-endpoint" tabindex="-1">config.endpoint <a class="header-anchor" href="#config-endpoint" aria-label="Permalink to &quot;config.endpoint&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>如果使用了 HTTP，则该配置将作为发送信息的服务端；如果使用了 WebSocket，则该配置将作为监听事件和发送信息的服务端。</p><h3 id="config-proxyagent" tabindex="-1">config.proxyAgent <a class="header-anchor" href="#config-proxyagent" aria-label="Permalink to &quot;config.proxyAgent&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>默认值: <a href="./../../api/core/app.html#options-request-proxyagent"><code>app.config.request.proxyAgent</code></a></li></ul><p>请求时默认使用的网络代理。</p><h3 id="config-path" tabindex="-1">config.path <a class="header-anchor" href="#config-path" aria-label="Permalink to &quot;config.path&quot;">​</a></h3><ul><li>类型：<code>string</code></li><li>默认值：<code>&#39;/onebot&#39;</code></li></ul><p>服务器监听的路径。仅用于 HTTP 或 WS Reverse 通信方式。</p><h3 id="config-secret" tabindex="-1">config.secret <a class="header-anchor" href="#config-secret" aria-label="Permalink to &quot;config.secret&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>接收信息时用于验证的字段，应与 OneBot 的 <code>secret</code> 配置保持一致。</p><h2 id="内部-api" tabindex="-1">内部 API <a class="header-anchor" href="#内部-api" aria-label="Permalink to &quot;内部 API&quot;">​</a></h2><p>你可以通过 <code>bot.internal</code> 或 <code>session.onebot</code> 访问内部 API，参见 <a href="./../../guide/adapter/bot.html#访问内部接口">访问内部接口</a>。</p><h3 id="onebot-v11-标准-api" tabindex="-1">OneBot v11 标准 API <a class="header-anchor" href="#onebot-v11-标准-api" aria-label="Permalink to &quot;OneBot v11 标准 API&quot;">​</a></h3><ul><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#send_private_msg-%E5%8F%91%E9%80%81%E7%A7%81%E8%81%8A%E6%B6%88%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.sendPrivateMsg()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#send_group_msg-%E5%8F%91%E9%80%81%E7%BE%A4%E6%B6%88%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.sendGroupMsg()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#delete_msg-%E6%92%A4%E5%9B%9E%E6%B6%88%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.deleteMsg()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_msg-%E8%8E%B7%E5%8F%96%E6%B6%88%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.getMsg()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_forward_msg-%E8%8E%B7%E5%8F%96%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91%E6%B6%88%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.getForwardMsg()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#send_like-%E5%8F%91%E9%80%81%E5%A5%BD%E5%8F%8B%E8%B5%9E" target="_blank" rel="noreferrer"><code>onebot.sendLike()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#set_group_kick-%E7%BE%A4%E7%BB%84%E8%B8%A2%E4%BA%BA" target="_blank" rel="noreferrer"><code>onebot.setGroupKick()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#set_group_ban-%E7%BE%A4%E7%BB%84%E5%8D%95%E4%BA%BA%E7%A6%81%E8%A8%80" target="_blank" rel="noreferrer"><code>onebot.setGroupBan()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#set_group_anonymous_ban-%E7%BE%A4%E7%BB%84%E5%8C%BF%E5%90%8D%E7%94%A8%E6%88%B7%E7%A6%81%E8%A8%80" target="_blank" rel="noreferrer"><code>onebot.setGroupAnonymousBan()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#set_group_whole_ban-%E7%BE%A4%E7%BB%84%E5%85%A8%E5%91%98%E7%A6%81%E8%A8%80" target="_blank" rel="noreferrer"><code>onebot.setGroupWholeBan()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#set_group_admin-%E7%BE%A4%E7%BB%84%E8%AE%BE%E7%BD%AE%E7%AE%A1%E7%90%86%E5%91%98" target="_blank" rel="noreferrer"><code>onebot.setGroupAdmin()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#set_group_anonymous-%E7%BE%A4%E7%BB%84%E5%8C%BF%E5%90%8D" target="_blank" rel="noreferrer"><code>onebot.setGroupAnonymous()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#set_group_card-%E8%AE%BE%E7%BD%AE%E7%BE%A4%E5%90%8D%E7%89%87%E7%BE%A4%E5%A4%87%E6%B3%A8" target="_blank" rel="noreferrer"><code>onebot.setGroupCard()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#set_group_name-%E8%AE%BE%E7%BD%AE%E7%BE%A4%E5%90%8D" target="_blank" rel="noreferrer"><code>onebot.setGroupName()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#set_group_leave-%E9%80%80%E5%87%BA%E7%BE%A4%E7%BB%84" target="_blank" rel="noreferrer"><code>onebot.setGroupLeave()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#set_group_special_title-%E8%AE%BE%E7%BD%AE%E7%BE%A4%E7%BB%84%E4%B8%93%E5%B1%9E%E5%A4%B4%E8%A1%94" target="_blank" rel="noreferrer"><code>onebot.setGroupSpecialTitle()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#set_friend_add_request-%E5%A4%84%E7%90%86%E5%8A%A0%E5%A5%BD%E5%8F%8B%E8%AF%B7%E6%B1%82" target="_blank" rel="noreferrer"><code>onebot.setFriendAddRequest()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#set_group_add_request-%E5%A4%84%E7%90%86%E5%8A%A0%E7%BE%A4%E8%AF%B7%E6%B1%82%E9%82%80%E8%AF%B7" target="_blank" rel="noreferrer"><code>onebot.setGroupAddRequest()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_login_info-%E8%8E%B7%E5%8F%96%E7%99%BB%E5%BD%95%E5%8F%B7%E4%BF%A1%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.getLoginInfo()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_stranger_info-%E8%8E%B7%E5%8F%96%E9%99%8C%E7%94%9F%E4%BA%BA%E4%BF%A1%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.getStrangerInfo()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_friend_list-%E8%8E%B7%E5%8F%96%E5%A5%BD%E5%8F%8B%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer"><code>onebot.getFriendList()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_group_info-%E8%8E%B7%E5%8F%96%E7%BE%A4%E4%BF%A1%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.getGroupInfo()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_group_list-%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer"><code>onebot.getGroupList()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_group_member_info-%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%88%90%E5%91%98%E4%BF%A1%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.getGroupMemberInfo()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_group_member_list-%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%88%90%E5%91%98%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer"><code>onebot.getGroupMemberList()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_group_honor_info-%E8%8E%B7%E5%8F%96%E7%BE%A4%E8%8D%A3%E8%AA%89%E4%BF%A1%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.getGroupHonorInfo()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_cookies-%E8%8E%B7%E5%8F%96-cookies" target="_blank" rel="noreferrer"><code>onebot.getCookies()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_csrf_token-%E8%8E%B7%E5%8F%96-csrf-token" target="_blank" rel="noreferrer"><code>onebot.getCsrfToken()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_credentials-%E8%8E%B7%E5%8F%96-qq-%E7%9B%B8%E5%85%B3%E6%8E%A5%E5%8F%A3%E5%87%AD%E8%AF%81" target="_blank" rel="noreferrer"><code>onebot.getCredentials()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_record-%E8%8E%B7%E5%8F%96%E8%AF%AD%E9%9F%B3" target="_blank" rel="noreferrer"><code>onebot.getRecord()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_image-%E8%8E%B7%E5%8F%96%E5%9B%BE%E7%89%87" target="_blank" rel="noreferrer"><code>onebot.getImage()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#can_send_image-%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E5%8F%91%E9%80%81%E5%9B%BE%E7%89%87" target="_blank" rel="noreferrer"><code>onebot.canSendImage()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#can_send_record-%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E5%8F%91%E9%80%81%E8%AF%AD%E9%9F%B3" target="_blank" rel="noreferrer"><code>onebot.canSendRecord()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_status-%E8%8E%B7%E5%8F%96%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81" target="_blank" rel="noreferrer"><code>onebot.getStatus()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#get_version_info-%E8%8E%B7%E5%8F%96%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.getVersionInfo()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#set_restart-%E9%87%8D%E5%90%AF-onebot-%E5%AE%9E%E7%8E%B0" target="_blank" rel="noreferrer"><code>onebot.setRestart()</code></a></li><li><a href="https://github.com/botuniverse/onebot-11/blob/master/api/public.md#clean_cache-%E6%B8%85%E7%90%86%E7%BC%93%E5%AD%98" target="_blank" rel="noreferrer"><code>onebot.cleanCache()</code></a></li></ul><h3 id="go-cqhttp-扩展-api" tabindex="-1">go-cqhttp 扩展 API <a class="header-anchor" href="#go-cqhttp-扩展-api" aria-label="Permalink to &quot;go-cqhttp 扩展 API&quot;">​</a></h3><ul><li><a href="https://docs.go-cqhttp.org/api/#%E5%8F%91%E9%80%81%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91-%E7%BE%A4" target="_blank" rel="noreferrer"><code>onebot.sendGroupForwardMsg()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E6%A0%87%E8%AE%B0%E6%B6%88%E6%81%AF%E5%B7%B2%E8%AF%BB" target="_blank" rel="noreferrer"><code>onebot.markMsgAsRead()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E7%BE%A4%E6%89%93%E5%8D%A1" target="_blank" rel="noreferrer"><code>onebot.sendGroupSign()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E4%BC%81%E7%82%B9%E8%B4%A6%E5%8F%B7%E4%BF%A1%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.qidianGetAccountInfo()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%AE%BE%E7%BD%AE%E7%99%BB%E5%BD%95%E5%8F%B7%E8%B5%84%E6%96%99" target="_blank" rel="noreferrer"><code>onebot.setQqProfile()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E5%8D%95%E5%90%91%E5%A5%BD%E5%8F%8B%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer"><code>onebot.getUnidirectionalFriendList()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E5%88%A0%E9%99%A4%E5%A5%BD%E5%8F%8B" target="_blank" rel="noreferrer"><code>onebot.deleteFriend()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%AE%BE%E7%BD%AE%E7%BE%A4%E5%A4%B4%E5%83%8F" target="_blank" rel="noreferrer"><code>onebot.setGroupPortrait()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E4%B8%AD%E6%96%87%E5%88%86%E8%AF%8D-%E9%9A%90%E8%97%8F-api" target="_blank" rel="noreferrer"><code>onebot.getWordSlices()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E5%9B%BE%E7%89%87-ocr" target="_blank" rel="noreferrer"><code>onebot.ocrImage()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E7%B3%BB%E7%BB%9F%E6%B6%88%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.getGroupSystemMsg()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E4%B8%8A%E4%BC%A0%E7%A7%81%E8%81%8A%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer"><code>onebot.uploadPrivateFile()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E4%B8%8A%E4%BC%A0%E7%BE%A4%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer"><code>onebot.uploadGroupFile()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E4%BF%A1%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.getGroupFileSystemInfo()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%A0%B9%E7%9B%AE%E5%BD%95%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer"><code>onebot.getGroupRootFiles()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%AD%90%E7%9B%AE%E5%BD%95%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer"><code>onebot.getGroupFilesByFolder()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E5%88%9B%E5%BB%BA%E7%BE%A4%E6%96%87%E4%BB%B6%E6%96%87%E4%BB%B6%E5%A4%B9" target="_blank" rel="noreferrer"><code>onebot.createGroupFileFolder()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E5%88%A0%E9%99%A4%E7%BE%A4%E6%96%87%E4%BB%B6%E6%96%87%E4%BB%B6%E5%A4%B9" target="_blank" rel="noreferrer"><code>onebot.deleteGroupFolder()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E5%88%A0%E9%99%A4%E7%BE%A4%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer"><code>onebot.deleteGroupFile()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%96%87%E4%BB%B6%E8%B5%84%E6%BA%90%E9%93%BE%E6%8E%A5" target="_blank" rel="noreferrer"><code>onebot.getGroupFileUrl()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4-%E5%85%A8%E4%BD%93%E6%88%90%E5%91%98-%E5%89%A9%E4%BD%99%E6%AC%A1%E6%95%B0" target="_blank" rel="noreferrer"><code>onebot.getGroupAtAllRemain()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96VIP%E4%BF%A1%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.getVipInfo()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E5%8F%91%E9%80%81%E7%BE%A4%E5%85%AC%E5%91%8A" target="_blank" rel="noreferrer"><code>onebot.sendGroupNotice()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%85%AC%E5%91%8A" target="_blank" rel="noreferrer"><code>onebot.getGroupNotice()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E9%87%8D%E8%BD%BD%E4%BA%8B%E4%BB%B6%E8%BF%87%E6%BB%A4%E5%99%A8" target="_blank" rel="noreferrer"><code>onebot.reloadEventFilter()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6%E5%88%B0%E7%BC%93%E5%AD%98%E7%9B%AE%E5%BD%95" target="_blank" rel="noreferrer"><code>onebot.downloadFile()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E8%B4%A6%E5%8F%B7%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer"><code>onebot.getOnlineClients()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%B6%88%E6%81%AF%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95" target="_blank" rel="noreferrer"><code>onebot.getGroupMsgHistory()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%AE%BE%E7%BD%AE%E7%B2%BE%E5%8D%8E%E6%B6%88%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.setEssenceMsg()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E7%A7%BB%E5%87%BA%E7%B2%BE%E5%8D%8E%E6%B6%88%E6%81%AF" target="_blank" rel="noreferrer"><code>onebot.deleteEssenceMsg()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%B2%BE%E5%8D%8E%E6%B6%88%E6%81%AF%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer"><code>onebot.getEssenceMsgList()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E6%A3%80%E6%9F%A5%E9%93%BE%E6%8E%A5%E5%AE%89%E5%85%A8%E6%80%A7" target="_blank" rel="noreferrer"><code>onebot.checkUrlSafely()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E5%9C%A8%E7%BA%BF%E6%9C%BA%E5%9E%8B" target="_blank" rel="noreferrer"><code>onebot.getModelShow()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E8%AE%BE%E7%BD%AE%E5%9C%A8%E7%BA%BF%E6%9C%BA%E5%9E%8B" target="_blank" rel="noreferrer"><code>onebot.setModelShow()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E5%88%A0%E9%99%A4%E5%8D%95%E9%A1%B9%E5%A5%BD%E5%8F%8B" target="_blank" rel="noreferrer"><code>onebot.delete_unidirectional_friend()</code></a></li><li><a href="https://docs.go-cqhttp.org/api/#%E5%8F%91%E9%80%81%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91-%E5%A5%BD%E5%8F%8B" target="_blank" rel="noreferrer"><code>onebot.send_private_forward_msg()</code></a></li></ul><h3 id="频道-api" tabindex="-1">频道 API <a class="header-anchor" href="#频道-api" aria-label="Permalink to &quot;频道 API&quot;">​</a></h3><ul><li><a href="https://github.com/Mrs4s/go-cqhttp/blob/master/docs/guild.md#%E8%8E%B7%E5%8F%96%E9%A2%91%E9%81%93%E7%B3%BB%E7%BB%9F%E5%86%85BOT%E7%9A%84%E8%B5%84%E6%96%99" target="_blank" rel="noreferrer"><code>onebot.getGuildServiceProfile()</code></a></li><li><a href="https://github.com/Mrs4s/go-cqhttp/blob/master/docs/guild.md#%E8%8E%B7%E5%8F%96%E9%A2%91%E9%81%93%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer"><code>onebot.getGuildList()</code></a></li><li><a href="https://github.com/Mrs4s/go-cqhttp/blob/master/docs/guild.md#%E9%80%9A%E8%BF%87%E8%AE%BF%E5%AE%A2%E8%8E%B7%E5%8F%96%E9%A2%91%E9%81%93%E5%85%83%E6%95%B0%E6%8D%AE" target="_blank" rel="noreferrer"><code>onebot.getGuildMetaByGuest()</code></a></li><li><a href="https://github.com/Mrs4s/go-cqhttp/blob/master/docs/guild.md#%E8%8E%B7%E5%8F%96%E5%AD%90%E9%A2%91%E9%81%93%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer"><code>onebot.getGuildChannelList()</code></a></li><li><a href="https://github.com/Mrs4s/go-cqhttp/blob/master/docs/guild.md#%E8%8E%B7%E5%8F%96%E9%A2%91%E9%81%93%E6%88%90%E5%91%98%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer"><code>onebot.getGuildMembers()</code></a></li><li><a href="https://github.com/Mrs4s/go-cqhttp/blob/master/docs/guild.md#%E5%8F%91%E9%80%81%E4%BF%A1%E6%81%AF%E5%88%B0%E5%AD%90%E9%A2%91%E9%81%93" target="_blank" rel="noreferrer"><code>onebot.sendGuildChannelMsg()</code></a></li></ul>',31),i=[E];function l(n,c,b,s,d,p){return t(),o("div",null,i)}const B=e(a,[["render",l]]);export{h as __pageData,B as default};
