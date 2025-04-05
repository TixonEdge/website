<template>
  <section class="min-h-screen">

    <div class="absolute inset-0 -z-20   pointer-events-none overflow-hidden" aria-hidden="true">
      <video class="object-cover w-full h-full" width="2146" height="774" autoplay muted loop playsinline>
        <source src="/video/home-hero.webm" type="video/webm" />
        <source src="/video/home-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
        <img src="../images/glow-bottom.svg" class="max-w-none" width="2146" height="774" alt="Hero Illustration">
      </div>
    </div>
    <div class="absolute inset-0 -z-10  rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
        <img src="../images/glow-bottom.svg" class="max-w-none" width="2146" height="774" alt="Hero Illustration">
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 ">
      <!-- Particles animation -->
      <Particles class="absolute inset-0 -z-10" />
      
      <!-- Illustration -->
      <div class="h-screen flex flex-col justify-center">
        
        <div class="">
        <!-- Hero content -->
        <div class="max-w-3xl mx-auto text-center">
          <!-- <div class="mb-6" data-aos="fade-down">
            <div class="inline-flex relative before:absolute before:inset-0 before:bg-green-500 before:blur-md">
              <a class="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(var(--color-green-500),var(--color-green-500))_padding-box,linear-gradient(var(--color-green-500),var(--color-purple-200)_75%,transparent_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow-sm" href="#0">
                <span class="relative inline-flex items-center">
                  API Studio is now in beta <span class="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </span>
              </a>
            </div>
          </div> -->
          <h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" data-aos="fade-down">TixonEdge reconstructs decentralization</h1>
          <p class="text-lg text-slate-300 mb-8" data-aos="fade-down" data-aos-delay="200">The world's first green light-node-driven DePIN network, efficient, secure, and low-threshold</p>
          <div class="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 font-bold" data-aos="fade-down" data-aos-delay="400">
            <div>
              <a class="btn text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="#0">
                MINT $TIXON <span class="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
            <div>
              <a class="btn text-slate-200 hover:text-white bg-slate-900/25 hover:bg-slate-900/30 w-full transition duration-150 ease-in-out" href="#0">
                <svg class="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                </svg>
                <span>DOCS</span>
              </a>
            </div>
          </div>

        </div>

      </div>
      </div>

    </div>
  </section>
</template>

<script>
import Particles from './Particles.vue'

export default {
  name: 'Hero',
  components: {
    Particles
  }
}
</script>