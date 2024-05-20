<script setup lang="ts">
/**
 * This component is used to show the package card
 * in the packages page
 *
 * @prop data
 * (PackageI) The package data from interface
 * This prop is used to show the package data
 * in the card
 *
 */

//Vue imports

//Vue Router imports

//Stores imports

//Models imports
import type { PackageI } from '@/interface/packageI'

//Views imports

//Services imports

// This prop is used to show the package data in the card
const data = defineProps<PackageI>()
</script>
<template>
  <div class="package_card shadow">
    <div class="section">
      <p class="head">Número de guía</p>
      <!-- guide number -->
      <p class="font-bold">{{ data.id }}</p>
    </div>
    <div class="section">
      <div class="head">Descripción</div>
      <!-- description package -->
      <p>{{ data.description }}</p>
    </div>
    <div class="section">
      <div class="head">Creado</div>
      <!-- created date package -->
      <p>{{ data.createdAt }}</p>
    </div>
    <div class="section">
      <div class="head">Desde</div>
      <!-- start node name -->
      <p>{{ data.startNodeName }}</p>
    </div>
    <div class="section">
      <div class="head">Hasta</div>
      <!-- end node name -->
      <p>{{ data.endNodeName }}</p>
    </div>
  </div>
</template>

<style scoped>
.package_card {
  background-color: white;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 30rem;
  min-width: 20rem;
  padding: 2rem;

  .head {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .section {
    padding: 0.5rem 0;
    border-bottom: 1px solid #e5e7eb;
  }
}
</style>
