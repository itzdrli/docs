import{_ as c,k as d,f as s,A as o,l as e,D as n,m as i,C as l,j as r}from"./chunks/framework.DmHN1gsO.js";const te=JSON.parse('{"title":"Système commande","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/manual/usage/command.md","filePath":"fr-FR/manual/usage/command.md"}'),u={name:"fr-FR/manual/usage/command.md"},p=e("h1",{id:"systeme-commande",tabindex:"-1"},[n("Système commande "),e("a",{class:"header-anchor",href:"#systeme-commande","aria-label":'Permalink to "Système commande"'},"​")],-1),m=e("p",null,"Après avoir appris les bases de l'utilisation de la console, nous pouvons enfin commencer à explorer comment dialoguer avec le robot ! Commençons par l'exemple que nous avons vu dans la section précédente :",-1),h=e("p",null,"Commandes disponibles : ",-1),_=e("p",{class:"indent-1"},"echo Envoi de message",-1),f=e("p",{class:"indent-1"},"help Afficher l'aide",-1),g=e("p",null,'Tapez "help <commande>" pour voir la syntaxe et les exemples pour une commande spécifique.',-1),k=i('<p>La sortie ci-dessus concerne deux plugins :</p><ul><li>help 指令由 <a href="./../../plugins/common/help.html">help</a> 插件提供，它可以显示指令列表或具体指令的帮助信息</li><li>echo 指令由 <a href="./../../plugins/common/echo.html">echo</a> 插件提供，它可以将用户的输入原样返回</li></ul><p>La plupart des fonctionnalités d&#39;un robot Koishi sont proposés via des commandes. Lorsque vous installez davantage de plugins, vous pouvez utiliser à plus de commandes.</p><h2 id="afficher-l-aide" tabindex="-1">Afficher l&#39;aide <a class="header-anchor" href="#afficher-l-aide" aria-label="Permalink to &quot;Afficher l&#39;aide&quot;">​</a></h2><p>La commande « help » accepte un paramètre optionnel pour afficher des informations d&#39;aide pour une commande spécifique :</p>',5),v=e("p",null,"Commande : echo <message...>",-1),b=e("p",null,"Envoi de message",-1),x=e("p",null,"Options disponibles :",-1),A=e("p",{class:"indent-1"},"-e, --escape Échapper le message",-1),T=e("p",{class:"indent-1"},"-E, --unescape Décoder le message",-1),q=e("p",null,"Vous avez peut-être remarqué que la commande « help » est elle-même une commande. Vous vous demandez peut-être si vous pouvez utiliser « help » pour afficher des informations d'aide sur la commande « help ». La réponse est oui :",-1),P=e("p",null,"Commande : help [commande]",-1),C=e("p",null,"Afficher l'aide",-1),y=e("p",null,"Options disponibles :",-1),S=e("p",{class:"indent-1"},"-a, --authority Afficher les configurations d'autorisés",-1),E=e("p",{class:"indent-1"},"-H, --show-hidden Afficher les options et commandes invisibles",-1),V=i('<h2 id="arguments-et-options" tabindex="-1">Arguments et options <a class="header-anchor" href="#arguments-et-options" aria-label="Permalink to &quot;Arguments et options&quot;">​</a></h2><p>在上面的用法中，我们接触到了两个新的概念：<strong>参数 (Argument)</strong> 和 <strong>选项 (Option)</strong>。</p><p>参数分为必选参数和可选参数，分别用尖括号 <code>&lt;&gt;</code> 和方括号 <code>[]</code> 表示。Une commande peut avoir un nombre quelconque d&#39;arguments, et leur ordre est fixe. Les utilisateurs doivent saisir les arguments dans l&#39;ordre spécifié par la commande. Les arguments obligatoires doivent apparaître avant les arguments facultatifs. Si les utilisateurs ne fournissent pas un nombre suffisant d&#39;arguments obligatoires, le plugin génère généralement un message d&#39;erreur. Les arguments supplémentaires fournis par les utilisateurs sont ignorés.</p><p>Par exemple, la commande « help » a un argument facultatif qui représente le nom de la commande à consulter. La commande « echo » a un argument obligatoire qui représente le message à envoyer. Voici ce qui se passe si l&#39;utilisateur ne fournit pas l&#39;argument obligatoire :</p>',4),z=e("p",null,"Veuillez entrer le texte à envoyer.",-1),F=e("p",null,[n("Les options contrôlent également le comportement d'une commande. 它通常以 "),e("code",null,"-"),n(" 或 "),e("code",null,"--"),n(" 开头，后面不带空格地跟着一个固定的单词，称为选项名称。Les options n'ont pas d'ordre spécifique, mais il est généralement recommandé de les placer avant les arguments. Par exemple, nous pouvons essayer ceci :")],-1),L=e("img",{src:"https://koishi.chat/logo.png",width:"100"},null,-1),K=e("p",null,[n("在上面的例子中，我们使用了 "),e("code",null,"-E"),n(" 选项，成功改变了输出的内容。Nous expliquerons plus en détail comment cela fonctionne dans les sections suivantes.")],-1),I=e("p",null,[n("Les arguments peuvent être également de longueur fixe ou variable. Les arguments de longueur fixe ne peuvent pas contenir d'espaces, tandis que les arguments de longueur variables le peuvent. 变长参数通过参数名前后的 "),e("code",null,"..."),n(" 来指示，例如 "),e("code",null,"echo"),n(" 指令的参数就是一个变长参数。Si vous souhaitez saisir du contenu contenant des espaces pour un argument de longueur fixe, vous pouvez utiliser des guillemets pour l'encadrer, par exemple :")],-1),N=e("p",null,"En outre, certaines options peuvent également accepter des arguments. Par exemple, si vous avez installé le plugin de traduction, voici ce que vous obtiendrez :",-1),D=e("p",null,"Commande : translate <text...>",-1),R=e("p",null,"Traduction",-1),j=e("p",null,"Options disponibles :",-1),G=e("p",{class:"indent-1"},"-s, --source <lang> Langue source (détection automatique par défaut)",-1),O=e("p",{class:"indent-1"},"-t, --target <lang> Langue cible (chinois par défaut)",-1),B=i(`<p>在这个例子中，<code>-s</code> 和 <code>-t</code> 都是带有参数的选项。我们使用 <code>-t ja</code> 来指定目标语言为日语，源语言仍然采用了默认行为。</p><h2 id="prefixe-de-declenchement" tabindex="-1">Préfixe de déclenchement <a class="header-anchor" href="#prefixe-de-declenchement" aria-label="Permalink to &quot;Préfixe de déclenchement&quot;">​</a></h2><p>Cependant, dans un canal de guilde, déclencher une commande avec un seul mot est très sujet aux erreurs. Pour éviter cette situation, Koishi introduit le concept de préfixe de déclenchement. 在「全局设置」中，我们提供了名为 <code>prefix</code> 和 <code>nickname</code> 的配置项。假如将 <code>prefix</code> 设置为 <code>/</code>，<code>nickname</code> 设置为 <code>四季酱</code>，则在群聊环境下只有以下信息可以触发指令调用：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Shiki,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> bonjour</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">@Shiki,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> bonjour</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">/echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> bonjour</span></span></code></pre></div><p>En d&#39;autres termes, une commande peut être déclenchée si :</p><ul><li>消息以 <code>prefix</code> 开头，后面紧跟着指令调用</li><li>消息以 <code>nickname</code> 开头，后面可以有逗号或空白字符，再后面是指令调用</li><li>消息以 @机器人 开头 (可以有多个 <code>@</code>，但至少一个是机器人账号)，后面是指令调用</li></ul><p>Pour les guildes contenant un grand nombre de personnes ou plusieurs robots, nous vous recommandons fortement de configurer de préfixes de déclenchement différents pour chaque robot.En revanche, dans les canaux directs, il n&#39;y aura pas de problème des erreurs de commande déclenchée, donc il n&#39;y a les restrictions ci-dessus. Les commandes sans préfixes de déclenchement peuvent également être exécutés normalement.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>关于 <code>prefix</code> 的几点提示：</strong></p><ol><li><code>prefix</code> 是一个列表，默认值为 <code>[&#39;&#39;]</code> 表示无需前缀也能触发；将列表清空会导致所有指令都无法通过 <code>prefix</code> 触发 (但仍然可以通过私聊或 <code>nickname</code> 或 @机器人 触发)</li><li>如果你在 <code>prefix</code> 中设置了多个值，例如 <code>[&#39;.&#39;, &#39;/&#39;, &#39;&#39;]</code>，那么 <code>.</code>, <code>/</code> 或无前缀都能触发指令；但由于 Koishi 是按顺序匹配各个前缀的，因此空串 <code>&#39;&#39;</code> 必须写在最后一个</li><li>可以为不同的会话设置不同的 <code>prefix</code>，具体请参考 <a href="./customize.html#过滤器">过滤器</a> 一节</li></ol></div><h2 id="sous-commande" tabindex="-1">sous-commande <a class="header-anchor" href="#sous-commande" aria-label="Permalink to &quot;sous-commande&quot;">​</a></h2><p><a href="./../../plugins/common/admin.html">admin</a> 插件提供了名为 user 的指令，现在让我们调用一下：</p>`,10),$=e("p",null,"指令：user",-1),w=e("p",null,"Gestion des utilisateurs",-1),H=e("p",null,"可用的子指令有：",-1),U=e("p",{class:"indent-1"},"authorize 权限管理",-1),J=e("p",{class:"indent-1"},"user.locale 语言偏好",-1),W=i("<p>这里出现了一个新的概念：子指令。子指令在调用上与普通的指令并没有区别，但它们将不会显示在 <code>help</code> 返回的全局指令列表中，而只会显示在父指令 <code>user</code> 的帮助信息中。这样设计的目的是为了避免指令列表过于冗长，同时也将指令以一种更清晰的方式进行了组织。</p><p>在上面的例子中，我们还能发现 Koishi 存在两种不同的子指令：一种是 <strong>层级式</strong>，例如 <code>authorize</code>；而另一种则是 <strong>派生式</strong>，例如 <code>user.locale</code>。后者跟前者的区别是，它的名称带有父指令的名称，以及一个小数点 <code>.</code>。在调用时，我们也需要加上这个小数点：</p>",2),M=e("p",null,[n("如果父指令本身没有功能，那么 "),e("code",null,"user"),n(" 和 "),e("code",null,"user -h"),n(" 的效果是一样的。此时，我们也可以使用空格代替小数点进行派生式子指令的调用：")],-1),Q=i('<p>熟悉 Git 的用户可能会发现，这种设计正是借鉴了 Git 的二级指令：当一个指令的功能过于复杂时，我们可以将其拆分为多个子指令，从而使得指令的功能更加清晰。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>至于 user.locale 是干什么的，想必大家也已经猜出来了。我们留到 <a href="./customize.html#国际化">国际化</a> 一节再详细介绍。</p></div><h2 id="gestion-des-commandes" tabindex="-1">Gestion des commandes <a class="header-anchor" href="#gestion-des-commandes" aria-label="Permalink to &quot;Gestion des commandes&quot;">​</a></h2><p>打开控制台，我们会在活动栏中找到名为「指令管理」的页面。你可以在这里查看当前所有指令的列表，并对指令的行为进行设置。</p><h3 id="设置别名" tabindex="-1">设置别名 <a class="header-anchor" href="#设置别名" aria-label="Permalink to &quot;设置别名&quot;">​</a></h3><p>点进任意指令的详情页，首先就能看到「名称设置」，这里展示了指令的全部别名。每个别名都能被用来触发指令，而第一个别名则会作为默认名称显示在帮助中。</p><p>你可以在这里添加或删除别名，也可以将任意别名设置为默认的显示名称。例如，在 <code>echo</code> 指令中点击「添加别名」，输入 <code>复读</code>，然后点击「设为默认」，这样一来，用户在帮助中看到的就是 <code>复读</code> 而不是 <code>echo</code> 了。</p><h3 id="添加子指令" tabindex="-1">添加子指令 <a class="header-anchor" href="#添加子指令" aria-label="Permalink to &quot;添加子指令&quot;">​</a></h3><p>在左侧栏中，你可以将任何指令 (派生式指令除外) 拖至其他指令的下方，这将使得前者成为后者的子指令。例如，我们可以将 <a href="./../../plugins/common/bind.html"><code>bind</code></a> 指令设置为 <code>user</code> 指令的子指令，因为这属于用户管理的一部分。</p><p>点击右上角的加号按钮，我们可以创建一个新指令。这个新指令自然是没有行为的，它的主要目的是作为其他指令的父指令，已获得更好的展示效果。对于通过此方法创建的新指令，我们可以通过点击右上角的垃圾桶按钮将其移除。</p><h3 id="gestion-des-autorisations" tabindex="-1">Gestion des autorisations <a class="header-anchor" href="#gestion-des-autorisations" aria-label="Permalink to &quot;Gestion des autorisations&quot;">​</a></h3><p>在「名称设置」下方还有更多的配置项，我们可以在这里进一步配置指令对用户的访问权限。例如，将 echo 指令的 <code>authority</code> 设置为 <code>2</code>，那么将只有 2 级以上权限的用户才能调用该指令。</p><p>我们甚至还可以单独设置每一个指令选项的权限等级。例如，我们可以单独给 <code>-E, --unescape</code> 选项设置 <code>authority</code> 为 3。这样一来，只有 3 级以上权限的用户才能使用 <code>echo -E</code> 的功能。</p><p>关于用户权限，请参考 <a href="./customize.html#权限管理">权限管理</a> 一节。</p>',14);function X(Y,Z,ee,se,oe,ne){const a=l("chat-message"),t=l("chat-panel");return r(),d("div",null,[p,m,s(t,null,{default:o(()=>[s(a,{nickname:"Alice"},{default:o(()=>[n("help")]),_:1}),s(a,{nickname:"Koishi"},{default:o(()=>[h,_,f,g]),_:1})]),_:1}),k,s(t,null,{default:o(()=>[s(a,{nickname:"Alice"},{default:o(()=>[n("help echo")]),_:1}),s(a,{nickname:"Koishi"},{default:o(()=>[v,b,x,A,T]),_:1})]),_:1}),q,s(t,null,{default:o(()=>[s(a,{nickname:"Alice"},{default:o(()=>[n("help help")]),_:1}),s(a,{nickname:"Koishi"},{default:o(()=>[P,C,y,S,E]),_:1})]),_:1}),V,s(t,null,{default:o(()=>[s(a,{nickname:"Alice"},{default:o(()=>[n("echo")]),_:1}),s(a,{nickname:"Koishi"},{default:o(()=>[z]),_:1})]),_:1}),F,s(t,null,{default:o(()=>[s(a,{nickname:"Alice"},{default:o(()=>[n('echo <image url="https://koishi.chat/logo.png"/>')]),_:1}),s(a,{nickname:"Koishi"},{default:o(()=>[n('<image url="https://koishi.chat/logo.png"/>')]),_:1}),s(a,{nickname:"Alice"},{default:o(()=>[n('echo -E <image url="https://koishi.chat/logo.png"/>')]),_:1}),s(a,{nickname:"Koishi"},{default:o(()=>[L]),_:1})]),_:1}),K,I,s(t,null,{default:o(()=>[s(a,{nickname:"Alice"},{default:o(()=>[n('help "foo bar"')]),_:1})]),_:1}),N,s(t,null,{default:o(()=>[s(a,{nickname:"Alice"},{default:o(()=>[n("help translate")]),_:1}),s(a,{nickname:"Koishi"},{default:o(()=>[D,R,j,G,O]),_:1}),s(a,{nickname:"Alice"},{default:o(()=>[n("translate -t fr Hello, World")]),_:1}),s(a,{nickname:"Koishi"},{default:o(()=>[n("Bonjour le monde")]),_:1})]),_:1}),B,s(t,null,{default:o(()=>[s(a,{nickname:"Alice"},{default:o(()=>[n("user")]),_:1}),s(a,{nickname:"Koishi"},{default:o(()=>[$,w,H,U,J]),_:1})]),_:1}),W,s(t,null,{default:o(()=>[s(a,{nickname:"Alice"},{default:o(()=>[n("user.locale en")]),_:1}),s(a,{nickname:"Koishi"},{default:o(()=>[n("User data updated.")]),_:1})]),_:1}),M,s(t,null,{default:o(()=>[s(a,{nickname:"Alice"},{default:o(()=>[n("user locale zh ")]),_:1}),s(a,{nickname:"Koishi"},{default:o(()=>[n("Les données de l'utilisateur ont été modifiées.")]),_:1})]),_:1}),Q])}const ie=c(u,[["render",X]]);export{te as __pageData,ie as default};
