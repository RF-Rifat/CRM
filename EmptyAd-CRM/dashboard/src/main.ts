import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createRouter, createWebHistory } from 'vue-router'
import tokenService from '~/common/api/token.service'
import App from './App.vue'
import type { AppModule } from './types'

import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './styles/main.scss'

// mock service is disabled for backend integration

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
Object.values(
  import.meta.glob<{ install: AppModule }>('./modules/*.ts', { eager: true }),
).forEach((i: any) => i.install?.(app, router))

// register filters
app.config.globalProperties.$filters = {}
Object.values(
  import.meta.glob<any>('./common/filters/*.filter.ts', {
    eager: true,
    import: 'default',
  }),
).forEach((filters: any) =>
  Object.keys(filters).forEach((func) => {
    app.config.globalProperties.$filters[func] = filters[func]
  }),
)

router.beforeEach((to, _, next) => {
  const baseTitle = 'EmptyAd CRM'
  const pageTitle = typeof to.meta.title === 'string' ? String(to.meta.title) : ''
  document.title = pageTitle ? `${pageTitle} - ${baseTitle}` : baseTitle

  const token = tokenService.getLocalAccessToken()
  const isLoggedIn = !!token
  const publicPaths = ['/Account/Login', '/Account/ForgotPassword']
  const isPublic = to.meta.authRequired === false || publicPaths.includes(to.path)
  if (isLoggedIn && publicPaths.includes(to.path)) {
    next('/')
    return
  }
  if (!isLoggedIn && !isPublic) {
    next('/Account/Login')
    return
  }
  next()
})

async function startApp() {
  try {
    // Disable MSW for production/backend integration
    // await initializeMocking()
    console.log('🚀 MSW disabled - connecting to real backend API')
  } catch (error) {
    console.warn('Mock service initialization failed:', error)
  }
  app.mount('#app')
}

startApp()
