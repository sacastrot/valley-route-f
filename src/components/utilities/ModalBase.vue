<script setup lang="ts">
/**
 * This component is used to show the modal
 * in the application
 *
 * @prop show
 * (Boolean) This prop is used to show the modal
 * @prop hiddenClose
 * (Boolean) This prop is used to hide the close button
 *
 * @emits onClose
 * This event is used to close the modal
 *
 * @requires ref
 * This is used to create a reactive reference
 */

//Vue imports
import { ref } from 'vue'

//Vue Router imports

//Stores imports

//Models imports

//Views imports

//Services imports

const { show, hiddenClose } = defineProps(['show', 'hiddenClose'])

const emit = defineEmits(['onClose'])

/**
 * This function is used to emit the close event
 */
const emitClose = () => {
  emit('onClose')
}

const display = ref('block')
</script>
<template>
  <transition>
    <div
      class="modal fade show modal-fullscreen-sm-down"
      v-if="show"
      :style="{ display: display }"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-between">
            <slot name="header"></slot>
            <!-- This tag is used to show the close button -->
            <i class="bi bi-x close-modal" v-if="!hiddenClose" @click="emitClose()"></i>
          </div>
          <div class="modal-body">
            <!-- Slot for the body of the modal -->
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <!-- Slot for the footer of the modal -->
            <!-- generally for modal actions -->
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
  .modal-dialog {
    .modal-content {
      background-color: white;
      .modal-header {
        i {
          font-size: 2.5rem;
          cursor: pointer;
        }
      }
      .modal-body {
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
}

/* This class is used to create the fade effect
   when the modal is shown or hidden
*/

.v-enter-active {
  transition: opacity 0.2s linear;
}
.v-leave-active {
  transition: opacity 0.2s linear;
}

.v-enter-from {
  opacity: 0;
}
.v-leave-to {
  opacity: 0;
}
</style>
