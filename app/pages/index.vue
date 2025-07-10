<template>
  <main class="container">
    <div
      v-if="products?.length"
      class="flex flex-wrap gap-x-4 gap-y-8 justify-center"
    >
      <NuxtLink
        v-for="product in products"
        :key="product.id"
        :to="`products/${product.id}`"
      >
        <WidgetProduct :product />
      </NuxtLink>
    </div>
    <div v-else aria-busy="true">Загрузка продуктов</div>
  </main>
</template>

<script setup lang="ts">
const { data: products, refresh } = productEntity.productsQuery();
onMounted(() => refresh());
</script>

<style scoped></style>
