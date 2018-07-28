// i18n-setup.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/lang/en'
import axios from 'axios'
import _ from 'lodash'

Vue.use(VueI18n)

const messages = { en }

export const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages, // set locale messages
})

const loadedLanguages = ['en'] // our default language that is prelaoded

function setI18nLanguage(lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync(lang) {
  if (!_.isNil(lang) && i18n.locale !== lang) {
    if (!_.find(loadedLanguages, lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}`).then((msgs) => {
        i18n.setLocaleMessage(lang, msgs.default)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}
