<script setup lang="ts">
import { ref, provide } from 'vue'
import UIBtn from './Btn.vue'

interface ITab {
  title: string
  hash: string
}

const activeTabHash = ref('')
const tabs = ref<ITab[]>([])

provide('addTab', (tab: ITab) => {
  const count = tabs.value.push(tab)

  if (count === 1) activeTabHash.value = tab.hash
})

provide('activeTabHash', activeTabHash)
</script>

<template>
  <div class="ui-tabs">
    <ul class="ui-tabs__nav">
      <li
        v-for="tab in tabs"
        :key="tab.title"
        @click="activeTabHash = tab.hash"
      >
        <UIBtn
          style="width: 100%;"
          :type="tab.hash !== activeTabHash ? 'secondary' : 'primary'"
        >
          <slot :name="tab.hash" :tab="tab">
            {{ tab.title }}
          </slot>
        </UIBtn>
      </li>
    </ul>
    <slot />
  </div>
</template>

<style>
.ui-tabs {

}

.ui-tabs__nav {
  display: flex;
}

.ui-tabs__nav li {
  flex-grow: 1;
}

.ui-tabs__nav li:not(:last-child) {
  margin-right: 12px;
}
</style>
