import{_ as t,c as e,o as c,a as o}from"./app.7be1093f.js";const u=JSON.parse('{"title":"Ticketing Commands","description":"","frontmatter":{},"headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Ticket Channel Commands","slug":"ticket-channel-commands","link":"#ticket-channel-commands","children":[]},{"level":2,"title":"Ticket Category Commands","slug":"ticket-category-commands","link":"#ticket-category-commands","children":[]}],"relativePath":"commands/tickets.md","lastUpdated":1671753443000}'),i={name:"commands/tickets.md"},n=o('<h1 id="ticketing-commands" tabindex="-1">Ticketing Commands <a class="header-anchor" href="#ticketing-commands" aria-hidden="true">#</a></h1><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>Some commands need <code>ManageGuild</code> permission.</p></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><ul><li><strong>!ticket setup <code>&lt;#channel&gt;</code></strong>: setup a new ticket message</li><li><strong>!ticket log <code>&lt;#channel&gt;</code></strong>: setup log channel for tickets</li><li><strong>!ticket limit <code>&lt;amount&gt;</code></strong>: set maximum number of concurrent open tickets</li><li><strong>!ticket closeall</strong>: close all open tickets</li><li><strong>!ticket singleticket <code>&lt;on/off</code></strong>: members can only have 1 ticket at once</li></ul><h2 id="ticket-channel-commands" tabindex="-1">Ticket Channel Commands <a class="header-anchor" href="#ticket-channel-commands" aria-hidden="true">#</a></h2><ul><li><strong>!ticket close</strong>: close the ticket</li><li><strong>!ticket add <code>&lt;userId/roleId&gt;</code></strong>: add user/role to the ticket</li><li><strong>!ticket remove <code>&lt;userId/roleId&gt;</code></strong>: remove user/role from the ticket</li></ul><h2 id="ticket-category-commands" tabindex="-1">Ticket Category Commands <a class="header-anchor" href="#ticket-category-commands" aria-hidden="true">#</a></h2><ul><li><strong>!ticketcat list</strong>: list all ticket categories</li><li><strong>!ticketcat add <code>&lt;category&gt;</code> <code>&lt;name&gt;</code></strong>: create a new ticket category</li><li><strong>!ticketcat remove <code>&lt;category&gt;</code></strong>: remove a ticket category</li></ul>',8),a=[n];function s(l,r,d,m,g,k){return c(),e("div",null,a)}const _=t(i,[["render",s]]);export{u as __pageData,_ as default};
