<template>
  <nav class=" w-screen bg-primary-700">
    <LandingContainer class="flex justify-between p-4">
      <div class="text-white">
        <P>
         logo
        </P>
      </div>
      <div class="flex gap-[50px] text-white items-center justify-center">
        <a>
          Home
        </a>
        <a>
          About us
        </a>
        <a>
          Artikel
        </a>
      </div>
      <div>
          <router-link to="/login">
            <button class=" p-2 border border-white rounded-[16px] text-white font-semibold">
              Login
            </button>
          </router-link>
      </div>
    </LandingContainer>
  </nav>
</template>
<script>
export default {

}
</script>
<style>
    
</style>