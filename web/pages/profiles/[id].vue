<template>
  <div>
    <TheHeader />
    <div class="ank">
      <div class="container" v-if="product">
        <NuxtLink :to="localePath('/profiles')" class="back title"><svg xmlns="http://www.w3.org/2000/svg" width="16"
            height="28" viewBox="0 0 16 28" fill="none">
            <path d="M14 26L2 14L14 2" stroke="#3D3D3A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>{{ $t('Назад') }}</NuxtLink>
        <div class="ank__wrapper">
          <template v-if="locale == 'ru'">
            <div class="ank__item top">
              <img :src="`${useRuntimeConfig().public.image + 'uploads/' + product.images[0]}`" alt="ank">
              <div>
                <span>ID: {{ product.id }}</span>
                <span>{{ $t('Возраст') }}: {{ product.age }}</span>
                <span>{{ $t('Национальность') }}: {{ product.nationality }}</span>
                <span>{{ $t('Рост') }}: {{ product.height }}</span>
                <span>{{ $t('Вес') }}: {{ product.weight }}</span>
                <span>{{ $t('Цвет глаз') }}: {{ product.eye_color }}</span>
                <span>{{ $t('Цвет волос') }}: {{ product.hair_color }}</span>
              </div>

              <div>
                <span>{{ $t('Вредные привычки') }}: {{ product.habits }}</span>
                <span>{{ $t('Страна') }}: {{ product.country }}</span>
                <span>{{ $t('Аллергии') }}: {{ product.allergies }}</span>
                <span>{{ $t('Заболевания') }}: {{ product.chronic_diseases }}</span>
                <span>{{ $t('Профессия') }}: {{ product.profession }}</span>
                <span>{{ $t('Религия') }}: {{ product.religion }}</span>
              </div>
            </div>

            <div class="ank__item">
              <h4>{{ $t('Репродуктивная история') }}</h4>
              <p>{{ product.reproductive_history }}</p>
            </div>

            <div class="ank__item column">
              <p>{{ $t('У вас в семье были близнецы') }} {{ product.has_twins }}</p>
              <p>{{ $t('У вас регулярный менструальный цикл') }} {{ product.menstrual_cycle }}</p>
              <p>{{ $t('Была беременна') }} {{ product.pregnancy_outcome }}</p>
              <p>{{ $t('Не принимает противозачаточные средства') }} {{ product.contraceptive_use }}</p>
              <p>{{ $t('Проблемы со здоровьем') }} {{ product.health_problems }}</p>
            </div>

            <div class="ank__item column">
              <p>{{ $t('Генетические заболевания в семье') }} {{ product.family_medical_history }}</p>
            </div>

            <div class="ank__item">
              <h4>{{ $t('Семья/Генетическая история') }}</h4>
              <p>{{ product.genetic_history }}</p>
            </div>

            <div class="ank__item">
              <h4>{{ $t('Дополнительная информация') }}</h4>
              <p>{{ product.additional_info }}</p>
            </div>
          </template>
          <template v-if="locale == 'en'">
            <div class="ank__item top">
              <img :src="`${useRuntimeConfig().public.image + 'uploads/' + product.images[0]}`" alt="ank">
              <div>
                <span>ID: {{ product.id }}</span>
                <span>{{ $t('Возраст') }}: {{ product.age }}</span>
                <span>{{ $t('Национальность') }}: {{ product.nationality_en ?? $t('Неизвестно') }}</span>
                <span>{{ $t('Рост') }}: {{ product.height }}</span>
                <span>{{ $t('Вес') }}: {{ product.weight }}</span>
                <span>{{ $t('Цвет глаз') }}: {{ product.eye_color_en ?? $t('Неизвестно') }}</span>
                <span>{{ $t('Цвет волос') }}: {{ product.hair_color_en ?? $t('Неизвестно') }}</span>
              </div>

              <div>
                <span>{{ $t('Вредные привычки') }}: {{ product.habits_en ?? $t('Неизвестно') }}</span>
                <span>{{ $t('Страна') }}: {{ product.country_en ?? $t('Неизвестно') }}</span>
                <span>{{ $t('Аллергии') }}: {{ product.allergies_en ?? $t('Неизвестно') }}</span>
                <span>{{ $t('Заболевания') }}: {{ product.chronic_diseases_en ?? $t('Неизвестно') }}</span>
                <span>{{ $t('Профессия') }}: {{ product.profession_en ?? $t('Неизвестно') }}</span>
                <span>{{ $t('Религия') }}: {{ product.religion_en ?? $t('Неизвестно') }}</span>
              </div>
            </div>

            <div class="ank__item">
              <h4>{{ $t('Репродуктивная история') }}</h4>
              <p>{{ product.reproductive_history_en ?? $t('Неизвестно') }}</p>
            </div>

            <div class="ank__item column">
              <p>{{ $t('У вас в семье были близнецы') }} {{ product.has_twins_en ?? $t('Неизвестно') }}</p>
              <p>{{ $t('У вас регулярный менструальный цикл') }} {{ product.menstrual_cycle_en ?? $t('Неизвестно') }}</p>
              <p>{{ $t('Была беременна') }} {{ product.pregnancy_outcome_en ?? $t('Неизвестно') }}</p>
              <p>{{ $t('Не принимает противозачаточные средства') }} {{ product.contraceptive_use_en ?? $t('Неизвестно')
              }}</p>
              <p>{{ $t('Проблемы со здоровьем') }} {{ product.health_problems_en ?? $t('Неизвестно') }}</p>
            </div>

            <div class="ank__item column">
              <p>{{ $t('Генетические заболевания в семье') }} {{ product.family_medical_history_en ?? $t('Неизвестно') }}
              </p>
            </div>

            <div class="ank__item">
              <h4>{{ $t('Семья/Генетическая история') }}</h4>
              <p>{{ product.genetic_history_en ?? $t('Неизвестно') }}</p>
            </div>

            <div class="ank__item">
              <h4>{{ $t('Дополнительная информация') }}</h4>
              <p>{{ product.additional_info_en ?? $t('Неизвестно') }}</p>
            </div>
          </template>


          <div class="ank__slider">
            <Swiper :modules="[Navigation, Pagination]"
              :navigation="{ nextEl: '.swiper-button-nextss', prevEl: '.swiper-button-prevss', }"
              :pagination="{ clickable: true }" :space-between="60" :slides-per-view="1" :loop="true" :effect="'creative'"
              :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
              }">
              <SwiperSlide v-for="(productImage, index) in product.images" :key="index">
                <div class="ank__slide">
                  <img :src="`${useRuntimeConfig().public.image + 'uploads/' + productImage}`" alt="Donor">
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="swiper-button-prev swiper-button-prevss"></div>
            <div class="swiper-button-next swiper-button-nextss"></div>
          </div>


          <button class="request" v-if="product.id" @click="sendRequest(product.id)">{{ $t('Оставить заявку')
          }}</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('Анкеты')
})

definePageMeta({
  guard: true,
  status: true
})
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useProductStore } from "~/store/product";
import { useOrderStore } from "~/store/order";
const route = useRoute()
const productStore = useProductStore()
const localePath = useLocalePath()
const { locale } = useI18n()

await productStore.getOne(`${route.params.id}`)

const product = computed(() => {
  return productStore.getProduct
})
const orderStore = useOrderStore()

const sendRequest = async (productId: number) => {
  await orderStore.create(productId)
}

</script>