var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { d as defineComponent, a as createElementBlock, b as createBaseVNode, t as toDisplayString, f as createCommentVNode, F as Fragment, o as openBlock, p as pushScopeId, m as popScopeId, _ as _export_sfc, B as createStaticVNode, g as baseRequest, C as BadRequestError, r as ref, h as reactive, D as withModifiers, i as createVNode, j as withDirectives, E as vModelCheckbox, k as _sfc_main$3, c as createBlock, q as useRouter } from "./index-DxEj1PVZ.js";
import { P as PrimaryInput, E as ErrorAlert, S as SuccessAlert } from "./SuccessAlert-DQ68Wlnw.js";
import { v as validateField } from "./validateField-D0FnTXHY.js";
const _withScopeId$1 = (n) => (pushScopeId("data-v-2cf3173f"), n = n(), popScopeId(), n);
const _hoisted_1$2 = ["for"];
const _hoisted_2$2 = { class: "password" };
const _hoisted_3$1 = ["id", "placeholder", "value"];
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("i", {
  id: "iconReset",
  class: "bi bi-eye-fill"
}, null, -1));
const _hoisted_5$1 = [
  _hoisted_4$1
];
const _hoisted_6$1 = {
  key: 0,
  class: "text-red-200"
};
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", null, "La contraseña debe tener por tu seguridad:", -1));
const _hoisted_8$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "Debe tener al menos 8 caracteres"),
  /* @__PURE__ */ createBaseVNode("li", null, "Debe tener al menos una letra mayúscula"),
  /* @__PURE__ */ createBaseVNode("li", null, "Debe tener al menos un número"),
  /* @__PURE__ */ createBaseVNode("li", null, "Debe tener al menos un caracter especial (@_.&$)")
], -1));
const _hoisted_9$1 = [
  _hoisted_7$1,
  _hoisted_8$1
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PasswordInput",
  props: {
    id: {},
    type: {},
    placeholder: {},
    modelValue: {},
    label: {},
    icon: {},
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    rules: {},
    errorMessage: {},
    error: { type: Boolean }
  },
  emits: ["update:modelValue", "lossFocus"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const emitValue = (value) => {
      emit("update:modelValue", value);
    };
    const emitFocus = () => {
      emit("lossFocus");
    };
    const togglePassword = () => {
      const passwordInput = document.getElementById(data.id);
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
    const data = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("label", {
          for: data.id,
          class: "mt-2"
        }, toDisplayString(data.label), 9, _hoisted_1$2),
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("input", {
            id: data.id,
            type: "password",
            placeholder: data.placeholder,
            value: data.modelValue,
            class: "border border-gray-300 rounded px-3 py-3",
            onInput: _cache[0] || (_cache[0] = ($event) => emitValue($event.target.value)),
            onBlur: emitFocus
          }, null, 40, _hoisted_3$1),
          createBaseVNode("div", {
            class: "btn-password",
            onClick: togglePassword
          }, _hoisted_5$1)
        ]),
        data.error ? (openBlock(), createElementBlock("div", _hoisted_6$1, _hoisted_9$1)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const PasswordInput = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2cf3173f"]]);
const _hoisted_1$1 = { class: "w-full" };
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<h1 class="w-full flex justify-center mt-5" data-v-827beff3>Política de Privacidad</h1><p class="mb-2" data-v-827beff3>Última actualización: 16 de mayo de 2024</p><p data-v-827beff3> Esta Política de Privacidad describe nuestras políticas y procedimientos sobre la recopilación, uso y divulgación de su información cuando utiliza el Servicio y le informa sobre sus derechos de privacidad y cómo la ley lo protege. </p><p data-v-827beff3> Utilizamos sus datos personales para proporcionar y mejorar el Servicio. Al utilizar el Servicio, usted acepta la recopilación y el uso de información de acuerdo con esta Política de Privacidad. Esta Política de Privacidad ha sido creada con la ayuda del <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/" target="_blank" data-v-827beff3>Generador de Políticas de Privacidad Gratuito</a>. </p><h2 data-v-827beff3>Interpretación y Definiciones</h2><h3 data-v-827beff3>Interpretación</h3><p data-v-827beff3> Las palabras cuya letra inicial está en mayúscula tienen significados definidos bajo las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado independientemente de si aparecen en singular o en plural. </p><h3 data-v-827beff3>Definiciones</h3><p data-v-827beff3>A los efectos de esta Política de Privacidad:</p><ul data-v-827beff3><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Cuenta</strong> significa una cuenta única creada para que usted acceda a nuestro Servicio o partes de nuestro Servicio. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Afiliado</strong> significa una entidad que controla, es controlada por o está bajo control común con una parte, donde &quot;control&quot; significa la propiedad del 50% o más de las acciones, participación accionaria u otros valores con derecho a voto para la elección de directores u otra autoridad de gestión. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Compañía</strong> (referida como &quot;la Compañía&quot;, &quot;Nosotros&quot;, &quot;Nos&quot; o &quot;Nuestro&quot; en este Acuerdo) se refiere a ValleyRoute. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Cookies</strong> son pequeños archivos que se colocan en su computadora, dispositivo móvil o cualquier otro dispositivo por un sitio web, que contienen los detalles de su historial de navegación en ese sitio web, entre sus muchos usos. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>País</strong> se refiere a: Colombia</p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Dispositivo</strong> significa cualquier dispositivo que pueda acceder al Servicio, como una computadora, un teléfono móvil o una tableta digital. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Datos Personales</strong> es cualquier información que se relaciona con un individuo identificado o identificable. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Servicio</strong> se refiere al sitio web.</p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Proveedor de Servicios</strong> significa cualquier persona física o jurídica que procese los datos en nombre de la Compañía. Se refiere a empresas o individuos de terceros empleados por la Compañía para facilitar el Servicio, para proporcionar el Servicio en nombre de la Compañía, para realizar servicios relacionados con el Servicio o para ayudar a la Compañía a analizar cómo se utiliza el Servicio. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Datos de Uso</strong> se refiere a los datos recopilados automáticamente, ya sea generados por el uso del Servicio o desde la propia infraestructura del Servicio (por ejemplo, la duración de una visita a la página). </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Sitio Web</strong> se refiere a ValleyRoute, accesible desde <a href="https://sacastrot.github.io/valley-route-f/#/welcome" rel="external nofollow noopener" target="_blank" data-v-827beff3>https://sacastrot.github.io/valley-route-f/#/welcome</a></p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Usted</strong> significa la persona que accede o utiliza el Servicio, o la empresa, u otra entidad legal en nombre de la cual dicha persona accede o utiliza el Servicio, según corresponda. </p></li></ul><h2 data-v-827beff3>Recopilación y Uso de Sus Datos Personales</h2><h3 data-v-827beff3>Tipos de Datos Recopilados</h3><h4 data-v-827beff3>Datos Personales</h4><p data-v-827beff3> Mientras usa nuestro Servicio, podemos pedirle que nos proporcione cierta información de identificación personal que puede ser utilizada para contactarlo o identificarlo. La información de identificación personal puede incluir, pero no está limitada a: </p><ul data-v-827beff3><li data-v-827beff3><p data-v-827beff3>Dirección de correo electrónico</p></li><li data-v-827beff3><p data-v-827beff3>Nombre y apellido</p></li><li data-v-827beff3><p data-v-827beff3>Datos de Uso</p></li></ul><h4 data-v-827beff3>Datos de Uso</h4><p data-v-827beff3>Los Datos de Uso se recopilan automáticamente cuando se utiliza el Servicio.</p><p data-v-827beff3> Los Datos de Uso pueden incluir información como la dirección de Protocolo de Internet de su dispositivo (por ejemplo, la dirección IP), tipo de navegador, versión del navegador, las páginas de nuestro Servicio que visita, la hora y la fecha de su visita, el tiempo dedicado a esas páginas, identificadores únicos de dispositivos y otros datos de diagnóstico. </p><p data-v-827beff3> Cuando accede al Servicio a través de un dispositivo móvil o por medio de él, podemos recopilar cierta información automáticamente, incluyendo, pero no limitada a, el tipo de dispositivo móvil que utiliza, su ID único de dispositivo móvil, la dirección IP de su dispositivo móvil, su sistema operativo móvil, el tipo de navegador de Internet móvil que utiliza, identificadores únicos de dispositivos y otros datos de diagnóstico. </p><p data-v-827beff3> También podemos recopilar información que su navegador envía cada vez que visita nuestro Servicio o cuando accede al Servicio a través de un dispositivo móvil. </p><h4 data-v-827beff3>Tecnologías de Seguimiento y Cookies</h4><p data-v-827beff3> Utilizamos Cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro Servicio y almacenar cierta información. Las tecnologías de seguimiento utilizadas son balizas, etiquetas y scripts para recopilar y rastrear información y para mejorar y analizar nuestro Servicio. Las tecnologías que usamos pueden incluir: </p><ul data-v-827beff3><li data-v-827beff3><strong data-v-827beff3>Cookies o Cookies de Navegador.</strong> Una cookie es un archivo pequeño colocado en su dispositivo. Puede instruir a su navegador para que rechace todas las Cookies o para que indique cuándo se está enviando una Cookie. Sin embargo, si no acepta Cookies, es posible que no pueda utilizar algunas partes de nuestro Servicio. A menos que haya ajustado la configuración de su navegador para que rechace Cookies, nuestro Servicio puede usar Cookies. </li><li data-v-827beff3><strong data-v-827beff3>Balizas Web.</strong> Ciertas secciones de nuestro Servicio y nuestros correos electrónicos pueden contener pequeños archivos electrónicos conocidos como balizas web (también denominadas gifs claros, etiquetas de píxel y gifs de un solo píxel) que permiten a la Compañía, por ejemplo, contar los usuarios que han visitado esas páginas o han abierto un correo electrónico y para otras estadísticas relacionadas con el sitio web (por ejemplo, registrar la popularidad de una sección determinada y verificar la integridad del sistema y del servidor). </li></ul><p data-v-827beff3> Las Cookies pueden ser &quot;Persistentes&quot; o &quot;De Sesión&quot;. Las Cookies Persistentes permanecen en su computadora personal o dispositivo móvil cuando está desconectado, mientras que las Cookies de Sesión se eliminan tan pronto como cierra su navegador web. Aprenda más sobre las cookies en el <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking" target="_blank" data-v-827beff3>sitio web de Políticas de Privacidad Gratuitas</a> artículo. </p><p data-v-827beff3>Utilizamos tanto Cookies de Sesión como Persistentes para los siguientes propósitos:</p><ul data-v-827beff3><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Cookies Necesarias / Esenciales</strong></p><p data-v-827beff3>Tipo: Cookies de Sesión</p><p data-v-827beff3>Administradas por: Nosotros</p><p data-v-827beff3> Propósito: Estas cookies son esenciales para brindarle los servicios disponibles a través del Sitio Web y permitirle usar algunas de sus funciones. Ayudan a autenticar usuarios y prevenir el uso fraudulento de cuentas de usuario. Sin estas cookies, los servicios que ha solicitado no se pueden proporcionar, y solo usamos estas cookies para brindarle esos servicios. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Cookies de Política / Aviso de Aceptación de Cookies</strong></p><p data-v-827beff3>Tipo: Cookies Persistentes</p><p data-v-827beff3>Administradas por: Nosotros</p><p data-v-827beff3> Propósito: Estas cookies identifican si los usuarios han aceptado el uso de cookies en el Sitio Web. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Cookies de Funcionalidad</strong></p><p data-v-827beff3>Tipo: Cookies Persistentes</p><p data-v-827beff3>Administradas por: Nosotros</p><p data-v-827beff3> Propósito: Estas cookies nos permiten recordar las elecciones que realiza cuando usa el Sitio Web, como recordar sus datos de inicio de sesión o su preferencia de idioma. El propósito de estas cookies es proporcionarle una experiencia más personal y evitar que tenga que reingresar sus preferencias cada vez que utiliza el Sitio Web. </p></li></ul><p data-v-827beff3> Para obtener más información sobre las cookies que usamos y sus opciones con respecto a las cookies, visite nuestra Política de Cookies o la sección de Cookies de nuestra Política de Privacidad. </p><h3 data-v-827beff3>Uso de sus Datos Personales</h3><p class="mb-2" data-v-827beff3>La Compañía puede utilizar Datos Personales para los siguientes propósitos:</p><ul data-v-827beff3><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Para proporcionar y mantener nuestro Servicio</strong>, incluyendo monitorear el uso de nuestro Servicio. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Para gestionar su Cuenta:</strong> para gestionar su registro como usuario del Servicio. Los Datos Personales que proporciona pueden darle acceso a diferentes funcionalidades del Servicio que están disponibles para usted como usuario registrado. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Para la ejecución de un contrato:</strong> el desarrollo, cumplimiento y realización del contrato de compra de los productos, artículos o servicios que ha comprado o de cualquier otro contrato con nosotros a través del Servicio. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Para contactarle:</strong> Para contactarle por correo electrónico, llamadas telefónicas, SMS, u otras formas equivalentes de comunicación electrónica, como notificaciones push de aplicaciones móviles en relación con actualizaciones o comunicaciones informativas relacionadas con las funcionalidades, productos o servicios contratados, incluyendo las actualizaciones de seguridad, cuando sea necesario o razonable para su implementación. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Para proporcionarle</strong> noticias, ofertas especiales e información general sobre otros bienes, servicios y eventos que ofrecemos que son similares a los que ya ha comprado o sobre los que ha preguntado a menos que haya optado por no recibir dicha información. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Para gestionar sus solicitudes:</strong> Para atender y gestionar sus solicitudes hacia nosotros. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Para transferencias comerciales:</strong> Podemos usar su información para evaluar o llevar a cabo una fusión, desinversión, reestructuración, reorganización, disolución u otra venta o transferencia de algunos o todos nuestros activos, ya sea como empresa en marcha o como parte de quiebra, liquidación o procedimiento similar, en el que los Datos Personales que poseemos sobre los usuarios de nuestro Servicio se encuentran entre los activos transferidos. </p></li><li data-v-827beff3><p data-v-827beff3><strong data-v-827beff3>Para otros propósitos</strong>: Podemos usar su información para otros propósitos, tales como análisis de datos, identificación de tendencias de uso, determinar la efectividad de nuestras campañas promocionales y evaluar y mejorar nuestro Servicio, productos, servicios, marketing y su experiencia. </p></li></ul><p data-v-827beff3>Podemos compartir su información personal en las siguientes situaciones:</p><ul data-v-827beff3><li data-v-827beff3><strong data-v-827beff3>Con proveedores de servicios:</strong> Podemos compartir su información personal con proveedores de servicios para monitorear y analizar el uso de nuestro Servicio, para contactarle. </li><li data-v-827beff3><strong data-v-827beff3>Para transferencias comerciales:</strong> Podemos compartir o transferir su información personal en relación con, o durante las negociaciones de, cualquier fusión, venta de activos de la Compañía, financiación o adquisición de la totalidad o una parte de nuestro negocio a otra empresa. </li><li data-v-827beff3><strong data-v-827beff3>Con afiliados:</strong> Podemos compartir su información con nuestros afiliados, en cuyo caso requeriremos que esos afiliados respeten esta Política de Privacidad. Los afiliados incluyen nuestra empresa matriz y cualquier otra subsidiaria, socios de empresas conjuntas u otras empresas que controlemos o que estén bajo control común con nosotros. </li><li data-v-827beff3><strong data-v-827beff3>Con socios comerciales:</strong> Podemos compartir su información con nuestros socios comerciales para ofrecerle ciertos productos, servicios o promociones. </li><li data-v-827beff3><strong data-v-827beff3>Con otros usuarios:</strong> cuando comparte información personal o interactúa de otra manera en las áreas públicas con otros usuarios, dicha información puede ser vista por todos los usuarios y puede ser distribuida públicamente fuera. </li><li data-v-827beff3><strong data-v-827beff3>Con su consentimiento</strong>: Podemos divulgar su información personal para cualquier otro propósito con su consentimiento. </li></ul><h3 data-v-827beff3>Retención de sus Datos Personales</h3><p data-v-827beff3> La Compañía retendrá sus Datos Personales solo durante el tiempo que sea necesario para los fines establecidos en esta Política de Privacidad. Retendremos y usaremos sus Datos Personales en la medida necesaria para cumplir con nuestras obligaciones legales (por ejemplo, si estamos obligados a conservar sus datos para cumplir con las leyes aplicables), resolver disputas y hacer cumplir nuestros acuerdos y políticas legales. </p><p data-v-827beff3> La Compañía también retendrá los Datos de Uso para fines de análisis interno. Los Datos de Uso se retienen generalmente por un período de tiempo más corto, excepto cuando estos datos se utilizan para fortalecer la seguridad o mejorar la funcionalidad de nuestro Servicio, o cuando estamos legalmente obligados a retener estos datos por períodos de tiempo más largos. </p><h3 data-v-827beff3>Transferencia de sus Datos Personales</h3><p data-v-827beff3> Su información, incluidos los Datos Personales, se procesa en las oficinas operativas de la Compañía y en cualquier otro lugar donde se encuentren las partes involucradas en el procesamiento. Esto significa que esta información puede transferirse a — y mantenerse en — computadoras ubicadas fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de su jurisdicción. </p><p data-v-827beff3> Su consentimiento a esta Política de Privacidad seguido de su envío de dicha información representa su acuerdo con esa transferencia. </p><p data-v-827beff3> La Compañía tomará todas las medidas razonablemente necesarias para garantizar que sus datos se traten de manera segura y de acuerdo con esta Política de Privacidad y no se realizará ninguna transferencia de sus Datos Personales a una organización o un país a menos que existan controles adecuados en su lugar, incluyendo la seguridad de sus datos y otra información personal. </p><h3 data-v-827beff3>Eliminación de sus Datos Personales</h3><p data-v-827beff3> Usted tiene derecho a eliminar o solicitar que le ayudemos a eliminar los Datos Personales que hemos recopilado sobre usted. </p><p data-v-827beff3> Nuestro Servicio puede darle la capacidad de eliminar cierta información sobre usted desde dentro del Servicio. </p><p data-v-827beff3> Puede actualizar, enmendar o eliminar su información en cualquier momento iniciando sesión en su Cuenta, si tiene una, y visitando la sección de configuración de la cuenta que le permite gestionar su información personal. También puede contactarnos para solicitar acceso, corregir o eliminar cualquier información personal que nos haya proporcionado. </p><p data-v-827beff3> Tenga en cuenta, sin embargo, que podemos necesitar retener cierta información cuando tengamos una obligación legal o una base legal para hacerlo. </p><h3 data-v-827beff3>Divulgación de sus Datos Personales</h3><h4 data-v-827beff3>Transacciones Comerciales</h4><p data-v-827beff3> Si la Compañía está involucrada en una fusión, adquisición o venta de activos, sus Datos Personales pueden ser transferidos. Proporcionaremos un aviso antes de que sus Datos Personales sean transferidos y estén sujetos a una Política de Privacidad diferente. </p><h4 data-v-827beff3>Cumplimiento de la Ley</h4><p data-v-827beff3> En ciertas circunstancias, la Compañía puede estar obligada a divulgar sus Datos Personales si así lo requiere la ley o en respuesta a solicitudes válidas de autoridades públicas (por ejemplo, un tribunal o una agencia gubernamental). </p><h4 data-v-827beff3>Otros Requisitos Legales</h4><p data-v-827beff3> La Compañía puede divulgar sus Datos Personales de buena fe cuando considere que dicha acción es necesaria para: </p><ul data-v-827beff3><li data-v-827beff3>Cumplir con una obligación legal.</li><li data-v-827beff3>Proteger y defender los derechos o la propiedad de la Compañía.</li><li data-v-827beff3>Prevenir o investigar posibles irregularidades en relación con el Servicio.</li><li data-v-827beff3>Proteger la seguridad personal de los Usuarios del Servicio o del público.</li><li data-v-827beff3>Proteger contra responsabilidad legal.</li></ul><h3 data-v-827beff3>Seguridad de sus Datos Personales</h3><p data-v-827beff3> La seguridad de sus Datos Personales es importante para nosotros, pero recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger sus Datos Personales, no podemos garantizar su seguridad absoluta. </p><h2 data-v-827beff3>Privacidad de los Niños</h2><p data-v-827beff3> Nuestro Servicio no se dirige a menores de 13 años. No recopilamos conscientemente información de identificación personal de menores de 13 años. Si usted es un padre o tutor y sabe que su hijo nos ha proporcionado Datos Personales, por favor contáctenos. Si nos damos cuenta de que hemos recopilado Datos Personales de menores de 13 años sin verificación del consentimiento de los padres, tomamos medidas para eliminar esa información de nuestros servidores. </p><p data-v-827beff3> Si necesitamos confiar en el consentimiento como base legal para procesar su información y su país requiere el consentimiento de un padre, podemos requerir el consentimiento de su padre antes de recopilar y usar esa información. </p><h2 data-v-827beff3>Enlaces a Otros Sitios Web</h2><p data-v-827beff3> Nuestro Servicio puede contener enlaces a otros sitios web que no son operados por nosotros. Si hace clic en un enlace de un tercero, será dirigido al sitio de ese tercero. Le recomendamos encarecidamente que revise la Política de Privacidad de cada sitio que visite. </p><p data-v-827beff3> No tenemos control ni asumimos responsabilidad alguna por el contenido, las políticas de privacidad o las prácticas de sitios o servicios de terceros. </p><h2 data-v-827beff3>Cambios a esta Política de Privacidad</h2><p data-v-827beff3> Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos sobre cualquier cambio publicando la nueva Política de Privacidad en esta página. </p><p data-v-827beff3> Le informaremos por correo electrónico y/o mediante un aviso destacado en nuestro Servicio, antes de que el cambio sea efectivo y actualizaremos la fecha de &quot;Última actualización&quot; en la parte superior de esta Política de Privacidad. </p><p data-v-827beff3> Se le aconseja revisar esta Política de Privacidad periódicamente para cualquier cambio. Los cambios a esta Política de Privacidad son efectivos cuando se publican en esta página. </p><h2 data-v-827beff3>Contáctenos</h2><p data-v-827beff3>Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos:</p><ul data-v-827beff3><li data-v-827beff3>Por correo electrónico: sacastrot@unal.edu.co</li></ul>', 67);
const _hoisted_69 = [
  _hoisted_2$1
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PolicyStatement",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, _hoisted_69);
    };
  }
});
const PolicyStatement = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-827beff3"]]);
class SignupUser {
  /**
   * Creates a new instance of SignupUser.
   *
   * @param {string} email - The user's email address.
   * @param {string} password - The user's password.
   * @param {string} firstName - The user's first name.
   * @param {string} lastName - The user's last name.
   */
  constructor(email, password, firstName, lastName) {
    __publicField(this, "email");
    __publicField(this, "password");
    __publicField(this, "firstName");
    __publicField(this, "lastName", "");
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  /**
   * Gets the user details as an object.
   *
   * @returns {Object} The user details.
   */
  get body() {
    return {
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    };
  }
}
async function signup(body) {
  try {
    const response = await baseRequest.post(`/auth`, body);
    if (response.status === 200) {
      return;
    }
  } catch (error) {
    console.log("Error:", error);
    if (error instanceof BadRequestError) {
      console.log("Error:", error);
      if (error.message.includes("already")) {
        throw new Error("El correo electrónico ya ha sido registrado");
      }
    } else {
      throw new Error("Error al crear la cuenta");
    }
  }
}
const _withScopeId = (n) => (pushScopeId("data-v-627f48d5"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container mx-auto" };
const _hoisted_2 = { class: "content-form w-[35rem]" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "title text-center" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Registrarse")
], -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "spacer h-[2rem]" }, null, -1));
const _hoisted_5 = { class: "flex flex-col gap-2" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "h-[2rem]" }, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "h-[1rem]" }, null, -1));
const _hoisted_8 = { key: 1 };
const _hoisted_9 = { class: "policy mb-3" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "Acepto los términos y condiciones de uso", -1));
const _hoisted_11 = { class: "actions flex gap-4" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "spacer h-[4rem]" }, null, -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SignupView",
  setup(__props) {
    const messageAlert = ref("");
    const messageSuccess = ref("");
    const acceptPolicy = ref(false);
    const loadingRequest = ref(false);
    const router = useRouter();
    const user = reactive({
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    });
    const errors = reactive({
      email: false,
      password: false,
      firstName: false,
      lastName: false
    });
    const messages = reactive({
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    });
    const fieldChange = reactive({
      email: false,
      password: false,
      firstName: false,
      lastName: false
    });
    const validateNewUser = (field) => {
      if (field === "all") {
        Object.keys(fieldChange).forEach((key) => {
          fieldChange[key] = true;
        });
      }
      fieldChange[field] = true;
      Object.keys(user).forEach((key) => {
        if (fieldChange[key]) {
          const message = validateField("user", key, user[key]);
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
      validateNewUser("all");
      if (!acceptPolicy.value) {
        messageAlert.value = "Debes aceptar los términos y condiciones de uso";
        return;
      }
      if (!validateSerndRequest()) {
        return;
      }
      const userData = new SignupUser(user.email, user.password, user.firstName, user.lastName);
      try {
        await signup(userData);
        messageSuccess.value = "Usuario registrado correctamente";
        setTimeout(() => {
          router.push({ name: "login" });
        }, 1e3);
      } catch (error) {
        if (error instanceof Error) {
          messageAlert.value = error.message;
        }
      } finally {
        loadingRequest.value = false;
      }
    };
    const currentStep = ref(1);
    const nextStep = () => {
      validateNewUser("all");
      if (!validateSerndRequest()) {
        return;
      }
      currentStep.value = 2;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          currentStep.value == 1 ? (openBlock(), createElementBlock("form", {
            key: 0,
            onSubmit: _cache[6] || (_cache[6] = withModifiers(() => {
            }, ["prevent"])),
            class: "flex items-center justify-center"
          }, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              _hoisted_4,
              createBaseVNode("div", _hoisted_5, [
                _hoisted_6,
                createVNode(PrimaryInput, {
                  id: "signupemail",
                  type: "email",
                  placeholder: "email@example.com",
                  modelValue: user.email,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => user.email = $event),
                  label: "Correo electrónico",
                  error: errors.email && fieldChange.email,
                  errorMessage: messages.email,
                  onLossFocus: _cache[1] || (_cache[1] = ($event) => validateNewUser("email"))
                }, null, 8, ["modelValue", "error", "errorMessage"]),
                createVNode(PrimaryInput, {
                  id: "signupname",
                  type: "text",
                  placeholder: "Nombre",
                  label: "Nombre",
                  modelValue: user.firstName,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => user.firstName = $event),
                  error: errors.firstName && fieldChange.firstName,
                  errorMessage: messages.firstName,
                  onLossFocus: _cache[3] || (_cache[3] = ($event) => validateNewUser("firstName"))
                }, null, 8, ["modelValue", "error", "errorMessage"]),
                createVNode(PasswordInput, {
                  id: "signuppassword",
                  type: "password",
                  placeholder: "********",
                  modelValue: user.password,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => user.password = $event),
                  label: "Contraseña",
                  error: errors.password && fieldChange.password,
                  errorMessage: messages.password,
                  onLossFocus: _cache[5] || (_cache[5] = ($event) => validateNewUser("password"))
                }, null, 8, ["modelValue", "error", "errorMessage"]),
                _hoisted_7,
                createVNode(_sfc_main$3, {
                  text: "Siguiente",
                  onClick: nextStep
                })
              ])
            ])
          ], 32)) : currentStep.value == 2 ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createVNode(PolicyStatement),
            createBaseVNode("div", _hoisted_9, [
              withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => acceptPolicy.value = $event),
                onClick: _cache[8] || (_cache[8] = ($event) => acceptPolicy.value = !acceptPolicy.value)
              }, null, 512), [
                [vModelCheckbox, acceptPolicy.value]
              ]),
              _hoisted_10
            ]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(_sfc_main$3, {
                text: "Atrás",
                onClick: _cache[9] || (_cache[9] = ($event) => currentStep.value = 1)
              }),
              createVNode(_sfc_main$3, {
                text: "Registrarse",
                onClick: onSubmit,
                loading: loadingRequest.value
              }, null, 8, ["loading"])
            ]),
            _hoisted_12
          ])) : createCommentVNode("", true)
        ]),
        messageAlert.value && messageSuccess.value === "" ? (openBlock(), createBlock(ErrorAlert, {
          key: 0,
          show: messageAlert.value !== "",
          message: messageAlert.value,
          onClose: _cache[10] || (_cache[10] = ($event) => messageAlert.value = "")
        }, null, 8, ["show", "message"])) : createCommentVNode("", true),
        messageSuccess.value ? (openBlock(), createBlock(SuccessAlert, {
          key: 1,
          show: messageSuccess.value !== "",
          message: messageSuccess.value,
          onClose: _cache[11] || (_cache[11] = ($event) => messageSuccess.value = "")
        }, null, 8, ["show", "message"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const SignupView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-627f48d5"]]);
export {
  SignupView as default
};
//# sourceMappingURL=SignupView-BfhPE0A2.js.map
