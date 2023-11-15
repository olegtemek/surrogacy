<template>
  <div class="header">
    <div class="container">

      <div class="header__wrapper" :class="activeMenu ? 'active' : ''">
        <div class="header__logo">
          <TheLogo />
        </div>



        <div class="header__nav">
          <p>{{ $t('Меню') }}</p>
          <a :href="locale == 'en' ? '/en#aboutUs' : '/#aboutUs'">{{ $t('О нас') }}</a>
          <a :href="locale == 'en' ? '/en#services' : '/#services'">{{ $t('Услуги') }}</a>
          <a :href="locale == 'en' ? '/en#conditions' : '/#conditions'">{{ $t('Наши ценности') }}</a>
          <a :href="locale == 'en' ? '/en#contacts' : '/#contacts'">{{ $t('Контакты') }}</a>
        </div>

        <div class="header__lang">

          <span @click="openLangMenu" :class="locale == 'ru' ? 'active-lang' : ''">Рус <svg
              xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none">
              <path d="M1 1L5.82733 5.38848C6.20875 5.73523 6.79125 5.73523 7.17267 5.38848L12 1" stroke="#60605D"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span>


          <span @click="openLangMenu" :class="locale == 'en' ? 'active-lang' : ''">Eng <svg
              xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none">
              <path d="M1 1L5.82733 5.38848C6.20875 5.73523 6.79125 5.73523 7.17267 5.38848L12 1" stroke="#60605D"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span>


          <div class="header__lang-switcher" :class="activeLangMenu ? 'active' : ''">
            <NuxtLink :to="switchLocalePath('ru')" :class="locale == 'ru' ? 'active' : ''">Рус</NuxtLink>
            <NuxtLink :to="switchLocalePath('en')" :class="locale == 'en' ? 'active' : ''">Eng</NuxtLink>
          </div>

        </div>

        <div class="header__burger" @click="openMenu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <path d="M10 16H38M10 24H38M10 32H17H24H38" stroke="#3D3D3A" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M1 1L25 25M1 25L25 1" stroke="#3D3D3A" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>

        <NuxtLink :to="localePath('/auth/form')" class="header__button">
          {{ $t('Заполнить анкету') }}
        </NuxtLink>
      </div>

    </div>

  </div>
</template>



<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const activeLangMenu = ref(false)

const openLangMenu = () => {
  activeLangMenu.value = !activeLangMenu.value
}

const activeMenu = ref(false)

const openMenu = () => {
  activeMenu.value = !activeMenu.value
}
</script>