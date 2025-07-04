<template>
  <div class="min-h-screen">
    <div v-if="isLoading" class="justify-self-center my-10" aria-busy="true">
      Loading
    </div>
    <div v-else class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="space-y-4">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
            <img
              :src="product.images?.[0]"
              :alt="product.title"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="(image, index) in product.images.slice(1)"
              :key="index"
              class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg"
            >
              <img
                :src="image"
                :alt="`${product.title} ${index + 2}`"
                class="h-full rounded object-cover object-center"
                :class="[product.images.length <= 2 ? 'w-1/2' : 'w-full']"
              />
            </div>
          </div>
        </div>

        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            {{ product.title }}
          </h1>

          <p class="mt-6 text-3xl tracking-tight text-gray-900">
            ${{ product.price }}
          </p>

          <div class="mt-6 space-y-6 text-base text-gray-700">
            <p>{{ product.description }}</p>
          </div>
          <div>
            <UButton
              loading-auto
              color="error"
              label="Удалить"
              @click="deleteProduct()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: product, isLoading } = productEntity.productQuery(
  +route.params.id!,
);
const { execute: deleteProduct } = productEntity.deleteProductQuery(
  +route.params.id!,
);
</script>
