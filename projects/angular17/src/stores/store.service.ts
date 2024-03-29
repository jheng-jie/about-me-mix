// src/app/services/store.service.ts
import { Inject, Injectable, LOCALE_ID, signal, WritableSignal } from '@angular/core'
import CommunalStore, { GetDarkStorage, SetDarkMode } from '@about-me-mix/communal/store/initialize'
import throttle from 'lodash-es/throttle'

type State = typeof CommunalStore.website

const initialState: State = CommunalStore.website

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  state: WritableSignal<typeof initialState> = signal(initialState)

  constructor(@Inject(LOCALE_ID) public locale: string) {
    this.initialize()
  }

  /**
   * @desc 取得當前狀態
   */
  get current(): State {
    return this.state()
  }

  /**
   * @desc website init
   */
  initialize() {
    if (typeof window === 'undefined') return
    window.addEventListener('resize', throttle(this.resetScreenSize.bind(this), 333, { leading: true, trailing: true }))
    this.resetScreenSize()
    this.switchDarkMode(GetDarkStorage())
  }

  /**
   * @desc 設定視窗大小
   */
  resetScreenSize() {
    this.state.set({
      ...this.state(),
      width: window.innerWidth,
      height: window.innerHeight,
      sizeUpdateTimestamp: Date.now(),
    })
  }

  /**
   * @desc 設定日夜
   */
  switchDarkMode(dark: boolean) {
    this.state.set({
      ...this.state(),
      dark,
    })
    SetDarkMode(dark)
  }
}
