<template>
  <div>
    <TheHeader />
    <IndexIntro />
    <IndexAbout />
    <IndexService />
    <IndexDoubleButtonBlock :title="$t('Присоединитесь к нам в миссии создания семей')"
      :description="$t('Выберите свой путь: Стать донором или Стать клиентом суррогатного материнства')"
      :button-one="$t('Заполнить анкету')" :button-two="$t('Связаться с нами')"
      :button-one-link="localePath('/auth/form')" />
    <IndexCondition />
    <IndexDoubleButtonBlock :title="$t('Хотите посмотреть доноров?')"
      :description="$t('Просматривайте наших потенциальных доноров и выбирайте идеального кандидата для вашей семьи')"
      :button-one="$t('Зарегистрироваться')" :button-two="$t('Связаться с нами')"
      :button-one-link="localePath('/auth')" />
    <IndexContact />
    <TheFooter />
  </div>
</template>



<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('Главная страница')
})

const localePath = useLocalePath()
</script>