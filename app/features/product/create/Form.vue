<script setup lang="ts">
const { useStore, createProductSchema } = productFeature;
const { onSubmit, state } = useStore();
</script>

<template>
  <div class="max-w-96 mx-auto">
    <UForm
      :schema="createProductSchema"
      :state="state"
      class="space-y-4"
      @submit="onSubmit"
    >
      <UFormField label="Title" name="title">
        <UInput v-model="state.title" class="w-full" />
      </UFormField>
      <UFormField label="Price" name="price">
        <UInput v-model="state.price" class="w-full" />
      </UFormField>

      <UFormField label="Category" name="category">
        <UInput v-model="state.categoryId" class="w-full" />
      </UFormField>

      <UFormField label="Description" name="description">
        <UTextarea
          v-model="state.description"
          class="w-full"
          type="description"
          :autoresize="true"
          size="md"
        />
      </UFormField>

      <UButton type="submit" @click="onSubmit"> Submit </UButton>
    </UForm>
  </div>
</template>

<style scoped></style>
