import {
  require_post
} from "/build/_shared/chunk-KVLOTACQ.js";
import {
  Link,
  Outlet,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-X426FIAS.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-7HUBQURA.js";

// browser-route-module:routes/posts.admin.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/posts.admin.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostAdmin() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4wl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "-text-3xl my-6 mb-2 border-b-2 text-center", children: "Blog Admin" }, void 0, false, {
      fileName: "app/routes/posts.admin.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "col-span-4 md:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: post.slug, className: "text-blue-600 underline", children: post.title }, void 0, false, {
        fileName: "app/routes/posts.admin.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this) }, post.slug, false, {
        fileName: "app/routes/posts.admin.tsx",
        lineNumber: 18,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "app/routes/posts.admin.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/posts.admin.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "col-span-4 md:col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/posts.admin.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/posts.admin.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/posts.admin.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts.admin.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
export {
  PostAdmin as default
};
//# sourceMappingURL=/build/routes/posts.admin-2QU57UUS.js.map
