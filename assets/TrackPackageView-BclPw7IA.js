import { _ as _imports_0 } from "./valley_route_graph-BbhycfCb.js";
import { P as PrimaryInput, E as ErrorAlert, S as SuccessAlert } from "./SuccessAlert-DQ68Wlnw.js";
import { d as defineComponent, r as ref, a as createElementBlock, b as createBaseVNode, i as createVNode, w as withCtx, k as _sfc_main$1, t as toDisplayString, F as Fragment, G as renderList, f as createCommentVNode, c as createBlock, z as resolveComponent, o as openBlock, A as createTextVNode, p as pushScopeId, m as popScopeId, _ as _export_sfc } from "./index-DxEj1PVZ.js";
import { p as packageService } from "./packages-CoO_FBBy.js";
const _withScopeId = (n) => (pushScopeId("data-v-15a7c088"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container mx-auto pt-5" };
const _hoisted_2 = { class: "home mb-3" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "bi bi-house-fill" }, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "Consultar ruta", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "mb-5" }, "Ingrese el número de guía del paquete, para conocer la ruta que va a seguir", -1));
const _hoisted_6 = { class: "input-container" };
const _hoisted_7 = {
  key: 0,
  class: "track-container mt-5 flex"
};
const _hoisted_8 = { class: "package-card" };
const _hoisted_9 = { class: "section" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "head" }, "Descripción", -1));
const _hoisted_11 = { class: "section" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "head" }, "Fecha de creación", -1));
const _hoisted_13 = { class: "section" };
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "head" }, "Nodo de origen", -1));
const _hoisted_15 = { class: "section" };
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "head" }, "Nodo de destino", -1));
const _hoisted_17 = { class: "section" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "head" }, "Distancia", -1));
const _hoisted_19 = { class: "package-path" };
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", null, "Ruta", -1));
const _hoisted_21 = { class: "flex flex-column pl-5" };
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "bi bi-arrow-right" }, null, -1));
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "mt-3" }, "Puntos de control", -1));
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "mb-5 mt-1" }, "Estas son las rutas con las que cuenta la empresa", -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: "Checkpoints"
}, null, -1));
const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-base mb-5 mt-1" }, "A partir de Google Earth", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TrackPackageView",
  setup(__props) {
    const loadingRequest = ref(false);
    const messageAlert = ref("");
    const messageSuccess = ref("");
    const guidenumber = ref("");
    const packageLoad = ref();
    const trackPackage = async () => {
      if (!guidenumber.value) {
        messageAlert.value = "Por favor, ingrese un número de guía";
        return;
      }
      loadingRequest.value = true;
      try {
        packageLoad.value = await packageService.getPackage(guidenumber.value);
      } catch (error) {
        if (error instanceof Error) {
          messageAlert.value = error.message;
        } else {
          messageAlert.value = "Ha ocurrido un error";
        }
      } finally {
        loadingRequest.value = false;
      }
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
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
          _hoisted_5,
          createBaseVNode("div", _hoisted_6, [
            createVNode(PrimaryInput, {
              id: "guidenumber",
              type: "number",
              placeholder: "Ingrese el número de guía",
              modelValue: guidenumber.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => guidenumber.value = $event)
            }, null, 8, ["modelValue"]),
            createVNode(_sfc_main$1, {
              text: "Consultar",
              loading: loadingRequest.value,
              onClick: trackPackage
            }, null, 8, ["loading"])
          ]),
          packageLoad.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                _hoisted_10,
                createBaseVNode("p", null, toDisplayString(packageLoad.value.description), 1)
              ]),
              createBaseVNode("div", _hoisted_11, [
                _hoisted_12,
                createBaseVNode("p", null, toDisplayString(packageLoad.value.created), 1)
              ]),
              createBaseVNode("div", _hoisted_13, [
                _hoisted_14,
                createBaseVNode("p", null, toDisplayString(packageLoad.value.startName), 1)
              ]),
              createBaseVNode("div", _hoisted_15, [
                _hoisted_16,
                createBaseVNode("p", null, toDisplayString(packageLoad.value.endName), 1)
              ]),
              createBaseVNode("div", _hoisted_17, [
                _hoisted_18,
                createBaseVNode("p", null, toDisplayString(packageLoad.value.distanceKm) + " km", 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_19, [
              _hoisted_20,
              createBaseVNode("ul", _hoisted_21, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(packageLoad.value.path, (node) => {
                  return openBlock(), createElementBlock("div", {
                    class: "item flex gap-2",
                    key: node.id
                  }, [
                    _hoisted_22,
                    createBaseVNode("li", null, toDisplayString(node.name), 1)
                  ]);
                }), 128))
              ])
            ])
          ])) : createCommentVNode("", true),
          _hoisted_23,
          _hoisted_24,
          _hoisted_25,
          _hoisted_26
        ]),
        messageAlert.value && messageSuccess.value === "" ? (openBlock(), createBlock(ErrorAlert, {
          key: 0,
          show: messageAlert.value !== "",
          message: messageAlert.value,
          onClose: _cache[1] || (_cache[1] = ($event) => messageAlert.value = "")
        }, null, 8, ["show", "message"])) : createCommentVNode("", true),
        messageSuccess.value ? (openBlock(), createBlock(SuccessAlert, {
          key: 1,
          show: messageSuccess.value !== "",
          message: messageSuccess.value,
          onClose: _cache[2] || (_cache[2] = ($event) => messageSuccess.value = "")
        }, null, 8, ["show", "message"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const TrackPackageView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15a7c088"]]);
export {
  TrackPackageView as default
};
//# sourceMappingURL=TrackPackageView-BclPw7IA.js.map
