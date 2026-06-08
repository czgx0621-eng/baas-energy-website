import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import PlatformPage from './pages/PlatformPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import SolutionsPage from './pages/SolutionsPage.vue'
import SolutionDetailPage from './pages/SolutionDetailPage.vue'
import PartnersPage from './pages/PartnersPage.vue'
import AboutPage from './pages/AboutPage.vue'
import ContactPage from './pages/ContactPage.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/platform', name: 'platform', component: PlatformPage },
    { path: '/products', name: 'products', component: ProductsPage },
    { path: '/products/:slug', name: 'product', component: ProductDetailPage },
    { path: '/solutions', name: 'solutions', component: SolutionsPage },
    { path: '/solutions/:slug', name: 'solution', component: SolutionDetailPage },
    { path: '/partners', name: 'partners', component: PartnersPage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/contact', name: 'contact', component: ContactPage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
