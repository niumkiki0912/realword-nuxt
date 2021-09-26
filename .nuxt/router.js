import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2d0ab81e = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _6e535ed3 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _5c50c3f5 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _64566b35 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _9091e7d2 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _213bde61 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _4b20ae82 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _2d0ab81e,
    children: [{
      path: "",
      component: _6e535ed3,
      name: "home"
    }, {
      path: "/login",
      component: _5c50c3f5,
      name: "login"
    }, {
      path: "/register",
      component: _5c50c3f5,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _64566b35,
      name: "profile"
    }, {
      path: "/settings",
      component: _9091e7d2,
      name: "settings"
    }, {
      path: "/editor",
      component: _213bde61,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _4b20ae82,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
