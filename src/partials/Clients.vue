<template>
  <section>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Particles animation -->
      <div class="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
        <Particles class="absolute inset-0 -z-10" :quantity="5" />
      </div>

      <div class="py-12 md:py-16">
        <div class="overflow-hidden">
          <div
            class="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
              class="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
              <li>
                <img src="../images/kalp.webp" alt="Client 1" class="h-8">
              </li>
              <li>
                <img src="../images/u2u.webp" alt="Client 2" class="h-8">
              </li>
              <li>
                <img src="../images/nexus2.webp" alt="Client 3" class="h-8">
              </li>
              <li>
                <img src="../images/zeeve.svg" alt="Client 4" class="h-8">
              </li>
              <li>
                <img src="../images/orochi.webp" alt="Client 5" class="h-8">
              </li>
              <li>
                <img src="../images/nubit.webp" alt="Client 6" class="h-8">
              </li>
              <li>
                <img src="../images/groth16.webp" alt="Client 7" class="h-8">
              </li>
              <li>
                <img src="../images/succinct.webp" alt="Client 8" class="h-8">
              </li>
              <li>
                <img src="../images/zkm.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/nexus.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/quillai.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/playai.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/supersight.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/intair.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/cysic.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/fermah.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/bf.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/b2.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/avail.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/o3.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/bitfinity.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/ruhes.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/snark.svg" alt="Client 9" class="h-8">
              </li>
            </ul>
            <ul
              class="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
              aria-hidden="true">
              <li>
                <img src="../images/kalp.webp" alt="Client 1" class="h-8">
              </li>
              <li>
                <img src="../images/u2u.webp" alt="Client 2" class="h-8">
              </li>
              <li>
                <img src="../images/nexus2.webp" alt="Client 3" class="h-8">
              </li>
              <li>
                <img src="../images/zeeve.svg" alt="Client 4" class="h-8">
              </li>
              <li>
                <img src="../images/orochi.webp" alt="Client 5" class="h-8">
              </li>
              <li>
                <img src="../images/nubit.webp" alt="Client 6" class="h-8">
              </li>
              <li>
                <img src="../images/groth16.webp" alt="Client 7" class="h-8">
              </li>
              <li>
                <img src="../images/succinct.webp" alt="Client 8" class="h-8">
              </li>
              <li>
                <img src="../images/zkm.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/nexus.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/quillai.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/playai.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/supersight.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/intair.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/cysic.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/fermah.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/bf.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/b2.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/avail.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/o3.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/bitfinity.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/ruhes.webp" alt="Client 9" class="h-8">
              </li>
              <li>
                <img src="../images/snark.svg" alt="Client 9" class="h-8">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Particles from './Particles.vue'

export default {
  name: 'Clients',
  components: {
    Particles
  }
}
</script>