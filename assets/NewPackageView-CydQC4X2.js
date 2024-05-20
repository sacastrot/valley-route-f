import { d as defineComponent, r as ref, h as reactive, x as onBeforeMount, a as createElementBlock, b as createBaseVNode, i as createVNode, w as withCtx, j as withDirectives, H as vModelSelect, F as Fragment, G as renderList, k as _sfc_main$1, c as createBlock, f as createCommentVNode, z as resolveComponent, o as openBlock, A as createTextVNode, t as toDisplayString, p as pushScopeId, m as popScopeId, _ as _export_sfc } from "./index-DxEj1PVZ.js";
import { _ as _imports_0 } from "./valley_route_graph-BbhycfCb.js";
import { P as PrimaryInput, E as ErrorAlert, S as SuccessAlert } from "./SuccessAlert-DQ68Wlnw.js";
import { p as packageService } from "./packages-CoO_FBBy.js";
import { v as validateField } from "./validateField-D0FnTXHY.js";
const _withScopeId = (n) => (pushScopeId("data-v-025625f0"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container mx-auto pt-5" };
const _hoisted_2 = { class: "home mb-3" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "bi bi-house-fill" }, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Crea un nuevo paquete", -1));
const _hoisted_5 = {
  key: 0,
  class: "packages flex flex-wrap gap-5 my-5"
};
const _hoisted_6 = { class: "new-package" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "mt-3 mb-1" }, "Node de origen", -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", {
  value: "",
  disabled: "",
  selected: ""
}, "Selecciona un nodo de origen", -1));
const _hoisted_9 = ["value"];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "mt-3 mb-1" }, "Node de destino", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", {
  value: "",
  disabled: "",
  selected: ""
}, "Selecciona un nodo de origen", -1));
const _hoisted_12 = ["value"];
const _hoisted_13 = { key: 1 };
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Cargando...", -1));
const _hoisted_15 = [
  _hoisted_14
];
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "mt-3" }, "Puntos de control", -1));
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "mb-5 mt-1" }, "Estas son las rutas con las que cuenta la empresa", -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: "Checkpoints"
}, null, -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-base mt-1" }, "A partir de Google Earth", -1));
const _hoisted_20 = { class: "pages flex my-5 gap-5 flex-wrap" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NewPackageView",
  setup(__props) {
    const loading = ref(true);
    const nodes = ref([]);
    const newPackage = reactive({
      description: ""
    });
    const errors = reactive({
      description: false
    });
    const messages = reactive({
      description: ""
    });
    const fieldChange = reactive({
      description: false
    });
    const nodeSelected = ref({
      // This node represent point of from where the package is going to be sent
      nodeFrom: "",
      // This node represent point of destination of the package
      nodeTo: ""
    });
    const messageAlert = ref("");
    const messageSuccess = ref("");
    const loadingRequest = ref(false);
    const validateNewPackage = (field) => {
      if (field === "all") {
        Object.keys(fieldChange).forEach((key) => {
          fieldChange[key] = true;
        });
      }
      fieldChange[field] = true;
      Object.keys(newPackage).forEach((key) => {
        if (fieldChange[key]) {
          const message = validateField("newpackage", key, newPackage[key]);
          if (message !== "") {
            errors[key] = true;
            messages[key] = message;
          } else {
            errors[key] = false;
            messages[key] = "";
          }
        }
      });
    };
    const validateSerndRequest = () => {
      const hasErrors = Object.values(errors).filter((error) => {
        return error === true;
      }).length;
      if (hasErrors > 0) {
        return false;
      } else {
        return true;
      }
    };
    const onSubmit = async () => {
      loadingRequest.value = true;
      validateNewPackage("all");
      if (!validateSerndRequest()) {
        loadingRequest.value = false;
        return;
      }
      if (nodeSelected.value.nodeFrom === "" || nodeSelected.value.nodeTo === "") {
        loadingRequest.value = false;
        messageAlert.value = "Selecciona un nodo de origen y destino";
        return;
      } else if (nodeSelected.value.nodeFrom === nodeSelected.value.nodeTo) {
        loadingRequest.value = false;
        messageAlert.value = "El nodo de origen y destino no pueden ser iguales";
        return;
      }
      const data = {
        description: newPackage.description,
        start_node_id: nodeSelected.value.nodeFrom,
        end_node_id: nodeSelected.value.nodeTo
      };
      try {
        await packageService.createPackage(data);
        messageSuccess.value = "Paquete creado correctamente";
        newPackage.description = "";
        nodeSelected.value.nodeFrom = "";
        nodeSelected.value.nodeTo = "";
      } catch (error) {
        messageAlert.value = "Error al crear el paquete";
      } finally {
        loadingRequest.value = false;
      }
    };
    const getNodes = async () => {
      try {
        nodes.value = await packageService.getNodesList();
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    };
    onBeforeMount(async () => {
      await getNodes();
    });
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
          !loading.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(PrimaryInput, {
                label: "Descripción",
                id: "description",
                type: "text",
                placeholder: "",
                modelValue: newPackage.description,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newPackage.description = $event),
                error: errors.description && fieldChange.description,
                errorMessage: messages.description,
                onLossFocus: _cache[1] || (_cache[1] = ($event) => validateNewPackage("description"))
              }, null, 8, ["modelValue", "error", "errorMessage"]),
              _hoisted_7,
              withDirectives(createBaseVNode("select", {
                name: "nodeFrom",
                id: "node-from",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => nodeSelected.value.nodeFrom = $event),
                class: "form-select border border-gray-300"
              }, [
                _hoisted_8,
                (openBlock(true), createElementBlock(Fragment, null, renderList(nodes.value, (node) => {
                  return openBlock(), createElementBlock("option", {
                    key: node.id,
                    value: node.id
                  }, toDisplayString(node.name), 9, _hoisted_9);
                }), 128))
              ], 512), [
                [vModelSelect, nodeSelected.value.nodeFrom]
              ]),
              _hoisted_10,
              withDirectives(createBaseVNode("select", {
                name: "nodeFrom",
                id: "node-from",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => nodeSelected.value.nodeTo = $event),
                class: "form-select border border-gray-300"
              }, [
                _hoisted_11,
                (openBlock(true), createElementBlock(Fragment, null, renderList(nodes.value, (node) => {
                  return openBlock(), createElementBlock("option", {
                    key: node.id,
                    value: node.id
                  }, toDisplayString(node.name), 9, _hoisted_12);
                }), 128))
              ], 512), [
                [vModelSelect, nodeSelected.value.nodeTo]
              ])
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_13, _hoisted_15)),
          _hoisted_16,
          _hoisted_17,
          _hoisted_18,
          _hoisted_19,
          createBaseVNode("div", _hoisted_20, [
            createVNode(_sfc_main$1, {
              text: "Crear paquete",
              onClick: onSubmit,
              loading: loadingRequest.value
            }, null, 8, ["loading"])
          ])
        ]),
        messageAlert.value && messageSuccess.value === "" ? (openBlock(), createBlock(ErrorAlert, {
          key: 0,
          show: messageAlert.value !== "",
          message: messageAlert.value,
          onClose: _cache[4] || (_cache[4] = ($event) => messageAlert.value = "")
        }, null, 8, ["show", "message"])) : createCommentVNode("", true),
        messageSuccess.value ? (openBlock(), createBlock(SuccessAlert, {
          key: 1,
          show: messageSuccess.value !== "",
          message: messageSuccess.value,
          onClose: _cache[5] || (_cache[5] = ($event) => messageSuccess.value = "")
        }, null, 8, ["show", "message"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const NewPackageView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-025625f0"]]);
export {
  NewPackageView as default
};
//# sourceMappingURL=NewPackageView-CydQC4X2.js.map
