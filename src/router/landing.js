import LandingView from '@/views/landing/index.vue'
import LandingDetailView from '@/views/landing/detail.vue'


import ExampleLayout from '@/layouts/ExampleLayout.vue';

// middleware
// import AuthMiddleware from '@/middleware/auth.middleware.js';

export default [{
    path: '/',
    name: 'landingPage',
    component: LandingView,
    meta: {
      title: 'Landing Page',
    },
  },

  {
    path: '/:id',
    name: 'DetailLandingPage',
    component: LandingDetailView,
    meta: {
      title: 'Landing Page',
    },
  },
]
