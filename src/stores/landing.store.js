import { defineStore } from 'pinia';
import { axiosWrapper } from '@/helper/axios-wrapper.js';
import { list } from 'postcss';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const useLandingStore = defineStore({
    id: 'landing',
    state: () => ({
        users: null,
        user: null,
        komentars: null
    }),
    actions: {
        async fetch() {
            let url = `${baseUrl}/api/penerima`

            const res = await axiosWrapper.get(url);

            if (res) {
                this.users = res
                console.log('ini user,', this.users);   
                
            }

            console.log(res);
            
        },
        async detail(id) {
            let url = `${baseUrl}/api/penerima/${id}`

            const user = await axiosWrapper.get(url);

            if (user) {
                this.user = user
            }
        },
        async komentar(data) {
          await axiosWrapper.post(`${baseUrl}/api/komentar`, data, true, 'application/json', true);
        },
        async listKomentar() {
          let url = `${baseUrl}/api/komentar`
          const res = await axiosWrapper.get(url);
          if (res) {
              this.komentars = res
          }
        },

    },
});
