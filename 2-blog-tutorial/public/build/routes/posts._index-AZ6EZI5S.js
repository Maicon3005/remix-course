import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-KBRJYWH7.js";
import {
  __commonJS,
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-DG4HR4CT.js";

// empty-module:~/models/post.server
var require_post = __commonJS({
  "empty-module:~/models/post.server"(exports, module) {
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = {};
  }
});

// browser-route-module:routes/posts._index.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/posts._index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Posts() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Posts" }, void 0, false, {
      fileName: "app/routes/posts._index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: post.slug, className: "text-blue-600 underline", children: post.title }, void 0, false, {
      fileName: "app/routes/posts._index.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, post.slug, false, {
      fileName: "app/routes/posts._index.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/routes/posts._index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts._index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts._index-AZ6EZI5S.js.map
