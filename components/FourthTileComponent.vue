<script setup>
defineProps({
  nickname: String,
});

/*export interface IVotes {
    id: string;
    name: string;
    votesFor: number;
    votesAgainst: number;
    totalVotes: number;
}*/

const activeVotes = ref([
  {
    id: '1',
    name: 'Тест',
    votesFor: 5,
    votesAgainst: 25,
    totalVotes: 30
  }
]);

</script>

<template>
    <h1 class="text-white text-4xl lg:text-5xl text-center font-bold">Голосования</h1>
      <div class="text-white text-2xl flex flex-col gap-2" v-if="activeVotes.length > 0">
        <div class="flex flex-col gap-2" v-for="voting in activeVotes" :key="voting.id">
            <h4>{{ voting.name }}</h4>
            <VotesChart :voted-for="voting.votesFor" :voted-against="voting.votesAgainst" :total-votes="voting.totalVotes" />
        </div>
      </div>
</template>
