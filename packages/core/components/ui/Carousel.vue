<script setup lang="ts">
import Carousel from 'primevue/carousel'

interface IProps {
  items: Array<object>
  visible?: number
}

const props = withDefaults(defineProps<IProps>(), {
  visible: 1
})

const page = ref(0)
const pages = computed(() => {
  const count = Math.ceil(props.items.length / props.visible)
  return Array.from(Array(count), (_, idx) => idx)
})

const disabledBtnPrev = computed(() => {
  return page.value === 0
})

const disabledBtnNext = computed(() => {
  return page.value === pages.value.at(-1)
})

const withNavigation = computed(() => {
  return page.value > 1
})

function setPage (idx: number) {
  page.value = idx
}

</script>

<template>
  <Carousel
    v-model:page="page"
    :value="props.items"
    :num-visible="props.visible"
    :num-scroll="1"
    :show-navigators="false"
    :show-indicators="false"
    class="ui-carousel"
  >
    <template #item="slotProps">
      <slot :data="slotProps.data" :index="slotProps.index" />
    </template>

    <template #footer>
      <footer
        v-if="withNavigation"
        class="ui-carousel__footer"
      >
        <button
          class="ui-carousel__nav-btn"
          :disabled="disabledBtnPrev"
          @click="setPage(page - 1)"
        >
          <UiIcon
            name="arrow"
            :size="18"
            style="transform: rotate(90deg);"
          />
        </button>

        <ul class="ui-carousel__nav">
          <li
            v-for="pageIdx in pages"
            :key="pageIdx"
          >
            <button
              class="ui-carousel__nav-indicator"
              :class="{
                'ui-carousel__nav-indicator--active': pageIdx === page
              }"
              @click="setPage(pageIdx)"
            />
          </li>
        </ul>

        <button
          class="ui-carousel__nav-btn"
          :disabled="disabledBtnNext"
          @click="setPage(page + 1)"
        >
          <UiIcon
            name="arrow"
            :size="18"
            style="transform: rotate(-90deg);"
          />
        </button>
      </footer>
    </template>
  </Carousel>
</template>

<style>
.ui-carousel {
  --carousel-indicator-size: 8px;
  --carousel-indicator-color: var(--c-gray-300);
  --carousel-indicator-active-color: var(--c-gray-900);
}

.ui-carousel__footer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
}

.ui-carousel__nav {
  display: flex;
  align-items: center;
  margin: 0 16px;
}

.ui-carousel__nav li:not(:last-child) {
  margin-right: var(--carousel-indicator-size);
}

.ui-carousel__nav-indicator {
  width: var(--carousel-indicator-size);
  height: var(--carousel-indicator-size);
  border-radius: 50%;
  padding: 0;
  border: none;
  outline: none;
  background-color: var(--carousel-indicator-color);
}

.ui-carousel__nav-indicator--active {
  background-color: var(--carousel-indicator-active-color);
}

.ui-carousel__nav-btn {
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.ui-carousel__nav-btn:disabled {
  cursor: not-allowed;
}

.p-carousel-item {
  padding-right: 12px;
}
</style>
