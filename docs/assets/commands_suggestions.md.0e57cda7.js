import{_ as t,c as e,o as s,a as o}from"./app.7be1093f.js";const m=JSON.parse('{"title":"Suggestions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Suggest","slug":"suggest","link":"#suggest","children":[]},{"level":2,"title":"Suggestion Configuration","slug":"suggestion-configuration","link":"#suggestion-configuration","children":[]}],"relativePath":"commands/suggestions.md","lastUpdated":1671039555000}'),n={name:"commands/suggestions.md"},g=o('<h1 id="suggestions" tabindex="-1">Suggestions <a class="header-anchor" href="#suggestions" aria-hidden="true">#</a></h1><h2 id="suggest" tabindex="-1">Suggest <a class="header-anchor" href="#suggest" aria-hidden="true">#</a></h2><p><strong>!suggest <code>&lt;suggestion&gt;</code></strong></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This command can only be used every 20 seconds.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>These below commands can only be used by members who have <strong>ManageServer</strong> permission.</p></div><h2 id="suggestion-configuration" tabindex="-1">Suggestion Configuration <a class="header-anchor" href="#suggestion-configuration" aria-hidden="true">#</a></h2><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><strong>!suggestion status <code>&lt;on|off&gt;</code></strong></td><td>Enable or disable the suggestion system</td></tr><tr><td><strong>!suggestion channel <code>&lt;#channel&gt;</code></strong></td><td>Setup the Channel (add off if you want to <strong>disable it</strong></td></tr><tr><td><strong>!suggestion appch <code>&lt;#channel&gt;</code></strong></td><td>Send approved suggestions to a channel</td></tr><tr><td><strong>!suggestion rejch <code>&lt;#channel&gt;</code></strong></td><td>Send rejected suggestions to a channel</td></tr><tr><td><strong>!suggestion approve <code>&lt;channel&gt; &lt;messageId&gt; &lt;reason&gt;</code></strong></td><td>Approves a suggestion</td></tr><tr><td><strong>!suggestion reject <code>&lt;channel&gt; &lt;messageId&gt; &lt;reason&gt;</code></strong></td><td>Reject a suggestion</td></tr><tr><td><strong>suggestion staffadd <code>&lt;roleId&gt;</code></strong></td><td>Add a staff role to approve/reject/delete suggestions</td></tr><tr><td><strong>!suggestion staffremove <code>&lt;roleId&gt;</code></strong></td><td>Remove a staff role to approve/reject/delete suggestions</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p>When clicking on the approve/reject/delete suggestion buttons, you will be asked in a <strong>modal</strong> to give a reason.</p></div>',8),d=[g];function a(r,i,c,l,u,h){return s(),e("div",null,d)}const f=t(n,[["render",a]]);export{m as __pageData,f as default};
