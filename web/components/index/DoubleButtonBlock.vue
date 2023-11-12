<template>
  <div class="block">

    <div class="container">
      <h2 class="title">{{ props.title }}</h2>
      <p class="text">{{ props.description }}</p>

      <div class="block__row">
        <NuxtLink :to="buttonOneLink">{{ props.buttonOne }}</NuxtLink>
        <a :href="locale == 'en' ? '/en#contacts' : '/#contacts'">{{ props.buttonTwo }}</a>
      </div>

    </div>

  </div>
</template>



<script setup lang="ts">

const { locale } = useI18n()

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  buttonOne: { type: String, required: true },
  buttonTwo: { type: String, required: true },
  buttonOneLink: { type: String, required: true },
})

</script>