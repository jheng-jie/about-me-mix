import { environment } from '@/environments/environment'

export const LocaleIconMap = new Map([
  ['en', `${environment.MIX_ASSETS_URL}/lang/en-US.png`],
  ['zh', `${environment.MIX_ASSETS_URL}/lang/zh-CHT.png`],
])

export const Locales = ['en', 'zh']
