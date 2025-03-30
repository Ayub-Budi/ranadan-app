<template>
  <div class="bg-[#FAF3E0]">
    <div class="bg-[#01796F] p-3 h-screen flex flex-col justify-center items-center gap-9 rounded-b-[50px] relative">
      <LandingContainer>
        <p class="text-[24px] lg:text-[50px] text-white font-semibold text-center">
          🌙 Selamat Hari Raya Idul Fitri 1446 H! Minal Aidin
          Wal Faizin, Mohon Maaf Lahir dan Batin. Semoga kebahagiaan, kesehatan,
          dan keberkahan selalu menyertai kita.
        </p>
      </LandingContainer>
      <p class="text-[24px] text-white font-semibold text-center">scroll</p>

      <div class="bg-[#8B4513] absolute -bottom-[100px]  lg:-bottom-[150px] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full flex items-center justify-center">
        <img src="@/assets/ketupat.png" class="w-[80%]" alt="">
      </div>
    </div>

    <div class="h-screen p-3 flex flex-col justify-center items-center gap-9">
      <LandingContainer data-aos="zoom-in" data-aos-offset="300">
        <p class="text-[24px] lg:text-[50px] text-[#01796F] font-semibold text-center">
          🕊️ Di hari yang suci ini, dengan segala kerendahan hati, saya, Ayub Budi Santoso beserta keluarga, memohon maaf atas segala khilaf dan salah,
          baik yang disengaja maupun tidak. Semoga Allah mempertemukan kita
          kembali dalam keadaan yang lebih baik. Minal Aidin Wal Faizin. Mohon
          Maaf Lahir dan Batin.
        </p>
      </LandingContainer>
    </div>

    <div class="bg-[#01796F] p-3 h-screen flex flex-col justify-center items-center gap-9 rounded-[50px] relative">
      <LandingContainer>
        <p class="text-[24px] lg:text-[50px] text-white font-semibold text-center" data-aos="zoom-in" data-aos-offset="300">
          ✨ "Ya Allah, terimalah ibadah kami,
          ampuni segala dosa-dosa kami,
          dan limpahkan keberkahan dalam hidup kami."

          Semoga Idul Fitri ini membawa kedamaian, kebahagiaan, dan rezeki yang berlimpah.
          Selamat Hari Raya Idul Fitri! 🎊
        </p>
      </LandingContainer>
    </div>

    <div class="py-[100px] px-3 flex flex-col justify-center items-center gap-9">
      <LandingContainer class="flex flex-col gap-5 w-full">
        <div class="flex flex-col gap-5">
          <p class="text-[24px] lg:text-[50px] text-[#01796F] font-semibold text-center" data-aos="zoom-in" data-aos-offset="300">
            Pesan dari yang lain
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-5" v-for="(item, index) in landingStore?.komentars" :key="index">
              <div class="border-2 bg-white rounded-[16px] p-2" data-aos="flip-left" data-aos-offset="200">
                <div class="flex items-center gap-3">
                  <div class="bg-[#01796F] w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-white">
                    {{ $initial(item?.penerima?.nama) }}
                  </div>
                    <p>
                      {{ item?.penerima?.nama }}
                    </p>
                </div>
                <p>{{ item?.komentar }}</p>
              </div>
            </div>
        </div>
      </LandingContainer>
    </div>

    <div class="bg-[#01796F] py-[50px] px-3 flex flex-col items-center rounded-t-[50px]">
      <div class="max-w-[1440px] flex flex-col lg:flex-row justify-between gap-9">
        <div>
        <p class="text-[30px] text-white font-semibold">
          Sosial Media
        </p>
        <div>
          <div class="flex gap-2 text-white cursor-pointer" @click="link('https://www.instagram.com/ayub_budi213/')">
            <i class="ri-instagram-line"></i>
            <p>Instagram</p>
          </div>
          <div class="flex gap-2 text-white cursor-pointer" @click="link('https://www.linkedin.com/in/ayub09/')">
            <i class="ri-linkedin-box-line"></i>
            <p>
              Linkedin
            </p>
          </div>
          <div class="flex gap-2 text-white cursor-pointer" @click="link('https://github.com/Ayub-Budi')">
            <i class="ri-github-line"></i>
            <p>
              Github
            </p>
          </div>
        </div>
      </div>

      <div>
        <p class="text-[30px] text-white font-semibold">
          Alamat
        </p>
        <div>
          <div class="flex gap-2 text-white cursor-pointer">
            <i class="ri-road-map-line"></i>
            <p>
              Widoro Rt07 Bangunharjo sewon Bantul DIY
            </p>
          </div>
        </div>
      </div>

      <div>
        <p class="text-[30px] text-white font-semibold">
          By
        </p>
        <div>
          <div class="flex gap-2 text-white cursor-pointer">
            <i class="ri-user-3-line"></i>
            <p>
              Ayub Budi Santoso
            </p>
          </div>
        </div>
      </div>
      </div>

    </div>
  </div>
</template>
<script>
import {useLandingStore} from "@/stores/landing.store.js"
export default {
  data() {
    return {
      landingStore: useLandingStore()
    }
  },
  mounted() {
    this.landingStore.fetch()
    this.landingStore.listKomentar()
  },
  methods: {
    link(path) {
      window.open(path, "_blank")
    }
  },
};
</script>
<style></style>
