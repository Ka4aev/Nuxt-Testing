<script setup lang="ts">
const { useStore, createProductSchema } = productFeature;
const { onSubmit, state } = useStore();

const { data: categories } = productEntity.categoriesQuery();
const categoryItems = computed(
  () =>
    categories?.value.map((category) => ({
      label: category.slug,
      id: category.id,
    })) || [],
);

state.images = [""];

const addImage = () => {
  state.images.push("");
};
const removeImage = (index: number) => {
  state.images.splice(index, 1);
};
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

      <UFormField label="Category" name="categoryId">
        <USelect
          v-model="state.categoryId"
          :items="categoryItems"
          arrow
          value-key="id"
          option-attribute="label"
          placeholder="Choose one category"
          class="w-full flex flex-col"
          :ui="{
            placeholder: 'text-white dark:text-white',
          }"
        />
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

      <UFormField label="Ссылки на изображения" name="images">
        <div
          v-for="(image, index) in state.images"
          :key="index"
          class="flex gap-2 mb-2"
        >
          <UInput v-model="state.images[index]" class="w-full" />
          <UButton
            icon="i-heroicons-x-mark"
            color="error"
            variant="ghost"
            @click="removeImage(index)"
          />
        </div>
        <UButton icon="i-heroicons-plus" variant="outline" @click="addImage">
          Добавить изображение
        </UButton>
      </UFormField>

      <UButton type="submit"> Submit </UButton>
    </UForm>
  </div>
</template>
