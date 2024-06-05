

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  votedFor: {
    type: Number,
    required: true
  },
  votedAgainst: {
    type: Number,
    required: true
  },
  totalVotes: {
    type: Number,
    required: true
  }
})

const isVoted = ref(false)

const width = 500
const height = 50
const chartSvg = ref<SVGSVGElement | null>(null)
</script>

<template>
  <div class="vote-chart">
    <svg ref="chartSvg" :viewBox="`0 0 ${width} ${height}`">
      <line :x1="0" :y1="height / 2" :x2="width" :y2="height / 2" stroke="#ccc" />
      <line :x1="0" :y1="height / 2" :x2="width * (votedFor / totalVotes)" :y2="height / 2" stroke="#41B883" stroke-width="20" />
      <line :x1="width * (votedFor / totalVotes)" :y1="height / 2" :x2="width" :y2="height / 2" stroke="#E46651" stroke-width="20" />
    </svg>
  </div>
  <div class="flex flex-row justify-between">
    <div>{{ votedFor }} игроков ЗА</div>
    <div>{{ votedAgainst }} игроков ПРОТИВ</div>
  </div>
  <h5 class="text-white text-center">Проголосовать</h5>
  <div class="flex flex-row justify-between" v-if="!isVoted">
    <div><button class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700">ЗА <BootstrapIcon name="hand-thumbs-up-fill" /></button></div>
    <div><button class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700">ПРОТИВ <BootstrapIcon name="hand-thumbs-down-fill" /></button></div>
  </div>
  <div class="flex flex-row justify-between" v-else>
    Вы уже проголосовали
  </div>
</template>

<style scoped>
.vote-chart {
  width: 100%;
  height: 50px;
}
</style>