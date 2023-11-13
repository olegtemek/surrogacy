<template>
  <div>
    <TheHeader />
    <IndexIntro />
    <IndexAbout />
    <IndexService />
    <div class="block">
      <div class="container">
        <div class="block__toggler">
          <div :class="!statusBlock ? 'active' : ''" @click="changeStatusBlock(false)">{{ $t('Донор') }}</div>
          <div :class="statusBlock ? 'active' : ''" @click="changeStatusBlock(true)">{{ $t('Реципиент') }}</div>
        </div>
        <h2 class="title">{{ $t('Присоединитесь к нам в миссии создания семей') }}</h2>
        <p class="text">{{
          $t('Выберите свой путь: Стать донором или Стать клиентом суррогатного материнства')
        }}</p>
        <div class="block__row">
          <NuxtLink :to="localePath('/auth/form')">{{ $t('Заполнить анкету') }}</NuxtLink>
          <a :href="locale == 'en' ? '/en#contacts' : '/#contacts'">{{ $t('Связаться с нами') }}</a>
        </div>
      </div>
    </div>
    <IndexCondition :status="statusBlock" />
    <div class="block">
      <div class="container">
        <h2 class="title">{{ $t('Хотите посмотреть доноров?') }}</h2>
        <p class="text">{{
          $t('Просматривайте наших потенциальных доноров и выбирайте идеального кандидата для вашей семьи')
        }}</p>
        <div class="block__row">
          <NuxtLink :to="localePath('/auth')">{{ $t('Зарегистрироваться') }}</NuxtLink>
          <a :href="locale == 'en' ? '/en#contacts' : '/#contacts'">{{ $t('Связаться с нами') }}</a>
        </div>
      </div>
    </div>
    <IndexContact />
    <TheFooter />
  </div>
</template>



<script setup lang="ts">
const { t, locale } = useI18n()
useHead({
  title: t('Главная страница')
})

const localePath = useLocalePath()
const statusBlock = ref(false)
const changeStatusBlock = (bool: boolean) => {
  statusBlock.value = bool
}
</script>