import { g as baseRequest, C as BadRequestError, N as NotFoundError, U as UnknownError, d as defineComponent, r as ref, x as onBeforeMount, a as createElementBlock, b as createBaseVNode, i as createVNode, w as withCtx, z as resolveComponent, o as openBlock, A as createTextVNode, p as pushScopeId, m as popScopeId, _ as _export_sfc } from "./index-DxEj1PVZ.js";
const statisticsService = {
  getNodeStartStatistics,
  getNodeEndStatistics
};
async function getNodeStartStatistics() {
  try {
    const { data } = await baseRequest.get("/statistics/nodestart");
    return data;
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new Error("Intenta de nuevo más tarde");
    } else if (error instanceof NotFoundError) {
      throw new Error("No hay datos disponibles");
    } else if (error instanceof UnknownError) {
      throw new Error("Ocurrió un error inesperado, intenta de nuevo más tarde");
    } else {
      throw new Error("Error al obtener las estadísticas de inicio de nodos");
    }
  }
}
async function getNodeEndStatistics() {
  try {
    const { data } = await baseRequest.get("/statistics/nodeend");
    return data;
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new Error("Intenta de nuevo más tarde");
    } else if (error instanceof NotFoundError) {
      throw new Error("No hay datos disponibles");
    } else if (error instanceof UnknownError) {
      throw new Error("Ocurrió un error inesperado, intenta de nuevo más tarde");
    } else {
      throw new Error("Error al obtener las estadísticas de fin de nodos");
    }
  }
}
const _withScopeId = (n) => (pushScopeId("data-v-d74fa023"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "container mx-auto pt-5"
};
const _hoisted_2 = { class: "home mb-3" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "bi bi-house-fill" }, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", null, "Estadísticas", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, " En esta página puedes ver estadísticas del número de paquetes que salen y entran para cada uno de los nodos ", -1));
const _hoisted_6 = { class: "flex flex-wrap gap-5 my-5 statistics" };
const _hoisted_7 = ["src"];
const _hoisted_8 = ["src"];
const _hoisted_9 = { key: 1 };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Cargando...", -1));
const _hoisted_11 = [
  _hoisted_10
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatisticsView",
  setup(__props) {
    const nodeStartStatistic = ref("");
    const nodeEndStatistic = ref("");
    const loadingStatistics = ref(true);
    const getStatistics = async () => {
      loadingStatistics.value = true;
      try {
        const imageNodeStartUrl = await statisticsService.getNodeStartStatistics();
        nodeStartStatistic.value = `data:image/png;base64,${imageNodeStartUrl}`;
        const imageNodeEndUrl = await statisticsService.getNodeEndStatistics();
        nodeEndStatistic.value = `data:image/png;base64,${imageNodeEndUrl}`;
      } catch (error) {
        console.error(error);
      } finally {
        loadingStatistics.value = false;
      }
    };
    onBeforeMount(async () => {
      await getStatistics();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return !loadingStatistics.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
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
          createBaseVNode("img", {
            src: nodeStartStatistic.value,
            alt: ""
          }, null, 8, _hoisted_7),
          createBaseVNode("img", {
            src: nodeEndStatistic.value,
            alt: ""
          }, null, 8, _hoisted_8)
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_9, _hoisted_11));
    };
  }
});
const StatisticsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d74fa023"]]);
export {
  StatisticsView as default
};
//# sourceMappingURL=StatisticsView-DRZlixpO.js.map
