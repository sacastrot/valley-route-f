import { d as defineComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, t as toDisplayString, p as pushScopeId, m as popScopeId, _ as _export_sfc, r as ref, x as onBeforeMount, i as createVNode, w as withCtx, F as Fragment, G as renderList, f as createCommentVNode, z as resolveComponent, A as createTextVNode, c as createBlock, k as _sfc_main$2 } from "./index-DxEj1PVZ.js";
import { p as packageService } from "./packages-CoO_FBBy.js";
const _withScopeId$1 = (n) => (pushScopeId("data-v-0f1f2897"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "package_card shadow" };
const _hoisted_2$1 = { class: "section" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "head" }, "Número de guía", -1));
const _hoisted_4$1 = { class: "font-bold" };
const _hoisted_5$1 = { class: "section" };
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "head" }, "Descripción", -1));
const _hoisted_7$1 = { class: "section" };
const _hoisted_8$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "head" }, "Creado", -1));
const _hoisted_9$1 = { class: "section" };
const _hoisted_10$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "head" }, "Desde", -1));
const _hoisted_11 = { class: "section" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "head" }, "Hasta", -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PackageCard",
  props: {
    id: {},
    description: {},
    createdAt: {},
    startNodeName: {},
    endNodeName: {}
  },
  setup(__props) {
    const data = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3$1,
          createBaseVNode("p", _hoisted_4$1, toDisplayString(data.id), 1)
        ]),
        createBaseVNode("div", _hoisted_5$1, [
          _hoisted_6$1,
          createBaseVNode("p", null, toDisplayString(data.description), 1)
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          _hoisted_8$1,
          createBaseVNode("p", null, toDisplayString(data.createdAt), 1)
        ]),
        createBaseVNode("div", _hoisted_9$1, [
          _hoisted_10$1,
          createBaseVNode("p", null, toDisplayString(data.startNodeName), 1)
        ]),
        createBaseVNode("div", _hoisted_11, [
          _hoisted_12,
          createBaseVNode("p", null, toDisplayString(data.endNodeName), 1)
        ])
      ]);
    };
  }
});
const PackageCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0f1f2897"]]);
const _withScopeId = (n) => (pushScopeId("data-v-66b584a4"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container mx-auto pt-5" };
const _hoisted_2 = { class: "home mb-3" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "bi bi-house-fill" }, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Tus paquetes", -1));
const _hoisted_5 = {
  key: 0,
  class: "packages flex flex-wrap gap-5 my-5"
};
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { key: 1 };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Cargando...", -1));
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = { class: "pages flex my-5 gap-5 flex-wrap" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ViewPackages",
  setup(__props) {
    const page = ref(1);
    const totalPages = ref(0);
    const packages = ref([]);
    const loading = ref(true);
    const getPackages = async () => {
      loading.value = true;
      try {
        const reponse = await packageService.getPackageList(page.value);
        packages.value = reponse.list;
        totalPages.value = reponse.pages;
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    };
    const lessPage = () => {
      if (page.value > 1) {
        page.value--;
        getPackages();
      }
    };
    const addPage = () => {
      if (page.value < totalPages.value) {
        page.value++;
        getPackages();
      }
    };
    onBeforeMount(async () => {
      await getPackages();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_router_link, { to: "/" }, {
            default: withCtx(() => [
              _hoisted_3,
              createTextVNode(" Inicio ")
            ]),
            _: 1
          })
        ]),
        _hoisted_4,
        !loading.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(packages.value, (pkg) => {
            return openBlock(), createBlock(PackageCard, {
              key: pkg.id,
              id: pkg.id,
              description: pkg.description,
              createdAt: pkg.created,
              startNodeName: pkg.startNodeName,
              endNodeName: pkg.endNodeName
            }, null, 8, ["id", "description", "createdAt", "startNodeName", "endNodeName"]);
          }), 128)),
          packages.value.length === 0 ? (openBlock(), createElementBlock("p", _hoisted_6, "Aun no tienes ningún paquete")) : createCommentVNode("", true)
        ])) : (openBlock(), createElementBlock("div", _hoisted_7, _hoisted_9)),
        createBaseVNode("div", _hoisted_10, [
          createVNode(_sfc_main$2, {
            onClick: lessPage,
            text: "Anterior"
          }),
          createVNode(_sfc_main$2, {
            onClick: addPage,
            text: "Siguiente"
          })
        ])
      ]);
    };
  }
});
const ViewPackages = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66b584a4"]]);
export {
  ViewPackages as default
};
//# sourceMappingURL=ViewPackages-Cd8PPYrd.js.map
