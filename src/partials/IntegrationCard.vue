<template>
  <div class="bg-black rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
    <div class="flex flex-col p-5 h-full">
      <div class="flex items-center justify-center"><img :src="item.img" class="h-10 " :alt="item.name"></div>
      
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntegrationCard',
  props: ['item'],
}
</script>