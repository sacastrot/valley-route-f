import { d as defineComponent, q as useRouter, o as openBlock, a as createElementBlock, b as createBaseVNode, s as normalizeClass, t as toDisplayString, _ as _export_sfc, u as useStoreUser, r as ref, x as onBeforeMount, i as createVNode, w as withCtx, y as unref, z as resolveComponent, A as createTextVNode, p as pushScopeId, m as popScopeId } from "./index-DxEj1PVZ.js";
import { a as autService } from "./login-BKUyY4fl.js";
const _hoisted_1$1 = { class: "icon" };
const _hoisted_2$1 = { class: "title" };
const _hoisted_3$1 = { class: "font-bold" };
const _hoisted_4$1 = { class: "description" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ServiceCard",
  props: {
    title: {},
    description: {},
    icon: {},
    route: {}
  },
  setup(__props) {
    const router = useRouter();
    const redirectTo = () => {
      router.push({ name: data.route });
    };
    const data = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "card hover:shadow cursor-pointer",
        onClick: redirectTo
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("i", {
            class: normalizeClass(["bi", data.icon])
          }, null, 2)
        ]),
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("p", _hoisted_3$1, toDisplayString(data.title), 1)
        ]),
        createBaseVNode("div", _hoisted_4$1, [
          createBaseVNode("p", null, toDisplayString(data.description), 1)
        ])
      ]);
    };
  }
});
const ServiceCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ce534bd7"]]);
const _withScopeId = (n) => (pushScopeId("data-v-469e22b2"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container mx-auto pt-5" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "home mb-3" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "bi bi-house-fill" }, null, -1));
const _hoisted_5 = { class: "header" };
const _hoisted_6 = { class: "font-bold" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "spacer h-[5rem]" }, null, -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "mb-5" }, "Servicios", -1));
const _hoisted_9 = { class: "content flex flex-wrap items-center justify-start gap-20" };
const _hoisted_10 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserView",
  setup(__props) {
    const userStore = useStoreUser();
    const loadingView = ref(true);
    const router = useRouter();
    onBeforeMount(async () => {
      try {
        await autService.getUser();
      } catch (error) {
        window.localStorage.removeItem("userData");
        router.push({ name: "welcome" });
      } finally {
        loadingView.value = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("main", _hoisted_1, [
        !loadingView.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_router_link, { to: "/" }, {
              default: withCtx(() => [
                _hoisted_4,
                createTextVNode(" Inicio ")
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("h1", _hoisted_6, "Hola, " + toDisplayString(unref(userStore).state.firstName), 1)
          ]),
          _hoisted_7,
          _hoisted_8,
          createBaseVNode("div", _hoisted_9, [
            createVNode(ServiceCard, {
              title: "Paquetes",
              icon: "bi-box2",
              description: "Visualiza todos tus paquetes",
              route: "packages"
            }),
            createVNode(ServiceCard, {
              title: "Nuevo Paquete",
              icon: "bi-person",
              description: "Crea un nuevo paquete",
              route: "new-package"
            }),
            createVNode(ServiceCard, {
              title: "Rastrear Paquete",
              icon: "bi-person",
              description: "Mira la ruta de tu paquete",
              route: "track-package"
            })
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_10, "Cargando..."))
      ]);
    };
  }
});
const UserView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-469e22b2"]]);
export {
  UserView as default
};
//# sourceMappingURL=UserView-ByNH9xyA.js.map
