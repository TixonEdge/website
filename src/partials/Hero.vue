<template>
  <section class="min-h-screen">

    <!-- <div class="relative grid h-[500px] place-content-center overflow-hidden" aria-hidden="true">
      <video class="object-cover w-full h-full" width="2146" height="774" autoplay muted loop playsinline>
        <source src="/video/home-scaling.webm" type="video/webm" />
        <source src="/video/home-scaling.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div> -->
    <div class="absolute inset-0 -z-10  rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
        <img src="../images/glow-bottom.svg" class="max-w-none" width="2146" height="774" alt="Hero Illustration">
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 ">
      <!-- Particles animation -->
      <!-- <Particles class="absolute inset-0 -z-10" /> -->
      <!-- <FlickeringGrid
        :class="[
          '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
          'inset-0 h-[200%] skew-y-12',
        ]"
      /> -->
      <FlickeringGrid
        class="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        :square-size="18"
        :grid-gap="6"
        color="#017133"
        :max-opacity="0.5"
        :flicker-chance="0.1"
      />
      <Spline
        scene="/scene.splinecode"
        class="absolute inset-0 z-0 size-full w-full h-full"
      />
      <!-- Illustration -->
      <div class="h-screen flex flex-col justify-end  mb-10 z-50">
        
        <div class="">
          <!-- Hero content -->
          <div class="max-w-3xl mx-auto text-center relative before:absolute before:inset-0 ">
            <!-- <div class="mb-6" data-aos="fade-down">
              <div class="inline-flex relative before:absolute before:inset-0 before:bg-green-500 before:blur-md">
                <a class="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(var(--color-green-500),var(--color-green-500))_padding-box,linear-gradient(var(--color-green-500),var(--color-purple-200)_75%,transparent_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow-sm" href="#0">
                  <span class="relative inline-flex items-center">
                    Download <span class="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </span>
                </a>
              </div>
            </div> -->
            
            <div class="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 font-bold mb-5" data-aos="fade-down" data-aos-delay="400">
              <div>
                <a class="font-bold inline-flex relative before:absolute before:inset-0 btn text-slate-600 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="https://guild.xyz/tixonedge" target="_blank">
                  MINT $TIXON <span class="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </a>
              </div>
              <div>
                <a class="inline-flex relative before:absolute before:inset-0 btn text-slate-200 hover:text-white bg-black/25 hover:bg-black/30 w-full transition duration-150 ease-in-out" href="#0">
                  <svg class="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>DOCS</span>
                </a>
              </div>
            </div>
            <h1 class="z-10 whitespace-pre-wrap text-center text-4xl md:text-6xl font-bold tracking-tighter text-white" data-aos="fade-down">TixonEdge Reconstructs Decentralization</h1>
            <p class="text-lg text-slate-300 mb-8" data-aos="fade-down" data-aos-delay="200">The world's first green light-node-driven DePIN network, efficient, secure, and low-threshold</p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
import Particles from './Particles.vue'
import FlickeringGrid from './FlickeringGrid.vue'
import Spline from './Spline.vue';
export default {
  name: 'Hero',
  components: {
    Particles,
    FlickeringGrid,
    Spline
  }
}
</script>