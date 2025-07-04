<template>
  <article
    class="w-56 rounded-lg shadow-sm hover:scale-105 transition duration-300"
  >
    <div class="h-48 w-full overflow-hidden rounded-t-lg">
      <img
        v-if="product.images.length"
        :src="product.images[0]"
        :alt="product.title"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="p-3">
      <h3 class="text-md font-medium text-gray-900 line-clamp-2 mb-1">
        {{ product.title }}
      </h3>
      <p class="text-lg font-semibold text-gray-900">${{ product.price }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
interface IProps {
  product: Product;
}
defineProps<IProps>();
</script>
