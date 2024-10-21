import{s as P,C as x,D as E,b as L,d as _,e as b,i as S,n as q,O as W,B as K,a8 as F,w as k,L as G,x as N,y as Z,z as Q,f as X,p as J,A as T}from"./scheduler.ee52cacd.js";import{S as j,i as O,t as M,g as Y,a as R,c as $,f as A,b as ee,d as te,m as ne,e as ie}from"./index.a2391391.js";import{g as oe}from"./app.bd3189d3.js";import{e as se}from"./supabase.2c784bff.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="9fa4a9cf-b648-441e-bec8-6e52cc1a61b8",i._sentryDebugIdIdentifier="sentry-dbid-9fa4a9cf-b648-441e-bec8-6e52cc1a61b8")}catch{}})();const le=["Activate","AddUndo","BeforeAddUndo","BeforeExecCommand","BeforeGetContent","BeforeRenderUI","BeforeSetContent","BeforePaste","Blur","Change","ClearUndos","Click","ContextMenu","Copy","Cut","Dblclick","Deactivate","Dirty","Drag","DragDrop","DragEnd","DragGesture","DragOver","Drop","ExecCommand","Focus","FocusIn","FocusOut","GetContent","Hide","Init","KeyDown","KeyPress","KeyUp","LoadContent","MouseDown","MouseEnter","MouseLeave","MouseMove","MouseOut","MouseOver","MouseUp","NodeChange","ObjectResizeStart","ObjectResized","ObjectSelected","Paste","PostProcess","PostRender","PreProcess","ProgressState","Redo","Remove","Reset","ResizeEditor","SaveContent","SelectionChange","SetAttrib","SetContent","Show","Submit","Undo","VisualAid"],ae=(i,e)=>{le.forEach(t=>{i.on(t,l=>{e(t.toLowerCase(),{eventName:t,event:l,editor:i})})})};function re(i){let e;return{c(){e=x("textarea"),this.h()},l(t){e=E(t,"TEXTAREA",{id:!0,style:!0}),L(e).forEach(_),this.h()},h(){b(e,"id",i[0]),G(e,"visibility","hidden")},m(t,l){S(t,e,l),i[14](e)},p(t,l){l&1&&b(e,"id",t[0])},d(t){t&&_(e),i[14](null)}}}function ce(i){let e;return{c(){e=x("div"),this.h()},l(t){e=E(t,"DIV",{id:!0}),L(e).forEach(_),this.h()},h(){b(e,"id",i[0])},m(t,l){S(t,e,l),i[13](e)},p(t,l){l&1&&b(e,"id",t[0])},d(t){t&&_(e),i[13](null)}}}function de(i){let e;function t(n,o){return n[1]?ce:re}let l=t(i),a=l(i);return{c(){e=x("div"),a.c(),this.h()},l(n){e=E(n,"DIV",{class:!0});var o=L(e);a.l(o),o.forEach(_),this.h()},h(){b(e,"class",i[2])},m(n,o){S(n,e,o),a.m(e,null),i[15](e)},p(n,[o]){l===(l=t(n))&&a?a.p(n,o):(a.d(1),a=l(n),a&&(a.c(),a.m(e,null))),o&4&&b(e,"class",n[2])},i:q,o:q,d(n){n&&_(e),a.d(),i[15](null)}}}const U=i=>i+"_"+Math.floor(Math.random()*1e9)+String(Date.now()),ue=()=>{let i={listeners:[],scriptId:U("tiny-script"),scriptLoaded:!1,injected:!1};const e=(l,a,n,o)=>{i.injected=!0;const c=a.createElement("script");c.referrerPolicy="origin",c.type="application/javascript",c.src=n,c.onload=()=>{o()},a.head&&a.head.appendChild(c)};return{load:(l,a,n)=>{i.scriptLoaded?n():(i.listeners.push(n),i.injected||e(i.scriptId,l,a,()=>{i.listeners.forEach(o=>o()),i.scriptLoaded=!0}))}}};let fe=ue();function me(i,e,t){let{id:l=U("tinymce-svelte")}=e,{inline:a=void 0}=e,{disabled:n=!1}=e,{conf:o={}}=e,{modelEvents:c="change input undo redo"}=e,{value:s=""}=e,{text:f=""}=e,{cssClass:m="tinymce-wrapper"}=e,C,h,u,y=s,p=n;const D=W(),d=()=>{const g=(()=>typeof window<"u"?window:global)();return g&&g.tinymce?g.tinymce:null},w=()=>{const r={...o,target:h,inline:a!==void 0?a:o.inline!==void 0?o.inline:!1,readonly:n,setup:g=>{t(10,u=g),g.on("init",()=>{g.setContent(s),g.on(c,()=>{t(11,y=g.getContent()),y!==s&&(t(5,s=y),t(6,f=g.getContent({format:"text"})))})}),ae(g,D),typeof o.setup=="function"&&o.setup(g)}};t(4,h.style.visibility="",h),d().init(r)};K(()=>{if(d()!==null)w();else{const r=window.location.origin+"/js/tinymce/tinymce.min.js";fe.load(C.ownerDocument,r,()=>{w()})}}),F(()=>{var r;u&&((r=d())==null||r.remove(u))});function I(r){k[r?"unshift":"push"](()=>{h=r,t(4,h)})}function z(r){k[r?"unshift":"push"](()=>{h=r,t(4,h)})}function V(r){k[r?"unshift":"push"](()=>{C=r,t(3,C)})}return i.$$set=r=>{"id"in r&&t(0,l=r.id),"inline"in r&&t(1,a=r.inline),"disabled"in r&&t(7,n=r.disabled),"conf"in r&&t(8,o=r.conf),"modelEvents"in r&&t(9,c=r.modelEvents),"value"in r&&t(5,s=r.value),"text"in r&&t(6,f=r.text),"cssClass"in r&&t(2,m=r.cssClass)},i.$$.update=()=>{var r;if(i.$$.dirty&7328){if(u&&y!==s)try{u.setContent(s),t(6,f=u.getContent({format:"text"}))}catch(g){console.error("Error setting default value",g)}u&&n!==p&&(t(12,p=n),typeof((r=u.mode)==null?void 0:r.set)=="function"?u.mode.set(n?"readonly":"design"):u.setMode(n?"readonly":"design"))}},[l,a,m,C,h,s,f,n,o,c,u,y,p,I,z,V]}class he extends j{constructor(e){super(),O(this,e,me,de,P,{id:0,inline:1,disabled:7,conf:8,modelEvents:9,value:5,text:6,cssClass:2})}}var H,v;const ge=i=>{i.PluginManager.add("eqneditor",function(e,t){var l=new i.dom.ScriptLoader;l.add("https://assets.cdn.clsrio.com/eqneditor.api.min.js");var a=l.loadQueue();i.DOM.loadCSS("https://assets.cdn.clsrio.com/eqneditor_1.css"),e.ui.registry.addIcon("logo",`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="18px" height="20px" viewBox="0 0 18 20" enable-background="new 0 0 18 20" xml:space="preserve">
<rect x="4.4" y="5.1" fill="none" width="38.6" height="43.4"/>
<g enable-background="new    ">
  <path d="M4,9.5H2L2.3,7h2.1l0.3-1.8C4.7,4.6,4.9,4.1,5,3.6c0.2-0.5,0.4-0.9,0.7-1.3c0.3-0.4,0.8-0.7,1.3-0.9C7.7,1.1,8.4,1,9.2,1
      c0.3,0,0.6,0,0.9,0c0.3,0,0.6,0.1,0.9,0.1l-0.5,2.7c-0.2-0.1-0.3-0.1-0.5-0.2c-0.1,0-0.3-0.1-0.5-0.1C9,3.7,8.6,3.8,8.4,4
      C8.1,4.2,7.9,4.7,7.8,5.4L7.6,7h2.3L9.5,9.5H7.2l-1.1,7.7H3L4,9.5z"/>
</g>
<g enable-background="new    ">
  <path d="M11.1,15.3l-2.3-3.2h2.5l1.2,1.8l1.2-1.8H16l-2.2,3.2l2.6,3.6h-2.5l-1.5-2.3L10.8,19H8.4L11.1,15.3z"/>
</g>
</svg>`),e.ui.registry.addIcon("menu",`<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='11.473512pt' height='12.266481pt' viewBox='-.239051 -.242965 11.473512 12.266481'>
    <defs>
    <path id='g0-120' d='M3.993026-3.180075C3.642341-3.092403 3.626401-2.781569 3.626401-2.749689C3.626401-2.574346 3.761893-2.454795 3.937235-2.454795S4.383562-2.590286 4.383562-2.933001C4.383562-3.387298 3.881445-3.514819 3.58655-3.514819C3.211955-3.514819 2.909091-3.251806 2.725778-2.940971C2.550436-3.363387 2.13599-3.514819 1.809215-3.514819C.940473-3.514819 .454296-2.518555 .454296-2.295392C.454296-2.223661 .510087-2.191781 .573848-2.191781C.669489-2.191781 .68543-2.231631 .70934-2.327273C.892653-2.909091 1.370859-3.291656 1.785305-3.291656C2.096139-3.291656 2.247572-3.068493 2.247572-2.781569C2.247572-2.622167 2.15193-2.255542 2.088169-2.000498C2.032379-1.769365 1.857036-1.060025 1.817186-.908593C1.705604-.478207 1.41868-.143462 1.060025-.143462C1.028144-.143462 .820922-.143462 .653549-.255044C1.020174-.342715 1.020174-.67746 1.020174-.68543C1.020174-.868742 .876712-.980324 .70137-.980324C.486177-.980324 .255044-.797011 .255044-.494147C.255044-.127522 .645579 .079701 1.052055 .079701C1.474471 .079701 1.769365-.239103 1.912827-.494147C2.088169-.103611 2.454795 .079701 2.83736 .079701C3.706102 .079701 4.184309-.916563 4.184309-1.139726C4.184309-1.219427 4.120548-1.243337 4.064757-1.243337C3.969116-1.243337 3.953176-1.187547 3.929265-1.107846C3.769863-.573848 3.315567-.143462 2.8533-.143462C2.590286-.143462 2.399004-.318804 2.399004-.653549C2.399004-.812951 2.446824-.996264 2.558406-1.44259C2.614197-1.681694 2.789539-2.383064 2.82939-2.534496C2.940971-2.948941 3.219925-3.291656 3.57858-3.291656C3.618431-3.291656 3.825654-3.291656 3.993026-3.180075Z'/>
    <path id='g1-102' d='M5.332005-4.805978C5.571108-4.805978 5.66675-4.805978 5.66675-5.033126C5.66675-5.152677 5.571108-5.152677 5.355915-5.152677H4.387547C4.614695-6.38406 4.782067-7.232877 4.877709-7.615442C4.94944-7.902366 5.200498-8.177335 5.511333-8.177335C5.762391-8.177335 6.01345-8.069738 6.133001-7.962142C5.66675-7.914321 5.523288-7.567621 5.523288-7.364384C5.523288-7.12528 5.702615-6.981818 5.929763-6.981818C6.168867-6.981818 6.527522-7.185056 6.527522-7.639352C6.527522-8.141469 6.025405-8.416438 5.499377-8.416438C4.985305-8.416438 4.483188-8.033873 4.244085-7.567621C4.028892-7.149191 3.90934-6.718804 3.634371-5.152677H2.833375C2.606227-5.152677 2.486675-5.152677 2.486675-4.937484C2.486675-4.805978 2.558406-4.805978 2.797509-4.805978H3.56264C3.347447-3.694147 2.857285-.992279 2.582316 .286924C2.379078 1.327024 2.199751 2.199751 1.601993 2.199751C1.566127 2.199751 1.219427 2.199751 1.004234 1.972603C1.613948 1.924782 1.613948 1.398755 1.613948 1.3868C1.613948 1.147696 1.43462 1.004234 1.207472 1.004234C.968369 1.004234 .609714 1.207472 .609714 1.661768C.609714 2.175841 1.135741 2.438854 1.601993 2.438854C2.82142 2.438854 3.323537 .251059 3.455044-.3467C3.670237-1.267248 4.25604-4.447323 4.315816-4.805978H5.332005Z'/>
    </defs>
    <g id='page1' transform='matrix(1.13 0 0 1.13 -63.986043 -65.03376)'>
    <use x='56.413267' y='65.753425' xlink:href='#g1-102'/>
    <use x='62.183256' y='67.546688' xlink:href='#g0-120'/>
    </g>
    </svg>`);function n(o=""){var c=document.location.protocol=="https:"?"https://":"http://";e.windowManager.open({title:"Equation Editor",size:"medium",body:{type:"panel",items:[{type:"htmlpanel",html:'<div id="equation-editor"><div id="history"></div><div id="toolbar"></div><div id="latexInput" autocorrect="off"></div><div id="equation-output"><img id="output"></div></div>'}]},buttons:[{type:"cancel",name:"closeButton",text:"Cancel"},{type:"submit",name:"submitButton",text:"Ok",buttonType:"primary"}],onSubmit:async function(s){var h;let f=H.exportAs("html");const m=/<img[^>]+src\s*=\s*['"]([^'"]+)['"][^>]*>/i,C=f.match(m);if(C){const u=se.PUBLIC_SERVER_URL+"/katex",y=(h=C[1])==null?void 0:h.replaceAll("https://latex.codecogs.com/svg.image",u);f=await(await fetch(y)).text()}else console.error("No src attribute found in the img tag.");i.activeEditor.execCommand("mceInsertContent",!1,f),v.pushToHistory(),s.close()},onCancel:function(s){s.close()},onAction:function(s,f){var m;f.name=="logo"&&((m=window.open(c+"editor.codecogs.com","_blank"))==null||m.focus())}}),a.then(()=>{var m;H=new EqEditor.Output("output"),v=EqEditor.TextArea.link("latexInput").addOutput(H).addHistoryMenu(new EqEditor.History("history")),EqEditor.Toolbar.link("toolbar").addTextArea(v);for(var s=((m=document.getElementById("history"))==null?void 0:m.childNodes)||[],f=0;f<s.length;f++)s[f].style.padding="revert";v.clear(),v.insert(o.replace(/&space;/g," "),o.length)})}return e.ui.registry.addButton("eqneditor",{title:"Equation",icon:"menu",tooltip:"Insert Equation",onAction:()=>{n()}}),e.on("dblclick",function(o){if(o.target.nodeName.toLowerCase()=="img"){var c=o.target.src.match(/(gif|svg)\.image\?(.*)/);c!=null&&n(c[2])}}),{getMetadata:()=>({name:"EqnEditor",url:"https://editor.codecogs.com/docs/3-Tiny_MCE_v4x.php"})}})};function B(i){let e,t,l,a;function n(s){i[10](s)}function o(s){i[11](s)}let c={};return i[0]!==void 0&&(c.value=i[0]),i[2]!==void 0&&(c.conf=i[2]),e=new he({props:c}),k.push(()=>A(e,"value",n)),k.push(()=>A(e,"conf",o)),{c(){ee(e.$$.fragment)},l(s){te(e.$$.fragment,s)},m(s,f){ne(e,s,f),a=!0},p(s,f){const m={};!t&&f&1&&(t=!0,m.value=s[0],T(()=>t=!1)),!l&&f&4&&(l=!0,m.conf=s[2],T(()=>l=!1)),e.$set(m)},i(s){a||(M(e.$$.fragment,s),a=!0)},o(s){R(e.$$.fragment,s),a=!1},d(s){ie(e,s)}}}function Ce(i){let e,t,l,a,n=!i[1]&&B(i);return{c(){e=x("link"),t=N(),l=x("div"),n&&n.c(),this.h()},l(o){const c=Z("svelte-257j8h",document.head);e=E(c,"LINK",{rel:!0,href:!0}),c.forEach(_),t=Q(o),l=E(o,"DIV",{});var s=L(l);n&&n.l(s),s.forEach(_),this.h()},h(){b(e,"rel","stylesheet"),b(e,"href","https://unpkg.com/katex@0.12.0/dist/katex.min.css")},m(o,c){X(document.head,e),S(o,t,c),S(o,l,c),n&&n.m(l,null),a=!0},p(o,[c]){o[1]?n&&(Y(),R(n,1,1,()=>{n=null}),$()):n?(n.p(o,c),c&2&&M(n,1)):(n=B(o),n.c(),M(n,1),n.m(l,null))},i(o){a||(M(n),a=!0)},o(o){R(n),a=!1},d(o){o&&(_(t),_(l)),_(e),n&&n.d()}}}function _e(){const e=(()=>typeof window<"u"?window:global)(),t=e&&e.tinymce?e.tinymce:null;return console.log({res:t}),t}function ye(i,e,t){let l;J(i,oe,d=>t(9,l=d));let{id:a=""}=e,{value:n=""}=e,{onChange:o=d=>{}}=e,{height:c=300}=e,{placeholder:s=""}=e,{editorWindowRef:f=void 0}=e,{maxHeight:m=void 0}=e,C=!1,h,u={plugins:"lists, link, emoticons, code, media, eqneditor",toolbar:[{name:"history",items:["undo","redo"]},{name:"styles",items:["styles"]},{name:"formatting",items:["bold","italic"]},{name:"alignment",items:["alignleft","aligncenter","alignright","alignjustify"]},{name:"indentation",items:["outdent","indent"]},{name:"list",items:["numlist","bullist"]},{name:"link",items:["link"]},{name:"insert",items:["emoticons"]},{name:"code",items:["code"]},{name:"media",items:["media"]},{name:"eqneditor",items:["eqneditor"]}],lists_indent_on_tab:!1,min_height:c,max_height:m,placeholder:s,skin:"oxide-dark",content_css:"dark",extended_valid_elements:"*[.*]",license_key:"gpl",setup:()=>{ge(_e())},init_instance_callback(d){var w;t(3,f=(w=d.iframeElement)==null?void 0:w.contentWindow),d.on("Paste Change input Undo Redo",function(){clearTimeout(h);const I=d.getContent();h=setTimeout(function(){o&&o(I),a&&localStorage.setItem(a,I)},1e3)})}};function y(d){d?(t(2,u.content_css="dark",u),t(2,u.skin="oxide-dark",u)):(t(2,u.content_css="light",u),t(2,u.skin="oxide",u)),t(1,C=!0),setTimeout(()=>{t(1,C=!1)},200)}function p(d){n=d,t(0,n)}function D(d){u=d,t(2,u)}return i.$$set=d=>{"id"in d&&t(4,a=d.id),"value"in d&&t(0,n=d.value),"onChange"in d&&t(5,o=d.onChange),"height"in d&&t(6,c=d.height),"placeholder"in d&&t(7,s=d.placeholder),"editorWindowRef"in d&&t(3,f=d.editorWindowRef),"maxHeight"in d&&t(8,m=d.maxHeight)},i.$$.update=()=>{i.$$.dirty&1&&t(0,n=n||""),i.$$.dirty&512&&y(l.isDark)},[n,C,u,f,a,o,c,s,m,l,p,D]}class ke extends j{constructor(e){super(),O(this,e,ye,Ce,P,{id:4,value:0,onChange:5,height:6,placeholder:7,editorWindowRef:3,maxHeight:8})}}export{ke as T};
//# sourceMappingURL=index.846953bc.js.map
