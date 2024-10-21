import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, g as createEventDispatcher, o as onDestroy, a as add_attribute } from './ssr-10c5b872.js';
import './_sentry-release-injection-file-6be6a010.js';
import { g as globalStore } from './app-d638cf5d.js';
import { p as public_env } from './shared-server-e0f2abd3.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9ee14154-5a7f-4f30-b451-cfbff3b3c421", e._sentryDebugIdIdentifier = "sentry-dbid-9ee14154-5a7f-4f30-b451-cfbff3b3c421");
  } catch (e2) {
  }
}();
const css = {
  code: ".tox .tox-promotion{display:none !important}",
  map: null
};
const uuid = (prefix) => {
  return prefix + "_" + Math.floor(Math.random() * 1e9) + String(Date.now());
};
const TinymceSvelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = uuid("tinymce-svelte") } = $$props;
  let { inline = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { conf = {} } = $$props;
  let { modelEvents = "change input undo redo" } = $$props;
  let { value = "" } = $$props;
  let { text = "" } = $$props;
  let { cssClass = "tinymce-wrapper" } = $$props;
  let container;
  let element;
  createEventDispatcher();
  onDestroy(() => {
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.conf === void 0 && $$bindings.conf && conf !== void 0)
    $$bindings.conf(conf);
  if ($$props.modelEvents === void 0 && $$bindings.modelEvents && modelEvents !== void 0)
    $$bindings.modelEvents(modelEvents);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.cssClass === void 0 && $$bindings.cssClass && cssClass !== void 0)
    $$bindings.cssClass(cssClass);
  $$result.css.add(css);
  return `<div${add_attribute("class", cssClass, 0)}${add_attribute("this", container, 0)}>${inline ? `<div${add_attribute("id", id, 0)}${add_attribute("this", element, 0)}></div>` : `<textarea${add_attribute("id", id, 0)} style="visibility:hidden"${add_attribute("this", element, 0)}></textarea>`} </div>`;
});
var output, textarea;
const addMathPlugin = (tinymce) => {
  tinymce.PluginManager.add("eqneditor", function(editor, url) {
    var sl = new tinymce.dom.ScriptLoader();
    sl.add("https://assets.cdn.clsrio.com/eqneditor.api.min.js");
    var loaded = sl.loadQueue();
    tinymce.DOM.loadCSS("https://assets.cdn.clsrio.com/eqneditor_1.css");
    editor.ui.registry.addIcon(
      "logo",
      `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
</svg>`
    );
    editor.ui.registry.addIcon(
      "menu",
      `<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='11.473512pt' height='12.266481pt' viewBox='-.239051 -.242965 11.473512 12.266481'>
    <defs>
    <path id='g0-120' d='M3.993026-3.180075C3.642341-3.092403 3.626401-2.781569 3.626401-2.749689C3.626401-2.574346 3.761893-2.454795 3.937235-2.454795S4.383562-2.590286 4.383562-2.933001C4.383562-3.387298 3.881445-3.514819 3.58655-3.514819C3.211955-3.514819 2.909091-3.251806 2.725778-2.940971C2.550436-3.363387 2.13599-3.514819 1.809215-3.514819C.940473-3.514819 .454296-2.518555 .454296-2.295392C.454296-2.223661 .510087-2.191781 .573848-2.191781C.669489-2.191781 .68543-2.231631 .70934-2.327273C.892653-2.909091 1.370859-3.291656 1.785305-3.291656C2.096139-3.291656 2.247572-3.068493 2.247572-2.781569C2.247572-2.622167 2.15193-2.255542 2.088169-2.000498C2.032379-1.769365 1.857036-1.060025 1.817186-.908593C1.705604-.478207 1.41868-.143462 1.060025-.143462C1.028144-.143462 .820922-.143462 .653549-.255044C1.020174-.342715 1.020174-.67746 1.020174-.68543C1.020174-.868742 .876712-.980324 .70137-.980324C.486177-.980324 .255044-.797011 .255044-.494147C.255044-.127522 .645579 .079701 1.052055 .079701C1.474471 .079701 1.769365-.239103 1.912827-.494147C2.088169-.103611 2.454795 .079701 2.83736 .079701C3.706102 .079701 4.184309-.916563 4.184309-1.139726C4.184309-1.219427 4.120548-1.243337 4.064757-1.243337C3.969116-1.243337 3.953176-1.187547 3.929265-1.107846C3.769863-.573848 3.315567-.143462 2.8533-.143462C2.590286-.143462 2.399004-.318804 2.399004-.653549C2.399004-.812951 2.446824-.996264 2.558406-1.44259C2.614197-1.681694 2.789539-2.383064 2.82939-2.534496C2.940971-2.948941 3.219925-3.291656 3.57858-3.291656C3.618431-3.291656 3.825654-3.291656 3.993026-3.180075Z'/>
    <path id='g1-102' d='M5.332005-4.805978C5.571108-4.805978 5.66675-4.805978 5.66675-5.033126C5.66675-5.152677 5.571108-5.152677 5.355915-5.152677H4.387547C4.614695-6.38406 4.782067-7.232877 4.877709-7.615442C4.94944-7.902366 5.200498-8.177335 5.511333-8.177335C5.762391-8.177335 6.01345-8.069738 6.133001-7.962142C5.66675-7.914321 5.523288-7.567621 5.523288-7.364384C5.523288-7.12528 5.702615-6.981818 5.929763-6.981818C6.168867-6.981818 6.527522-7.185056 6.527522-7.639352C6.527522-8.141469 6.025405-8.416438 5.499377-8.416438C4.985305-8.416438 4.483188-8.033873 4.244085-7.567621C4.028892-7.149191 3.90934-6.718804 3.634371-5.152677H2.833375C2.606227-5.152677 2.486675-5.152677 2.486675-4.937484C2.486675-4.805978 2.558406-4.805978 2.797509-4.805978H3.56264C3.347447-3.694147 2.857285-.992279 2.582316 .286924C2.379078 1.327024 2.199751 2.199751 1.601993 2.199751C1.566127 2.199751 1.219427 2.199751 1.004234 1.972603C1.613948 1.924782 1.613948 1.398755 1.613948 1.3868C1.613948 1.147696 1.43462 1.004234 1.207472 1.004234C.968369 1.004234 .609714 1.207472 .609714 1.661768C.609714 2.175841 1.135741 2.438854 1.601993 2.438854C2.82142 2.438854 3.323537 .251059 3.455044-.3467C3.670237-1.267248 4.25604-4.447323 4.315816-4.805978H5.332005Z'/>
    </defs>
    <g id='page1' transform='matrix(1.13 0 0 1.13 -63.986043 -65.03376)'>
    <use x='56.413267' y='65.753425' xlink:href='#g1-102'/>
    <use x='62.183256' y='67.546688' xlink:href='#g0-120'/>
    </g>
    </svg>`
    );
    function showDialog(inp = "") {
      var http = "https:" == document.location.protocol ? "https://" : "http://";
      editor.windowManager.open({
        title: "Equation Editor",
        size: "medium",
        body: {
          type: "panel",
          items: [
            {
              type: "htmlpanel",
              html: '<div id="equation-editor"><div id="history"></div><div id="toolbar"></div><div id="latexInput" autocorrect="off"></div><div id="equation-output"><img id="output"></div></div>'
            }
          ]
        },
        buttons: [
          {
            type: "cancel",
            name: "closeButton",
            text: "Cancel"
          },
          {
            type: "submit",
            name: "submitButton",
            text: "Ok",
            buttonType: "primary"
          }
        ],
        onSubmit: async function(w) {
          let content = output.exportAs("html");
          const srcRegex = /<img[^>]+src\s*=\s*['"]([^'"]+)['"][^>]*>/i;
          const srcMatch = content.match(srcRegex);
          if (srcMatch) {
            const customAPI = public_env.PUBLIC_SERVER_URL + "/katex";
            const url2 = srcMatch[1]?.replaceAll("https://latex.codecogs.com/svg.image", customAPI);
            const response = await fetch(url2);
            const html = await response.text();
            content = html;
          } else {
            console.error("No src attribute found in the img tag.");
          }
          tinymce.activeEditor.execCommand("mceInsertContent", false, content);
          textarea.pushToHistory();
          w.close();
        },
        onCancel: function(w) {
          w.close();
        },
        onAction: function(w, dets) {
          if (dets.name == "logo") {
            window.open(http + "editor.codecogs.com", "_blank")?.focus();
          }
        }
      });
      loaded.then(() => {
        output = new EqEditor.Output("output");
        textarea = EqEditor.TextArea.link("latexInput").addOutput(output).addHistoryMenu(new EqEditor.History("history"));
        EqEditor.Toolbar.link("toolbar").addTextArea(textarea);
        var nodes = document.getElementById("history")?.childNodes || [];
        for (var i = 0; i < nodes.length; i++) {
          nodes[i].style.padding = "revert";
        }
        textarea.clear();
        textarea.insert(inp.replace(/&space;/g, " "), inp.length);
      });
    }
    editor.ui.registry.addButton("eqneditor", {
      title: "Equation",
      icon: "menu",
      tooltip: "Insert Equation",
      onAction: () => {
        showDialog();
      }
      // stateSelector: 'img[src*="latex"]'
    });
    editor.on("dblclick", function(e) {
      if (e.target.nodeName.toLowerCase() == "img") {
        var sName = e.target.src.match(/(gif|svg)\.image\?(.*)/);
        if (sName != null)
          showDialog(sName[2]);
      }
    });
    return {
      getMetadata: () => ({
        name: "EqnEditor",
        url: "https://editor.codecogs.com/docs/3-Tiny_MCE_v4x.php"
      })
    };
  });
};
function getTinymce() {
  const getSink = () => {
    return typeof window !== "undefined" ? window : global;
  };
  const sink = getSink();
  const res = sink && sink.tinymce ? sink.tinymce : null;
  console.log({ res });
  return res;
}
const TextEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_globalStore = subscribe(globalStore, (value2) => $globalStore = value2);
  let { id = "" } = $$props;
  let { value = "" } = $$props;
  let { onChange = (html) => {
  } } = $$props;
  let { height = 300 } = $$props;
  let { placeholder = "" } = $$props;
  let { editorWindowRef = void 0 } = $$props;
  let { maxHeight = void 0 } = $$props;
  let unmount = false;
  let editorChangeHandlerId;
  let conf = {
    plugins: "lists, link, emoticons, code, media, eqneditor",
    toolbar: [
      { name: "history", items: ["undo", "redo"] },
      { name: "styles", items: ["styles"] },
      {
        name: "formatting",
        items: ["bold", "italic"]
      },
      {
        name: "alignment",
        items: ["alignleft", "aligncenter", "alignright", "alignjustify"]
      },
      {
        name: "indentation",
        items: ["outdent", "indent"]
      },
      {
        name: "list",
        items: ["numlist", "bullist"]
      },
      { name: "link", items: ["link"] },
      { name: "insert", items: ["emoticons"] },
      { name: "code", items: ["code"] },
      { name: "media", items: ["media"] },
      { name: "eqneditor", items: ["eqneditor"] }
    ],
    lists_indent_on_tab: false,
    min_height: height,
    max_height: maxHeight,
    placeholder,
    skin: "oxide-dark",
    content_css: "dark",
    extended_valid_elements: "*[.*]",
    license_key: "gpl",
    setup: () => {
      addMathPlugin(getTinymce());
    },
    init_instance_callback(editor) {
      editorWindowRef = editor.iframeElement?.contentWindow;
      editor.on("Paste Change input Undo Redo", function() {
        clearTimeout(editorChangeHandlerId);
        const html = editor.getContent();
        editorChangeHandlerId = setTimeout(
          function() {
            if (onChange) {
              onChange(html);
            }
            if (id) {
              localStorage.setItem(id, html);
            }
          },
          1e3
        );
      });
    }
  };
  function handleModeChange(isDark) {
    if (isDark) {
      conf.content_css = "dark";
      conf.skin = "oxide-dark";
    } else {
      conf.content_css = "light";
      conf.skin = "oxide";
    }
    unmount = true;
    setTimeout(
      () => {
        unmount = false;
      },
      200
    );
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.editorWindowRef === void 0 && $$bindings.editorWindowRef && editorWindowRef !== void 0)
    $$bindings.editorWindowRef(editorWindowRef);
  if ($$props.maxHeight === void 0 && $$bindings.maxHeight && maxHeight !== void 0)
    $$bindings.maxHeight(maxHeight);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    value = !value ? "" : value;
    {
      handleModeChange($globalStore.isDark);
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-257j8h_START --><link rel="stylesheet" href="https://unpkg.com/katex@0.12.0/dist/katex.min.css"><!-- HEAD_svelte-257j8h_END -->`, ""} <div>${!unmount ? `${validate_component(TinymceSvelte, "Editor").$$render(
      $$result,
      { value, conf },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        },
        conf: ($$value) => {
          conf = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  return $$rendered;
});

export { TextEditor as T };
//# sourceMappingURL=index26-5db2dde8.js.map
