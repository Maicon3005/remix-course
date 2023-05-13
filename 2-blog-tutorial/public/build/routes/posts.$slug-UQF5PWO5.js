import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-KBRJYWH7.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-DG4HR4CT.js";

// browser-route-module:routes/posts.$slug.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/posts.$slug.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostSlug() {
  const { slug } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "mx-auto max-w-4xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "my-6 border-b-2 text-center text-3xl", children: [
    "Some Post: ",
    slug
  ] }, void 0, true, {
    fileName: "app/routes/posts.$slug.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/posts.$slug.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/posts.$slug-UQF5PWO5.js.map
