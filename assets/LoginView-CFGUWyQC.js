import { d as defineComponent, r as ref, c as createBlock, w as withCtx, T as Transition, o as openBlock, a as createElementBlock, b as createBaseVNode, e as renderSlot, f as createCommentVNode, n as normalizeStyle, _ as _export_sfc, g as baseRequest, u as useStoreUser, h as reactive, i as createVNode, j as withDirectives, v as vModelText, k as _sfc_main$2, F as Fragment, l as router, t as toDisplayString, p as pushScopeId, m as popScopeId } from "./index-DxEj1PVZ.js";
import { P as PrimaryInput, E as ErrorAlert, S as SuccessAlert } from "./SuccessAlert-DQ68Wlnw.js";
import { v as validateField } from "./validateField-D0FnTXHY.js";
import { a as autService } from "./login-BKUyY4fl.js";
const _hoisted_1$1 = { class: "modal-dialog modal-dialog-centered modal-dialog-scrollable" };
const _hoisted_2$1 = { class: "modal-content" };
const _hoisted_3$1 = { class: "modal-header d-flex justify-content-between" };
const _hoisted_4$1 = { class: "modal-body" };
const _hoisted_5$1 = { class: "modal-footer" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ModalBase",
  props: ["show", "hiddenClose"],
  emits: ["onClose"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const emitClose = () => {
      emit("onClose");
    };
    const display = ref("block");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, null, {
        default: withCtx(() => [
          __props.show ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "modal fade show modal-fullscreen-sm-down",
            style: normalizeStyle({ display: display.value }),
            "aria-modal": "true",
            role: "dialog"
          }, [
            createBaseVNode("div", _hoisted_1$1, [
              createBaseVNode("div", _hoisted_2$1, [
                createBaseVNode("div", _hoisted_3$1, [
                  renderSlot(_ctx.$slots, "header", {}, void 0, true),
                  !__props.hiddenClose ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: "bi bi-x close-modal",
                    onClick: _cache[0] || (_cache[0] = ($event) => emitClose())
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_4$1, [
                  renderSlot(_ctx.$slots, "body", {}, void 0, true)
                ]),
                createBaseVNode("div", _hoisted_5$1, [
                  renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                ])
              ])
            ])
          ], 4)) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
const ModalBase = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c3c44338"]]);
async function resetPassword(body) {
  try {
    const response = await baseRequest.post(`/auth/reset-password`, body);
    if (response.status === 200) {
      return;
    }
  } catch (error) {
    throw new Error("Error al restablecer la contraseña, verifica el correo electrónico");
  }
}
const _withScopeId = (n) => (pushScopeId("data-v-4654c948"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "w-100 container-form" };
const _hoisted_2 = { class: "container mx-auto" };
const _hoisted_3 = { class: "flex items-center justify-center h-full" };
const _hoisted_4 = { class: "w-[30rem]" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-center" }, "Iniciar sesión", -1));
const _hoisted_6 = { class: "flex flex-col gap-3 mt-5" };
const _hoisted_7 = { class: "password" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  id: "iconPassword",
  class: "bi bi-eye-fill"
}, null, -1));
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "h-[1rem]" }, null, -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "h-[1rem]" }, null, -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "modal-title" }, [
  /* @__PURE__ */ createBaseVNode("h2", null, "Cambia tu contraseña")
], -1));
const _hoisted_13 = { class: "modal-body" };
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "La contraseña debe tener por tu seguridad:", -1));
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "Debe tener al menos 8 caracteres"),
  /* @__PURE__ */ createBaseVNode("li", null, "Debe tener al menos una letra mayúscula"),
  /* @__PURE__ */ createBaseVNode("li", null, "Debe tener al menos un número"),
  /* @__PURE__ */ createBaseVNode("li", null, "Debe tener al menos un caracter especial (@_.&$)")
], -1));
const _hoisted_16 = { class: "mt-2" };
const _hoisted_17 = { class: "password mt-4" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  id: "iconReset",
  class: "bi bi-eye-fill"
}, null, -1));
const _hoisted_19 = [
  _hoisted_18
];
const _hoisted_20 = {
  key: 0,
  class: "text-red-200"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoginView",
  setup(__props) {
    const userStore = useStoreUser();
    const loadingRequest = ref(false);
    const successChange = ref("");
    const reset = reactive({
      email: "",
      new_password: ""
    });
    const resetChange = reactive({
      email: false,
      new_password: false
    });
    const resetMessages = reactive({
      email: "",
      new_password: ""
    });
    const resetErrors = reactive({
      email: false,
      new_password: false
    });
    const user = reactive({
      email: "",
      password: ""
    });
    const fieldChange = reactive({
      email: false
    });
    const messages = reactive({
      email: ""
    });
    const errors = reactive({
      email: false
    });
    const messageAlert = ref("");
    const showResetPassword = ref(false);
    const togglePassword = () => {
      const passwordInput = document.getElementById("password-input");
      const iconPassword = document.getElementById("iconPassword");
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconPassword.classList.remove("bi-eye-fill");
        iconPassword.classList.add("bi-eye-slash-fill");
      } else {
        passwordInput.type = "password";
        iconPassword.classList.remove("bi-eye-slash-fill");
        iconPassword.classList.add("bi-eye-fill");
      }
    };
    const toggleResetPassword = () => {
      const passwordInput = document.getElementById("reset-input");
      const iconPassword = document.getElementById("iconReset");
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconPassword.classList.remove("bi-eye-fill");
        iconPassword.classList.add("bi-eye-slash-fill");
      } else {
        passwordInput.type = "password";
        iconPassword.classList.remove("bi-eye-slash-fill");
        iconPassword.classList.add("bi-eye-fill");
      }
    };
    const validateUserCredentials = (field) => {
      if (field === "all") {
        Object.keys(fieldChange).forEach((key) => {
          fieldChange[key] = true;
        });
      }
      fieldChange[field] = true;
      const message = validateField("login", "email", user.email);
      if (message !== "") {
        messages[field] = message;
        errors[field] = true;
      } else {
        messages[field] = "";
        errors[field] = false;
      }
    };
    const validateResetPassword = (field) => {
      if (field === "all") {
        Object.keys(resetChange).forEach((key) => {
          resetChange[key] = true;
        });
      }
      resetChange[field] = true;
      Object.keys(reset).forEach((key) => {
        const message = validateField("reset", key, reset[key]);
        console.log("Message", message);
        if (message !== "") {
          resetMessages[key] = message;
          resetErrors[key] = true;
        } else {
          resetMessages[key] = "";
          resetErrors[key] = false;
        }
      });
    };
    const validRequest = () => {
      const hasErrors = Object.values(resetErrors).filter((value) => {
        return value === true;
      }).length;
      if (hasErrors > 0) {
        return false;
      } else {
        return true;
      }
    };
    const requestResetPassword = async () => {
      validateResetPassword("all");
      if (!validRequest()) {
        return;
      }
      const body = {
        email: reset.email,
        new_password: reset.new_password
      };
      try {
        await resetPassword(body);
        successChange.value = "Contraseña cambiada correctamente";
        showResetPassword.value = false;
      } catch (error) {
        if (error instanceof Error) {
          messageAlert.value = error.message;
        }
      }
    };
    const requestLogin = async () => {
      loadingRequest.value = true;
      if (user.email === "" || user.password === "") {
        messageAlert.value = "Por favor, rellene todos los campos";
        loadingRequest.value = false;
        return;
      }
      const formData = new FormData();
      formData.append("username", user.email);
      formData.append("password", user.password);
      formData.append("grant_type", "");
      formData.append("client_id", "");
      formData.append("client_secret", "");
      formData.append("scope", "");
      try {
        const response = await autService.login(formData);
        userStore.state.token = response.token;
        window.localStorage.setItem(
          "userData",
          btoa(JSON.stringify({ token: response.token, type: response.type }))
        );
        router.push({ name: "userhome" });
      } catch (error) {
        messageAlert.value = "Usuario o contraseña incorrectos";
      } finally {
        loadingRequest.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                _hoisted_5,
                createBaseVNode("div", _hoisted_6, [
                  createVNode(PrimaryInput, {
                    id: "email",
                    type: "email",
                    placeholder: "Correo electrónico",
                    modelValue: user.email,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => user.email = $event),
                    onLossFocus: _cache[1] || (_cache[1] = ($event) => validateUserCredentials("email")),
                    error: errors.email,
                    errorMessage: messages.email
                  }, null, 8, ["modelValue", "error", "errorMessage"]),
                  createBaseVNode("div", _hoisted_7, [
                    withDirectives(createBaseVNode("input", {
                      type: "password",
                      class: "border border-gray-300 rounded px-3 py-3",
                      placeholder: "Contraseña",
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => user.password = $event),
                      id: "password-input"
                    }, null, 512), [
                      [vModelText, user.password]
                    ]),
                    createBaseVNode("div", {
                      class: "btn-password",
                      onClick: togglePassword
                    }, _hoisted_9)
                  ]),
                  _hoisted_10,
                  createBaseVNode("p", {
                    class: "text-center cursor-pointer",
                    onClick: _cache[3] || (_cache[3] = ($event) => showResetPassword.value = true)
                  }, " ¿Olvidaste tu contraseña? "),
                  _hoisted_11,
                  createVNode(_sfc_main$2, {
                    text: "Iniciar sesión",
                    loading: loadingRequest.value,
                    onClick: requestLogin
                  }, null, 8, ["loading"])
                ])
              ])
            ])
          ])
        ]),
        createVNode(ModalBase, {
          show: showResetPassword.value,
          onOnClose: _cache[8] || (_cache[8] = ($event) => showResetPassword.value = false)
        }, {
          header: withCtx(() => [
            _hoisted_12
          ]),
          body: withCtx(() => [
            createBaseVNode("div", _hoisted_13, [
              _hoisted_14,
              _hoisted_15,
              createBaseVNode("div", _hoisted_16, [
                createVNode(PrimaryInput, {
                  id: "emailreset",
                  type: "email",
                  placeholder: "Correo electrónico",
                  modelValue: reset.email,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => reset.email = $event),
                  onLossFocus: _cache[5] || (_cache[5] = ($event) => validateResetPassword("email")),
                  error: resetErrors.email,
                  errorMessage: resetMessages.email
                }, null, 8, ["modelValue", "error", "errorMessage"])
              ]),
              createBaseVNode("div", _hoisted_17, [
                withDirectives(createBaseVNode("input", {
                  type: "password",
                  class: "border border-gray-300 rounded px-3 py-3",
                  placeholder: "Contraseña",
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => reset.new_password = $event),
                  id: "reset-input",
                  onBlur: _cache[7] || (_cache[7] = ($event) => validateResetPassword("new_password"))
                }, null, 544), [
                  [vModelText, reset.new_password]
                ]),
                createBaseVNode("div", {
                  class: "btn-password",
                  onClick: toggleResetPassword
                }, _hoisted_19)
              ]),
              resetErrors.new_password ? (openBlock(), createElementBlock("p", _hoisted_20, toDisplayString(resetMessages.new_password), 1)) : createCommentVNode("", true)
            ])
          ]),
          footer: withCtx(() => [
            createVNode(_sfc_main$2, {
              text: "Cambiar contraseña",
              onClick: requestResetPassword
            })
          ]),
          _: 1
        }, 8, ["show"]),
        messageAlert.value ? (openBlock(), createBlock(ErrorAlert, {
          key: 0,
          show: messageAlert.value !== "",
          message: messageAlert.value,
          onClose: _cache[9] || (_cache[9] = ($event) => messageAlert.value = "")
        }, null, 8, ["show", "message"])) : createCommentVNode("", true),
        successChange.value ? (openBlock(), createBlock(SuccessAlert, {
          key: 1,
          show: successChange.value !== "",
          message: successChange.value,
          onClose: _cache[10] || (_cache[10] = ($event) => successChange.value = "")
        }, null, 8, ["show", "message"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const LoginView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4654c948"]]);
export {
  LoginView as default
};
//# sourceMappingURL=LoginView-CFGUWyQC.js.map
