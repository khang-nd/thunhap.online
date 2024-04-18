<template>
  <PaginationRoot v-bind="$props" @update:page="$emit('update:page', $event)">
    <PaginationList v-slot="{ items }" class="flex items-center justify-center gap-2">
      <PaginationFirst class="el-paging">
        <Icon name="uil:angle-double-left" size="24" />
      </PaginationFirst>
      <PaginationPrev class="el-paging mr-4">
        <Icon name="uil:angle-left" size="20" />
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem v-if="page.type === 'page'" :key="index"
          class="el-paging border ring-gray-600 ring-offset-2 hover:border-gray-400 data-[selected]:bg-white data-[selected]:text-black data-[selected]:ring-1"
          :value="page.value">
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis v-else :key="page.type" :index="index" class="el-paging">&#8230;</PaginationEllipsis>
      </template>
      <PaginationNext class="el-paging ml-4">
        <Icon name="uil:angle-right" size="20" />
      </PaginationNext>
      <PaginationLast class="el-paging">
        <Icon name="uil:angle-double-right" size="24" />
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>

<script setup lang="ts">
import {
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot,
  type PaginationRootEmits,
  type PaginationRootProps
} from 'radix-vue'

defineProps<PaginationRootProps>()
defineEmits<PaginationRootEmits>()
</script>
